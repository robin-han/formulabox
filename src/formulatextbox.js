var wijmo;
(function (wijmo) {
    ///<reference path="feature.ts" />
    ///<reference path="common.ts" />
    (function (_spread) {
        _spread.feature("formulatextbox", ["core.common"]);

        //#region FormulaTextBox
        var keyword_null = null, keyword_undefined = undefined, Math_max = Math.max, Math_min = Math.min;
        var ns_formulatextbox_internal = ".gcFormulaTextBoxInternal", ns_formulatextbox = ".gcFormulaTextBox", EVENT_TEXTCHANGED = "TextChanged", EVENT_CARETCHANGED = "CaretChanged", EVENT_APPENDSTARTED = "AppendStarted", EVENT_APPENDENDED = "AppendEnded";

        var Keys = { left: 37, right: 39, up: 38, down: 40, tab: 9, enter: 13, pup: 33, pdn: 34, end: 35, home: 36, esc: 27 };

        var FormulaTextBox = (function () {
            //#endregion
            //#region Constructor
            /**
            * Represents a formula textbox.
            * @class
            * @param {Object} host The DOM element, it can be INPUT, TEXTAREA or editable DIV.
            */
            function FormulaTextBox(host) {
                this._init();

                if (host) {
                    this._attachHost(host);
                }
            }
            //#endregion
            //#region Public Methods
            /**
            *Remove host from formula textbox and remove all bind events.
            */
            FormulaTextBox.prototype.destroy = function () {
                var self = this;
                self._isAppending = false;
                self._appendingStart = -1;

                self._detachHost();
                self._detachSpread();

                $(self._getFuncsPopup()).remove();
                $(self._getFuncHelpPopup()).remove();
            };

            /**
            * Binds an event.
            * @param {string} type The event type.
            * @param {Object} data Optional. Specifies additional data to pass along to the function.
            * @param {Function} fn Specifies the function to run when the event occurs.
            */
            FormulaTextBox.prototype.bind = function (type, data, fn) {
                var host = this._host;
                if (host && type) {
                    type = type.split(/\s+/).join(ns_formulatextbox + " ");
                    $(host).bind(type + ns_formulatextbox, data, fn);
                }
            };

            /**
            * Removes the binding of an event.
            * @param {string} type The event type.
            * @param {Function} fn Specifies the function for which to remove the binding.
            */
            FormulaTextBox.prototype.unbind = function (type, fn) {
                var host = this._host;
                if (host && type) {
                    type = type.split(/\s+/).join(ns_formulatextbox + " ");
                    $(host).unbind(type + ns_formulatextbox, fn);
                }
            };

            /**
            * Removes the binding of all events.
            */
            FormulaTextBox.prototype.unbindAll = function () {
                var host = this._host;
                if (host) {
                    $(host).unbind(ns_formulatextbox);
                }
            };

            /**
            * Gets or sets the caret position.
            * @param {number} value The caret position.
            */
            FormulaTextBox.prototype.caret = function (value) {
                var self = this, host = self._host;
                if (!host) {
                    return;
                }

                //Check focus element Reason: when set caret, host will get focus, this is browser's behavior,
                // but it is not our expected.
                var focusElement = document.activeElement, hostFocused = (document.activeElement === host);

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
            };
            FormulaTextBox.prototype._getCaret = function (element) {
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
                return { start: start, end: end };
            };
            FormulaTextBox.prototype._setCaret = function (element, pos) {
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
            };

            /**
            * Gets or sets the text.
            * @param {string} value The text.
            */
            FormulaTextBox.prototype.text = function (value) {
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
                if (value === null || typeof (value) === 'undefined') {
                    value = "";
                }
                if (value !== self.text()) {
                    self._tokens = Tokenizer.parse(value);
                    if (input) {
                        host.value = value;
                    } else if (editable) {
                        self._colorText(self._tokens);
                    }
                    self._trigger(EVENT_TEXTCHANGED, {});
                }
            };

            /**
            * Gets or sets whether auto complete.
            * @param {boolean} value Set to <c>true</c> will do auto complete when editing.
            */
            FormulaTextBox.prototype.autoComplete = function (value) {
                //get
                if (arguments.length === 0) {
                    return this._autoComplete;
                }

                //set
                this._autoComplete = value;
            };

            /**
            * Gets or sets whether to show function help tip.
            * @param {boolean} value Set to <c>true</c> will show function help tip when editing.
            */
            FormulaTextBox.prototype.showHelp = function (value) {
                //get
                if (arguments.length === 0) {
                    return this._showHelp;
                }

                //set
                this._showHelp = value;
            };

            /**
            * Adds a custom function description.
            * @param {Object} fnd The function description to add, it can also an array.
            * @remarks fnd is object to descripe the function
            * fnd.name: string type, the function name.
            * fnd.shortDescription: string type, the short desription of the function.
            * fnd.description: string type, the description of the function.
            * fnd.parameters: array type, the description of the function paramters.
            * fnd.parameters[i].name: string type, the paramter name.
            * fnd.parameters[i].description: string type, the paramter description.
            * fnd.parameters[i].repeatable: boolean type, the paramter is repeatable.
            * fnd.parameters[i].optional: boolean type, the paramter is optional.
            */
            FormulaTextBox.prototype.add = function (fnd) {
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
            };
            FormulaTextBox.prototype._add = function (func) {
                var addName = (func && func.name && func.name.toUpperCase());
                if (!addName) {
                    return;
                }

                var funcs = this._funcs, count = funcs.length, index, fName;
                for (index = 0; index < count; index++) {
                    fName = funcs[index].name.toUpperCase();

                    if (fName === addName) {
                        return;
                    } else if (fName > addName) {
                        break;
                    }
                }
                funcs.splice(index, 0, func);
            };

            /**
            * Removes a custom function description.
            * @param {string} name The custom function description name.
            */
            FormulaTextBox.prototype.remove = function (name) {
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
            };

            /**
            * Gets or sets spread to work with formula textbox.
            * @param {Object} value The spread.
            */
            FormulaTextBox.prototype.spread = function (value) {
                //get
                if (arguments.length === 0) {
                    return this._spread;
                }

                //set
                this._attachSpread(value);
            };

            //#endregion
            //#region Append, Replace
            FormulaTextBox.prototype.getRanges = function () {
                var ranges = [];

                var tokens = this._tokens, tokenCount = (tokens && tokens.length), token, tokenText, tmpLength = 0, index = 0;
                if (tokenCount > 0) {
                    for (var i = 0; i < tokenCount; i++) {
                        token = tokens[i];
                        tokenText = token.text;

                        if (token.type === TokenType.Range) {
                            ranges.push({ textOffset: tmpLength, text: tokenText, index: index++ });
                        }
                        tmpLength += tokenText.length;
                    }
                }
                return ranges;
            };

            FormulaTextBox.prototype.getActiveRange = function () {
                var host = this._host, ranges = this.getRanges();
                if (host && ranges && ranges.length > 0) {
                    var caretPosition = this.caret(), count = ranges.length, range, textOffset;
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
            };

            FormulaTextBox.prototype.isActiveRange = function (paramRange) {
                if (!paramRange) {
                    return false;
                }

                var caretPosition = this.caret();
                var rangeString = paramRange.text, rangeStringOffset = paramRange.textOffset;
                if (rangeStringOffset < caretPosition && caretPosition <= rangeStringOffset + rangeString.length) {
                    return true;
                }
                return false;
            };

            FormulaTextBox.prototype.getRangeColor = function (index) {
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
            };

            FormulaTextBox.prototype.canAppendRange = function () {
                if (this._isAppending) {
                    return true;
                }

                var activeToken = this._getToken(this.caret());
                if (activeToken) {
                    var tokenType = activeToken.type, tokenText = activeToken.text;
                    return (tokenType === TokenType.FormulaStart || tokenType === TokenType.ArgumentSeparator || (tokenType === TokenType.Operator && tokenText !== "%") || tokenType === TokenType.ParenOpen || tokenType === TokenType.ArrayArgumentSeparator || tokenType === TokenType.Whitespace);
                }
                return false;
            };

            FormulaTextBox.prototype.isAppending = function () {
                return this._isAppending;
            };

            FormulaTextBox.prototype.isAppendingRange = function (paramRange) {
                if (!paramRange || !this._isAppending) {
                    return false;
                }

                var appendingStart = this._appendingStart, appendingEnd = this.caret(), rangeStringOffset = paramRange.textOffset;
                if (appendingStart <= rangeStringOffset && rangeStringOffset < appendingEnd) {
                    return true;
                }
                return false;
            };

            FormulaTextBox.prototype.getAppendingRanges = function () {
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
            };

            FormulaTextBox.prototype.appendRange = function (rangeString, replacing, clearPrevAppending) {
                var self = this, host = self._host;
                if (!rangeString || !host) {
                    return;
                }

                if (!self._isAppending) {
                    if (!self.canAppendRange()) {
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
                    self._tokens = Tokenizer.parse(text);

                    caretPosition = appendingStart;
                    caretNewPosition = caretPosition;
                }

                var activeToken = self._getToken(caretPosition);
                if (replacing) {
                    var prevText = text.substr(0, caretPosition);

                    prevText = prevText.substr(0, prevText.length - activeToken.text.length);
                    if (prevText.length >= appendingStart) {
                        activeToken.text = rangeString;

                        caretNewPosition = prevText.length + rangeString.length;
                    }
                } else {
                    var tokens = self._tokens, activeTokenIndex = tokens.indexOf(activeToken);
                    if (caretPosition > appendingStart) {
                        tokens.splice(activeTokenIndex + 1, 0, { text: ',', type: TokenType.ArgumentSeparator });
                        tokens.splice(activeTokenIndex + 2, 0, { text: rangeString, type: TokenType.Range });
                        rangeString = "," + rangeString;
                    } else {
                        tokens.splice(activeTokenIndex + 1, 0, { text: rangeString, type: TokenType.Range });
                    }

                    caretNewPosition = caretPosition + rangeString.length;
                }

                //
                self._updateHostValue();
                self._trigger(EVENT_TEXTCHANGED, {});
                self.caret(caretNewPosition);
            };

            FormulaTextBox.prototype.stopAppending = function () {
                var self = this;
                if (self._isAppending) {
                    self._isAppending = false;
                    self._appendingStart = -1;

                    self._trigger(EVENT_APPENDENDED, {});
                }
            };

            FormulaTextBox.prototype.repalceRange = function (rangeIndex, rangeString) {
                var self = this, host = self._host;
                if (!host || rangeIndex < 0 || !rangeString) {
                    return;
                }

                //
                var replaced = false, tmpText = "";

                var tokens = self._tokens, tokenCount = (tokens && tokens.length), token, index = 0;
                for (var i = 0; i < tokenCount; i++) {
                    token = tokens[i];
                    if (token.type === TokenType.Range) {
                        if (index++ === rangeIndex) {
                            tokens[i] = { text: rangeString, type: TokenType.Range };
                            replaced = true;
                            break;
                        }
                    }
                    tmpText += token.text;
                }

                if (replaced) {
                    self._updateHostValue();
                    self._trigger(EVENT_TEXTCHANGED, {});
                    self.caret(tmpText.length + rangeString.length);
                }
            };

            FormulaTextBox.prototype._attachSpread = function (spread) {
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

                    var Events = wijmo.spread.Events;
                    host.setAttribute("gcUIElement", "gcAttachedFormulaTextBox");
                    spread._attachedFormulaTextBox = self;
                    spread.bind(Events.EditStarted, self, self._onSpreadEditStarted);
                    spread.bind(Events.EnterCell, self, self._onSpreadEnterCell);
                    spread.bind(Events.EditEnded, self, self._onSpreadEditEnded);
                    spread.bind(Events.ActiveSheetChanged, self, self._onSpreadActiveSheetChanged);
                    spread.bind(Events.RangeChanged, self, self._onSpreadRangeChanged);
                    spread.bind("FormulaTextBoxTextChanged", self, self._onSpreadFormulaTextBoxTextChanged);
                    spread.bind("FormulaTextBoxCaretChanged", self, self._onSpreadFormulaTextBoxCaretChanged);

                    var sheet = spread.getActiveSheet();
                    if (sheet) {
                        self.text(self._getEditText(sheet, sheet._activeRowIndex, sheet._activeColIndex));
                    }
                    self._bind(EVENT_TEXTCHANGED, self, self._onFormulaTextBoxTextChanged);
                    self._bind(EVENT_CARETCHANGED, self, self._onFormulaTextBoxCaretChanged);
                }
            };

            FormulaTextBox.prototype._detachSpread = function () {
                var self = this, spread = self._spread;
                if (spread) {
                    var Events = wijmo.spread.Events;
                    spread._attachedFormulaTextBox = null;
                    spread.unbind(Events.EditStarted, self._onSpreadEditStarted);
                    spread.unbind(Events.EnterCell, self._onSpreadEnterCell);
                    spread.unbind(Events.EditEnded, self, self._onSpreadEditEnded);
                    spread.unbind(Events.ActiveSheetChanged, self, self._onSpreadActiveSheetChanged);
                    spread.unbind(Events.RangeChanged, self, self._onSpreadRangeChanged);
                    spread.unbind("FormulaTextBoxTextChanged", self._onSpreadFormulaTextBoxTextChanged);
                    spread.unbind("FormulaTextBoxCaretChanged", self._onSpreadFormulaTextBoxCaretChanged);

                    self._unbind(EVENT_TEXTCHANGED, self._onFormulaTextBoxTextChanged);
                    self._unbind(EVENT_CARETCHANGED, self._onFormulaTextBoxCaretChanged);
                    self.text("");
                }
                self._spread = null;
            };

            FormulaTextBox.prototype._startingSpreadEdit = function () {
                var self = this;

                if (self._isWorking) {
                    return;
                }
                self._isWorking = true;

                var spread = this._spread;
                var sheet = (spread && spread.getActiveSheet());
                if (sheet && !sheet.isEditing()) {
                    sheet._startEditImp(null, sheet._activeRowIndex, sheet._activeColIndex, null, null, false, null);
                    self._spreadEditStarting = true;
                } else {
                    self._spreadEditStarting = false;
                }

                self._isWorking = false;
            };
            FormulaTextBox.prototype._startSpreadEdit = function () {
                var self = this;

                var spread = self._spread;
                var sheet = (spread && spread.getActiveSheet());
                if (!sheet) {
                    return;
                }

                //process first start spread edit and array formula
                if (self._spreadEditStarting) {
                    var fbx = sheet._formulaTextBox, fbxText = fbx.text(), selfText = self.text();
                    if (selfText !== fbxText) {
                        var caret = self.caret();
                        var formulaInfo = sheet.getFormulaInformation(sheet.getActiveRowIndex(), sheet.getActiveColumnIndex());
                        self.text(fbxText);
                        if (formulaInfo.isArrayFormula) {
                            if (caret >= selfText.length) {
                                caret = caret - 1; // for "}"
                            }
                            caret = Math_max(0, caret - 1);
                        }
                        self.caret(caret);
                    }
                }

                //~
                //changet editor status
                var EditorStatus = wijmo.spread.EditorStatus, oldStatus = sheet._editorStatus;
                if (oldStatus !== 2 /* Edit */) {
                    sheet._editorStatus = 2 /* Edit */;
                    sheet._trigger("EditorStatusChanged", {
                        sheet: sheet,
                        sheetName: sheet._name,
                        oldStatus: oldStatus,
                        newStatus: 2 /* Edit */
                    });
                }
            };

            FormulaTextBox.prototype._getEditText = function (sheet, row, col) {
                var text = "";
                if (sheet) {
                    var formulaInfo = sheet.getFormulaInformation(row, col);
                    if (formulaInfo && formulaInfo.hasFormula) {
                        text = "=" + formulaInfo.formula;
                        if (formulaInfo.isArrayFormula) {
                            text = "{" + text + "}";
                        }
                    } else {
                        text = sheet.getText(row, col);
                        var canUserEditFormula = sheet.parent ? sheet.parent.canUserEditFormula() : true;
                        if (text[0] === "=" && canUserEditFormula) {
                            text = "'" + text;
                        }
                    }
                }
                return text;
            };

            FormulaTextBox.prototype._onSpreadActiveSheetChanged = function (e, eData) {
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
            };

            FormulaTextBox.prototype._onSpreadEditStarted = function (e, eData) {
                var self = e.data;
                if (self._isWorking) {
                    return;
                }

                var spread = self._spread;
                var sheet = (spread && spread.getActiveSheet());
                var fbx = (sheet && sheet._formulaTextBox);
                if (!fbx) {
                    return;
                }

                self._isWorking = true;
                self.text(fbx.text());
                self._isWorking = false;
            };

            FormulaTextBox.prototype._onSpreadEnterCell = function (e, eData) {
                var self = e.data;
                if (self._isWorking) {
                    return;
                }

                self._isWorking = true;
                if (eData) {
                    self.text(self._getEditText(eData.sheet, eData.row, eData.col));
                }
                self._isWorking = false;
            };

            FormulaTextBox.prototype._onSpreadRangeChanged = function (e, eData) {
                var self = e.data;
                if (self._isWorking) {
                    return;
                }

                self._isWorking = true;
                if (eData) {
                    var sheet = eData.sheet, row = eData.row, col = eData.column, rowCount = eData.rowCount, colCount = eData.columnCount;
                    if (new wijmo.spread.Range(row, col, rowCount, colCount).contains(sheet._activeRowIndex, sheet._activeColIndex)) {
                        self.text(self._getEditText(sheet, row, col));
                    }
                }
                self._isWorking = false;
            };

            FormulaTextBox.prototype._onSpreadEditEnded = function (e, eData) {
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
            };

            FormulaTextBox.prototype._onSpreadFormulaTextBoxTextChanged = function (e, eData) {
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
            };

            FormulaTextBox.prototype._onSpreadFormulaTextBoxCaretChanged = function (e, eData) {
                var self = e.data;
                if (self._isWorking) {
                    return;
                }

                self._isWorking = true;
                if (eData) {
                    self.caret(eData.caret);
                }
                self._isWorking = false;
            };

            FormulaTextBox.prototype._onFormulaTextBoxTextChanged = function (e) {
                var self = e.data;

                if (self._isWorking) {
                    return;
                }
                var spread = self._spread, sheet = (spread && spread.getActiveSheet());
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
            };

            FormulaTextBox.prototype._onFormulaTextBoxCaretChanged = function (e) {
                var self = e.data;
                if (self._isWorking) {
                    return;
                }

                var spread = self._spread, sheet = (spread && spread.getActiveSheet());
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
            };

            //#endregion
            //#region Private Methods
            FormulaTextBox.prototype._init = function () {
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

                self._isFuncsShown = false;
                self._isFuncHelpShown = false;
            };

            FormulaTextBox.prototype._attachHost = function (host) {
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
                self._tokens = Tokenizer.parse(self.text());

                //Color text
                var editableHost = self._isEditableElement(host);
                if (editableHost) {
                    self._colorText(self._tokens);
                }

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
                    if (editableHost || lessIE10) {
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
                self._bind("keydown", function (e) {
                    var ctrlKey = e.ctrlKey, shiftKey = e.shiftKey, altKey = e.altKey, metaKey = e.metaKey, modifyKey = ctrlKey || shiftKey || altKey || metaKey, keyCode = e.keyCode;

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
                self._bind("keyup", function (e) {
                    if (self._isInputKey && $.browser && $.browser.qtMode) {
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
                self._bind("focus", function (e) {
                    self._checkCaret(e);
                });

                ///>>> Blur
                self._bind("blur", function (e) {
                    if (self._autoClose) {
                        self.close();
                    }
                });

                ///>>> MouseDown
                self._bind("mousedown", function (e) {
                    self._startingSpreadEdit();
                });

                ///>>> MouseUp
                self._bind("mouseup", function (e) {
                    self._startSpreadEdit();
                });

                //>>> Click
                self._bind("click", function (e) {
                    if (self._isAppending) {
                        self.stopAppending();
                    }
                    var spread = self._spread, sheet = (spread && spread.getActiveSheet());
                    var fbx = (sheet && sheet._formulaTextBox);
                    if (fbx && fbx.isAppending()) {
                        fbx.stopAppending();
                    }

                    self._checkCaret(e);
                });

                ///>>> compositionstart, compositionupdate, compositionend
                self._bind("compositionstart", function (e) {
                    self._isImeInputting = true;
                });
                self._bind("compositionend", function (e) {
                    self._isImeInputting = false;
                });
            };

            FormulaTextBox.prototype._detachHost = function () {
                var self = this, host = self._host;
                if (host) {
                    var $host = $(host);
                    $host.removeData("text-before");
                    $host.removeData("caret-before");

                    self._unbindAll();
                    self.unbindAll();
                    self._host = keyword_null;
                }
            };

            FormulaTextBox.prototype._checkInput = function () {
                var self = this, $host = $(self._host), text = self.text();
                if ($host.data("text-before") !== text) {
                    $host.data("text-before", text);
                    self._onInput();
                }
            };

            FormulaTextBox.prototype._checkCaret = function (e) {
                var self = this;

                var keyCode = e.keyCode;
                var navKey = (keyCode === Keys.left || keyCode === Keys.right || keyCode === Keys.home || keyCode === Keys.end || keyCode === Keys.pdn || keyCode === Keys.pup || keyCode === Keys.tab || keyCode === Keys.enter);

                if (!self._autoComplete) {
                    navKey = (navKey || keyCode === Keys.up || keyCode === Keys.down); //reserved autocomplete
                }

                var mouseClick = (typeof (e.button) !== 'undefined');

                if (navKey || mouseClick) {
                    var host = self._host, $host = $(host), caretPosition = self._getCaret(host);

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
            };

            FormulaTextBox.prototype._onInput = function () {
                var self = this, host = self._host, $host = $(host);

                self._isInputKey = true;

                self._tokens = Tokenizer.parse(self.text());

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
            };

            FormulaTextBox.prototype._updateHostValue = function () {
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
            };

            FormulaTextBox.prototype._isInputElement = function (element) {
                var tagName = (element && element.tagName);
                return (tagName === "TEXTAREA" || tagName === "INPUT");
            };

            FormulaTextBox.prototype._isEditableElement = function (element) {
                return (element && element.tagName === "DIV" && element.contentEditable === "true");
            };

            FormulaTextBox.prototype._isFormula = function (text) {
                if (text && text[0] === '=') {
                    return true;
                }
                return false;
            };

            FormulaTextBox.prototype._bind = function (type, data, fn) {
                var host = this._host;
                if (host && type) {
                    type = type.split(/\s+/).join(ns_formulatextbox_internal + " ");
                    $(host).bind(type + ns_formulatextbox_internal, data, fn);
                }
            };

            FormulaTextBox.prototype._unbind = function (type, fn) {
                var host = this._host;
                if (host && type) {
                    type = type.split(/\s+/).join(ns_formulatextbox_internal + " ");
                    $(host).unbind(type + ns_formulatextbox_internal, fn);
                }
            };

            FormulaTextBox.prototype._unbindAll = function () {
                var host = this._host;
                if (host) {
                    $(host).unbind(ns_formulatextbox_internal);
                }
            };

            FormulaTextBox.prototype._trigger = function (type, data) {
                var host = this._host;
                if (host) {
                    $(host).trigger(type, data);
                }
            };

            FormulaTextBox.prototype._getToken = function (caretPosition) {
                if (caretPosition <= 0) {
                    return keyword_null;
                }

                var tokens = this._tokens, tokenCount = (tokens && tokens.length);
                if (tokenCount > 0) {
                    var textIndex = 0, token;
                    for (var i = 0; i < tokenCount; i++) {
                        token = tokens[i];

                        textIndex += token.text.length;
                        if (textIndex >= caretPosition) {
                            return token;
                        }
                    }
                }
                return keyword_null;
            };

            FormulaTextBox.prototype._getFuncs = function () {
                var spread = this._spread;
                var sheet = (spread && spread.getActiveSheet());
                var fbx = (sheet && sheet._formulaTextBox);
                if (fbx) {
                    return fbx._funcs;
                } else {
                    return this._funcs;
                }
            };

            FormulaTextBox.prototype._getFuncsStartWith = function (startName) {
                startName = startName.toUpperCase();

                //now funcs is sorted
                var results = [];
                var funcs = this._getFuncs(), count = (funcs && funcs.length), find = false, f;
                for (var i = 0; i < count; i++) {
                    f = funcs[i];
                    if (f.name.toUpperCase().indexOf(startName) === 0) {
                        results.push(f);
                        find = true;
                    } else if (find) {
                        break;
                    }
                }
                return results;
            };

            FormulaTextBox.prototype._getActiveFuncInfo = function () {
                var caretPosition = this.caret(), tokens = this._tokens, tokenCount = (tokens && tokens.length);

                var tmpTokens = [], textIndex = 0, token;
                for (var i = 0; i < tokenCount; i++) {
                    token = tokens[i];

                    tmpTokens.push(token);
                    if (token.type === TokenType.ParenClose) {
                        while (tmpTokens.length > 0) {
                            if (tmpTokens.pop().type === TokenType.FunctionName) {
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
                                return { func: func, activeParamterIndex: activeParamterIndex };
                            }
                        }
                    }
                }

                return keyword_null;
            };

            //#endregion
            //#region Auto Complete
            FormulaTextBox.prototype._getFuncsPopup = function (create) {
                var funcsPopup = $(document.body).children(".gcsj-func-ac-popup").get(0);
                if (create && !funcsPopup) {
                    funcsPopup = document.createElement("div");
                    funcsPopup.className = "gcsj-func-ac-popup";
                    funcsPopup.style.display = "none";
                    funcsPopup.setAttribute("gcUIElement", "gcFuncACPopup"); // for spreadjs not to process mousedown
                    document.body.insertBefore(funcsPopup, keyword_null);

                    var self = this;
                    $(funcsPopup).mouseenter(function () {
                        self._autoClose = false;
                    }).mouseleave(function () {
                        self._autoClose = true;
                    });
                }
                return funcsPopup;
            };
            FormulaTextBox.prototype._openFuncs = function () {
                var self = this;
                var token = self._getToken(self.caret()), tokenText = (token && token.text), funcs;
                if (tokenText && /[a-z_$]/i.test(tokenText[0])) {
                    funcs = self._getFuncsStartWith(tokenText);
                }

                var show = (self._autoComplete && self._isFormula(self.text()) && funcs && funcs.length > 0 && !self._isAppending && !self._isImeInputting);
                if (show) {
                    self._closeFuncHelp();

                    var popupContent = "";
                    var count = funcs.length, func;
                    for (var i = 0; i < count; i++) {
                        func = funcs[i];
                        popupContent += "<div class='gcsj-func-ac-row'>" + "<div class='gcsj-func-ac-row-name'>" + func.name.toUpperCase() + "</div>" + "<div class='gcsj-func-ac-row-description'>" + (func.shortDescription || func.description) + "</div>" + "</div>";
                    }
                    $(self._getFuncsPopup(true)).html(popupContent).show();
                    self._isFuncsShown = true;

                    //
                    var $items = $(".gcsj-func-ac-popup .gcsj-func-ac-row");
                    if ($items.length > 0) {
                        var activeClassName = 'gcsj-ac-row-active';
                        $($items[0]).addClass(activeClassName);
                        $items.hover(function () {
                            $items.removeClass(activeClassName);
                            $(this).addClass(activeClassName);
                        });
                        $items.click(function () {
                            self._completeFunc();
                            self._host.focus();
                        });
                    }
                    self.position();
                } else {
                    self._closeFuncs();
                }
            };

            FormulaTextBox.prototype._closeFuncs = function () {
                $(this._getFuncsPopup()).hide();
                this._isFuncsShown = false;
            };

            FormulaTextBox.prototype._selectFunc = function (step) {
                var $items = $(".gcsj-func-ac-popup .gcsj-func-ac-row"), count = $items.length;
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
                $items.removeClass(activeClassName);
                newIndex = Math_max(newIndex, 0);
                newIndex = Math_min(newIndex, count - 1);
                $($items[newIndex]).addClass(activeClassName);
            };

            FormulaTextBox.prototype._completeFunc = function () {
                var funcName = $(".gcsj-func-ac-popup .gcsj-ac-row-active .gcsj-func-ac-row-name").text();
                if (!funcName) {
                    return;
                }

                var self = this, caretPosition = self.caret(), tokens = self._tokens, tokenCount = (tokens && tokens.length);

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
                token.text = funcName;
                token.type = TokenType.FunctionName;

                //check next has paren '('
                var nextTokenIndex = tokenIndex + 1, nextToken = tokens[nextTokenIndex];
                if (!nextToken || nextToken.type !== TokenType.ParenOpen) {
                    tokens.splice(nextTokenIndex, 0, { text: '(', type: TokenType.ParenOpen });
                }

                self._closeFuncs();

                //
                self._updateHostValue();
                self._trigger(EVENT_TEXTCHANGED, {});
                self.caret(tokenTextIndex + funcName.length + 1); // 1 for '('
                self._openFuncHelp();
            };

            //#endregion
            //#region Function Help
            FormulaTextBox.prototype._getFuncHelpPopup = function (create) {
                var funcHelpPopup = $(document.body).children(".gcsj-func-help-popup").get(0);
                if (create && !funcHelpPopup) {
                    funcHelpPopup = document.createElement("div");
                    funcHelpPopup.className = "gcsj-func-help-popup";
                    funcHelpPopup.style.display = "none";
                    funcHelpPopup.setAttribute("gcUIElement", "gcFuncHelpPopup"); // for spreadjs not to process mousedown
                    document.body.insertBefore(funcHelpPopup, keyword_null);

                    var self = this;
                    $(funcHelpPopup).mouseenter(function () {
                        self._autoClose = false;
                    }).mouseleave(function () {
                        self._autoClose = true;
                    });
                }
                return funcHelpPopup;
            };
            FormulaTextBox.prototype._openFuncHelp = function () {
                var self = this;
                if (self._isFuncsShown) {
                    self._closeFuncs();
                }

                var activeFuncInfo = self._getActiveFuncInfo();
                var show = (self._showHelp && self._isFormula(self.text()) && activeFuncInfo && !self._isAppending && !self._isImeInputting);
                if (show) {
                    var func = activeFuncInfo.func;

                    //paramters
                    var paramters = func.parameters, paramterCount = (paramters && paramters.length), activeParamterIndex = Math_min(paramterCount - 1, activeFuncInfo.activeParamterIndex), paramter;
                    var helpParamters = "";
                    for (var i = 0; i < paramterCount; i++) {
                        paramter = paramters[i];

                        var p = paramter.name;
                        if (paramter.repeatable) {
                            p += ",...";
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
                    var helpTitle = "<div class='gcsj-func-help-title'>" + "<div class='gcsj-func-help-formula'>" + "<span class='gcsj-func-help-formula-name'>" + func.name.toUpperCase() + "</span>" + "<span class='gcsj-func-help-paramter-paren'>(</span>" + helpParamters + "<span class='gcsj-func-help-paramter-paren'>)</span>" + "</div>" + "</div>";

                    //body
                    var helpSummary = "<div class='gcsj-func-help-section'>" + "<div class='gcsj-func-help-section-title'>Summary</div>" + "<div class='gcsj-func-help-section-content'>" + func.description + "</div>" + "</div>";
                    var helpContent = "<div class='gcsj-func-help-section-content'>" + helpSummary + "</div>";
                    var helpBody = "<div class='gcsj-func-help-body'>" + helpContent + "</div>";

                    //whole
                    var popupContent = helpTitle + helpBody;

                    //
                    $(self._getFuncHelpPopup(true)).html(popupContent).show();
                    self._isFuncHelpShown = true;
                    self.position();
                } else {
                    self._closeFuncHelp();
                }
            };

            FormulaTextBox.prototype._closeFuncHelp = function () {
                $(this._getFuncHelpPopup()).hide();
                this._isFuncHelpShown = false;
            };

            //#endregion
            FormulaTextBox.prototype.close = function () {
                this._closeFuncs();
                this._closeFuncHelp();
            };

            FormulaTextBox.prototype.isReservedKey = function (e) {
                if (this._isAppending) {
                    return false;
                }

                var modifyKey = e.ctrlKey || e.shiftKey || e.altKey || e.metaKey, keyCode = e.keyCode;

                //when funcs popup is shown, should reserve following key
                if (this._isFuncsShown && !modifyKey && (keyCode === Keys.down || keyCode === Keys.up || keyCode === Keys.tab)) {
                    return true;
                }
                return false;
            };

            FormulaTextBox.prototype.position = function () {
                var self = this;

                var popup = keyword_null;
                if (self._isFuncsShown) {
                    popup = self._getFuncsPopup();
                } else if (self._isFuncHelpShown) {
                    popup = self._getFuncHelpPopup();
                }
                if (!popup) {
                    return;
                }

                var $host = $(self._host), $popup = $(popup);

                //
                var offset = $host.offset();
                var inputBottom = offset.top + $host.outerHeight();
                var position = { top: inputBottom, left: offset.left };

                //
                var totalHeight = $(window).outerHeight();
                var popupHeight = $popup.outerHeight();
                var bottomIfDown = inputBottom + popupHeight;
                if (bottomIfDown > totalHeight) {
                    //try to set at the top of host
                    var topIfUp = offset.top - popupHeight;
                    if (topIfUp >= 0) {
                        position.top = topIfUp;
                    }
                }
                $popup.css(position);
            };

            //#region Color Text
            FormulaTextBox.prototype._colorText = function (tokens) {
                var self = this;

                var htmlContent = "", tokensText = "";
                var tokenCount = (tokens && tokens.length), rangeIndex = 0, token;
                for (var i = 0; i < tokenCount; i++) {
                    token = tokens[i];

                    var style = "";
                    if (token.type === TokenType.Range) {
                        style = " style='color: " + self.getRangeColor(rangeIndex++) + "'";
                    }
                    htmlContent += "<span" + style + " class='gcsj-func-color-text'>" + token.text + "</span>";
                    tokensText += token.text;
                }

                //Both tokens and host's text is empty, will not color text.
                if (!tokensText && !self.text()) {
                    return;
                }

                var host = self._host;
                if (htmlContent) {
                    host.innerHTML = "<span class='gcsj-func-color-content'>" + htmlContent + "</span>";
                } else {
                    while (host.firstChild) {
                        host.removeChild(host.firstChild);
                    }
                }
            };

            FormulaTextBox.prototype._getColorNode = function (element, position) {
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
            };
            FormulaTextBox.DEFAULT_RANGE_COLORS = ["#0000ff", "#008000", "#9900cc", "#800000", "#00cc33", "#cc6600", "#cc0099"];
            return FormulaTextBox;
        })();
        _spread.FormulaTextBox = FormulaTextBox;

        
        var TokenType = {
            FormulaStart: 1,
            FunctionName: 2,
            BraceOpen: 3,
            BraceClose: 4,
            ParenOpen: 5,
            ParenClose: 6,
            Operator: 7,
            ArgumentSeparator: 8,
            ArrayArgumentSeparator: 9,
            ArrayGroupSeparator: 10,
            Range: 11,
            Boolean: 12,
            Number: 13,
            String: 14,
            Whitespace: 15,
            Error: 16,
            Literal: 17
        };
        var Tokenizer = {
            rNumber: /^(\+|-)?((\d\d*\,?\d*)|(\d*\,?\d\d*))$/,
            rBoolean: /^(TRUE|FALSE)$/i,
            rRangeA1: /^(.*!)?((\$?[a-z]+\$?\d+(\s*:\s*\$?[a-z]+\$?\d+)?)|(\$?[a-z]+\s*:\s*\$?[a-z]+)|(\$?\d+\s*:\s*\$?\d+)|(\$?[a-z]+\$?\d+\s*:\s*\$?\d+)|(\$?\d+\s*:\s*\$?[a-z]+\$?\d+)|(\$?[a-z]+\$?\d+\s*:\s*\$?[a-z]+)|(\$?[a-z]+\s*:\s*\$?[a-z]+\$?\d+))$/i,
            rRangeR1C1: /^(.*!)?((R\[?[-+]?\d*\]?C\[?[-+]?\d*\]?\s*(:\s*R\[?[-+]?\d*\]?C\[?[-+]?\d*\]?)?)|(R\[?[-+]?\d*\]?\s*(:\s*R\[?[-+]?\d*\]?)?)|(C\[?[-+]?\d*\]?\s*(:\s*C\[?[-+]?\d*\]?)?)|(R\[?[-+]?\d*\]?C\[?[-+]?\d*\]?\s*(:\s*C\[?[-+]?\d*\]?)?)|(C\[?[-+]?\d*\]?\s*(:\s*R\[?[-+]?\d*\]?C\[?[-+]?\d*\]?))?|(R\[?[-+]?\d*\]?C\[?\[-+]?d*\]?\s*(:\s*R\[?[-+]?\d*\]?))?|(R\[?[-+]?\d*\]?\s*(:\s*R\[?[-+]?\d*\]?C\[?[-+]?\d*\]?))?)$/i,
            calcErrors: "#DIV/0! #N/A #NAME? #NULL! #NUM! #REF! #VALUE!".split(" "),
            parse: function (formula) {
                var tokens = [], self = this;

                //not formula
                if (formula && formula[0] !== '=') {
                    self.addToken(tokens, formula, TokenType.Literal);
                    return tokens;
                }

                //
                var fLength = (formula && formula.length), inBraceRef = 0, ch, tokenTxt = "";
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
                            } while(inQuote && index < fLength - 1);
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
                            } while(inQuote && index < fLength - 1);
                            if (ch !== keyword_undefined) {
                                tokenTxt += ch;
                            }
                            tokenTxt = self.addToken(tokens, tokenTxt, TokenType.String);
                            break;

                        case "\\":
                            self.addToken(tokens, tokenTxt);
                            tokenTxt = self.addToken(tokens, ch, TokenType.ArrayArgumentSeparator);
                            break;

                        case ",":
                            self.addToken(tokens, tokenTxt);
                            tokenTxt = self.addToken(tokens, ch, (inBraceRef > 0 ? TokenType.ArrayArgumentSeparator : TokenType.ArgumentSeparator));
                            break;

                        case ";":
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
                            var val = tokenTxt.toUpperCase(), nextCh = (index + 1 < fLength ? formula[index + 1] : ""), nextNextCh = (index + 2 < fLength ? formula[index + 2] : "");
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
            },
            addToken: function (tokens, tokenText, tokenType) {
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
                    };
                    if (isJoinType(tokenType)) {
                        var tokenCount = tokens.length, tk, tkType, tkText, index, joinText = "";
                        for (index = tokenCount - 1; index >= 0; index--) {
                            tk = tokens[index];
                            tkType = tk.type;
                            tkText = tk.text;

                            joinText = tkText + joinText;
                            if (tkType !== TokenType.Whitespace && tkText !== ":") {
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
                        } else if (tokenText[tokenText.length - 1] === ":") {
                            rangeText = tokenText.substr(0, tokenText.length - 1);
                            if (self.rRangeA1.test(rangeText) || self.rRangeR1C1.test(rangeText)) {
                                tokenType = TokenType.Range;
                            }
                        }
                    }

                    //~
                    tokens.push({ text: tokenText, type: tokenType });
                }

                return "";
            }
        };
    })(wijmo.spread || (wijmo.spread = {}));
    var spread = wijmo.spread;
})(wijmo || (wijmo = {}));
