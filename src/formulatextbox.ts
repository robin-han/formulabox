///<reference path="feature.ts" />
///<reference path="common.ts" />
///<reference path="stringResource.ts" />
///<reference path="cultureInfo.ts"/>
///<reference path="calc.ts" />
///<reference path="calc-spreadjs.ts" />
module GcSpread.Sheets {
    feature("formulatextbox", ["core.common"]);

    //#region FormulaTextBox 
    var keyword_null = null,
        keyword_undefined = undefined,

        Math_max = Math.max,
        Math_min = Math.min;
    var ns_formulatextbox_internal = ".gcFormulaTextBoxInternal",
        ns_formulatextbox = ".gcFormulaTextBox",
        EVENT_TEXTCHANGED = "TextChanged",

        EVENT_CARETCHANGED = "CaretChanged",// used for to refresh active range
        EVENT_APPENDSTARTED = "AppendStarted",
        EVENT_APPENDENDED = "AppendEnded";

    var Keys = { left: 37, right: 39, up: 38, down: 40, tab: 9, enter: 13, pup: 33, pdn: 34, end: 35, home: 36, esc: 27 };
   
    export class FormulaTextBox implements IFormulaTextBox {

        //#region Fields
        private static DEFAULT_RANGE_COLORS = ["#0000ff", "#008000", "#9900cc", "#800000", "#00cc33", "#cc6600", "#cc0099"];

        private _host: any;
        private _tokens: IToken[];
        
        private _isAppending: boolean;
        private _appendingStart: number;

        private _autoComplete: boolean;
        private _showHelp: boolean;
        private _autoClose: boolean; //close popup when blur
        private _funcsScrollingTimer: any; // for keep focus when scroll the candidate list

        private _funcs: IFunctionDescription[];
        private _funcsPopup: any;
        private _funcHelpPopup: any;
        private _isFuncsShown: boolean;
        private _isFuncHelpShown: boolean;

        private _helpDiv: HTMLDivElement;

        private _isImeInputting: boolean;
        private _isInputKey: boolean; // process for QT designer;

        private _sheet: ISheet; // formula which sheet belong to

        //#region Work with Spread
        private _spread: ISpread; //
        private _isWorking: boolean;
        private _spreadEditStarting;
        private _parse: any; // This is the function for parse formula
        private _isInSpread: boolean;
        //#endregion

        //#region Constructor

        /**
         * Represents a formula text box.
         * @class
         * @param {Object} host The DOM element. It can be INPUT, TEXTAREA, or editable DIV.
         */
        constructor(host: any, spread?: ISpread) {
            var self = this;
            self._init(spread && spread.getHost() || document.body);

            if (host) {
                self._attachHost(host);
            }

            if (spread) {
                self._isInSpread = true;
                self.setSpread(spread);
                self._spread._unbind(Events.ActiveSheetChanging, FormulatextboxAcrossSheetSingleton.handleFormulatextboxAcrossSheetBeforeTabChange);
                self._spread._bind(Events.ActiveSheetChanging, FormulatextboxAcrossSheetSingleton.handleFormulatextboxAcrossSheetBeforeTabChange);
                self._spread._unbind(Events.ActiveSheetChanged, FormulatextboxAcrossSheetSingleton.handleFormulatextboxAcrossSheetAfterTabChange);
            	self._spread._bind(Events.ActiveSheetChanged, FormulatextboxAcrossSheetSingleton.handleFormulatextboxAcrossSheetAfterTabChange);
            }

            self._tokens = self._parse(self.text());

            //Color text
            var editableHost = self._isEditableElement(host);
            if (editableHost) {
                self._colorText(self._tokens);
            }
        }
        //#endregion

        //#region Public Methods

        /**
         *Removes host from formula text box and removes all binding events.
         */
        public destroy(): void {
            var self = this;
            self._isAppending = false;
            self._appendingStart = -1;
            
            self._detachHost();
            self._detachSpread();

            $(self._funcsPopup).remove();
            $(self._funcHelpPopup).remove();

            $(self._helpDiv).remove();
        }

        /**
         * Binds an event.
         * @param {string} type The event type.
         * @param {Object} data Optional. Specifies additional data to pass along to the function.
         * @param {Function} fn Specifies the function to run when the event occurs.
         */
        public bind(type: string, data?: any, fn?: (eventObject: JQueryEventObject) => any): void {
            var host = this._host;
            if (host && type) {
                type = type.split(/\s+/).join(ns_formulatextbox + " ");
                $(host).bind(type + ns_formulatextbox, data, fn);
            }
        }

        /**
         * Removes the binding of an event.
         * @param {string} type The event type.
         * @param {Function} fn Specifies the function for which to remove the binding.
         */
        public unbind(type: string, fn?: (eventObject: JQueryEventObject) => any): void {
            var host = this._host;
            if (host && type) {
                type = type.split(/\s+/).join(ns_formulatextbox + " ");
                $(host).unbind(type + ns_formulatextbox, fn);
            }
        }

        /**
         * Removes the binding of all events.
         */
        public unbindAll() {
            var host = this._host;
            if (host) {
                $(host).unbind(ns_formulatextbox);
            }
        }

        /**
          * Gets or sets the cursor position.
          * @param {number} value The cursor position.
          */
        public caret(value?: number): any {
            var self = this, host = self._host;
            if (!host) {
                return;
            }

            //Check focus element Reason: when set caret, host will get focus, this is browser's behavior,
            // but it is not our expected.
            var focusElement = <any>document.activeElement, hostFocused = (document.activeElement === host);

            var $host = $(host);
            if (arguments.length === 0) {
                if (hostFocused) {
                    return self._getCaret(host).end;
                }
                return $host.data("caret-before");
            }

            if (value !== self.caret()) {
                if (hostFocused) {
                    self._setCaret(host, value);
                    $host.data("caret-before", self._getCaret(host).end);
                } else {
                    $host.data("caret-before", value);
                }
                self._trigger(EVENT_CARETCHANGED, {});
            }
        }
        private _getCaret(element: any): any {
            var start = -1, end = -1;

            var input = this._isInputElement(element), editable = this._isEditableElement(element);
            if (input) {
                start = element.selectionStart;
                end = element.selectionEnd;
            } else if (editable) {
                var selection = window.getSelection();
                if (selection.rangeCount > 0) {
                    var range = selection.getRangeAt(0);
                    var clonedRange = range.cloneRange();
                    clonedRange.selectNodeContents(element);
                    clonedRange.setEnd(range.endContainer, range.endOffset);
                    end = clonedRange.toString().length;

                    clonedRange = range.cloneRange();
                    clonedRange.selectNodeContents(element);
                    clonedRange.setEnd(range.startContainer, range.startOffset);
                    start = clonedRange.toString().length;

                    clonedRange.detach();
                }
            }
            return { start: start, end: end};
        }
        private _setCaret(element: any, pos: number): void {
            var input = this._isInputElement(element), editable = this._isEditableElement(element);
            if (input) {
                element.setSelectionRange(pos, pos);
            } else if (editable) {
                var caretNode = this._getColorNode(element, pos);
                if (caretNode) {
                    var selection = window.getSelection();
                    var range = document.createRange();
                    range.setStart(caretNode.node.firstChild, caretNode.offset);
                    range.collapse(true);
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
            }
        }

        /**
        * Gets or sets the text.
        * @param {string} value The text.
        */
        public text(value?: string): any {
            var self = this, host = self._host;
            if (!host) {
                return;
            }

            var input = self._isInputElement(host), editable = self._isEditableElement(host);
            //get
            if (arguments.length === 0) {
                var txt = "";
                if (input) {
                    txt = host.value;
                } else if (editable) {
                    txt = host.textContent;
                }
                return txt;
            }
            //set
            if(value === null || typeof (value) === 'undefined') {
                value = "";
            }
            if (value !== self.text()) {
                self._tokens = self._parse(value);
                if (input) {
                    host.value = value;
                } else if (editable) {
                    self._colorText(self._tokens);
                }
                var parameter = {};
                var ftbAcrossSheet = IFormulatextboxAcrossSheetSingleton.formulatextboxAcrossSheetInstance;
                if (ftbAcrossSheet && ftbAcrossSheet.text) {
                    parameter = { sheet: ftbAcrossSheet.sheet, editor: ftbAcrossSheet.dom, canvasOffset: ftbAcrossSheet.canvasOffset};
                } 
                self._trigger(EVENT_TEXTCHANGED, parameter);
            }
        }

        /**
         * Gets or sets whether the text box uses auto complete.
         * @param {boolean} value Whether to auto complete when editing.
		 * @returns {Object} <c>true</c> if the text box uses auto complete; otherwise, <c>false</c>.
         */
        public autoComplete(value?: boolean): any {
            //get
            if (arguments.length === 0) {
                return this._autoComplete;
            }
            //set
            this._autoComplete = value;
        }

        /**
         * Gets or sets whether to display the function's help tip.
         * @param {boolean} value Whether to display the function's help tip when editing.
		 * @returns {Object} <c>true</c> if the text box displays the function's help tip when editing; otherwise, <c>false</c>.
		 */
        public showHelp(value?: boolean): any {
            //get
            if (arguments.length === 0) {
                return this._showHelp;
            }
            //set
            this._showHelp = value;
        }

       /**
         * Adds a custom function description.
         * @param {Object} fnd The function description to add. This can be an array. See the Remarks for more information.
         */
        public add(fnd: any) {
            if (!fnd) {
                return;
            }

            if ($.isArray(fnd)) {
                var count = fnd.length;
                for (var i = 0; i < count; i++) {
                    this._add(fnd[i]);
                }
            } else {
                this._add(fnd);
            }
        }
        private _add(func: IFunctionDescription): void {
            var addName = (func && func.name && func.name.toUpperCase());
            if (!addName) {
                return;
            }

            var funcs = this._funcs, count = funcs.length, index, fName;
            for (index = 0; index < count; index++) {
                fName = funcs[index].name.toUpperCase();

                if (fName === addName) { //duiplicate
                    return;
                } else if (fName > addName) {
                    break;
                }
            }
            funcs.splice(index, 0, func);
        }

        /**
         * Removes a custom function description.
         * @param {string} name The custom function description name.
         */
        public remove(name: string): void {
            if (!name) {
                return;
            }

            name = name.toUpperCase();
            var funcs = this._funcs, count = funcs.length;
            for (var i = 0; i < count; i++) {
                if (funcs[i].name.toUpperCase() === name) {
                    funcs.splice(i, 1);
                    break;
                }
            }
        }

       /**
        * Gets or sets the Spread component to work with the formula text box.
        * @param {Object} value The Spread component.
        */
        public spread(value: ISpread): any {
            var self = this;
            //get
            if (arguments.length === 0) {
                return self._spread;
            }
            self.setSpread(value);
            //set
            self._attachSpread();

        }

        public setSpread(spread: ISpread): void {
            if (!spread) {
                return;
            }

            var self = this;
            if (self._spread) {
                self._detachSpread();
            }

            var host = self._host;
            if (spread && host) {
                self._spread = spread;
            }
            self._parse = self.parseByCalc;

        }
       
        //#endregion

        //#region Append, Replace
        getRanges(): IParamRange[] {
            var ranges: IParamRange[] = [];

            var tokens = this._tokens,
                tokenCount = (tokens && tokens.length), token, tokenText,
                tmpLength: number = 0, index: number = 0;
            if (tokenCount > 0) {
                for (var i = 0; i < tokenCount; i++) {
                    token = tokens[i];
                    tokenText = token.text;

                    if (token.type === TokenType.Range) {
                        ranges.push(<IParamRange>{ textOffset: tmpLength, text: tokenText, ranges: token.ranges, index: index++, allowDrag: token.allowDrag });
                    }
                    tmpLength += tokenText.length;
                }
            }
            return ranges;
        }

        getActiveRange(): IParamRange {
            var host = this._host,
                ranges = this.getRanges();
            if (host && ranges && ranges.length > 0) {
                var caretPosition = this.caret(),
                    count = ranges.length, range, textOffset;
                for (var i = 0; i < count; i++) {
                    range = ranges[i];
                    textOffset = range.textOffset;
                    if (textOffset < caretPosition && caretPosition <= textOffset + range.text.length) {
                        return range;
                    } else if (textOffset >= caretPosition) {
                        break;
                    }
                }
            }
            return keyword_null;
        }

        isActiveRange(paramRange: IParamRange): boolean {
            if (!paramRange) {
                return false;
            }

            var caretPosition = this.caret();
            var rangeString = paramRange.text,
                rangeStringOffset = paramRange.textOffset;
            if (rangeStringOffset < caretPosition && caretPosition <= rangeStringOffset + rangeString.length) {
                return true;
            }
            return false;
        }

        getRangeColor(index: number): string {
            var ranges = this.getRanges(), count = ranges.length;
            if (index < 0 || count <= index) {
                return "";
            }
            
            var tmpRanges = [], range, colorIndex = 0;
            for (var i = 0; i < count; i++) {
                range = ranges[i];

                //
                var duplicated = false, j = 0;
                for (; j < tmpRanges.length; j++) {
                    if (tmpRanges[j].text.replace(/\s+/g, "").toUpperCase() === range.text.replace(/\s+/g, "").toUpperCase()) {
                        duplicated = true;
                        break;
                    }
                }
                if (duplicated) {
                    if (index === i) {
                        colorIndex = j;
                        break;
                    }
                } else {
                    tmpRanges.push(range);
                    if (index === i) {
                        colorIndex = tmpRanges.length - 1;
                        break;
                    }
                }
            }

            var colors = FormulaTextBox.DEFAULT_RANGE_COLORS;
            return colors[colorIndex % colors.length];
        }

        canAppendRange(): boolean {
            if (this._isAppending) {
                return true;
            }

            var activeToken = this._getToken(this.caret());
            if (activeToken) {
                var tokenType = activeToken.type, tokenText = activeToken.text;
                return (tokenType === TokenType.FormulaStart
                    || tokenType === TokenType.ArgumentSeparator
                    || (tokenType === TokenType.Operator && tokenText !== "%")
                    || tokenType === TokenType.ParenOpen
                    || tokenType === TokenType.ArrayArgumentSeparator
                    || tokenType === TokenType.Whitespace);
            }
            return false;
        }

        isAppending(): boolean {
            return this._isAppending;
        }

        isAppendingRange(paramRange: IParamRange): boolean {
            if (!paramRange || !this._isAppending) {
                return false;
            }

            var appendingStart = this._appendingStart,
                appendingEnd = this.caret(),
                rangeStringOffset = paramRange.textOffset;
            if (appendingStart <= rangeStringOffset && rangeStringOffset < appendingEnd) {
                return true;
            }
            return false;
        }

        getAppendingRanges(): IParamRange[] {
            var ret = [];

            var ranges = this.getRanges(), count = ranges.length, range;
            if (count > 0) {
                for (var i = 0; i < count; i++) {
                    range = ranges[i];
                    if (this.isAppendingRange(range)) {
                        ret.push(range);
                    }
                }
            }
            return ret;
        }

        appendRange(rangeString: string, replacing: boolean, clearPrevAppending: boolean): void {
            var self = this, host = self._host;
            if (!rangeString || !host) {
                return;
            }

            if (!self._isAppending) {
                if (!self.canAppendRange()) { // cannot append
                    return;
                }

                replacing = false; //not start append, so no replacing

                self._isAppending = true;
                self._appendingStart = self.caret();
                self._trigger(EVENT_APPENDSTARTED, {});
            }

            var appendingStart = self._appendingStart, text = self.text(), caretPosition = self.caret();
            var caretNewPosition = caretPosition;

            if (clearPrevAppending) {
                replacing = false; // clear prev appended, so no replacing

                text = text.substr(0, appendingStart) + text.substr(caretPosition);
                self._tokens = self._parse(text);

                caretPosition = appendingStart;
                caretNewPosition = caretPosition;
            }

            var activeToken: IToken = self._getToken(caretPosition);
            if (replacing) {
                var prevText = text.substr(0, caretPosition);

                prevText = prevText.substr(0, prevText.length - activeToken.text.length);
                if (prevText.length >= appendingStart) {
                    activeToken.text = rangeString;

                    caretNewPosition = prevText.length + rangeString.length;
                }
            } else {
                var tokens = self._tokens, activeTokenIndex = ArrayHelper.indexOf(tokens, activeToken);
                if (caretPosition > appendingStart) {
                    tokens.splice(activeTokenIndex + 1, 0, <IToken>{ text: GcSpread.Sheets.CR.listSeparator, type: TokenType.ArgumentSeparator });
                    tokens.splice(activeTokenIndex + 2, 0, <IToken>{ text: rangeString, type: TokenType.Range });
                    rangeString = "," + rangeString;
                } else {
                    tokens.splice(activeTokenIndex + 1, 0, <IToken>{ text: rangeString, type: TokenType.Range });
                }

                caretNewPosition = caretPosition + rangeString.length;
            }

            //
            self._updateHostValue();
            var parameter = {};
            var ftbAcrossSheet = IFormulatextboxAcrossSheetSingleton.formulatextboxAcrossSheetInstance;
            if (ftbAcrossSheet && ftbAcrossSheet.text) {
                parameter = { sheet: ftbAcrossSheet.sheet, editor: ftbAcrossSheet.dom, canvasOffset: ftbAcrossSheet.canvasOffset};
            } 
            self._trigger(EVENT_TEXTCHANGED, parameter);
            self.caret(caretNewPosition);
        }

        stopAppending(): void {
            var self = this;
            if (self._isAppending) {
                self._isAppending = false;
                self._appendingStart = -1;
                
                self._trigger(EVENT_APPENDENDED, {});
            }
        }

        startAppending(): void {
            this._isAppending = true;
            this._appendingStart = this.caret();
        }

        appendingStartIndex(index?: number): number {
            return arguments.length == 0 ?
                this._appendingStart : (this._appendingStart = index);
        }

        repalceRange(rangeIndex: number, rangeString: string): boolean { //used for resize and move
            var self = this,
                host = self._host;
            if (!host || rangeIndex < 0 || !rangeString) {
                return;
            }

            //
            var replaced = false, tmpText = "";

            var tokens = self._tokens,
                tokenCount = (tokens && tokens.length), token,
                index: number = 0;
            for (var i = 0; i < tokenCount; i++) {
                token = tokens[i];
                if (token.type === TokenType.Range) {
                    if (index++ === rangeIndex) {
                        tokens[i] = <IToken>{ text: rangeString, type: TokenType.Range };
                        replaced = true;
                        break;
                    }
                }
                tmpText += token.text;
            }

            if (replaced) {
                self._updateHostValue();
                self._trigger(EVENT_TEXTCHANGED, {});
                //Fix the bug 109172, fix the caret position to the end of the text.
                //Make sure the next append behavior could be continue.
                //self.caret(tmpText.length + rangeString.length);
                self.caret(self.text().length);
            }
        }
        //#endregion



        private _attachSpread(): void {
            var self = this;
            if (!self._spread) {
                return;
            }

            var host = self._host;
            if (self._spread && host) {

                var Events = GcSpread.Sheets.Events;
                host.setAttribute("gcUIElement", "gcAttachedFormulaTextBox");
                self._spread._attachedFormulaTextBox = self;
                self._spread._bind(Events.EditStarted, self, self._onSpreadEditStarted);
                self._spread._bind(Events.EnterCell, self, self._onSpreadEnterCell);
                self._spread._bind(Events.EditEnded, self, self._onSpreadEditEnded);
                self._spread._bind(Events.ActiveSheetChanged, self, self._onSpreadActiveSheetChanged);
                self._spread._bind(Events.RangeChanged, self, self._onSpreadRangeChanged);
                self._spread._bind("FormulaTextBoxTextChanged", self, self._onSpreadFormulaTextBoxTextChanged);
                self._spread._bind("FormulaTextBoxCaretChanged", self, self._onSpreadFormulaTextBoxCaretChanged);

                var sheet = self._spread.getActiveSheet();
                if (sheet) {
                    self.text(self._getEditText(sheet, sheet._activeRowIndex, sheet._activeColIndex));
                }
                self._bind(EVENT_TEXTCHANGED, self, self._onFormulaTextBoxTextChanged);
                self._bind(EVENT_CARETCHANGED, self, self._onFormulaTextBoxCaretChanged);
            }
        }

        private _detachSpread() : void {
            var self = this, spreadTmp = self._spread;
            if (!self._isInSpread && spreadTmp) {
                var Events = GcSpread.Sheets.Events;
                spreadTmp._attachedFormulaTextBox = null;
                spreadTmp._unbind(Events.EditStarted, self._onSpreadEditStarted);
                spreadTmp._unbind(Events.EnterCell, self._onSpreadEnterCell);
                spreadTmp._unbind(Events.EditEnded, self._onSpreadEditEnded);
                spreadTmp._unbind(Events.ActiveSheetChanged, self._onSpreadActiveSheetChanged);
                spreadTmp._unbind(Events.RangeChanged, self._onSpreadRangeChanged);
                spreadTmp._unbind("FormulaTextBoxTextChanged", self._onSpreadFormulaTextBoxTextChanged);
                spreadTmp._unbind("FormulaTextBoxCaretChanged", self._onSpreadFormulaTextBoxCaretChanged);

                self._unbind(EVENT_TEXTCHANGED, self._onFormulaTextBoxTextChanged);
                self._unbind(EVENT_CARETCHANGED, self._onFormulaTextBoxCaretChanged);
                self.text("");
            }
            self._spread = null;
        }

        private _startingSpreadEdit() {
            var self = this;

            if (self._isWorking) {
                return;
            }
            self._isWorking = true;

            var spreadTmp = <any>this._spread;
            var sheet = (spreadTmp && spreadTmp.getActiveSheet());
            if (sheet && !sheet.isEditing()) {
                sheet._startEditImp(null, sheet._activeRowIndex, sheet._activeColIndex, null, null, false, null);
                self._spreadEditStarting = true;
            } else {
                self._spreadEditStarting = false;
            }
            
            self._isWorking = false;
            // open help down-drop box, when browser get focus
            if (!self._isFuncsShown) {
                self._openFuncHelp();
            }
        }
        private _startSpreadEdit(): void {
            var self = this;

            var spreadTmp = <any>self._spread;
            var sheet = (spreadTmp && spreadTmp.getActiveSheet());
            if (!sheet) {
                return;
            }

            //process first start spread edit and array formula
            if (self._spreadEditStarting) {
                var fbx = sheet._formulaTextBox,
                    fbxText = fbx.text(),
                    selfText = self.text();
                if (selfText !== fbxText) {
                    var caret = self.caret();
                    var formulaInfo = sheet.getFormulaInformation(sheet.getActiveRowIndex(), sheet.getActiveColumnIndex());
                    self.text(fbxText);
                    if (formulaInfo.isArrayFormula) {
                        if (caret >= selfText.length) {
                            caret = caret - 1; // for "}"
                        }
                        caret = Math_max(0, caret - 1)// for "{"
                    }
                    self.caret(caret);
                }
            }
            //~

            //changet editor status
            var EditorStatus = GcSpread.Sheets.EditorStatus, oldStatus = sheet._editorStatus;
            if (oldStatus !== EditorStatus.Edit) {
                sheet._editorStatus = EditorStatus.Edit;
                sheet.triggerEditorStatusChanged(
                    {
                        sheet: sheet,
                        sheetName: sheet._name,
                        oldStatus: oldStatus,
                        newStatus: EditorStatus.Edit
                    });
            }
        }

        private _getEditText(sheet: any, row: number, col: number): string {
            var text = "";
            if (sheet) {
                var formulaInfo = sheet.getFormulaInformation(row, col);
                if (formulaInfo && formulaInfo.hasFormula) {
                    text = "=" + formulaInfo.formula;
                    if (formulaInfo.isArrayFormula) {
                        text = "{" + text + "}";
                    }
                } else {
                    var cellStyle = sheet.getActualStyle(row, col);
                    var value = sheet.getValue(row, col);
                    text = util.formatValue2Text(cellStyle, value, sheet) || "";
                    var canUserEditFormula = sheet.parent ? sheet.parent.canUserEditFormula() : true;
                    if (text[0] === "=" && canUserEditFormula) {
                        text = "'" + text;
                    }
                }
            }
            return text;
        }

        private _onSpreadActiveSheetChanged(e, eData): void {
            var self = e.data;
            if (self._isWorking) {
                return;
            }

            self._isWorking = true;
            self.close();
            if (eData) {
                var sheet = eData.newSheet;
                self.text(self._getEditText(sheet, sheet._activeRowIndex, sheet._activeColIndex));
            }
            self._isWorking = false;
        }

        private _onSpreadEditStarted(e, eData): void {
            var self = e.data;
            if (self._isWorking) {
                return;
            }

            var spreadTmp = <any>self._spread;
            var sheet = (spreadTmp && spreadTmp.getActiveSheet());
            var fbx = (sheet && sheet._formulaTextBox);
            if (!fbx) {
                return;
            }

            self._isWorking = true;
            self.text(fbx.text());
            self._isWorking = false;
        }

        private _onSpreadEnterCell(e, eData): void {
            var self = e.data;
            if (self._isWorking) {
                return;
            }

            self._isWorking = true;
            if (eData) {
                self.text(self._getEditText(eData.sheet, eData.row, eData.col));
            }
            self._isWorking = false;
        }

        private _onSpreadRangeChanged(e, eData): void {
            var self = e.data;
            if (self._isWorking) {
                return;
            }

            self._isWorking = true;
            if (eData) {
                var sheet = eData.sheet, row = eData.row, col = eData.column, rowCount = eData.rowCount, colCount = eData.columnCount;
                if (new GcSpread.Sheets.Range(row, col, rowCount, colCount).contains(sheet._activeRowIndex, sheet._activeColIndex)) {
                    self.text(self._getEditText(sheet, row, col));
                }
            }
            self._isWorking = false;
        }

        private _onSpreadEditEnded(e, eData): void {
            var self = e.data;
            if (self._isWorking) {
                return;
            }

            self._isWorking = true;
            self.close();
            if (eData) {
                self.text(self._getEditText(eData.sheet, eData.row, eData.col));
            }
            self._isWorking = false;
        }

        private _onSpreadFormulaTextBoxTextChanged(e, eData): void {
            var self = e.data;
            if (self._isWorking) {
                return;
            }

            self._isWorking = true;
            if (eData) {
                var caret = self.caret();
                self.text(eData.text);
                self.caret(caret);
            }
            self._isWorking = false;
        }

        private _onSpreadFormulaTextBoxCaretChanged(e, eData): void {
            var self = e.data;
            if (self._isWorking) {
                return;
            }

            self._isWorking = true;
            if (eData) {
               self.caret(eData.caret);
            }
            self._isWorking = false;
        }

        private _onFormulaTextBoxTextChanged(e): void {
            var self = e.data;

            if (self._isWorking) {
                return;
            }
            var spreadTmp = <any>self._spread, sheet = (spreadTmp && spreadTmp.getActiveSheet());
            if (!sheet) {
                return;
            }

            self._isWorking = true;
            var fbx = sheet._formulaTextBox;
            if (fbx) {
                var caret = fbx.caret();
                fbx.text(self.text());
                fbx.caret(caret);
            }
            self._isWorking = false;
        }

        private _onFormulaTextBoxCaretChanged(e): void {
            var self = e.data;
            if (self._isWorking) {
                return;
            }

            var spreadTmp = <any>self._spread, sheet = (spreadTmp && spreadTmp.getActiveSheet());
            if (!sheet || !sheet.isEditing()) {
                return;
            }

            //
            self._isWorking = true;
            var fbx = sheet._formulaTextBox;
            if (fbx) {
                fbx.caret(self.caret());
                self._openFuncHelp();
            }
            self._isWorking = false;
        }
        //#endregion

        //#region Private Methods

        private _init(parentElement: HTMLElement): void {
            var self = this;

            self._isImeInputting = false;
            self._isInputKey = false;

            //
            self._isAppending = false;
            self._appendingStart = -1;

            //
            self._funcs = [];
            self._autoComplete = true;
            self._showHelp = true;
            self._autoClose = true;

            var funcsPopup = document.createElement("div");
            funcsPopup.className = "gcsj-func-ac-popup";
            funcsPopup.style.display = "none";
            funcsPopup.setAttribute("gcUIElement", "gcFuncACPopup"); // for spreadjs not to process mousedown
            parentElement.insertBefore(funcsPopup, keyword_null);
            self._funcsPopup = funcsPopup;
            self._isFuncsShown = false;

            var funcHelpPopup = document.createElement("div");
            funcHelpPopup.className = "gcsj-func-help-popup";
            funcHelpPopup.style.display = "none";
            funcHelpPopup.setAttribute("gcUIElement", "gcFuncHelpPopup"); // for spreadjs not to process mousedown
            parentElement.insertBefore(funcHelpPopup, keyword_null);
            self._funcHelpPopup = funcHelpPopup;
            self._isFuncHelpShown = false;

            $(funcsPopup).mouseenter(function () {
                self._autoClose = false;
            }).mouseleave(function () {
                self._autoClose = true;
            });
            $(funcHelpPopup).mouseenter(function () {
                self._autoClose = false;
            }).mouseleave(function () {
                self._autoClose = true;
            });

            $(funcsPopup).scroll(function () {
                if (self._funcsScrollingTimer) {
                    window.clearTimeout(self._funcsScrollingTimer);
                }

                self._funcsScrollingTimer = window.setTimeout(function () {
                    if (self._host) {
                        self._host.focus();
                    }
                }, 100);
            });

            var helpDiv = document.createElement("div");
            helpDiv.style.display = "none";
            helpDiv.setAttribute("gcUIElement", "gcFuncHelpDiv"); // for spreadjs not to process mousedown
            parentElement.insertBefore(helpDiv, keyword_null);
            self._helpDiv = helpDiv;

            self._spread = null; //
            self._isWorking = false;
            self._spreadEditStarting = false;
            self._isInSpread = false;

            self._parse = self.parseDefault;
        }

        private _attachHost(host: any): void {
            if (!host) {
                return;
            }

            var self = this;

            //only support textarea and contenteditable div
            if (!self._isInputElement(host) && !self._isEditableElement(host)) {
                return;
            }

            var $host = $(host);

            if (self._host) {
                self._detachHost();
            }
            self._host = host;

            //>>> Input
            //IE: issue 1: IE9, when host is input, press (Backspace and Delete keys, CTRL + X, Cut and Delete command in context menu) 
            //             does not fire 'input' event, if deleted by Delete command, cannot be detected in JavaScript.
            //    issue 2: when host is contenteditable, does not fire 'input' event.
            //    issue 3: Now does not find any event in IE to stand of 'input'.
            //    Solution: now on 'focus' to save and 'input', 'keydown', 'keyup', 'cut', 'paste' to check whether text changed.
            //--------------------
            //QT: issue: when input text in textarea, in 'input' event, get textarea's selectionStart/selectionEnd, it is still 
            //           the old value, and cannot show funcs popup correctly.
            //    Solution: now in 'input' event record flag(_isInputKey), and in keyup to process input.
            if ($.browser && $.browser.msie) {
                var lessIE10 = (parseInt($.browser.version, 10) < 10);
                if (self._isEditableElement(host) || lessIE10) {
                    self._bind("focus", function () {
                        $host.data("text-before", self.text());
                    });
                    self._bind("input keydown keyup cut paste", function () {
                        self._checkInput();
                    });
                } else {
                    self._bind("input", function () {
                        self._onInput();
                    });
                }
            } else {
                self._bind("input", function () {
                    self._onInput();
                });
            }

            //>>> KeyDown
            self._bind("keydown", function (e: JQueryEventObject) {
                var ctrlKey = e.ctrlKey, shiftKey = e.shiftKey, altKey = e.altKey, metaKey = e.metaKey,
                    modifyKey = ctrlKey || shiftKey || altKey || metaKey,
                    keyCode = e.keyCode;

                self._isInputKey = false;

                //auto complete
                if (!modifyKey && self._isFuncsShown) {
                    if (keyCode === Keys.down) {
                        self._selectFunc(1);
                        e.preventDefault();
                        e.stopPropagation();
                    } else if (keyCode === Keys.up) {
                        self._selectFunc(-1);
                        e.preventDefault();
                        e.stopPropagation();
                    } else if (keyCode === Keys.tab) {
                        self._completeFunc();
                        e.preventDefault();
                        e.stopPropagation();
                    }
                }
                //
                if (keyCode === Keys.esc) {
                    self.close();
                }
                //
                self._checkCaret(e);
            });

            //>>> KeyUp
            self._bind("keyup", function (e: JQueryEventObject) {
                if (self._isInputKey && $.browser && $.browser.qtMode) { //qtMode is set in spreadjs designer
                    var caretPosition = self.caret();
                    if ($host.data("caret-before") !== caretPosition) {
                        $host.data("caret-before", caretPosition);
                        self._trigger(EVENT_CARETCHANGED, {});

                        self._openFuncs();
                        if (!self._isFuncsShown) {
                            self._openFuncHelp();
                        }
                    }
                }

                self._checkCaret(e);
            });

            //>>> Focus
            self._bind("focus", function (e: JQueryEventObject) {

                self._checkCaret(e);
            });

            ///>>> Blur
            self._bind("blur", function (e: JQueryEventObject) {
                if (self._autoClose) {
                    self.close();
                }
            });

            ///>>> MouseDown
            self._bind("mousedown", function (e: JQueryEventObject) {
                self._startingSpreadEdit();
            });

            ///>>> MouseUp
            self._bind("mouseup", function (e: JQueryEventObject) {
                self._startSpreadEdit();
            });

            //>>> Click
            self._bind("click", function (e: JQueryEventObject) {
                if (self._isAppending) {
                    self.stopAppending();
                }
                var spreadTmp = <any>self._spread, sheet = (spreadTmp && spreadTmp.getActiveSheet());
                var fbx = (sheet && sheet._formulaTextBox);
                if (fbx && fbx.isAppending()) {
                    fbx.stopAppending();
                }

                self._checkCaret(e);
            });

            ///>>> compositionstart, compositionupdate, compositionend
            self._bind("compositionstart", function (e: JQueryEventObject) {
                self._isImeInputting = true;
            });
            self._bind("compositionend", function (e: JQueryEventObject) {
                self._isImeInputting = false;
            });

        }

        private _detachHost(): void {
            var self = this,
                host = self._host;
            if (host) {
                var $host = $(host);
                $host.removeData("text-before");
                $host.removeData("caret-before");

                self._unbindAll();
                self.unbindAll();
                self._host = keyword_null;
            }
        }

        private _checkInput(): void {
            var self = this,
                $host = $(self._host),
                text = self.text();
            if ($host.data("text-before") !== text) {
                $host.data("text-before", text);
                self._onInput();
            }
        }

        private _checkCaret(e: JQueryEventObject): void { // to highlight active range
            //wait for several millisecond for that IE error, selectiongStart update later after touch
            if ($.browser && $.browser.msie) {
                var checkCaretObj = function(self: FormulaTextBox, e: JQueryEventObject) {
                    return function() {
                        self._checkCaretCore(self, e);
                    }
                }
                setTimeout(checkCaretObj(this, e), 10);
            } else {
                this._checkCaretCore(this, e);
            }
        }

        private _checkCaretCore(self: FormulaTextBox, e: JQueryEventObject): void {

            var keyCode = e.keyCode;
            var navKey = (
                keyCode === Keys.left || keyCode === Keys.right ||
                keyCode === Keys.home || keyCode === Keys.end ||
                keyCode === Keys.pdn || keyCode === Keys.pup ||
                keyCode === Keys.tab || keyCode === Keys.enter
                );

            if (!self._autoComplete) {
                navKey = (navKey || keyCode === Keys.up || keyCode === Keys.down); //reserved autocomplete
            }
            var mouseClick = (typeof (e.button) !== 'undefined');

            if (navKey || mouseClick) {
                var host = self._host,
                    $host = $(host),
                    caretPosition = self._getCaret(host);
                //skip selection
                if (caretPosition.start !== caretPosition.end) {
                    return;
                }
                var caret = caretPosition.end;
                if ($host.data("caret-before") !== caret) {
                    $host.data("caret-before", caret);
                    self._trigger(EVENT_CARETCHANGED, {});
                    self._openFuncHelp();
                }
            }
        }

        private _activeRow(): number {
            if (this._spread) {
                return this._spread.getActiveSheet()._activeRowIndex;
            }
            return keyword_undefined;
        }
        private _activeCol(): number {
            if (this._spread) {
                return this._spread.getActiveSheet()._activeColIndex;
            }
            return keyword_undefined;
        }

        private _activeSheet(): any {
            if (this._spread) {
                return this._spread.getActiveSheet();
            }
        }
	// formula textbox default parse function, for normal text
        private parseDefault(text) {
            return Tokenizer.parse(text);
        }
	// calc engine parse function, for all text, include table and name
        private parseByCalc(text) {
            if (Calc) {
                var self = this;

                var newToken: IToken[] = [];
                if (!text || text[0] !== '=') {
                    newToken.push(<IToken>{ text: text, type: TokenType.Literal });
                    return newToken;
                }

                var oldOption = GcSpread.Sheets.Calc.Parser.getParserOption();
                var option = {
                    'numberDecimalSeparator': CR.numberDecimalSeparator,
                    'arrayGroupSeparator': CR.arrayGroupSeparator,
                    'listSeparator': CR.listSeparator
                }
                Calc.Parser.setParserOption(option);

                var parser = new Calc.Parser();
                var tokens2 = parser.parseReferenceExpressionInfos(text, self._activeSheet(), self._activeRow(), self._activeCol());

                GcSpread.Sheets.Calc.Parser.setParserOption(oldOption);

                newToken = self._convertToTextboxToken(tokens2);
                return newToken;
            } else {
                this.parseDefault(text);
            }
            return keyword_undefined;
        }

        private _onInput(): void {
            var self = this, host = self._host, $host = $(host);

            self._isInputKey = true;

            self._tokens = self._parse(self.text());
           
            if (self._isEditableElement(host)) {
                if (!self._isImeInputting) {
                    var caretPosition = self.caret();
                    self._colorText(self._tokens);
                    self._trigger(EVENT_TEXTCHANGED, { type: 'input' });
                    self.caret(caretPosition);
                }
            } else {
                //Note: 
                // input flag is used to fix celltype does not update its size issue.
                // maybe next version to use a enum 'type' to process complicate use case.
                self._trigger(EVENT_TEXTCHANGED, { type: 'input' });
            }

            var caretPosition = self.caret();
            if ($host.data("caret-before") !== caretPosition) {
                $host.data("caret-before", caretPosition);
                self._trigger(EVENT_CARETCHANGED, {});
            }

            self._openFuncs();
            if (!self._isFuncsShown) {
                self._openFuncHelp();
            }
        }

        trigerTextChanged(): void {
            this._trigger(EVENT_TEXTCHANGED, { type: 'input' });
        }

	// convert calc engine result to formula text box result
        private _convertToTextboxToken(tokenList): IToken[] {
            var newTokens = [];
            var bracketStack: TokenType[] = [];

            var arrayGroupSeperator = ";";
            if (GcSpread.Sheets.CR && GcSpread.Sheets.CR.arrayGroupSeparator) {
                arrayGroupSeperator = GcSpread.Sheets.CR.arrayGroupSeparator;
            }
            var isInArray = false;
            var isInArrayRow = false;
            var arrayRowCount = 0;
            for (var i = 0; i < tokenList.length; i++) {
                // here is for that: cyljxu add some ',' in CalcEngine, but is shouldn't show on formula textbox, so jump over it.
                if (i > 0 && i < tokenList.length - 1 && tokenList[i - 1].text === ";" && tokenList[i].text === "," && tokenList[i + 1].text === "ARRAYROW") {
                    continue;
                }
                var calcToken = tokenList[i];
                var tokenType = this._getCalcType(calcToken, bracketStack);
                var text = calcToken.text;
                if (tokenType === TokenType.FunctionName) {
                    newTokens.push(<IToken>{ text: text, type: tokenType });
                    //newTokens.push(<IToken>{ text: '(', type: TokenType.ParenOpen });
                } else if (tokenType === TokenType.BraceOpen) {
                    if (text === "ARRAYROW") {
                        arrayRowCount++;
                        isInArrayRow = true;
                        continue;
                    }
                    if (text === "ARRAY") {
                        isInArray = true;
                    }
                    newTokens.push(<IToken>{ text: '{', type: TokenType.BraceOpen });
                    
                } else if (tokenType === TokenType.BraceClose) {
                    if (text === "ARRAYROW") {
                        isInArrayRow = false;
                        newTokens.push(<IToken>{ text: '}', type: TokenType.BraceClose });
                        continue;
                    }else if (text === "ARRAY") {
                        isInArray = false;
                        arrayRowCount = 0;
                        newTokens.push(<IToken>{ text: '}', type: TokenType.BraceClose });
                    } else {
                        newTokens.push(<IToken>{ text: text, type: TokenType.BraceClose });
                    }
                } else if (tokenType === TokenType.ParenClose) {
                    newTokens.push(<IToken>{ text: ')', type: tokenType });
                } else if (isInArray && !isInArrayRow && text == ',') {
                    newTokens.push(<IToken>{ text: arrayGroupSeperator, type: TokenType.ArrayGroupSeparator });
                } else if (tokenType !== null) {
                    newTokens.push(<IToken>{ text: text, type: tokenType, ranges: calcToken.ranges, allowDrag: calcToken.canDrag });
                }
            }
            return newTokens;
        }

        private _getCalcType(token, bracketStack: any[]): any {
            var excelFormulaTokenType = Calc.ExcelFormulaTokenType;
            var excelFormulaTokenSubtype = Calc.ExcelFormulaTokenSubtype;
            var type = token.type;
            var subType = token.subType;
            var text = token.text;
            var value = token.value;
            if (type === excelFormulaTokenType.Function) {
                if (subType === excelFormulaTokenSubtype.Start) {
                    if (text === "ARRAY" || text === "ARRAYROW") {
                        bracketStack.push(TokenType.BraceOpen);
                        return TokenType.BraceOpen;
                    }
                    bracketStack.push(TokenType.ParenOpen);
                    if (value.trim() === '(') {
                        return TokenType.ParenOpen;
                    }
                    return TokenType.FunctionName;
                }
                if (subType === excelFormulaTokenSubtype.Stop) {
                    if (value.trim() === ')') {
                        return TokenType.ParenClose;
                    }
                    if (bracketStack.length > 0) {
                        var lastBracket = bracketStack[bracketStack.length - 1];
                        if (lastBracket === TokenType.BraceOpen) {
                            bracketStack.pop();
                            return TokenType.BraceClose;
                        } else if (lastBracket === TokenType.ParenOpen) {
                            bracketStack.pop();
                            return TokenType.ParenClose;
                        }
                    }
                }
                if (value.trim() === '=') {
                    return TokenType.FormulaStart;
                }
            } else if (type === excelFormulaTokenType.Argument) {
                if (subType === excelFormulaTokenSubtype.Nothing) {
                    return TokenType.ArgumentSeparator;
                }
            } else if ((type === excelFormulaTokenType.OperatorInfix) ||
                (type === excelFormulaTokenType.OperatorPostfix) ||
                (type === excelFormulaTokenType.OperatorPrefix)) {
                return TokenType.Operator;
            } else if (type === excelFormulaTokenType.Operand) {
                if (subType === excelFormulaTokenSubtype.RangeOrName) {
                    return TokenType.Range;
                } else if (subType === excelFormulaTokenSubtype.Logical) {
                    return TokenType.Boolean;
                } else if (subType === excelFormulaTokenSubtype.Number) {
                    return TokenType.Number;
                } else if (subType === excelFormulaTokenSubtype.Text) {
                    return TokenType.String;
                } else if (subType === excelFormulaTokenSubtype.Error) {
                    return TokenType.Error;
                }
                return TokenType.String;
            } else if (type === excelFormulaTokenType.Whitespace) {
                return TokenType.Whitespace;
            } else if (type === excelFormulaTokenType.Unknown) {
                return TokenType.Literal;
            }
            return TokenType.Literal;
        }

        private _updateHostValue(): void {
            var self = this, host = self._host, tokens = self._tokens;
            if (self._isInputElement(host)) {
                var text = "", tokenCount = (tokens && tokens.length);
                for (var i = 0; i < tokenCount; i++) {
                    text += tokens[i].text;
                }
                host.value = text;
            } else if (self._isEditableElement(host)) {
                self._colorText(tokens);
            }
        }

        private _isInputElement(element: HTMLElement): boolean {
            var tagName = (element && element.tagName);
            return (tagName === "TEXTAREA" || tagName === "INPUT");
        }

        private _isEditableElement(element: HTMLElement): boolean {
            return (element && element.tagName === "DIV" && element.contentEditable === "true");
        }

        private _isFormula(text: string): boolean {
            if (text && text[0] === '=') {
                return true;
            }
            return false;
        }

        private _bind(type: string, data?: any, fn?: (eventObject: JQueryEventObject) => any): void {
            var host = this._host;
            if (host && type) {
                type = type.split(/\s+/).join(ns_formulatextbox_internal + " ");
                $(host).bind(type + ns_formulatextbox_internal, data, fn);
            }
        }

        private _unbind(type: string, fn?: (eventObject: JQueryEventObject) => any): void {
            var host = this._host;
            if (host && type) {
                type = type.split(/\s+/).join(ns_formulatextbox_internal + " ");
                $(host).unbind(type + ns_formulatextbox_internal, fn);
            }
        }

        private _unbindAll() {
            var host = this._host;
            if (host) {
                $(host).unbind(ns_formulatextbox_internal);
            }
        }

        private _trigger(type: string, data: any): void {
            var host = this._host;
            if (host) {
                $(host).trigger(type, data);
            }
        }

        private _getToken(caretPosition: number): IToken {
            if (caretPosition <= 0) {
                return keyword_null;
            }

            var tokens = this._tokens, tokenCount = (tokens && tokens.length);
            if (tokenCount > 0) {
                var textIndex: number = 0, token: IToken;
                for (var i = 0; i < tokenCount; i++) {
                    token = tokens[i];

                    textIndex += token.text.length;
                    if (textIndex >= caretPosition) {
                        return token;
                    }
                }
            }
            return keyword_null;
        }

        private _getFuncs(): any[] {
            var spreadTmp = <any>this._spread;
            var sheet = (spreadTmp && spreadTmp.getActiveSheet());
            var fbx = (sheet && sheet._formulaTextBox);
            if (fbx) {
                var all = fbx._funcs;
                for (var i = 0; i < all.length; i++) {
                    all[i].isFunc = true;
                }
                return all.concat(this._getCustomNames(spreadTmp, sheet)).concat(this._getTableNames(sheet));
            } else {
                return this._funcs;
            }
        }

        private _getCustomNames(spread, sheet): any[] {
            var names = [];
            var customNames = sheet.getCustomNames().concat(spread.getCustomNames());
            for (var i = 0; i < customNames.length; i++) {
                names.push({ name: customNames[i].getName(), description: SR.Fbx_CustomName_Description + customNames[i].getName() });
            }
            return names;
        }

        private _getTableNames(sheet): any[] {
            var names = [];
            var tables = sheet.getTables();
            if (tables) {
                for (var i = 0; i < tables.length; i++) {
                    names.push({ name: tables[i].name(), description: SR.Fbx_TableName_Description + tables[i].name() });
                }
            }
            return names;
        }

        private _getFuncsStartWith(startName: string, funcs: any[]): any[] {
            startName = startName.toUpperCase();
            if (StringUtil.contains(startName, '[')) {
                startName = startName.substr(startName.lastIndexOf('[') + 1);
                startName = StringUtil.replace(startName, '@', '');
            }
            //now funcs is sorted
            var results = [];
            var count = (funcs && funcs.length), find = false, f;
            for (var i = 0; i < count; i++) {
                f = funcs[i];
                if (f.name.toUpperCase().indexOf(startName) === 0) {
                    results.push(f);
                    find = true;
                } 
            }
            return results;
        }

        private _getTextInTokenBeforeCaret(): string {
            var caretPosition: number = this.caret();
            if (caretPosition <= 0) {
                return "";
            }

            var tokens = this._tokens, tokenCount = (tokens && tokens.length);
            if (tokenCount > 0) {
                var textIndex: number = 0, token: IToken;
                for (var i = 0; i < tokenCount; i++) {
                    token = tokens[i];

                    if (textIndex + token.text.length >= caretPosition) {
                        return token.text.substring(0, caretPosition - textIndex);
                    }
                    textIndex += token.text.length;
                }
            }
            return "";
        }
       
        private _getActiveFuncInfo(): any {
            var caretPosition = this.caret(),
                tokens = this._tokens,
                tokenCount = (tokens && tokens.length);

            var tmpTokens: IToken[] = [], textIndex = 0, token;
            for (var i = 0; i < tokenCount; i++) {
                token = tokens[i];

                tmpTokens.push(token);
                if (token.type === TokenType.ParenClose) {
                    var parenMatchCount: number = 0;
                    while (tmpTokens.length > 0) {
                        var popToken = tmpTokens.pop();
                        if (popToken.type === TokenType.ParenClose) {
                            parenMatchCount++;
                        }
                        if (popToken.type === TokenType.ParenOpen) {
                            parenMatchCount--;
                        }
                        if (parenMatchCount === 0) {
                            if (tmpTokens.length > 0 && (popToken = tmpTokens[tmpTokens.length - 1]) && (popToken.type === TokenType.FunctionName)) {
                                tmpTokens.pop();
                            }
                            break;
                        }
                    }
                }
                //
                textIndex += token.text.length;
                if (textIndex >= caretPosition) {
                    break;
                }
            }

            if (tmpTokens.length > 0) {
                var activeParamterIndex = 0;
                while (tmpTokens.length > 0) {
                    token = tmpTokens.pop();
                    if (token.type === TokenType.ArgumentSeparator) {
                        activeParamterIndex++;
                    } else if (token.type === TokenType.FunctionName) {
                        break;
                    }
                }

                if (token.type === TokenType.FunctionName) {
                    var funcName = token.text.toUpperCase();
                    var funcs = this._getFuncs(), funcCount = (funcs && funcs.length), func;
                    for (var i = 0; i < funcCount; i++) {
                        func = funcs[i];
                        if (func.name.toUpperCase() === funcName) {
                            return { func: func, activeParamterIndex: activeParamterIndex, isFunc: func.isFunc };
                        }
                    }
                }
            }

            return keyword_null;
        }
        //#endregion

        //#region Auto Complete
        private _openFuncs(): void {
            var self = this;
            var funcs = self._getFuncsForInput();

            var show = (self._autoComplete && self._isFormula(self.text()) && funcs && funcs.length > 0 && !self._isAppending && !self._isImeInputting);
            if (show) {
                self._closeFuncHelp();

                var funcsPopup = self._funcsPopup;
                if (funcs.length > 8) {
                    funcsPopup.style.height = "204px";
                    funcsPopup.style.overflowY = "scroll";
                } else {
                    funcsPopup.style.height = "auto";
                    funcsPopup.style.overflowY = "";
                }

                var popupContent = "";
                var count = funcs.length, func;
                for (var i = 0; i < count; i++) {
                    func = funcs[i];
                    popupContent +=
                    "<div class='gcsj-func-ac-row'>" +
                      "<div class='gcsj-func-ac-row-name' isFunc=" + func.isFunc + ">" + func.name + "</div>" +
                      "<div class='gcsj-func-ac-row-description'>" + (func.shortDescription || func.description) + "</div>" +
                    "</div>";
                }

                var $funcsPopup = $(self._funcsPopup);
                $funcsPopup.html(popupContent).show();
                self._isFuncsShown = true;

                //
                var $items = $funcsPopup.find(".gcsj-func-ac-row");
                if ($items.length > 0) {
                    var activeClassName = 'gcsj-ac-row-active';
                    $($items[0]).addClass(activeClassName);
                    $items.hover(function () {
                        $items.removeClass(activeClassName);
                        $(this).addClass(activeClassName);
                    });
                    $items.click(function () {
                        self._completeFunc();
                    });
                }
                self.position();
            } else {
                self._closeFuncs();
            }
        }
	// get all function names for display, include name and table and table columns
        private _getFuncsForInput(): any[] {
            var self = this;
            var token = self._getToken(self.caret()), tokenText = (token && token.text), funcs = [];
            var tokenIndex = self._tokens.indexOf(token);

            if (token && token.type === TokenType.String) {
                return funcs;
            }

            var tableColumnNames = self._getTableColumnNames(tokenIndex);
            if (tableColumnNames.length > 0) {
                funcs = funcs.concat(tableColumnNames).concat(SR.getHelpTableFuncs());
                if (StringUtil.endsWith(tokenText, '[') || StringUtil.endsWith(tokenText, '[@')) {
                    return funcs;
                }
            } else {
                funcs = this._getFuncs();
            }
            // if this token is table, get the input string before caret
            tokenText = self._getTextInTokenBeforeCaret();
            var result = [];
            if (tokenText) {
                result = self._getFuncsStartWith(tokenText, funcs);
            }
            return result;
        }

        private _getTableColumnNames(tokenIndex?: number): any[] {

            var columnNames = [];
            var tokens = this._tokens, tokenCount = (tokens && tokens.length);
            if (tokenIndex < 0 || tokenIndex >= tokens.length) {
                return columnNames;
            }
            var spreadTmp = <any>this._spread;
            var sheet = (spreadTmp && spreadTmp.getActiveSheet());
            var dealedTable = {};
            if (typeof tokenIndex === "undefined" || tokenIndex === keyword_null) {
                tokenIndex = tokenCount;
            }
            if (sheet) {
                var token = tokens[tokenIndex];
                var table = sheet.findTableByName(StringUtil.leftBefore(token.text, '['));
                if (table !== keyword_null && !dealedTable[table]) {
                    dealedTable[table] = true;
                    var index = 0;
                    var tableName = "";
                    while (tableName !== keyword_null) {
                        tableName = table.getColumnName(index++);
                        if (tableName !== keyword_null) {
                            columnNames.push({ name: tableName, description: '' });
                        }
                    }
                    if (columnNames.length > 0) {
                        return columnNames;    
                    }
                }
            }
            return columnNames;
        }
        
        private _closeFuncs(): void {
            $(this._funcsPopup).hide();
            this._isFuncsShown = false;
        }

        private _selectFunc(step: number): void {
            var $items = $(this._funcsPopup).find(".gcsj-func-ac-row"), count = $items.length;
            if (count === 0) {
                return;
            }

            var activeClassName = 'gcsj-ac-row-active';
            var newIndex = 0;
            if (step) {
                for (var i = 0; i < count; i++) {
                    if ($($items[i]).hasClass(activeClassName)) {
                        newIndex = i + step;
                        break;
                    }
                }
            }
            var scrollTopTmp = $(this._funcsPopup).scrollTop();
            $items.removeClass(activeClassName);
            var offsetHeight = 0;
            if (count > 0) {
                offsetHeight = $items[0].offsetHeight;
            }
            newIndex = Math_max(newIndex, 0);
            newIndex = Math_min(newIndex, count - 1);
            $($items[newIndex]).addClass(activeClassName);
            // auto scroll with the up or down key
            if ($items[newIndex].offsetTop + $items[newIndex].offsetHeight > $(this._funcsPopup).scrollTop() + $(this._funcsPopup).height()) {
                $(this._funcsPopup).scrollTop($(this._funcsPopup).scrollTop() + offsetHeight);
            } else if ($items[newIndex].offsetTop < $(this._funcsPopup).scrollTop()) {
                $(this._funcsPopup).scrollTop($items[newIndex].offsetTop);
            } else {
                $(this._funcsPopup).scrollTop(scrollTopTmp);
            }
        }

        private _completeFunc(): void {
            var self = this;
            var active = $(self._funcsPopup).find(".gcsj-ac-row-active .gcsj-func-ac-row-name");
            var funcName:string = active.text();
            var isFunc:boolean = active.attr('isFunc') === 'true';  //this variable is for function display, if not, for name or table display
            if (!funcName) {
                return;
            }

            var caretPosition = self.caret(),
                tokens = self._tokens,
                tokenCount = (tokens && tokens.length);

            var tokenTextIndex = 0, tokenTextLength = 0, tokenIndex = 0, token = keyword_null;
            while (tokenIndex < tokenCount) {
                token = tokens[tokenIndex];

                tokenTextLength = token.text.length;
                if (tokenTextIndex + tokenTextLength >= caretPosition) {
                    break;
                }

                tokenIndex++;
                tokenTextIndex += tokenTextLength;
            }

            //
            var offset: number = caretPosition - tokenTextIndex;
            var curTokenText:string = token.text;
            var begin: number = 0, end: number = 0;
            if (StringUtil.contains(curTokenText, '[')) {
                begin = curTokenText.lastIndexOf('[', offset - 1);
                if (begin === -1) { // here is auto complish table name
                    begin = curTokenText.indexOf('[');
                    if (begin === -1) {
                        token.text = funcName;
                    } else {
                        token.text = funcName + curTokenText.substr(begin);
                    }
                    begin = 0;
                } else { // here is auto complish column name
                    begin++;
                    if (curTokenText.charAt(begin) === '@') {
                        begin = begin + 1;
                    }
                    end = curTokenText.indexOf(']', offset);
                    if (end === -1) {
                        end = curTokenText.length;
                    }
                    token.text = curTokenText.substring(0, begin) + funcName + curTokenText.substr(end);
                }
            } else {
                token.text = funcName;
            }
            if (isFunc) {
                token.type = TokenType.FunctionName;
            } else {
                token.type = TokenType.Range;
            }
            //token.type = TokenType.FunctionName;

            //check next has paren '('
            var nextTokenIndex = tokenIndex + 1,
                nextToken = tokens[nextTokenIndex],
                curToken = tokens[tokenIndex];
            if (isFunc && (!nextToken || nextToken.type !== TokenType.ParenOpen)) {
                tokens.splice(nextTokenIndex, 0, <IToken>{ text: '(', type: TokenType.ParenOpen });
            }

            self._closeFuncs();
            //
            self._host.focus();
            self._updateHostValue();
            self.caret(tokenTextIndex + funcName.length + begin + (isFunc ? 1 : 0)); // 1 for '('
            self._openFuncHelp();
            // here is for refresh to render selection border
            self._tokens = self._parse(self.text());
            self._trigger(EVENT_TEXTCHANGED, {});
        }
        //#endregion

        //#region Function Help
        private _openFuncHelp(): void {
            var self = this;
           if (self._isFuncsShown) {
                self._closeFuncs();
            }

            var activeFuncInfo = self._getActiveFuncInfo();
            if (activeFuncInfo === keyword_null || activeFuncInfo.isFunc !== true) {
                self._closeFuncHelp();
                return;
            }
            var show = (self._showHelp && self._isFormula(self.text()) && activeFuncInfo && !self._isAppending && !self._isImeInputting);
            if (show) {
                var func = activeFuncInfo.func;

                //paramters
                var paramters = func.parameters,
                    paramterCount = (paramters && paramters.length),
                    activeParamterIndex = Math_min(paramterCount - 1, activeFuncInfo.activeParamterIndex),
                    paramter;
                var helpParamters = "";
                for (var i = 0; i < paramterCount; i++) {
                    paramter = paramters[i];

                    var p = paramter.name;
                    if (paramter.repeatable) {
                        p += ",..."
                    }
                    if (paramter.optional) {
                        p = "[" + p + "]";
                    }

                    var paramterSeparator = (i === paramterCount - 1 ? "" : ", ");

                    if (i === activeParamterIndex) {
                        p = "<span class='gcsj-func-help-paramter gcsj-func-help-paramter-active'>" + p + "</span>" + paramterSeparator; 
                    } else {
                        p = "<span class='gcsj-func-help-paramter'>" + p + "</span>" + paramterSeparator;
                    }
                    helpParamters += p;
                }

                //title
                var helpTitle =
                    "<div class='gcsj-func-help-title'>" +
                      "<div class='gcsj-func-help-formula'>" +
                        "<span class='gcsj-func-help-formula-name'>" + func.name + "</span>" +
                        "<span class='gcsj-func-help-paramter-paren'>(</span>" +
                         helpParamters +
                        "<span class='gcsj-func-help-paramter-paren'>)</span>" +
                      "</div>" +
                    "</div>";

                //body
                var helpSummary =
                    "<div class='gcsj-func-help-section'>" +
                      "<div class='gcsj-func-help-section-title'>"+SR.Fbx_Summary+"</div>" +
                      "<div class='gcsj-func-help-section-content'>" + func.description + "</div>" +
                    "</div>";
                var helpContent = "<div class='gcsj-func-help-section-content'>" + helpSummary + "</div>";
                var helpBody = "<div class='gcsj-func-help-body'>" + helpContent + "</div>";// next will add paramter description

                //whole
                var popupContent = helpTitle + helpBody;

                //
                $(self._funcHelpPopup).html(popupContent).show();
                self._isFuncHelpShown = true;
                self.position();
            } else {
                self._closeFuncHelp();
            }
        }

        private _closeFuncHelp(): void {
            $(this._funcHelpPopup).hide();
            this._isFuncHelpShown = false;
        }
        //#endregion

        close(): void {
            this._closeFuncs();
            this._closeFuncHelp();
        }

        isReservedKey(e: KeyboardEvent): boolean {
            if (this._isAppending) {
                return false;
            }

            var modifyKey = e.ctrlKey || e.shiftKey || e.altKey || e.metaKey,
                keyCode = e.keyCode;

            //when funcs popup is shown, should reserve following key
            if (this._isFuncsShown && !modifyKey && (keyCode === Keys.down || keyCode === Keys.up || keyCode === Keys.tab)) {
                return true;
            }
            return false;
        }

        position(): void {
            var self = this;

            var popup = keyword_null;
            if (self._isFuncsShown) {
                popup = self._funcsPopup;
            } else if (self._isFuncHelpShown) {
                popup = self._funcHelpPopup;
            }
            if (!popup) {
                return;
            }

            var $host = $(self._host), $popup = $(popup);
            var ftbAcrossSheet = IFormulatextboxAcrossSheetSingleton.formulatextboxAcrossSheetInstance;
            if (ftbAcrossSheet && ftbAcrossSheet.sheet) {
                var rect = ftbAcrossSheet.sheet.getCellRect(ftbAcrossSheet.rowIndex, ftbAcrossSheet.columnIndex);
                var evenHandler = ftbAcrossSheet.sheet._eventHandler;
                var canvasOffset = ftbAcrossSheet.canvasOffset;
                $popup.css("top", rect.y + rect.height + canvasOffset.top)
                    .css("left", rect.x + canvasOffset.left);
                return;
            }

            // get the absolute position for editor in sheet cells
            var top: any = $host.parent().css("top");
            var topNumber = parseFloat(top);
            if (!isNaN(topNumber)) {
                top = topNumber;
            }

            var left:any = $host.parent().css("left");
            // if auto, it's not in cell. get the offset position
            if (top === 'auto') {
                top = $host.offset().top;
                left = $host.offset().left;
            }
            // if it is over the screen bottom, it will position above the editor
            var inputBottom = top + $host.outerHeight();
            //
            var totalHeight = $(window).outerHeight();
            var popupHeight = $popup.outerHeight();
            var bottomIfDown = inputBottom + popupHeight;
            if (bottomIfDown > totalHeight) {
                //try to set at the top of host
                var topIfUp = top - popupHeight;
                if (topIfUp >= 0) {
                    inputBottom = topIfUp;
                }
            }


            $popup.css("top", inputBottom)
                .css("left", left);
        }

        focus(): void {
            $(this._host).focus();
        }
       
        //#region Color Text
        private _colorText(tokens: IToken[]) {
            var self = this;

            var htmlContent = "", tokensText = "";
            var tokenCount = (tokens && tokens.length), rangeIndex = 0, token;
            for (var i = 0; i < tokenCount; i++) {
                token = tokens[i];

                var style = "";
                if (token.type === TokenType.Range) {
                    style = " style='color: " + self.getRangeColor(rangeIndex++) + "'";
                }
                htmlContent += "<span" + style + " class='gcsj-func-color-text'>" + $(self._helpDiv).text(token.text).html() + "</span>";
                tokensText += token.text;
            }

            //Both tokens and host's text is empty, will not color text.
            if (!tokensText && !self.text()) {
                return;
            }

            var host = self._host;
            if (htmlContent) {
                host.innerHTML = "<span class='gcsj-func-color-content'>" + htmlContent + "</span>";
            } else {  //empty host
                while (host.firstChild) {
                    host.removeChild(host.firstChild);
                }
            }
        }

        private _getColorNode(element: any, position: number) {
            var $nodes = $(element).find('.gcsj-func-color-content .gcsj-func-color-text'), nodeCount = $nodes.length;
            if (nodeCount > 0) {
                position = Math_max(0, position);
                var node, text;
                for (var i = 0; i < nodeCount; i++) {
                    node = $nodes[i];
                    text = node.textContent; 

                    position -= text.length;
                    if (position <= 0) {
                        return { node: node, offset: text.length + position };
                    }
                }
                return { node: node, offset: text.length };
            }
            return keyword_null;
        }

        //private _getNodeText(node: Node): string {
        //    var texts = [];

        //    var root = node, stack = [];
        //    while (node || stack.length > 0) {
        //        if (node) {
        //            stack.push(node);
        //            node = node.firstChild;
        //        } else {
        //            node = stack.pop();
        //            if (node.nodeType === 3) {
        //                texts.push(node.nodeValue);
        //            } else if (node.nodeName === "BR" || (<any>node).hasAttribute("_moz_dirty") || "_moz" == (<any>node).getAttribute("type")) {
        //                texts.push("\n");
        //            }

        //            if (node.nodeName !== "STYLE" && node !== root) {
        //                node = node.nextSibling;
        //            } else {
        //                node = keyword_null;
        //            }
        //        }
        //    }
        //    return texts.join("");
        //}

        //#endregion
    }
    //#endregion

    //#region Parser
    interface IToken {
        text: string;
        type: TokenType;
        ranges: Range[];
        allowDrag: boolean;
    }
    enum TokenType {
        FormulaStart= 1, //=
        FunctionName= 2,

        BraceOpen= 3, //{
        BraceClose= 4, //}
        ParenOpen= 5, //(
        ParenClose= 6, //)

        Operator= 7, //+-*/<> > < ^ % & >= <= =

        ArgumentSeparator= 8, //,
        ArrayArgumentSeparator= 9,//\
        ArrayGroupSeparator= 10, //;

        Range= 11, //A1=B2
        Boolean= 12,
        Number= 13,
        String= 14,
        Whitespace= 15,
        Error= 16,
        Literal= 17
    };
    class Tokenizer {
        static rNumber = /^(\+|-)?((\d\d*\,?\d*)|(\d*\,?\d\d*))$/;
        static rBoolean = /^(TRUE|FALSE)$/i;
        static rRangeA1 = /^(.*!)?((\$?[a-z]+\$?\d+(\s*:\s*\$?[a-z]+\$?\d+)?)|(\$?[a-z]+\s*:\s*\$?[a-z]+)|(\$?\d+\s*:\s*\$?\d+)|(\$?[a-z]+\$?\d+\s*:\s*\$?\d+)|(\$?\d+\s*:\s*\$?[a-z]+\$?\d+)|(\$?[a-z]+\$?\d+\s*:\s*\$?[a-z]+)|(\$?[a-z]+\s*:\s*\$?[a-z]+\$?\d+))$/i;
        static rRangeR1C1 = /^(.*!)?((R\[?[-+]?\d*\]?C\[?[-+]?\d*\]?\s*(:\s*R\[?[-+]?\d*\]?C\[?[-+]?\d*\]?)?)|(R\[?[-+]?\d*\]?\s*(:\s*R\[?[-+]?\d*\]?)?)|(C\[?[-+]?\d*\]?\s*(:\s*C\[?[-+]?\d*\]?)?)|(R\[?[-+]?\d*\]?C\[?[-+]?\d*\]?\s*(:\s*C\[?[-+]?\d*\]?)?)|(C\[?[-+]?\d*\]?\s*(:\s*R\[?[-+]?\d*\]?C\[?[-+]?\d*\]?))?|(R\[?[-+]?\d*\]?C\[?\[-+]?d*\]?\s*(:\s*R\[?[-+]?\d*\]?))?|(R\[?[-+]?\d*\]?\s*(:\s*R\[?[-+]?\d*\]?C\[?[-+]?\d*\]?))?)$/i;
        static calcErrors = "#DIV/0! #N/A #NAME? #NULL! #NUM! #REF! #VALUE!".split(" ");
        static parse (formula: string): IToken[] {
            var tokens: IToken[] = [], self = this;

            //not formula
            if (formula && formula[0] !== '=') {
                self.addToken(tokens, formula, TokenType.Literal);
                return tokens;
            }

            //
            var fLength: number = (formula && formula.length),
                inBraceRef: number = 0, ch: string, tokenTxt: string = "";

            var arrayArgumentSepatator = (GcSpread.Sheets.CR.listSeparator === GcSpread.Sheets.CR.arrayGroupSeparator) ? '\\' : GcSpread.Sheets.CR.listSeparator;
            var listSeparator = GcSpread.Sheets.CR.listSeparator;
            var arrayGroupSeparator = GcSpread.Sheets.CR.arrayGroupSeparator;

            for (var index = 0; index < fLength; index++) {
                ch = formula[index];
                switch (ch) {
                    case "'":
                        tokenTxt = self.addToken(tokens, tokenTxt);

                        var inQuote = true;
                        do {
                            tokenTxt += ch; //
                            ch = formula[++index];
                            if (ch === "'" && formula[index + 1] === "'") {
                                tokenTxt += ch; //
                                ch = formula[++index];
                            } else {
                                inQuote = (ch !== "'");
                            }
                        } while (inQuote && index < fLength - 1);
                        if (ch !== keyword_undefined) {
                            tokenTxt += ch;
                        }
                        break;

                    case '"':
                        tokenTxt = self.addToken(tokens, tokenTxt);

                        var inQuote = true;
                        do {
                            tokenTxt += ch; //
                            ch = formula[++index];
                            if (ch === '"' && formula[index + 1] === '"') {
                                tokenTxt += ch; //
                                ch = formula[++index];
                            } else {
                                inQuote = (ch !== '"');
                            }
                        } while (inQuote && index < fLength - 1);
                        if (ch !== keyword_undefined) {
                            tokenTxt += ch;
                        }
                        tokenTxt = self.addToken(tokens, tokenTxt, TokenType.String);
                        break;

                    case "\\":
                        self.addToken(tokens, tokenTxt);
                        tokenTxt = self.addToken(tokens, ch, TokenType.ArrayArgumentSeparator);
                        break;

                    case arrayArgumentSepatator:
                        self.addToken(tokens, tokenTxt);
                        tokenTxt = self.addToken(tokens, ch, (inBraceRef > 0 ? TokenType.ArrayArgumentSeparator : TokenType.ArgumentSeparator));
                        break;
                    case listSeparator:
                        self.addToken(tokens, tokenTxt);
                        tokenTxt = self.addToken(tokens, ch, (inBraceRef > 0 ? TokenType.ArrayArgumentSeparator : TokenType.ArgumentSeparator));
                        break;

                    case arrayGroupSeparator:
                        self.addToken(tokens, tokenTxt);
                        tokenTxt = self.addToken(tokens, ch, TokenType.ArrayGroupSeparator);
                        break;

                    case "{":
                        self.addToken(tokens, tokenTxt);
                        tokenTxt = self.addToken(tokens, ch, TokenType.BraceOpen);
                        inBraceRef++;
                        break;

                    case "}":
                        self.addToken(tokens, tokenTxt);
                        tokenTxt = self.addToken(tokens, ch, TokenType.BraceClose);
                        inBraceRef--;
                        break;

                    case "(":
                        self.addToken(tokens, tokenTxt, TokenType.FunctionName);
                        tokenTxt = self.addToken(tokens, ch, TokenType.ParenOpen);
                        break;

                    case ")":
                        self.addToken(tokens, tokenTxt);
                        tokenTxt = self.addToken(tokens, ch, TokenType.ParenClose);
                        break;

                    case "=":
                        self.addToken(tokens, tokenTxt);
                        if (index === 0) {
                            tokenTxt = self.addToken(tokens, ch, TokenType.FormulaStart);
                        } else {
                            tokenTxt = self.addToken(tokens, ch, TokenType.Operator);
                        }
                        break;

                    case "/":
                        var val = tokenTxt.toUpperCase(),
                            nextCh = (index + 1 < fLength ? formula[index + 1] : ""),
                            nextNextCh = (index + 2 < fLength ? formula[index + 2] : "");
                        if ((val === "#DIV" && nextCh === "0" && nextNextCh === "!") || (val === "#N" && nextCh.toUpperCase() === "A")) {
                            tokenTxt += ch + nextCh;
                            index++;
                            if ("#DIV" === tokenTxt) {
                                tokenTxt += nextNextCh;
                                index++;
                            }
                            tokenTxt = self.addToken(tokens, tokenTxt);
                        } else {
                            self.addToken(tokens, tokenTxt);
                            tokenTxt = self.addToken(tokens, ch, TokenType.Operator);
                        }
                        break;

                    case "+":
                    case "-":
                        var nowText = tokenTxt.replace(/\s/g, "").toUpperCase(), findIndex = Math_max(0, nowText.length - 2);
                        if (nowText.lastIndexOf("R[") >= findIndex || nowText.lastIndexOf("C[") >= findIndex) {
                            tokenTxt += ch;
                        } else {
                            self.addToken(tokens, tokenTxt);
                            tokenTxt = self.addToken(tokens, ch, TokenType.Operator);
                        }
                        break;

                    case "&":
                    case "^":
                    case "*":
                    case "%":
                        self.addToken(tokens, tokenTxt);
                        tokenTxt = self.addToken(tokens, ch, TokenType.Operator);
                        break;

                    case "<":
                    case ">":
                        tokenTxt = self.addToken(tokens, tokenTxt);
                        tokenTxt += ch;
                        var nextCh = (index + 1 < fLength ? formula[index + 1] : "");
                        if (nextCh === "=" || (ch === "<" && nextCh === ">")) {
                            tokenTxt += nextCh;
                            index++;
                        }
                        tokenTxt = self.addToken(tokens, tokenTxt, TokenType.Operator);
                        break;

                    case " ":
                    case "\u00a0":
                    case "\r":
                    case "\n":
                    case "\t":
                        tokenTxt = self.addToken(tokens, tokenTxt); //should process A1 : B2 
                        tokenTxt += ch;
                        while (index < fLength - 1 && /^[\s]*$/.test(formula[index + 1])) {
                            tokenTxt += formula[++index];
                        }
                        tokenTxt = self.addToken(tokens, tokenTxt, TokenType.Whitespace);
                        break;

                    default:
                        tokenTxt += ch;
                        break;
                }
            }
            self.addToken(tokens, tokenTxt);
            return tokens;
        }

        static addToken (tokens: IToken[], tokenText: string, tokenType?: number): string {
            var self = this;
            if (tokenText) {
                if (typeof (tokenType) === 'undefined') {
                    if (self.calcErrors.indexOf(tokenText.toUpperCase()) > -1) {
                        tokenType = TokenType.Error;
                    } else if (self.rNumber.test(tokenText)) {
                        tokenType = TokenType.Number;
                    } else if (self.rBoolean.test(tokenText)) {
                        tokenType = TokenType.Boolean;
                    } else if (self.rRangeA1.test(tokenText) || self.rRangeR1C1.test(tokenText)) {
                        tokenType = TokenType.Range;
                    } else {
                        tokenType = TokenType.Literal;
                    }
                }

                //Process range separated by whitespace such as "A1 : A2", "A1: A2", "A1 :A2", "1 : 2" etc
                var isJoinType = function (t) {
                    return (t === TokenType.Range || t === TokenType.Literal || t === TokenType.Number);
                }
                if (isJoinType(tokenType)) {
                    var tokenCount = tokens.length,
                        tk: IToken, tkType: number, tkText: string,
                        index: number, joinText = "";
                    for (index = tokenCount - 1; index >= 0; index--) {
                        tk = tokens[index];
                        tkType = tk.type;
                        tkText = tk.text;

                        joinText = tkText + joinText;
                        if (tkType !== TokenType.Whitespace && tkText !== ":") { //Skip Whitespace and  ":"
                            break;
                        }
                    }

                    var rangeText;
                    if (isJoinType(tkType)) {
                        joinText += tokenText;
                        rangeText = joinText[joinText.length - 1] === ":" ? joinText.substr(0, joinText.length - 1) : joinText;
                        rangeText = rangeText.trim();
                        if (self.rRangeA1.test(rangeText) || self.rRangeR1C1.test(rangeText)) {
                            tokens.splice(index);
                            tokenText = joinText;
                            tokenType = TokenType.Range;
                        }
                    } else if (tokenText[tokenText.length - 1] === ":") { //Now: A1: or A1 : also conside range
                        rangeText = tokenText.substr(0, tokenText.length - 1);
                        if (self.rRangeA1.test(rangeText) || self.rRangeR1C1.test(rangeText)) {
                            tokenType = TokenType.Range;
                        }
                    }
                }
                //~

                tokens.push(<IToken>{ text: tokenText, type: tokenType });
            }

            return "";
        }
    };
    //#endregion


    export class FormulatextboxAcrossSheet implements IFormulatextboxAcrossSheet {
        rowIndex: number;
        columnIndex: number;
        text: string;
        dom: any;
        caret: number;
        isAppending: boolean;
        appendingIndex: number;
        sheet: ISheet;
        spread: ISpread;
        canvasOffset: any;

        constructor() {
            var self = this;
            self.rowIndex = -1;
            self.columnIndex = -1;
            self.text = "";
            self.caret = -1;
            self.sheet = null;
            self.isAppending = false;
            self.appendingIndex = -1;
            self.dom = null;
            self.spread = null;
            self.canvasOffset = null;
        }

        clear(): void {
            var self = this;
            self.removeDom();
            self.rowIndex = -1;
            self.columnIndex = -1;
            self.text = "";
            self.caret = -1;
            self.isAppending = false;
            self.appendingIndex = -1;
            self.sheet = null;
            self.spread = null;
            self.canvasOffset = null;
        }

        removeDom(): void {
            var self = this;
            var cellType = self.sheet.getCellType(self.rowIndex, self.columnIndex);
            var context = {
                sheet: self.sheet,
                row: self.rowIndex,
                col: self.columnIndex,
                sheetArea: SheetArea.viewport
            };
            cellType.deactivateEditor(self.dom, context);
            $(self.dom).remove();
            self.dom = null;
        }

        save(sheet: ISheet): void {
            var self = this;
            if (sheet._formulaTextBox) {
                self.text = sheet._formulaTextBox.text();
                self.rowIndex = sheet.getActiveRowIndex();
                self.columnIndex = sheet.getActiveColumnIndex();
                self.caret = sheet._formulaTextBox.caret();
                self.isAppending = sheet._formulaTextBox.isAppending();
                self.appendingIndex = sheet._formulaTextBox.appendingStartIndex();
                self.sheet = sheet;
                self.spread = sheet.parent;
                self.canvasOffset = sheet._eventHandler._getCanvasPosition();
            }
        }

        update(sheet: ISheet): void {
            var self = this;
            if (sheet._formulaTextBox) {
                self.text = sheet._formulaTextBox.text();
                self.caret = sheet._formulaTextBox.caret();
                self.isAppending = sheet._formulaTextBox.isAppending();
                self.appendingIndex = sheet._formulaTextBox.appendingStartIndex();
            }
        }

        exportInfo(sheet: ISheet): void {
            var self = this;
            if (sheet._formulaTextBox) {
                sheet._formulaTextBox.text(self.text);
                sheet._formulaTextBox.caret(self.caret);
                if (self.isAppending) {
                    sheet._formulaTextBox.startAppending();
                    sheet._formulaTextBox.appendingStartIndex(self.appendingIndex);
                }
            }
        }


        handleFormulatextboxBeforeChange(oldSheet: ISheet, newSheet: ISheet): void {
            var self = this;

            if (oldSheet._formulaTextBox) {
                oldSheet._formulaTextBox.close();
            }
            // formula sheet to other sheet
            if (!self.text && (!self.sheet) && oldSheet._formulaTextBox && oldSheet._formulaTextBox.canAppendRange()) {
                self.save(oldSheet);

                var cacheValue = oldSheet.getValue(oldSheet._activeRowIndex, oldSheet._activeColIndex, SheetArea.viewport);
                oldSheet.suspendEvent();
                try {
                    if (!oldSheet.endEdit(true)) {
                        return;
                    }
                } finally {
                    oldSheet.resumeEvent();
                }
                oldSheet.setValue(oldSheet._activeRowIndex, oldSheet._activeColIndex, cacheValue, SheetArea.viewport, true);
                oldSheet._editorStatus = EditorStatus.Enter;
                return;
            }
            // other sheet to formula sheet
            if (self.text && self.sheet === newSheet && oldSheet._formulaTextBox) {
                self.update(oldSheet);
                //formulaInfo.text = oldActiveSheet._formulaTextBox.text();
                oldSheet._formulaTextBox.destroy();
                oldSheet._formulaTextBox = keyword_null;
                return;
            }

            // other sheet to other sheet
            if (self.text && self.sheet !== newSheet && oldSheet._formulaTextBox) {
                self.update(oldSheet);
                oldSheet._formulaTextBox.destroy();
                oldSheet._formulaTextBox = keyword_null;
            }

        }

        handleFormulatextboxAfterChange(oldSheet: ISheet, newSheet: ISheet, saveValue = true): void {
            var self = this;
            if (self.dom && self.text === "") {
                oldSheet._loadAndSetSheetSelections();
                self.clear();
            }
            // other sheet to formula sheet
            if (self.text && self.sheet === newSheet) {
                newSheet._editorStatus = EditorStatus.Ready;
                newSheet._setActiveCellAndSelection(self.rowIndex, self.columnIndex, keyword_undefined, keyword_undefined, FocusPolicy.Always);
                if (saveValue) {
                    newSheet.suspendEvent();
                    newSheet.startEdit(false);
                    self.exportInfo(newSheet);
                    self.updateEditor(newSheet, self.rowIndex, self.columnIndex);
                    newSheet.resumeEvent();
                    oldSheet._loadAndSetSheetSelections(); // resume selections
                }

                self.clear();

                return;
            }
            // formula sheet to other sheet
            if (self.text && !self.dom) {
                newSheet._editorStatus = EditorStatus.Enter;
                oldSheet._editorStatus = EditorStatus.Enter;
                self.createHiddenDomForFormulaAcrossSheet(newSheet);
                newSheet._saveAndClearSheetSelections(); // clear selections
                return;
            }

            // from other sheet to other sheet
            if (self.text && self.sheet !== newSheet) {
                newSheet._editorStatus = EditorStatus.Enter;
                oldSheet._editorStatus = EditorStatus.Enter;
                self.createHiddenDomForFormulaAcrossSheet(newSheet);
                oldSheet._loadAndSetSheetSelections(); // resume selections
                newSheet._saveAndClearSheetSelections();// clear selections
                return;
            }
        }

        private createHiddenDomForFormulaAcrossSheet(newSheet: ISheet): void {
            var self = this;

            var sheet = self.sheet;
            var row = self.rowIndex;
            var col = self.columnIndex;
            var cellType = sheet.getCellType(row, col);
            var context = {
                sheet: sheet,
                row: row,
                col: col,
                sheetArea: SheetArea.viewport,
                canvasOffset: this.canvasOffset
            };
            var isImeAware = cellType.isImeAware(context);
            var focusHolder;
            //cell type is null
            if (isImeAware) {
                newSheet._editorStatus = EditorStatus.Enter;
                focusHolder = cellType.createEditorElement(context);
                //activeSheet._editor = focusHolder;
                if (self.dom) {
                    self.removeDom();
                }
                self.dom = focusHolder;
                $(focusHolder).css("position", "absolute");

                var rect = sheet.getCellRect(row, col);
                $(focusHolder).attr("id", "across");
                var style = sheet.getActualStyle(row, col);
                cellType.activateEditor(focusHolder, style, rect, context);
                var parentElement = self.spread && self.spread.getHost() || document.body;
                parentElement.insertBefore(focusHolder, keyword_null);

                var editingElement = cellType.getEditingElement();
                newSheet._attachFormulaTextBox(editingElement);
                cellType.focus(focusHolder);
                self.exportInfo(newSheet);
                cellType.updateEditor(focusHolder, style, rect, context);
            }
        }

        private updateEditor(sheet: ISheet, activeRow: number, activeCol: number): void {
            var ct = sheet.getCellType(activeRow, activeCol),
                editor = sheet._editor,
                sheetLayout = sheet._getSheetLayout(),
                cellStyle = sheet.getActualStyle(activeRow, activeCol),
                cellRect = sheet.getCellRect(activeRow, activeCol);
            if (cellRect && cellRect.width > 0 && cellRect.height > 0
                && cellRect.x >= sheetLayout.frozenX
                && cellRect.y >= sheetLayout.frozenY
                && cellRect.x + cellRect.width <= sheetLayout.frozenTrailingX + sheetLayout.frozenTrailingWidth
                && cellRect.y + cellRect.height <= sheetLayout.frozenTrailingY + sheetLayout.frozenTrailingHeight) {
                var context = {
                    sheet: sheet,
                    row: activeRow,
                    col: activeCol,
                    sheetArea: SheetArea.viewport
                };
                ct.updateEditor(editor, cellStyle, cellRect, context);
            }
        }
    }

    export class FormulatextboxAcrossSheetSingleton extends IFormulatextboxAcrossSheetSingleton {

        static handleFormulatextboxAcrossSheetBeforeTabChange(e, eData): void {
            var oldSheet = eData.oldSheet;
            var newSheet = eData.newSheet;
            if (oldSheet === newSheet) {
                return;
            }

            if (!IFormulatextboxAcrossSheetSingleton.formulatextboxAcrossSheetInstance) {
                IFormulatextboxAcrossSheetSingleton.formulatextboxAcrossSheetInstance = new FormulatextboxAcrossSheet();
            }

            IFormulatextboxAcrossSheetSingleton.formulatextboxAcrossSheetInstance.handleFormulatextboxBeforeChange(oldSheet, newSheet);

        }

        static handleFormulatextboxAcrossSheetAfterTabChange(e, eData): void {
            var oldSheet = eData.oldSheet;
            var newSheet = eData.newSheet;
            if (oldSheet === newSheet) {
                return;
            }
            IFormulatextboxAcrossSheetSingleton.formulatextboxAcrossSheetInstance.handleFormulatextboxAfterChange(oldSheet, newSheet);
        }
    }
}