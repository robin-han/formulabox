///<reference path="feature.ts" />
///<reference path="common.ts" />

module GcSpread.Sheets {
    feature("formulatextbox_resource");

    class Table_FunctionDescription {
        name: string;
        description: string;
        //shortDescription: string;

        constructor(name: string, description: string/*, shortDescription: string*/) {
            this.name = name;
            this.description = description;
            //this.shortDescription = shortDescription;
        }
    }
    class ParameterDescription implements IParameterDescription {
        name: string;
        repeatable: boolean;
        //description: string;

        constructor(name: string, repeatable?: boolean/*, description?: string*/) {
            this.name = name;
            this.repeatable = repeatable;
            //this.description = description;
        }
    }
    class FunctionDescription implements IFunctionDescription {
        name: string;
        description: string;
        parameters: ParameterDescription[];
        //shortDescription: string;

        constructor(name: string, description: string, parameters: ParameterDescription[]/*, shortDescription: string*/) {
            this.name = name;
            this.description = description;
            this.parameters = parameters;
            //this.shortDescription = shortDescription;
        }
    }

    //#region EN
    export class FormulaTextBoxResource_EN {
        static Table_Functions: Table_FunctionDescription[] = [
            new Table_FunctionDescription("#All", "Returns the entire contents of the table, or specified table columns including column headers, data and total rows."),
            new Table_FunctionDescription("#Data", "Returns the data cells of the table or specified table columns."),
            new Table_FunctionDescription("#Headers", "Returns the columns headers for the table, or specified table columns."),
            new Table_FunctionDescription("#Totals", "Returns the total rows for the table or specified table columns."),
            new Table_FunctionDescription("@", "This row.")
        ];
        static Functions: FunctionDescription[] = [
            new FunctionDescription("ABS", "This function calculates the absolute value of the specified value.", [
                new ParameterDescription("value")
            ]
                ),
            new FunctionDescription("ACCRINT", "This function calculates the accrued interest for a security that pays periodic interest.", [
                new ParameterDescription("issue"),
                new ParameterDescription("first"),
                new ParameterDescription("settle"),
                new ParameterDescription("rate"),
                new ParameterDescription("par"),
                new ParameterDescription("frequency"),
                new ParameterDescription("basis")
            ]
                ),
            new FunctionDescription("ACCRINTM", "This function calculates the accrued interest at maturity for a security that pays periodic interest.", [
                new ParameterDescription("issue"),
                new ParameterDescription("maturity"),
                new ParameterDescription("rate"),
                new ParameterDescription("par"),
                new ParameterDescription("basis")
            ]
                ),
            new FunctionDescription("ACOS", "This function calculates the arccosine, that is, the angle whose cosine is the specified value.", [
                new ParameterDescription("value")
            ]
                ),
            new FunctionDescription("ACOSH", "This function calculates the inverse hyperbolic cosine of the specified value.", [
                new ParameterDescription("value")
            ]
                ),
            new FunctionDescription("ADDRESS", "This function uses the row and column numbers to create a cell address in text.", [
                new ParameterDescription("row"),
                new ParameterDescription("column"),
                new ParameterDescription("absnum"),
                new ParameterDescription("a1style"),
                new ParameterDescription("sheettext")
            ]
                ),
            new FunctionDescription("AMORDEGRC", "This function returns the depreciation for an accounting period, taking into consideration prorated depreciation, and applies a depreciation coefficient in the calculation based on the life of the assets.", [
                new ParameterDescription("cost"),
                new ParameterDescription("datepurchased"),
                new ParameterDescription("firstperiod"),
                new ParameterDescription("salvage"),
                new ParameterDescription("period"),
                new ParameterDescription("drate"),
                new ParameterDescription("basis")
            ]
                ),
            new FunctionDescription("AMORLINC", "This function calculates the depreciation for an accounting period, taking into account prorated depreciation.", [
                new ParameterDescription("cost"),
                new ParameterDescription("datepurchased"),
                new ParameterDescription("firstperiod"),
                new ParameterDescription("salvage"),
                new ParameterDescription("period"),
                new ParameterDescription("drate"),
                new ParameterDescription("basis")
            ]
                ),
            new FunctionDescription("AND", "Check whether all arguments are True, and returns True if all arguments are True.", [
                new ParameterDescription("logical1"),
                new ParameterDescription("logical2")
            ]
                ),
            new FunctionDescription("ASIN", "This function calculates the arcsine, that is, the angle whose sine is the specified value.", [
                new ParameterDescription("value")
            ]
                ),
            new FunctionDescription("ASINH", "This function calculates the inverse hyperbolic sine of a number.", [
                new ParameterDescription("value")
            ]
                ),
            new FunctionDescription("ATAN", "This function calculates the arctangent, that is, the angle whose tangent is the specified value.", [
                new ParameterDescription("value")
            ]
                ),
            new FunctionDescription("ATAN2", "This function calculates the arctangent of the specified x- and y-coordinates.", [
                new ParameterDescription("x"),
                new ParameterDescription("y")
            ]
                ),
            new FunctionDescription("ATANH", "This function calculates the inverse hyperbolic tangent of a number.", [
                new ParameterDescription("value")
            ]
                ),
            new FunctionDescription("AVEDEV", "This function calculates the average of the absolute deviations of the specified values from their mean.", [
                new ParameterDescription("value1"),
                new ParameterDescription("value2", true)
            ]
                ),
            new FunctionDescription("AVERAGE", "This function calculates the average of the specified numeric values.", [
                new ParameterDescription("value1"),
                new ParameterDescription("value2", true)
            ]
                ),
            new FunctionDescription("AVERAGEA", "This function calculates the average of the specified values, including text or logical values as well as numeric values.", [
                new ParameterDescription("value1"),
                new ParameterDescription("value2", true)
            ]
                ),
            new FunctionDescription("AVERAGEIF", "This function calculates the average of the specified numeric values provided that they meet the specified criteria.", [
                new ParameterDescription("value1"),
                new ParameterDescription("value2", true),
                new ParameterDescription("condition")
            ]
                ),
            new FunctionDescription("AVERAGEIFS", "This function calculates the average of all cells that meet multiple specified criteria.", [
                new ParameterDescription("value1"),
                new ParameterDescription("condition1"),
                new ParameterDescription("value2", true),
                new ParameterDescription("condition2...")
            ]
                ),
            new FunctionDescription("BESSELI", "This function calculates the modified Bessel function of the first kind evaluated for purely imaginary arguments.", [
                new ParameterDescription("value"),
                new ParameterDescription("order")
            ]
                ),
            new FunctionDescription("BESSELJ", "This function calculates the Bessel function of the first kind.", [
                new ParameterDescription("value"),
                new ParameterDescription("order")
            ]
                ),
            new FunctionDescription("BESSELK", "This function calculates the modified Bessel function of the second kind evaluated for purely imaginary arguments.", [
                new ParameterDescription("value"),
                new ParameterDescription("order")
            ]
                ),
            new FunctionDescription("BESSELY", "This function calculates the Bessel function of the second kind.", [
                new ParameterDescription("value"),
                new ParameterDescription("order")
            ]
                ),
            new FunctionDescription("BETADIST", "This function calculates the cumulative beta distribution function.", [
                new ParameterDescription("x"),
                new ParameterDescription("alpha"),
                new ParameterDescription("beta"),
                new ParameterDescription("lower"),
                new ParameterDescription("upper")
            ]
                ),
            new FunctionDescription("BETAINV", "This function calculates the inverse of the cumulative beta distribution function.", [
                new ParameterDescription("prob"),
                new ParameterDescription("alpha"),
                new ParameterDescription("beta"),
                new ParameterDescription("lower"),
                new ParameterDescription("upper")
            ]
                ),
            new FunctionDescription("BIN2DEC", "This function converts a binary number to a decimal number", [
                new ParameterDescription("number")
            ]
                ),
            new FunctionDescription("BIN2HEX", "This function converts a binary number to a hexadecimal number.", [
                new ParameterDescription("number"),
                new ParameterDescription("places")
            ]
                ),
            new FunctionDescription("BIN2OCT", "This function converts a binary number to an octal number.", [
                new ParameterDescription("number"),
                new ParameterDescription("places")
            ]
                ),
            new FunctionDescription("BINOMDIST", "This function calculates the individual term binomial distribution probability.", [
                new ParameterDescription("x"),
                new ParameterDescription("n"),
                new ParameterDescription("p"),
                new ParameterDescription("cumulative")
            ]
                ),
            new FunctionDescription("CEILING", "This function rounds a number up to the nearest multiple of a specified value.", [
                new ParameterDescription("value"),
                new ParameterDescription("signif")
            ]
                ),
            new FunctionDescription("CHAR", "This function returns the character specified by a number.", [
                new ParameterDescription("value")
            ]
                ),
            new FunctionDescription("CHIDIST", "This function calculates the one-tailed probability of the chi-squared distribution.", [
                new ParameterDescription("value"),
                new ParameterDescription("deg")
            ]
                ),
            new FunctionDescription("CHIINV", "This function calculates the inverse of the one-tailed probability of the chi-squared distribution", [
                new ParameterDescription("prob"),
                new ParameterDescription("deg")
            ]
                ),
            new FunctionDescription("CHITEST", "This function calculates the test for independence from the chi-squared distribution.", [
                new ParameterDescription("obs_array"),
                new ParameterDescription("exp_array")
            ]
                ),
            new FunctionDescription("CHOOSE", "This function returns a value from a list of values.", [
                new ParameterDescription("index"),
                new ParameterDescription("value1"),
                new ParameterDescription("value2", true)
            ]
                ),
            new FunctionDescription("CLEAN", "This function removes all non-printable characters from text.", [
                new ParameterDescription("text")
            ]
                ),
            new FunctionDescription("CODE", "This function returns a numeric code to represent the first character in a text string. The returned code corresponds to the Windows character set (ANSI).", [
                new ParameterDescription("text")
            ]
                ),
            new FunctionDescription("COLUMN", "This function returns the column number of a reference.", [
                new ParameterDescription("reference")
            ]
                ),
            new FunctionDescription("COLUMNS", "This function returns the number of columns in an array.", [
                new ParameterDescription("array")
            ]
                ),
            new FunctionDescription("COMBIN", "This function calculates the number of possible combinations for a specified number of items.", [
                new ParameterDescription("k"),
                new ParameterDescription("n")
            ]
                ),
            new FunctionDescription("COMPLEX", "This function converts real and imaginary coefficients into a complex number.", [
                new ParameterDescription("realcoeff"),
                new ParameterDescription("imagcoeff"),
                new ParameterDescription("suffix")
            ]
                ),
            new FunctionDescription("CONCATENATE", "This function combines multiple text strings or numbers into one text string.", [
                new ParameterDescription("text1"),
                new ParameterDescription("text2"),
                new ParameterDescription("....")
            ]
                ),
            new FunctionDescription("CONFIDENCE", "This function returns confidence interval for a population mean.", [
                new ParameterDescription("alpha"),
                new ParameterDescription("stdev"),
                new ParameterDescription("size")
            ]
                ),
            new FunctionDescription("CONVERT", "This function converts a number from one measurement system to its equivalent in another measurement system.", [
                new ParameterDescription("number"),
                new ParameterDescription("from-unit"),
                new ParameterDescription("to-unit")
            ]
                ),
            new FunctionDescription("CORREL", "This function returns the correlation coefficient of the two sets of data.", [
                new ParameterDescription("array1"),
                new ParameterDescription("array2")
            ]
                ),
            new FunctionDescription("COS", "This function returns the cosine of the specified angle.", [
                new ParameterDescription("angle")
            ]
                ),
            new FunctionDescription("COSH", "This function returns the hyperbolic cosine of the specified value.", [
                new ParameterDescription("value")
            ]
                ),
            new FunctionDescription("COUNT", "This function returns the number of cells that contain numbers.", [
                new ParameterDescription("value1"),
                new ParameterDescription("value2", true)
            ]
                ),
            new FunctionDescription("COUNTA", "This function returns the number of number of cells that contain numbers, text, or logical values.", [
                new ParameterDescription("value1"),
                new ParameterDescription("value2", true)
            ]
                ),
            new FunctionDescription("COUNTBLANK", "This function returns the number of empty (or blank) cells in a range of cells on a sheet.", [
                new ParameterDescription("cellrange")
            ]
                ),
            new FunctionDescription("COUNTIF", "This function returns the number of cells that meet a certain condition", [
                new ParameterDescription("cellrange"),
                new ParameterDescription("condition")
            ]
                ),
            new FunctionDescription("COUNTIFS", "This function returns the number of cells that meet multiple conditions.", [
                new ParameterDescription("cellrange"),
                new ParameterDescription("condition")
            ]
                ),
            new FunctionDescription("COUPDAYBS", "This function calculates the number of days from the beginning of the coupon period to the settlement date.", [
                new ParameterDescription("settlement"),
                new ParameterDescription("maturity"),
                new ParameterDescription("frequency"),
                new ParameterDescription("basis")
            ]
                ),
            new FunctionDescription("COUPDAYS", "This function returns the number of days in the coupon period that contains the settlement date.", [
                new ParameterDescription("settlement"),
                new ParameterDescription("maturity"),
                new ParameterDescription("frequency"),
                new ParameterDescription("basis")
            ]
                ),
            new FunctionDescription("COUPDAYSNC", "This function calculates the number of days from the settlement date to the next coupon date.", [
                new ParameterDescription("settlement"),
                new ParameterDescription("maturity"),
                new ParameterDescription("frequency"),
                new ParameterDescription("basis")
            ]
                ),
            new FunctionDescription("COUPNCD", "This function returns a date number of the next coupon date after the settlement date.", [
                new ParameterDescription("settlement"),
                new ParameterDescription("maturity"),
                new ParameterDescription("frequency"),
                new ParameterDescription("basi")
            ]
                ),
            new FunctionDescription("COUPNUM", "This function returns the number of coupons due between the settlement date and maturity date.", [
                new ParameterDescription("settlement"),
                new ParameterDescription("maturity"),
                new ParameterDescription("frequency"),
                new ParameterDescription("basis")
            ]
                ),
            new FunctionDescription("COUPPCD", "This function returns a date number of the previous coupon date before the settlement date.", [
                new ParameterDescription("settlement"),
                new ParameterDescription("maturity"),
                new ParameterDescription("frequency"),
                new ParameterDescription("basis")
            ]
                ),
            new FunctionDescription("COVAR", "This function returns the covariance, which is the average of the products of deviations for each data point pair in two sets of numbers.", [
                new ParameterDescription("array1"),
                new ParameterDescription("array2")
            ]
                ),
            new FunctionDescription("CRITBINOM", "This function returns the criterion binomial, the smallest value for which the cumulative binomial distribution is greater than or equal to a criterion value.", [
                new ParameterDescription("n"),
                new ParameterDescription("p"),
                new ParameterDescription("alpha")
            ]
                ),
            new FunctionDescription("CUMIPMT", "This function returns the cumulative interest paid on a loan between the starting and ending periods.", [
                new ParameterDescription("rate"),
                new ParameterDescription("nper"),
                new ParameterDescription("pval"),
                new ParameterDescription("startperiod"),
                new ParameterDescription("endperiod"),
                new ParameterDescription("paytype")
            ]
                ),
            new FunctionDescription("CUMPRINC", "This function returns the cumulative principal paid on a loan between the start and end periods.", [
                new ParameterDescription("rate"),
                new ParameterDescription("nper"),
                new ParameterDescription("pval"),
                new ParameterDescription("startperiod"),
                new ParameterDescription("endperiod"),
                new ParameterDescription("paytype")
            ]
                ),
            new FunctionDescription("DATE", "This function returns the DateTime object for a particular date, specified by the year, month, and day.", [
                new ParameterDescription("year"),
                new ParameterDescription("month"),
                new ParameterDescription("day")
            ]
                ),
            new FunctionDescription("DATEDIF", "This function returns the number of days, months, or years between two dates.", [
                new ParameterDescription("date1"),
                new ParameterDescription("date2"),
                new ParameterDescription("outputcode")
            ]
                ),
            new FunctionDescription("DATEVALUE", "This function returns a DateTime object of the specified date.", [
                new ParameterDescription("date_string")
            ]
                ),
            new FunctionDescription("DAVERAGE", "This function calculates the average of values in a column of a list or database that match the specified conditions.", [
                new ParameterDescription("database"),
                new ParameterDescription(" field"),
                new ParameterDescription(" criteria")
            ]
                ),
            new FunctionDescription("DAY", "This function returns the day number of the month (integer 1 to 31) that corresponds to the specified date.", [
                new ParameterDescription("date")
            ]
                ),
            new FunctionDescription("DAYS360", "This function returns the number of days between two dates based on a 360-day year.", [
                new ParameterDescription("startdate"),
                new ParameterDescription("enddate"),
                new ParameterDescription("method")
            ]
                ),
            new FunctionDescription("DB", "This function calculates the depreciation of an asset for a specified period using the fixed‑declining balance method", [
                new ParameterDescription("cost"),
                new ParameterDescription("salvage"),
                new ParameterDescription("life"),
                new ParameterDescription("period"),
                new ParameterDescription("month")
            ]
                ),
            new FunctionDescription("DCOUNT", "This function counts the cells that contain numbers in a column of a list or database that match the specified conditions", [
                new ParameterDescription("database"),
                new ParameterDescription(" field"),
                new ParameterDescription(" criteria")
            ]
                ),
            new FunctionDescription("DCOUNTA", "This function counts the non-blank cells in a column of a list or database that match the specified conditions", [
                new ParameterDescription("database"),
                new ParameterDescription(" field"),
                new ParameterDescription(" criteria")
            ]
                ),
            new FunctionDescription("DDB", "This function calculates the depreciation of an asset for a specified period using the double-declining balance method or another method you specify.", [
                new ParameterDescription("cost"),
                new ParameterDescription("salvage"),
                new ParameterDescription("life"),
                new ParameterDescription("period"),
                new ParameterDescription("factor")
            ]
                ),
            new FunctionDescription("DEC2BIN", "This function converts a decimal number to a binary number.", [
                new ParameterDescription("number"),
                new ParameterDescription("places")
            ]
                ),
            new FunctionDescription("DEC2HEX", "This function converts a decimal number to a hexadecimal number", [
                new ParameterDescription("number"),
                new ParameterDescription("places")
            ]
                ),
            new FunctionDescription("DEC2OCT", "This function converts a decimal number to an octal number", [
                new ParameterDescription("number"),
                new ParameterDescription("places")
            ]
                ),
            new FunctionDescription("DEGREES", "This function converts the specified value from radians to degrees", [
                new ParameterDescription("angle")
            ]
                ),
            new FunctionDescription("DELTA", "This function identifies whether two values are equal. Returns 1 if they are equal; returns 0 otherwise.", [
                new ParameterDescription("value1"),
                new ParameterDescription("value2")
            ]
                ),
            new FunctionDescription("DEVSQ", "This function calculates the sum of the squares of deviations of data points (or of an array of data points) from their sample mean.", [
                new ParameterDescription("value1"),
                new ParameterDescription("value2", true)
            ]
                ),
            new FunctionDescription("DGET", "This function extracts a single value from a column of a list or database that matches the specified conditions.", [
                new ParameterDescription("database"),
                new ParameterDescription(" field"),
                new ParameterDescription(" criteria")
            ]
                ),
            new FunctionDescription("DISC", "This function calculates the discount rate for a security.", [
                new ParameterDescription("settle"),
                new ParameterDescription("mature"),
                new ParameterDescription("pricep"),
                new ParameterDescription("redeem"),
                new ParameterDescription("basis")
            ]
                ),
            new FunctionDescription("DMAX", "This function returns the largest number in a column of a list or database that matches the specified conditions.", [
                new ParameterDescription("database"),
                new ParameterDescription(" field"),
                new ParameterDescription(" criteria")
            ]
                ),
            new FunctionDescription("DMIN", "This function returns the smallest number in a column of a list or database that matches the specified conditions.", [
                new ParameterDescription("database"),
                new ParameterDescription(" field"),
                new ParameterDescription(" criteria")
            ]
                ),
            new FunctionDescription("DOLLAR", "This function converts a number to text using currency format, with the decimals rounded to the specified place.", [
                new ParameterDescription("value"),
                new ParameterDescription("digits")
            ]
                ),
            new FunctionDescription("DOLLARDE", "This function converts a fraction dollar price to a decimal dollar price.", [
                new ParameterDescription("fractionaldollar"),
                new ParameterDescription("fraction")
            ]
                ),
            new FunctionDescription("DOLLARFR", "This function converts a decimal number dollar price to a fraction dollar price.", [
                new ParameterDescription("decimaldollar"),
                new ParameterDescription("fraction")
            ]
                ),
            new FunctionDescription("DPRODUCT", "This function multiplies the values in a column of a list or database that match the specified conditions.", [
                new ParameterDescription("database"),
                new ParameterDescription(" field"),
                new ParameterDescription(" criteria")
            ]
                ),
            new FunctionDescription("DSTDEV", "This function estimates the standard deviation of a population based on a sample by using the numbers in a column of a list or database that match the specified conditions.", [
                new ParameterDescription("database"),
                new ParameterDescription(" field"),
                new ParameterDescription(" criteria")
            ]
                ),
            new FunctionDescription("DSTDEVP", "This function calculates the standard deviation of a population based on the entire population using the numbers in a column of a list or database that match the specified conditions.", [
                new ParameterDescription("database"),
                new ParameterDescription(" field"),
                new ParameterDescription(" criteria")
            ]
                ),
            new FunctionDescription("DSUM", "This function adds the numbers in a column of a list or database that match the specified conditions.", [
                new ParameterDescription("database"),
                new ParameterDescription(" field"),
                new ParameterDescription(" criteria")
            ]
                ),
            new FunctionDescription("DURATION", "This function returns the Macaulay duration for an assumed par value of $100.", [
                new ParameterDescription("settlement"),
                new ParameterDescription("maturity"),
                new ParameterDescription("coupon"),
                new ParameterDescription("yield"),
                new ParameterDescription("frequency"),
                new ParameterDescription("basis")
            ]
                ),
            new FunctionDescription("DVAR", "This function estimates the variance of a population based on a sample by using the numbers in a column of a list or database that match the specified conditions.", [
                new ParameterDescription("database"),
                new ParameterDescription(" field"),
                new ParameterDescription(" criteria")
            ]
                ),
            new FunctionDescription("DVARP", "This function calculates the variance of a population based on the entire population by using the numbers in a column of a list or database that match the specified conditions.", [
                new ParameterDescription("database"),
                new ParameterDescription(" field"),
                new ParameterDescription(" criteria")
            ]
                ),
            new FunctionDescription("EDATE", "This function calculates the date that is the indicated number of months before or after a specified date.", [
                new ParameterDescription("startdate"),
                new ParameterDescription("months")
            ]
                ),
            new FunctionDescription("EFFECT", "This function calculates the effective annual interest rate for a given nominal annual interest rate and the number of compounding periods per year.", [
                new ParameterDescription("nomrate"),
                new ParameterDescription("comper")
            ]
                ),
            new FunctionDescription("EOMONTH", "This function calculates the date for the last day of the month (end of month) that is the indicated number of months before or after the starting date.", [
                new ParameterDescription("startdate"),
                new ParameterDescription("months")
            ]
                ),
            new FunctionDescription("ERF", "This function calculates the error function integrated between a lower and an upper limit.", [
                new ParameterDescription("limit"),
                new ParameterDescription("upperlimit")
            ]
                ),
            new FunctionDescription("ERFC", "This function calculates the complementary error function integrated between a lower limit and infinity.", [
                new ParameterDescription("lowerlimit")
            ]
                ),
            new FunctionDescription("ERROR.TYPE", "This function returns a number corresponding to one of the error values.", [
                new ParameterDescription("errorvalue")
            ]
                ),
            new FunctionDescription("EURO", "This function returns the equivalent of one Euro based on the ISO currency code.", [
                new ParameterDescription("code")
            ]
                ),
            new FunctionDescription("EUROCONVERT", "This function converts currency from a Euro member currency (including Euros) to another Euro member currency (including Euros).", [
                new ParameterDescription("currency"),
                new ParameterDescription("source"),
                new ParameterDescription("target"),
                new ParameterDescription("fullprecision"),
                new ParameterDescription("triangulation")
            ]
                ),
            new FunctionDescription("EVEN", "This function rounds the specified value up to the nearest even integer.", [
                new ParameterDescription("value")
            ]
                ),
            new FunctionDescription("EXACT", "This function returns true if two strings are the same; otherwise, false.", [
                new ParameterDescription("text1"),
                new ParameterDescription("text2")
            ]
                ),
            new FunctionDescription("EXP", "This function returns e raised to the power of the specified value.", [
                new ParameterDescription("value")
            ]
                ),
            new FunctionDescription("EXPONDIST", "This function returns the exponential distribution or the probability density.", [
                new ParameterDescription("value"),
                new ParameterDescription("lambda"),
                new ParameterDescription("cumulative")
            ]
                ),
            new FunctionDescription("FACT", "This function calculates the factorial of the specified number.", [
                new ParameterDescription("number")
            ]
                ),
            new FunctionDescription("FACTDOUBLE", "This function calculates the double factorial of the specified number.", [
                new ParameterDescription("number")
            ]
                ),
            new FunctionDescription("FALSE", "This function returns the value for logical FALSE.", [

            ]
                ),
            new FunctionDescription("FDIST", "This function calculates the F probability distribution, to see degrees of diversity between two sets of data.", [
                new ParameterDescription("value"),
                new ParameterDescription("degnum"),
                new ParameterDescription("degden")
            ]
                ),
            new FunctionDescription("FIND", "This function finds one text value within another and returns the text value’s position in the text you searched.", [
                new ParameterDescription("findtext"),
                new ParameterDescription("intext"),
                new ParameterDescription("start")
            ]
                ),
            new FunctionDescription("FINV", "This function returns the inverse of the F probability distribution.", [
                new ParameterDescription("p"),
                new ParameterDescription("degnum"),
                new ParameterDescription("degden")
            ]
                ),
            new FunctionDescription("FISHER", "This function returns the Fisher transformation for a specified value.", [
                new ParameterDescription("value")
            ]
                ),
            new FunctionDescription("FISHERINV", "This function returns the inverse of the Fisher transformation for a specified value.", [
                new ParameterDescription("value")
            ]
                ),
            new FunctionDescription("FIXED", "This function rounds a number to the specified number of decimal places, formats the number in decimal format using a period and commas (if so specified), and returns the result as text.", [
                new ParameterDescription("num"),
                new ParameterDescription("digits"),
                new ParameterDescription("notcomma")
            ]
                ),
            new FunctionDescription("FLOOR", "This function rounds a number down to the nearest multiple of a specified value.", [
                new ParameterDescription("value"),
                new ParameterDescription("signif")
            ]
                ),
            new FunctionDescription("FORECAST", "This function calculates a future value using existing values.", [
                new ParameterDescription("value"),
                new ParameterDescription("Yarray"),
                new ParameterDescription("Xarray")
            ]
                ),
            new FunctionDescription("FREQUENCY", "This function calculates how often values occur within a range of values. This function returns a vertical array of numbers.", [
                new ParameterDescription("dataarray"),
                new ParameterDescription("binarray")
            ]
                ),
            new FunctionDescription("FTEST", "This function returns the result of an F-test, which returns the one-tailed probability that the variances in two arrays are not significantly different.", [
                new ParameterDescription("array1"),
                new ParameterDescription("array2")
            ]
                ),
            new FunctionDescription("FV", "This function returns the future value of an investment based on a present value, periodic payments, and a specified interest rate.", [
                new ParameterDescription("rate"),
                new ParameterDescription("numper"),
                new ParameterDescription("paymt"),
                new ParameterDescription("pval"),
                new ParameterDescription("type")
            ]
                ),
            new FunctionDescription("FVSCHEDULE", "This function returns the future value of an initial principal after applying a series of compound interest rates. Calculate future value of an investment with a variable or adjustable rate.", [
                new ParameterDescription("principal"),
                new ParameterDescription("schedule")
            ]
                ),
            new FunctionDescription("GAMMADIST", "This function returns the gamma distribution.", [
                new ParameterDescription("x"),
                new ParameterDescription("alpha"),
                new ParameterDescription("beta"),
                new ParameterDescription("cumulative")
            ]
                ),
            new FunctionDescription("GAMMAINV", "This function returns the inverse of the gamma cumulative distribution.", [
                new ParameterDescription("p"),
                new ParameterDescription("alpha"),
                new ParameterDescription("beta")
            ]
                ),
            new FunctionDescription("GAMMALN", "This function returns the natural logarithm of the Gamma function, G(x).", [
                new ParameterDescription("value")
            ]
                ),
            new FunctionDescription("GCD", "This function returns the greatest common divisor of two numbers.", [
                new ParameterDescription("number1"),
                new ParameterDescription("number2")
            ]
                ),
            new FunctionDescription("GEOMEAN", "This function returns the geometric mean of a set of positive data.", [
                new ParameterDescription("value1"),
                new ParameterDescription("value2", true)
            ]
                ),
            new FunctionDescription("GESTEP", "This function, greater than or equal to step, returns an indication of whether a number is equal to a threshold.", [
                new ParameterDescription("number"),
                new ParameterDescription("step")
            ]
                ),
            new FunctionDescription("GROWTH", "This function calculates predicted exponential growth. This function returns the y values for a series of new x values that are specified by using existing x and y values.", [
                new ParameterDescription("y"),
                new ParameterDescription("x"),
                new ParameterDescription("newx"),
                new ParameterDescription("constant")
            ]
                ),
            new FunctionDescription("HARMEAN", "This function returns the harmonic mean of a data set.", [
                new ParameterDescription("value1"),
                new ParameterDescription("value2", true)
            ]
                ),
            new FunctionDescription("HEX2BIN", "This function converts a hexadecimal number to a binary number.", [
                new ParameterDescription("number"),
                new ParameterDescription(" places")
            ]
                ),
            new FunctionDescription("HEX2DEC", "This function converts a hexadecimal number to a decimal number.", [
                new ParameterDescription("number")
            ]
                ),
            new FunctionDescription("HEX2OCT", "This function converts a hexadecimal number to an octal number.", [
                new ParameterDescription("number"),
                new ParameterDescription(" places")
            ]
                ),
            new FunctionDescription("HLOOKUP", "This function searches for a value in the top row and then returns a value in the same column from a specified row.", [
                new ParameterDescription("value"),
                new ParameterDescription("array"),
                new ParameterDescription("row"),
                new ParameterDescription("approx")
            ]
                ),
            new FunctionDescription("HOUR", "This function returns the hour that corresponds to a specified time.", [
                new ParameterDescription("time")
            ]
                ),
            new FunctionDescription("HYPGEOMDIST", "This function returns the hypergeometric distribution.", [
                new ParameterDescription("x"),
                new ParameterDescription("n"),
                new ParameterDescription("M"),
                new ParameterDescription("N")
            ]
                ),
            new FunctionDescription("IF", "This function performs a comparison and returns one of two provided values based on that comparison.", [
                new ParameterDescription("valueTest"),
                new ParameterDescription("valueTrue"),
                new ParameterDescription("valueFalse")
            ]
                ),
            new FunctionDescription("IFERROR", "This function evaluates a formula and returns a value you provide if there is an error or the formula result.", [
                new ParameterDescription("value"),
                new ParameterDescription("error")
            ]
                ),
            new FunctionDescription("IMABS", "This function returns the absolute value or modulus of a complex number.", [
                new ParameterDescription("complexnum")
            ]
                ),
            new FunctionDescription("IMAGINARY", "This function returns the imaginary coefficient of a complex number.", [
                new ParameterDescription("complexnum")
            ]
                ),
            new FunctionDescription("IMARGUMENT", "This function returns the argument theta, which is an angle expressed in radians.", [
                new ParameterDescription("complexnum")
            ]
                ),
            new FunctionDescription("IMCONJUGATE", "This function returns the complex conjugate of a complex number.", [
                new ParameterDescription("complexnum")
            ]
                ),
            new FunctionDescription("IMCOS", "This function returns the cosine of a complex number.", [
                new ParameterDescription("complexnum")
            ]
                ),
            new FunctionDescription("IMDIV", "This function returns the quotient of two complex numbers.", [
                new ParameterDescription("complexnum"),
                new ParameterDescription("complexdenom")
            ]
                ),
            new FunctionDescription("IMEXP", "This function returns the exponential of a complex number.", [
                new ParameterDescription("complexnum")
            ]
                ),
            new FunctionDescription("IMLN", "This function returns the natural logarithm of a complex number.", [
                new ParameterDescription("complexnum")
            ]
                ),
            new FunctionDescription("IMLOG2", "This function returns the base-2 logarithm of a complex number.", [
                new ParameterDescription("complexnum")
            ]
                ),
            new FunctionDescription("IMLOG10", "This function returns the common logarithm of a complex number.", [
                new ParameterDescription("complexnum")
            ]
                ),
            new FunctionDescription("IMPOWER", "This function returns a complex number raised to a power.", [
                new ParameterDescription("complexnum"),
                new ParameterDescription("powernum")
            ]
                ),
            new FunctionDescription("IMPRODUCT", "This function returns the product of up to 29 complex numbers in the x+yi or x+yj text format.", [
                new ParameterDescription("complexnum1"),
                new ParameterDescription("complexnum2", true)
            ]
                ),
            new FunctionDescription("IMREAL", "This function returns the real coefficient of a complex number in the x+yi or x+yj text format.", [
                new ParameterDescription("complexnum")
            ]
                ),
            new FunctionDescription("IMSIN", "This function returns the sine of a complex number in the x+yi or x+yj text format.", [
                new ParameterDescription("complexnum")
            ]
                ),
            new FunctionDescription("IMSQRT", "This function returns the square root of a complex number in the x+yi or x+yj text format.", [
                new ParameterDescription("complexnum")
            ]
                ),
            new FunctionDescription("IMSUB", "This function returns the difference of two complex numbers in the x+yi or x+yj text format.", [
                new ParameterDescription("complexnum1"),
                new ParameterDescription("complexnum2")
            ]
                ),
            new FunctionDescription("IMSUM", "This function returns the sum of two or more complex numbers in the x+yi or x+yj text format.", [
                new ParameterDescription("complexnum1"),
                new ParameterDescription("complexnum2", true)
            ]
                ),
            new FunctionDescription("INDEX", "This function returns a value or the reference to a value from within an array or range.", [
                new ParameterDescription("return"),
                new ParameterDescription("row"),
                new ParameterDescription("col"),
                new ParameterDescription("area")
            ]
                ),
            new FunctionDescription("INDIRECT", "This function returns the reference specified by a text string. References are immediately evaluated to display their contents.", [
                new ParameterDescription("ref_text"),
                new ParameterDescription("a1_style")
            ]
                ),
            new FunctionDescription("INT", "This function rounds a specified number down to the nearest integer.", [
                new ParameterDescription("value")
            ]
                ),
            new FunctionDescription("INTERCEPT", "This function returns the coordinates of a point at which a line intersects the y-axis, by using existing x values and y values.", [
                new ParameterDescription("dependent"),
                new ParameterDescription("independent")
            ]
                ),
            new FunctionDescription("INTRATE", "This function calculates the interest rate for a fully invested security.", [
                new ParameterDescription("settle"),
                new ParameterDescription("mature"),
                new ParameterDescription("invest"),
                new ParameterDescription("redeem"),
                new ParameterDescription("basis")
            ]
                ),
            new FunctionDescription("IPMT", "This function calculates the payment of interest on a loan.", [
                new ParameterDescription("rate"),
                new ParameterDescription("per"),
                new ParameterDescription("nper"),
                new ParameterDescription("pval"),
                new ParameterDescription("fval"),
                new ParameterDescription("type")
            ]
                ),
            new FunctionDescription("IRR", "This function returns the internal rate of return for a series of cash flows represented by the numbers in an array.", [
                new ParameterDescription("arrayvals"),
                new ParameterDescription("estimate")
            ]
                ),
            new FunctionDescription("ISBLANK", "This function tests whether a value, an expression, or contents of a referenced cell is empty.", [
                new ParameterDescription("cellreference")
            ]
                ),
            new FunctionDescription("ISERR", "This function, Is Error Other Than Not Available, tests whether a value, an expression, or contents of a referenced cell has an error other than not available (#N/A).", [
                new ParameterDescription("cellreference")
            ]
                ),
            new FunctionDescription("ISERROR", "This function, Is Error of Any Kind, tests whether a value, an expression, or contents of a referenced cell has an error of any kind.", [
                new ParameterDescription("cellreference")
            ]
                ),
            new FunctionDescription("ISEVEN", "This function, Is Number Even, tests whether a value, an expression, or contents of a referenced cell is even.", [
                new ParameterDescription("cellreference")
            ]
                ),
            new FunctionDescription("ISLOGICAL", "This function tests whether a value, an expression, or contents of a referenced cell is a logical (Boolean) value.", [
                new ParameterDescription("cellreference")
            ]
                ),
            new FunctionDescription("ISNA", "This function, Is Not Available, tests whether a value, an expression, or contents of a referenced cell has the not available (#N/A) error value.", [
                new ParameterDescription("cellreference")
            ]
                ),
            new FunctionDescription("ISNONTEXT", "This function tests whether a value, an expression, or contents of a referenced cell has any data type other than text.", [
                new ParameterDescription("cellreference")
            ]
                ),
            new FunctionDescription("ISNUMBER", "This function tests whether a value, an expression, or contents of a referenced cell has numeric data.", [
                new ParameterDescription("cellreference")
            ]
                ),
            new FunctionDescription("ISODD", "This function, Is Number Odd, tests whether a value, an expression, or contents of a referenced cell has numeric data.", [
                new ParameterDescription("cellreference")
            ]
                ),
            new FunctionDescription("ISPMT", "This function calculates the interest paid during a specific period of an investment.", [
                new ParameterDescription("rate"),
                new ParameterDescription("per"),
                new ParameterDescription("nper"),
                new ParameterDescription("pv")
            ]
                ),
            new FunctionDescription("ISREF", "This function, Is Reference, tests whether a value, an expression, or contents of a referenced cell is a reference to another cell.", [
                new ParameterDescription("cellreference")
            ]
                ),
            new FunctionDescription("ISTEXT", "This function tests whether a value, an expression, or contents of a referenced cell has text data.", [
                new ParameterDescription("cellreference")
            ]
                ),
            new FunctionDescription("KURT", "This function returns the kurtosis of a data set.", [
                new ParameterDescription("value1"),
                new ParameterDescription("value2"),
                new ParameterDescription("value3"),
                new ParameterDescription("value4", true)
            ]
                ),
            new FunctionDescription("LARGE", "This function returns the nth largest value in a data set, where n is specified.", [
                new ParameterDescription("array"),
                new ParameterDescription("n")
            ]
                ),
            new FunctionDescription("LCM", "This function returns the least common multiple of two numbers.", [
                new ParameterDescription("number1"),
                new ParameterDescription("number2")
            ]
                ),
            new FunctionDescription("LEFT", "This function returns the specified leftmost characters from a text value.", [
                new ParameterDescription("mytext"),
                new ParameterDescription("num_chars")
            ]
                ),
            new FunctionDescription("LEN", "This function returns the length of, the number of characters in, a text string.", [
                new ParameterDescription("value")
            ]
                ),
            new FunctionDescription("LINEST", "This function calculates the statistics for a line.", [
                new ParameterDescription("y"),
                new ParameterDescription("x"),
                new ParameterDescription("constant"),
                new ParameterDescription("stats")
            ]
                ),
            new FunctionDescription("LN", "This function returns the natural logarithm of the specified number.", [
                new ParameterDescription("value")
            ]
                ),
            new FunctionDescription("LOG", "This function returns the logarithm base Y of a number X.", [
                new ParameterDescription("number"),
                new ParameterDescription("base")
            ]
                ),
            new FunctionDescription("LOG10", "This function returns the logarithm base 10 of the number given.", [
                new ParameterDescription("value")
            ]
                ),
            new FunctionDescription("LOGEST", "This function calculates an exponential curve that fits the data and returns an array of values that describes the curve.", [
                new ParameterDescription("y"),
                new ParameterDescription("x"),
                new ParameterDescription("constant"),
                new ParameterDescription("stats")
            ]
                ),
            new FunctionDescription("LOGINV", "This function returns the inverse of the lognormal cumulative distribution function of x, where LN(x) is normally distributed with the specified mean and standard deviation.", [
                new ParameterDescription("prob"),
                new ParameterDescription("mean"),
                new ParameterDescription("stdev")
            ]
                ),
            new FunctionDescription("LOGNORMDIST", "This function returns the cumulative natural log normal distribution of x, where LN(x) is normally distributed with the specified mean and standard deviation. Analyze data that has been logarithmically transformed with this function.", [
                new ParameterDescription("x"),
                new ParameterDescription("mean"),
                new ParameterDescription("stdev")
            ]
                ),
            new FunctionDescription("LOOKUP", "This function searches for a value and returns a value from the same location in a second area.", [
                new ParameterDescription("lookupvalue"),
                new ParameterDescription("lookupvector"),
                new ParameterDescription("resultvector")
            ]
                ),
            new FunctionDescription("LOWER", "This function converts text to lower case letters.", [
                new ParameterDescription("string")
            ]
                ),
            new FunctionDescription("MATCH", "This function returns the relative position of a specified item in a range.", [
                new ParameterDescription("value1"),
                new ParameterDescription("array"),
                new ParameterDescription("type")
            ]
                ),
            new FunctionDescription("MAX", "This function returns the maximum value, the greatest value, of all the values in the arguments.", [
                new ParameterDescription("value1"),
                new ParameterDescription("value2", true)
            ]
                ),
            new FunctionDescription("MAXA", "This function returns the largest value in a list of arguments, including text and logical values.", [
                new ParameterDescription("value1"),
                new ParameterDescription("value2", true)
            ]
                ),
            new FunctionDescription("MDETERM", "This function returns the matrix determinant of an array.", [
                new ParameterDescription("array")
            ]
                ),
            new FunctionDescription("MDURATION", "This function calculates the modified Macaulay duration of a security with an assumed par value of $100.", [
                new ParameterDescription("settlement"),
                new ParameterDescription("maturity"),
                new ParameterDescription("coupon"),
                new ParameterDescription("yield"),
                new ParameterDescription("frequency"),
                new ParameterDescription("basis")
            ]
                ),
            new FunctionDescription("MEDIAN", "This function returns the median, the number in the middle of the provided set of numbers; that is, half the numbers have values that are greater than the median, and half have values that are less than the median.", [
                new ParameterDescription("value1"),
                new ParameterDescription("value2", true)
            ]
                ),
            new FunctionDescription("MID", "This function returns the requested number of characters from a text string starting at the position you specify.", [
                new ParameterDescription("text"),
                new ParameterDescription("start_num"),
                new ParameterDescription("num_chars")
            ]
                ),
            new FunctionDescription("MIN", "This function returns the minimum value, the least value, of all the values in the arguments.", [
                new ParameterDescription("value1"),
                new ParameterDescription("value2", true)
            ]
                ),
            new FunctionDescription("MINA", "This function returns the minimum value in a list of arguments, including text and logical values.", [
                new ParameterDescription("value1"),
                new ParameterDescription("value2", true)
            ]
                ),
            new FunctionDescription("MINUTE", "This function returns the minute corresponding to a specified time.", [
                new ParameterDescription("time")
            ]
                ),
            new FunctionDescription("MINVERSE", "This function returns the inverse matrix for the matrix stored in an array.", [
                new ParameterDescription("array")
            ]
                ),
            new FunctionDescription("MIRR", "This function returns the modified internal rate of return for a series of periodic cash flows.", [
                new ParameterDescription("arrayvals"),
                new ParameterDescription("payment_int"),
                new ParameterDescription("income_int")
            ]
                ),
            new FunctionDescription("MMULT", "This function returns the matrix product for two arrays.", [
                new ParameterDescription("array1"),
                new ParameterDescription("array2")
            ]
                ),
            new FunctionDescription("MOD", "This function returns the remainder of a division operation.", [
                new ParameterDescription("dividend"),
                new ParameterDescription("divisor")
            ]
                ),
            new FunctionDescription("MODE", "This function returns the most frequently occurring value in a set of data.", [
                new ParameterDescription("value1"),
                new ParameterDescription("value2", true)
            ]
                ),
            new FunctionDescription("MONTH", "This function returns the month corresponding to the specified date value.", [
                new ParameterDescription("date")
            ]
                ),
            new FunctionDescription("MROUND", "This function returns a number rounded to the desired multiple.", [
                new ParameterDescription("number"),
                new ParameterDescription("multiple")
            ]
                ),
            new FunctionDescription("MULTINOMIAL", "This function calculates the ratio of the factorial of a sum of values to the product of factorials.", [
                new ParameterDescription("value1"),
                new ParameterDescription("value2", true)
            ]
                ),
            new FunctionDescription("N", "This function returns a value converted to a number.", [
                new ParameterDescription("value")
            ]
                ),
            new FunctionDescription("NA", "This function returns the error value #N/A that means not available.", [

            ]
                ),
            new FunctionDescription("NEGBINOMDIST", "This function returns the negative binomial distribution.", [
                new ParameterDescription("x"),
                new ParameterDescription("r"),
                new ParameterDescription("p")
            ]
                ),
            new FunctionDescription("NETWORKDAYS", "This function returns the total number of complete working days between the start and end dates.", [
                new ParameterDescription("startdate"),
                new ParameterDescription("enddate"),
                new ParameterDescription("holidays")
            ]
                ),
            new FunctionDescription("NOMINAL", "This function returns the nominal annual interest rate for a given effective rate and number of compounding periods per year.", [
                new ParameterDescription("effrate"),
                new ParameterDescription("comper")
            ]
                ),
            new FunctionDescription("NORMDIST", "This function returns the normal cumulative distribution for the specified mean and standard deviation.", [
                new ParameterDescription("x"),
                new ParameterDescription("mean"),
                new ParameterDescription("stdev"),
                new ParameterDescription("cumulative")
            ]
                ),
            new FunctionDescription("NORMINV", "This function returns the inverse of the normal cumulative distribution for the given mean and standard deviation.", [
                new ParameterDescription("prob"),
                new ParameterDescription("mean"),
                new ParameterDescription("stdev")
            ]
                ),
            new FunctionDescription("NORMSDIST", "This function returns the standard normal cumulative distribution function.", [
                new ParameterDescription("value")
            ]
                ),
            new FunctionDescription("NORMSINV", "This function returns the inverse of the standard normal cumulative distribution. The distribution has a mean of zero and a standard deviation of one.", [
                new ParameterDescription("prob")
            ]
                ),
            new FunctionDescription("NOT", "This function reverses the logical value of its argument.", [
                new ParameterDescription("value")
            ]
                ),
            new FunctionDescription("NOW", "This function returns the current date and time.", [

            ]
                ),
            new FunctionDescription("NPER", "This function returns the number of periods for an investment based on a present value, future value, periodic payments, and a specified interest rate.", [
                new ParameterDescription("rate"),
                new ParameterDescription("paymt"),
                new ParameterDescription("pval"),
                new ParameterDescription("fval"),
                new ParameterDescription("type")
            ]
                ),
            new FunctionDescription("NPV", "This function calculates the net present value of an investment by using a discount rate and a series of future payments and income.", [
                new ParameterDescription("discount"),
                new ParameterDescription("value1"),
                new ParameterDescription("value2", true)
            ]
                ),
            new FunctionDescription("OCT2BIN", "This function converts an octal number to a binary number.", [
                new ParameterDescription("number"),
                new ParameterDescription("places")
            ]
                ),
            new FunctionDescription("OCT2DEC", "This function converts an octal number to a decimal number.", [
                new ParameterDescription("number")
            ]
                ),
            new FunctionDescription("OCT2HEX", "This function converts an octal number to a hexadecimal number.", [
                new ParameterDescription("number"),
                new ParameterDescription("places")
            ]
                ),
            new FunctionDescription("ODD", "This function rounds the specified value up to the nearest odd integer.", [
                new ParameterDescription("value")
            ]
                ),
            new FunctionDescription("ODDFPRICE", "This function calculates the price per $100 face value of a security with an odd first period.", [
                new ParameterDescription("settle"),
                new ParameterDescription("maturity"),
                new ParameterDescription("issue"),
                new ParameterDescription("first"),
                new ParameterDescription("rate"),
                new ParameterDescription("yield"),
                new ParameterDescription("redeem"),
                new ParameterDescription("freq"),
                new ParameterDescription("basis")
            ]
                ),
            new FunctionDescription("ODDFYIELD", "This function calculates the yield of a security with an odd first period.", [
                new ParameterDescription("settle"),
                new ParameterDescription("maturity"),
                new ParameterDescription("issue"),
                new ParameterDescription("first"),
                new ParameterDescription("rate"),
                new ParameterDescription("price"),
                new ParameterDescription("redeem"),
                new ParameterDescription("freq"),
                new ParameterDescription("basis")
            ]
                ),
            new FunctionDescription("ODDLPRICE", "This function calculates the price per $100 face value of a security with an odd last coupon period.", [
                new ParameterDescription("settle"),
                new ParameterDescription("maturity"),
                new ParameterDescription("last"),
                new ParameterDescription("rate"),
                new ParameterDescription("yield"),
                new ParameterDescription("redeem"),
                new ParameterDescription("freq"),
                new ParameterDescription("basis")
            ]
                ),
            new FunctionDescription("ODDLYIELD", "This function calculates the yield of a security with an odd last period.", [
                new ParameterDescription("settle"),
                new ParameterDescription("maturity"),
                new ParameterDescription("last"),
                new ParameterDescription("rate"),
                new ParameterDescription("price"),
                new ParameterDescription("redeem"),
                new ParameterDescription("freq"),
                new ParameterDescription("basis")
            ]
                ),
            new FunctionDescription("OFFSET", "This function returns a reference to a range. The range is a specified number of rows and columns from a cell or range of cells. The function returns a single cell or a range of cells.", [
                new ParameterDescription("reference"),
                new ParameterDescription("rows"),
                new ParameterDescription("cols"),
                new ParameterDescription("height"),
                new ParameterDescription("width")
            ]
                ),
            new FunctionDescription("OR", "This function calculates logical OR. It returns TRUE if any of its arguments are true; otherwise, returns FALSE if all arguments are false.", [
                new ParameterDescription("argument1"),
                new ParameterDescription("argument2...")
            ]
                ),
            new FunctionDescription("PEARSON", "This function returns the Pearson product moment correlation coefficient, a dimensionless index between -1.0 to 1.0 inclusive indicative of the linear relationship of two data sets.", [
                new ParameterDescription("array_ind"),
                new ParameterDescription("array_dep")
            ]
                ),
            new FunctionDescription("PERCENTILE", "This function returns the nth percentile of values in a range.", [
                new ParameterDescription("array"),
                new ParameterDescription("n")
            ]
                ),
            new FunctionDescription("PERCENTRANK", "This function returns the rank of a value in a data set as a percentage of the data set.", [
                new ParameterDescription("array"),
                new ParameterDescription("n"),
                new ParameterDescription("sigdig")
            ]
                ),
            new FunctionDescription("PERMUT", "This function returns the number of possible permutations for a specified number of items.", [
                new ParameterDescription("k"),
                new ParameterDescription("n")
            ]
                ),
            new FunctionDescription("PI", "This function returns PI as 3.1415926536.", [

            ]
                ),
            new FunctionDescription("PMT", "This function returns the payment amount for a loan given the present value, specified interest rate, and number of terms.", [
                new ParameterDescription("rate"),
                new ParameterDescription("nper"),
                new ParameterDescription("pval"),
                new ParameterDescription("fval"),
                new ParameterDescription("type")
            ]
                ),
            new FunctionDescription("POISSON", "This function returns the Poisson distribution.", [
                new ParameterDescription("nevents"),
                new ParameterDescription("mean"),
                new ParameterDescription("cumulative")
            ]
                ),
            new FunctionDescription("POWER", "This function raises the specified number to the specified power.", [
                new ParameterDescription("number"),
                new ParameterDescription("power")
            ]
                ),
            new FunctionDescription("PPMT", "This function returns the amount of payment of principal for a loan given the present value, specified interest rate, and number of terms.", [
                new ParameterDescription("rate"),
                new ParameterDescription("per"),
                new ParameterDescription("nper"),
                new ParameterDescription("pval"),
                new ParameterDescription("fval"),
                new ParameterDescription("type")
            ]
                ),
            new FunctionDescription("PRICE", "This function calculates the price per $100 face value of a periodic interest security", [
                new ParameterDescription("settlement"),
                new ParameterDescription("maturity"),
                new ParameterDescription("rate"),
                new ParameterDescription("yield"),
                new ParameterDescription("redeem"),
                new ParameterDescription("frequency"),
                new ParameterDescription("basis")
            ]
                ),
            new FunctionDescription("PRICEDISC", "This function returns the price per $100 face value of a discounted security.", [
                new ParameterDescription("settle"),
                new ParameterDescription("mature"),
                new ParameterDescription("discount"),
                new ParameterDescription("redeem"),
                new ParameterDescription("basis")
            ]
                ),
            new FunctionDescription("PRICEMAT", "This function returns the price at maturity per $100 face value of a security that pays interest.", [
                new ParameterDescription("settle"),
                new ParameterDescription("mature"),
                new ParameterDescription("issue"),
                new ParameterDescription("rate"),
                new ParameterDescription("yield"),
                new ParameterDescription("basis")
            ]
                ),
            new FunctionDescription("PROB", "This function returns the probability that values in a range are between two limits.", [
                new ParameterDescription("array"),
                new ParameterDescription("probs"),
                new ParameterDescription("lower"),
                new ParameterDescription("upper")
            ]
                ),
            new FunctionDescription("PRODUCT", "This function multiplies all the arguments and returns the product.", [
                new ParameterDescription("value1"),
                new ParameterDescription("value2", true)
            ]
                ),
            //new FunctionDescription("PROPER", "This function capitalizes the first letter in each word of a text string.", [
            //    new ParameterDescription("text")
            //]
            //    ),
            new FunctionDescription("PV", "This function returns the present value of an investment based on the interest rate, number and amount of periodic payments, and future value. The present value is the total amount that a series of future payments is worth now.", [
                new ParameterDescription("rate"),
                new ParameterDescription("numper"),
                new ParameterDescription("paymt"),
                new ParameterDescription("fval"),
                new ParameterDescription("type")
            ]
                ),
            new FunctionDescription("QUARTILE", "This function returns which quartile (which quarter or 25 percent) of a data set a value is.", [
                new ParameterDescription("array"),
                new ParameterDescription("quart")
            ]
                ),
            new FunctionDescription("QUOTIENT", "This function returns the integer portion of a division. Use this to ignore the remainder of a division.", [
                new ParameterDescription("numerator"),
                new ParameterDescription("denominator")
            ]
                ),
            new FunctionDescription("RADIANS", "This function converts the specified number from degrees to radians.", [
                new ParameterDescription("value")
            ]
                ),
            new FunctionDescription("RADIANS", "This function converts the specified number from degrees to radians.", [
                new ParameterDescription("value")
            ]
                ),
            new FunctionDescription("RAND", "This function returns an evenly distributed random number between 0 and 1.", [

            ]
                ),
            new FunctionDescription("RANDBETWEEN", "This function returns a random number between the numbers you specify.", [
                new ParameterDescription("lower"),
                new ParameterDescription("upper")
            ]
                ),
            new FunctionDescription("RANK", "This function returns the rank of a number in a set of numbers. If you were to sort the set, the rank of the number would be its position in the list.", [
                new ParameterDescription("number"),
                new ParameterDescription("array"),
                new ParameterDescription("order")
            ]
                ),
            new FunctionDescription("RATE", "This function returns the interest rate per period of an annuity.", [
                new ParameterDescription("nper"),
                new ParameterDescription("pmt"),
                new ParameterDescription("pval"),
                new ParameterDescription("fval"),
                new ParameterDescription("type"),
                new ParameterDescription("guess")
            ]
                ),
            new FunctionDescription("RECEIVED", "This function returns the amount received at maturity for a fully invested security.", [
                new ParameterDescription("settle"),
                new ParameterDescription("mature"),
                new ParameterDescription("invest"),
                new ParameterDescription("discount"),
                new ParameterDescription("basis")
            ]
                ),
            new FunctionDescription("REPLACE", "This function replaces part of a text string with a different text string.", [
                new ParameterDescription("old_text"),
                new ParameterDescription("start_char"),
                new ParameterDescription("num_chars"),
                new ParameterDescription("new_text")
            ]
                ),
            new FunctionDescription("REPT", "This function repeats text a specified number of times.", [
                new ParameterDescription("text"),
                new ParameterDescription("number")
            ]
                ),
            new FunctionDescription("RIGHT", "This function returns the specified rightmost characters from a text value.", [
                new ParameterDescription("text"),
                new ParameterDescription("num_chars")
            ]
                ),
            new FunctionDescription("ROMAN", "This function converts an Arabic numeral to a Roman numeral text equivalent.", [
                new ParameterDescription("number"),
                new ParameterDescription("style")
            ]
                ),
            new FunctionDescription("ROUND", "This function rounds the specified value to the nearest number, using the specified number of decimal places.", [
                new ParameterDescription("value"),
                new ParameterDescription("places")
            ]
                ),
            new FunctionDescription("ROUNDDOWN", "This function rounds the specified number down to the nearest number, using the specified number of decimal places.", [
                new ParameterDescription("value"),
                new ParameterDescription("places")
            ]
                ),
            new FunctionDescription("ROUNDUP", "This function rounds the specified number up to the nearest number, using the specified number of decimal places.", [
                new ParameterDescription("value"),
                new ParameterDescription("places")
            ]
                ),
            new FunctionDescription("ROW", "This function returns the number of a row from a reference.", [
                new ParameterDescription("reference")
            ]
                ),
            new FunctionDescription("ROWS", "This function returns the number of rows in an array.", [
                new ParameterDescription("array")
            ]
                ),
            new FunctionDescription("RSQ", "This function returns the square of the Pearson product moment correlation coefficient (R‑squared) through data points in known y’s and known x’s.", [
                new ParameterDescription("array_dep"),
                new ParameterDescription("array_ind")
            ]
                ),
            new FunctionDescription("SEARCH", "This function finds one text string in another text string and returns the index of the starting position of the found text.", [
                new ParameterDescription("string1"),
                new ParameterDescription("string2")
            ]
                ),
            new FunctionDescription("SECOND", "This function returns the seconds (0 to 59) value for a specified time.", [
                new ParameterDescription("time")
            ]
                ),
            new FunctionDescription("SERIESSUM", "This function returns the sum of a power series.", [
                new ParameterDescription("x"),
                new ParameterDescription("n"),
                new ParameterDescription("m"),
                new ParameterDescription("coeff")
            ]
                ),
            new FunctionDescription("SIGN", "This function returns the sign of a number or expression.", [
                new ParameterDescription("cellreference")
            ]
                ),
            new FunctionDescription("SIN", "This function returns the sine of the specified angle.", [
                new ParameterDescription("angle")
            ]
                ),
            new FunctionDescription("SINH", "This function returns the hyperbolic sine of the specified number.", [
                new ParameterDescription("value")
            ]
                ),
            new FunctionDescription("SKEW", "This function returns the skewness of a distribution.", [
                new ParameterDescription("number1"),
                new ParameterDescription("number2", true)
            ]
                ),
            new FunctionDescription("SLN", "This function returns the straight-line depreciation of an asset for one period.", [
                new ParameterDescription("cost"),
                new ParameterDescription("salvage"),
                new ParameterDescription("life")
            ]
                ),
            new FunctionDescription("SLOPE", "This function calculates the slope of a linear regression.", [
                new ParameterDescription("array_dep"),
                new ParameterDescription("array_ind")
            ]
                ),
            new FunctionDescription("SMALL", "This function returns the nth smallest value in a data set, where n is specified.", [
                new ParameterDescription("array"),
                new ParameterDescription("n")
            ]
                ),
            new FunctionDescription("SQRT", "This function returns the positive square root of the specified number.", [
                new ParameterDescription("value")
            ]
                ),
            new FunctionDescription("SQRTPI", "This function returns the positive square root of a multiple of pi (p).", [
                new ParameterDescription("multiple")
            ]
                ),
            new FunctionDescription("STANDARDIZE", "This function returns a normalized value from a distribution characterized by mean and standard deviation.", [
                new ParameterDescription("x"),
                new ParameterDescription("mean"),
                new ParameterDescription("stdev")
            ]
                ),
            new FunctionDescription("STDEVA", "This function returns the standard deviation for a set of numbers, text, or logical values.", [
                new ParameterDescription("value1"),
                new ParameterDescription("value2", true)
            ]
                ),
            new FunctionDescription("STDEVP", "This function returns the standard deviation for an entire specified population (of numeric values).", [
                new ParameterDescription("value1"),
                new ParameterDescription("value2", true)
            ]
                ),
            new FunctionDescription("STDEVPA", "This function returns the standard deviation for an entire specified population, including text or logical values as well as numeric values.", [
                new ParameterDescription("value1"),
                new ParameterDescription("value2", true)
            ]
                ),
            new FunctionDescription("STEYX", "This function returns the standard error of the predicted y value for each x. The standard error is a measure of the amount of error in the prediction of y for a value of x.", [
                new ParameterDescription("array_dep"),
                new ParameterDescription("array_ind")
            ]
                ),
            new FunctionDescription("SUBSTITUTE", "This function substitutes a new string for specified characters in an existing string.", [
                new ParameterDescription("text"),
                new ParameterDescription("old_piece"),
                new ParameterDescription("new_piece"),
                new ParameterDescription("instance")
            ]
                ),
            new FunctionDescription("SUBTOTAL", "This function calculates a subtotal of a list of numbers using a specified built-in function.", [
                new ParameterDescription("functioncode"),
                new ParameterDescription("value1"),
                new ParameterDescription("value2", true)
            ]
                ),
            new FunctionDescription("SUM", "This function returns the sum of cells or range of cells.", [
                new ParameterDescription("value1"),
                new ParameterDescription("value2", true)
            ]
                ),
            new FunctionDescription("SUMIF", "This function adds the cells using a given criteria.", [
                new ParameterDescription("array"),
                new ParameterDescription("condition"),
                new ParameterDescription("sumrange")
            ]
                ),
            new FunctionDescription("SUMIFS", "This function adds the cells in a range using multiple criteria.", [
                new ParameterDescription("array"),
                new ParameterDescription("conditionarray"),
                new ParameterDescription("condition", true)
            ]
                ),
            new FunctionDescription("SUMPRODUCT", "This function returns the sum of products of cells. Multiplies corresponding components in the given arrays, and returns the sum of those products.", [
                new ParameterDescription("array1"),
                new ParameterDescription("array2", true)
            ]
                ),
            new FunctionDescription("SUMSQ", "This function returns the sum of the squares of the arguments.", [
                new ParameterDescription("value1"),
                new ParameterDescription("value2", true)
            ]
                ),
            new FunctionDescription("SUMX2MY2", "This function returns the sum of the difference of the squares of corresponding values in two arrays.", [
                new ParameterDescription("array_x"),
                new ParameterDescription("array_y")
            ]
                ),
            new FunctionDescription("SUMX2PY2", "This function returns the sum of the sum of squares of corresponding values in two arrays.", [
                new ParameterDescription("array_x"),
                new ParameterDescription("array_y")
            ]
                ),
            new FunctionDescription("SUMXMY2", "This function returns the sum of the square of the differences of corresponding values in two arrays.", [
                new ParameterDescription("array_x"),
                new ParameterDescription("array_y")
            ]
                ),
            new FunctionDescription("SYD", "This function returns the sum-of-years’ digits depreciation of an asset for a specified period.", [
                new ParameterDescription("cost"),
                new ParameterDescription("salvage"),
                new ParameterDescription("life"),
                new ParameterDescription("period")
            ]
                ),
            new FunctionDescription("T", "This function returns the text in a specified cell.", [
                new ParameterDescription("value")
            ]
                ),
            new FunctionDescription("TAN", "This function returns the tangent of the specified angle.", [
                new ParameterDescription("angle")
            ]
                ),
            new FunctionDescription("TANH", "This function returns the hyperbolic tangent of the specified number.", [
                new ParameterDescription("value")
            ]
                ),
            new FunctionDescription("TBILLEQ", "This function returns the equivalent yield for a Treasury bill (or T-bill)", [
                new ParameterDescription("settle"),
                new ParameterDescription("mature"),
                new ParameterDescription("discount")
            ]
                ),
            new FunctionDescription("TBILLPRICE", "This function returns the price per $100 face value for a Treasury bill (or T-bill).", [
                new ParameterDescription("settle"),
                new ParameterDescription("mature"),
                new ParameterDescription("discount")
            ]
                ),
            new FunctionDescription("TBILLYIELD", "This function returns the yield for a Treasury bill (or T-bill).", [
                new ParameterDescription("settle"),
                new ParameterDescription("mature"),
                new ParameterDescription("priceper")
            ]
                ),
            new FunctionDescription("TDIST", "This function returns the probability for the t-distribution.", [
                new ParameterDescription("x"),
                new ParameterDescription("deg"),
                new ParameterDescription("tails")
            ]
                ),
            new FunctionDescription("TEXT", "This function formats a number and converts it to text.", [
                new ParameterDescription("value"),
                new ParameterDescription("text")
            ]
                ),
            new FunctionDescription("TIME", "This function returns the TimeSpan object for a specified time.", [
                new ParameterDescription("hour"),
                new ParameterDescription("minutes"),
                new ParameterDescription("seconds")
            ]
                ),
            new FunctionDescription("TIMEVALUE", "This function returns the TimeSpan object of the time represented by a text string.", [
                new ParameterDescription("time_string")
            ]
                ),
            new FunctionDescription("TINV", "This function returns the t-value of the student's t-distribution as a function of the probability and the degrees of freedom.", [
                new ParameterDescription("prog"),
                new ParameterDescription("deg")
            ]
                ),
            new FunctionDescription("TODAY", "This function returns the date and time of the current date.", [

            ]
                ),
            new FunctionDescription("TRANSPOSE", "This function returns a vertical range of cells as a horizontal range or a horizontal range of cells as a vertical range.", [
                new ParameterDescription("array")
            ]
                ),
            new FunctionDescription("TREND", "This function returns values along a linear trend. This function fits a straight line to the arrays known x and y values. Trend returns the y values along that line for the array of specified new x values.", [
                new ParameterDescription("y"),
                new ParameterDescription("x"),
                new ParameterDescription("newx"),
                new ParameterDescription("constant")
            ]
                ),
            new FunctionDescription("TRIM", "This function removes extra spaces from a string and leaves single spaces between words.", [
                new ParameterDescription("text")
            ]
                ),
            new FunctionDescription("TRIMMEAN", "This function returns the mean of a subset of data excluding the top and bottom data.", [
                new ParameterDescription("array"),
                new ParameterDescription("percent")
            ]
                ),
            new FunctionDescription("TRUE", "This function returns the value for logical TRUE.", [

            ]
                ),
            new FunctionDescription("TRUNC", "This function removes the specified fractional part of the specified number.", [
                new ParameterDescription("value"),
                new ParameterDescription("precision")
            ]
                ),
            new FunctionDescription("TTEST", "This function returns the probability associated with a t-test.", [
                new ParameterDescription("array1"),
                new ParameterDescription("array2"),
                new ParameterDescription("tails"),
                new ParameterDescription("type")
            ]
                ),
            new FunctionDescription("TYPE", "This function returns the type of value.", [
                new ParameterDescription("value")
            ]
                ),
            new FunctionDescription("UPPER", "This function converts text to uppercase letters.", [
                new ParameterDescription("string")
            ]
                ),
            new FunctionDescription("VALUE", "This function converts a text string that is a number to a numeric value.", [
                new ParameterDescription("text")
            ]
                ),
            new FunctionDescription("VAR", "This function returns the variance based on a sample of a population, which uses only numeric values.", [
                new ParameterDescription("value1"),
                new ParameterDescription("value2", true)
            ]
                ),
            new FunctionDescription("VARA", "This function returns the variance based on a sample of a population, which includes numeric, logical, or text values.", [
                new ParameterDescription("value1"),
                new ParameterDescription("value2", true)
            ]
                ),
            new FunctionDescription("VARP", "This function returns variance based on the entire population, which uses only numeric values.", [
                new ParameterDescription("value1"),
                new ParameterDescription("value2", true)
            ]
                ),
            new FunctionDescription("VARPA", "This function returns variance based on the entire population, which includes numeric, logical, or text values.", [
                new ParameterDescription("value1"),
                new ParameterDescription("value2", true)
            ]
                ),
            new FunctionDescription("VDB", "This function returns the depreciation of an asset for any period you specify using the variable declining balance method.", [
                new ParameterDescription("cost"),
                new ParameterDescription("salvage"),
                new ParameterDescription("life"),
                new ParameterDescription("start"),
                new ParameterDescription("end"),
                new ParameterDescription("factor"),
                new ParameterDescription("switchnot")
            ]
                ),
            new FunctionDescription("VLOOKUP", "This function searches for a value in the leftmost column and returns a value in the same row from a column you specify.", [
                new ParameterDescription("value"),
                new ParameterDescription("array"),
                new ParameterDescription("colindex"),
                new ParameterDescription("approx")
            ]
                ),
            new FunctionDescription("WEEKDAY", "This function returns the number corresponding to the day of the week for a specified date.", [
                new ParameterDescription("date"),
                new ParameterDescription("type")
            ]
                ),
            new FunctionDescription("WEEKNUM", "This function returns a number that indicates the week of the year numerically.", [
                new ParameterDescription("date"),
                new ParameterDescription("weektype")
            ]
                ),
            new FunctionDescription("WEIBULL", "This function returns the two-parameter Weibull distribution, often used in reliability analysis.", [
                new ParameterDescription("x"),
                new ParameterDescription("alpha"),
                new ParameterDescription("beta"),
                new ParameterDescription("cumulative")
            ]
                ),
            new FunctionDescription("WORKDAY", "This function returns the number of working days before or after the starting date.", [
                new ParameterDescription("startdate"),
                new ParameterDescription("numdays"),
                new ParameterDescription("holidays")
            ]
                ),
            new FunctionDescription("XIRR", "This function calculates the internal rate of return for a schedule of cash flows that may not be periodic.", [
                new ParameterDescription("values"),
                new ParameterDescription("dates"),
                new ParameterDescription("guess")
            ]
                ),
            new FunctionDescription("XNPV", "This function calculates the net present value for a schedule of cash flows that may not be periodic.", [
                new ParameterDescription("rate"),
                new ParameterDescription("values"),
                new ParameterDescription("dates")
            ]
                ),
            new FunctionDescription("YEAR", "This function returns the year as an integer for a specified date.", [
                new ParameterDescription("date")
            ]
                ),
            new FunctionDescription("YEARFRAC", "This function returns the fraction of the year represented by the number of whole days between the start and end dates.", [
                new ParameterDescription("startdate"),
                new ParameterDescription("enddate"),
                new ParameterDescription("basis")
            ]
                ),
            new FunctionDescription("YIELD", "This function calculates the yield on a security that pays periodic interest.", [
                new ParameterDescription("settle"),
                new ParameterDescription("maturity"),
                new ParameterDescription("rate"),
                new ParameterDescription("price"),
                new ParameterDescription("redeem"),
                new ParameterDescription("frequency"),
                new ParameterDescription("basis")
            ]
                ),
            new FunctionDescription("YIELDDISC", "This function calculates the annual yield for a discounted security.", [
                new ParameterDescription("settle"),
                new ParameterDescription("maturity"),
                new ParameterDescription("price"),
                new ParameterDescription("redeem"),
                new ParameterDescription("basis")
            ]
                ),
            new FunctionDescription("YIELDMAT", "This function calculates the annual yield of a security that pays interest at maturity.", [
                new ParameterDescription("settle"),
                new ParameterDescription("maturity"),
                new ParameterDescription("issue"),
                new ParameterDescription("issrate"),
                new ParameterDescription("price"),
                new ParameterDescription("basis")
            ]
                ),
            new FunctionDescription("ZTEST", "This function returns the significance value of a z-test. The z-test generates a standard score for x with respect to the set of data and returns the two-tailed probability for the normal distribution.", [
                new ParameterDescription("array"),
                new ParameterDescription("x"),
                new ParameterDescription("sigma")
            ]
                ),
            new FunctionDescription("HBARSPARKLINE", "This function returns a data set used for representing a Hbar sparkline", [
                new ParameterDescription("value"),
                new ParameterDescription("colorScheme")
            ]
                ),
            new FunctionDescription("VBARSPARKLINE", "This function returns a data set used for representing a Vbar sparkline", [
                new ParameterDescription("value"),
                new ParameterDescription("colorScheme")
            ]
                ),
            new FunctionDescription("VARISPARKLINE", "This function returns a data set used for representing a variance sparkline", [
                new ParameterDescription("variance"),
                new ParameterDescription("reference"),
                new ParameterDescription("mini"),
                new ParameterDescription("maxi"),
                new ParameterDescription("mark"),
                new ParameterDescription("tickunit"),
                new ParameterDescription("legend"),
                new ParameterDescription("colorPositive"),
                new ParameterDescription("colorNegative"),
                new ParameterDescription("vertical")
            ]
                ),
            new FunctionDescription("PIESPARKLINE", "This function returns a data set used for representing a pie sparkline", [
                new ParameterDescription("range|percentage"),
                new ParameterDescription("color", true)
            ]
                ),
            new FunctionDescription("AREASPARKLINE", "This function returns a data set used for representing a area sparkline", [
                new ParameterDescription("points"),
                new ParameterDescription("mini"),
                new ParameterDescription("maxi"),
                new ParameterDescription("line1"),
                new ParameterDescription("line2"),
                new ParameterDescription("colorPositive"),
                new ParameterDescription("colorNegative")
            ]
                ),
            new FunctionDescription("SCATTERSPARKLINE", "This function returns a data set used for representing a scatter sparkline", [
                new ParameterDescription("points1"),
                new ParameterDescription("points2"),
                new ParameterDescription("minX"),
                new ParameterDescription("maxX"),
                new ParameterDescription("minY"),
                new ParameterDescription("maxY"),
                new ParameterDescription("hLine"),
                new ParameterDescription("vLine"),
                new ParameterDescription("xMinZone"),
                new ParameterDescription("xMaxZone"),
                new ParameterDescription("yMinZone"),
                new ParameterDescription("yMaxZone"),
                new ParameterDescription("tags"),
                new ParameterDescription("drawSymbol"),
                new ParameterDescription("drawLines"),
                new ParameterDescription("color1"),
                new ParameterDescription("color2"),
                new ParameterDescription("dash")
            ]
                ),
            new FunctionDescription("LINESPARKLINE", "This function returns a data set used for representing a line sparkline", [
                new ParameterDescription("data"),
                new ParameterDescription("dataOrientation"),
                new ParameterDescription("dateAxisData"),
                new ParameterDescription("dateAxisOrientation"),
                new ParameterDescription("setting")
            ]
                ),
            new FunctionDescription("COLUMNSPARKLINE", "This function returns a data set used for representing a column sparkline", [
                new ParameterDescription("data"),
                new ParameterDescription("dataOrientation"),
                new ParameterDescription("dateAxisData"),
                new ParameterDescription("dateAxisOrientation"),
                new ParameterDescription("setting")
            ]
                ),
            new FunctionDescription("WINLOSSSPARKLINE", "This function returns a data set used for representing a win/loss sparkline", [
                new ParameterDescription("data"),
                new ParameterDescription("dataOrientation"),
                new ParameterDescription("dateAxisData"),
                new ParameterDescription("dateAxisOrientation"),
                new ParameterDescription("setting")
            ]
                ),
            new FunctionDescription("BULLETSPARKLINE", "This function returns a data set used for representing a bullet sparkline", [
                new ParameterDescription("measure"),
                new ParameterDescription("target"),
                new ParameterDescription("maxi"),
                new ParameterDescription("good"),
                new ParameterDescription("bad"),
                new ParameterDescription("forecast"),
                new ParameterDescription("tickunit"),
                new ParameterDescription("colorScheme"),
                new ParameterDescription("vertical")
            ]
                ),
            new FunctionDescription("SPREADSPARKLINE", "This function returns a data set used for representing a spread sparkline", [
                new ParameterDescription("points"),
                new ParameterDescription("showAverage"),
                new ParameterDescription("scaleStart"),
                new ParameterDescription("scaleEnd"),
                new ParameterDescription("style"),
                new ParameterDescription("colorScheme"),
                new ParameterDescription("vertical")
            ]
                ),
            new FunctionDescription("STACKEDSPARKLINE", "This function returns a data set used for representing a stacked sparkline", [
                new ParameterDescription("points"),
                new ParameterDescription("colorRange"),
                new ParameterDescription("labelRange"),
                new ParameterDescription("maximum"),
                new ParameterDescription("targetRed"),
                new ParameterDescription("targetGreen"),
                new ParameterDescription("targetBlue"),
                new ParameterDescription("tragetYellow"),
                new ParameterDescription("color"),
                new ParameterDescription("highlightPosition"),
                new ParameterDescription("vertical"),
                new ParameterDescription("textOrientation"),
                new ParameterDescription("textSize")
            ]
                ),
            new FunctionDescription("BOXPLOTSPARKLINE", "This function returns a data set used for representing a boxplot sparkline", [
                new ParameterDescription("points"),
                new ParameterDescription("boxPlotClass"),
                new ParameterDescription("showAverage"),
                new ParameterDescription("scaleStart"),
                new ParameterDescription("scaleEnd"),
                new ParameterDescription("acceptableStart"),
                new ParameterDescription("acceptableEnd"),
                new ParameterDescription("colorScheme"),
                new ParameterDescription("style"),
                new ParameterDescription("vertical")
            ]
                ),
            new FunctionDescription("CASCADESPARKLINE", "This function returns a data set used for representing a cascade sparkline", [
                new ParameterDescription("pointsRange"),
                new ParameterDescription("pointIndex"),
                new ParameterDescription("labelsRange"),
                new ParameterDescription("minimum"),
                new ParameterDescription("maximum"),
                new ParameterDescription("colorPositive"),
                new ParameterDescription("colorNegative"),
                new ParameterDescription("vertical")
            ]
                ),
            new FunctionDescription("PARETOSPARKLINE", "This function returns a data set used for representing a pareto sparkline", [
                new ParameterDescription("points"),
                new ParameterDescription("pointIndex"),
                new ParameterDescription("colorRange"),
                new ParameterDescription("target"),
                new ParameterDescription("target2"),
                new ParameterDescription("highlightPosition"),
                new ParameterDescription("label"),
                new ParameterDescription("vertical")
            ]
                ),
            new FunctionDescription("CEILING.PRECISE", "This function rounds a number up to the nearest integer or to the nearest multiple of a specified value.", [
                new ParameterDescription("number"),
                new ParameterDescription("signif")
            ]
                ),
            new FunctionDescription("COVARIANCE.S", "This function returns the sample covariance, which is the average of the products of deviations for each data point pair in two sets of numbers.", [
                new ParameterDescription("array1"),
                new ParameterDescription("array2")
            ]
                ),
            new FunctionDescription("FLOOR.PRECISE", "This function rounds a number down to the nearest integer or to the nearest multiple of a specified value.", [
                new ParameterDescription("number"),
                new ParameterDescription("signif")
            ]
                ),
            new FunctionDescription("PERCENTILE.EXC", "This function returns the nth percentile of values in a range.", [
                new ParameterDescription("array"),
                new ParameterDescription("n")
            ]
                ),
            new FunctionDescription("QUARTILE.EXC", "This function returns which quartile (which quarter or 25 percent) of a data set a value is.", [
                new ParameterDescription("array"),
                new ParameterDescription("quart")
            ]
                ),
            new FunctionDescription("RANK.AVG", "This function returns the rank of a number in a set of numbers. If some values have the same rank, it will return the average rank.", [
                new ParameterDescription("number"),
                new ParameterDescription("array"),
                new ParameterDescription("order")
            ]
                ),
            new FunctionDescription("MODE.MULT", "This function returns the most frequently occurring vertical array or the most frequently occurring value in a set of data.", [
                new ParameterDescription("number1"),
                new ParameterDescription("number2", true)
            ]
                ),
            new FunctionDescription("STDEV.P", "This function returns the standard deviation for an entire specified population (of numeric values).", [
                new ParameterDescription("value1"),
                new ParameterDescription("value2", true)
            ]
                ),
            new FunctionDescription("VAR.P", "This function returns variance based on the entire population, which uses only numeric values.", [
                new ParameterDescription("value1"),
                new ParameterDescription("value2", true)
            ]
                ),
            new FunctionDescription("COVARIANCE.P", "This function returns the covariance, which is the average of the products of deviations for each data point pair in two sets of numbers.", [
                new ParameterDescription("array1"),
                new ParameterDescription("array2")
            ]
                ),
            new FunctionDescription("MODE.SNGL", "This function returns the most frequently occurring value in a set of data.", [
                new ParameterDescription("value1"),
                new ParameterDescription("value2", true)
            ]
                ),
            new FunctionDescription("PERCENTILE.INC", "This function returns the nth percentile of values in a range.", [
                new ParameterDescription("array"),
                new ParameterDescription("n")
            ]
                ),
            new FunctionDescription("QUARTILE.INC", "This function returns which quartile (which quarter or 25 percent) of a data set a value is.", [
                new ParameterDescription("array"),
                new ParameterDescription("quart")
            ]
                ),
            new FunctionDescription("RANK.EQ", "This function returns the rank of a number in a set of numbers. If you were to sort the set, the rank of the number would be its position in the list.", [
                new ParameterDescription("number"),
                new ParameterDescription("array"),
                new ParameterDescription("order")
            ]
                ),
            new FunctionDescription("STDEV", "This function returns standard deviation is estimated based on a sample.", [
                new ParameterDescription("number1"),
                new ParameterDescription("number2", true)
            ]
                ),
            new FunctionDescription("STDEV.S", "This function returns standard deviation is estimated based on a sample.", [
                new ParameterDescription("number1"),
                new ParameterDescription("number2", true)
            ]
                ),
            new FunctionDescription("VAR.S", "This function returns the variance based on a sample of a population, which uses only numeric values.", [
                new ParameterDescription("value1"),
                new ParameterDescription("value2", true)
            ]
                ),
            new FunctionDescription("BETA.INV", "This function calculates the inverse of the cumulative beta distribution function.", [
                new ParameterDescription("prob"),
                new ParameterDescription("alpha"),
                new ParameterDescription("beta"),
                new ParameterDescription("lower"),
                new ParameterDescription("upper")
            ]
                ),
            new FunctionDescription("BINOM.DIST", "This function calculates the individual term binomial distribution probability.", [
                new ParameterDescription("x"),
                new ParameterDescription("n"),
                new ParameterDescription("p"),
                new ParameterDescription("cumulative")
            ]
                ),
            new FunctionDescription("BINOM.INV", "This function returns the criterion binomial, the smallest value for which the cumulative binomial distribution is greater than or equal to a criterion value.", [
                new ParameterDescription("n"),
                new ParameterDescription("p"),
                new ParameterDescription("alpha")
            ]
                ),
            new FunctionDescription("CHISQ.DIST.RT", "This function calculates the one-tailed probability of the chi-squared distribution.", [
                new ParameterDescription("value"),
                new ParameterDescription("deg")
            ]
                ),
            new FunctionDescription("CHISQ.INV.RT", "This function calculates the inverse of the one-tailed probability of the chi-squared distribution.", [
                new ParameterDescription("prob"),
                new ParameterDescription("deg")
            ]
                ),
            new FunctionDescription("CHISQ.TEST", "This function calculates the test for independence from the chi-squared distribution.", [
                new ParameterDescription("obs_array"),
                new ParameterDescription("exp_array")
            ]
                ),
            new FunctionDescription("CONFIDENCE.NORM", "This function returns confidence interval for a population mean.", [
                new ParameterDescription("alpha"),
                new ParameterDescription("stdev"),
                new ParameterDescription("size")
            ]
                ),
            new FunctionDescription("EXPON.DIST", "This function returns the exponential distribution or the probability density.", [
                new ParameterDescription("value"),
                new ParameterDescription("lambda"),
                new ParameterDescription("cumulative")
            ]
                ),
            new FunctionDescription("F.DIST.RT", "This function calculates the F probability distribution, to see degrees of diversity between two sets of data.", [
                new ParameterDescription("value"),
                new ParameterDescription("degnum"),
                new ParameterDescription("degden")
            ]
                ),
            new FunctionDescription("F.INV.RT", "This function returns the inverse of the F probability distribution.", [
                new ParameterDescription("p"),
                new ParameterDescription("degnum"),
                new ParameterDescription("degden")
            ]
                ),
            new FunctionDescription("F.TEST", "This function returns the result of an F-test, which returns the one-tailed probability that the variances in two arrays are not significantly different.", [
                new ParameterDescription("array1"),
                new ParameterDescription("array2")
            ]
                ),
            new FunctionDescription("GAMMA.DIST", "This function returns the gamma distribution.", [
                new ParameterDescription("x"),
                new ParameterDescription("alpha"),
                new ParameterDescription("beta"),
                new ParameterDescription("cumulative")
            ]
                ),
            new FunctionDescription("GAMMA.INV", "This function returns the inverse of the gamma cumulative distribution.", [
                new ParameterDescription("p"),
                new ParameterDescription("alpha"),
                new ParameterDescription("beta")
            ]
                ),
            new FunctionDescription("LOGNORM.INV", "This function returns the inverse of the lognormal cumulative distribution function of x, where LN(x) is normally distributed with the specified mean and standard deviation.", [
                new ParameterDescription("prob"),
                new ParameterDescription("mean"),
                new ParameterDescription("stdev")
            ]
                ),
            new FunctionDescription("NORM.DIST", "This function returns the normal cumulative distribution for the specified mean and standard deviation.", [
                new ParameterDescription("x"),
                new ParameterDescription("mean"),
                new ParameterDescription("stdev"),
                new ParameterDescription("cumulative")
            ]
                ),
            new FunctionDescription("NORM.INV", "This function returns the inverse of the normal cumulative distribution for the given mean and standard deviation.", [
                new ParameterDescription("prob"),
                new ParameterDescription("mean"),
                new ParameterDescription("stdev")
            ]
                ),
            new FunctionDescription("NORM.S.INV", "This function returns the inverse of the standard normal cumulative distribution. The distribution has a mean of zero and a standard deviation of one.", [
                new ParameterDescription("prob")
            ]
                ),
            new FunctionDescription("PERCENTRANK.INC", "This function returns the rank of a value in a data set as a percentage of the data set.", [
                new ParameterDescription("array"),
                new ParameterDescription("n"),
                new ParameterDescription("signif")
            ]
                ),
            new FunctionDescription("POISSON.DIST", "This function returns the Poisson distribution.", [
                new ParameterDescription("nevents"),
                new ParameterDescription("mean"),
                new ParameterDescription("cumulative")
            ]
                ),
            new FunctionDescription("T.INV.2T", "This function returns the t-value of the student's t-distribution as a function of the probability and the degrees of freedom.", [
                new ParameterDescription("prog"),
                new ParameterDescription("deg")
            ]
                ),
            new FunctionDescription("T.TEST", "This function returns the probability associated with a t-test.", [
                new ParameterDescription("array1"),
                new ParameterDescription("array2"),
                new ParameterDescription("tails"),
                new ParameterDescription("type")
            ]
                ),
            new FunctionDescription("WEIBULL.DIST", "This function returns the two-parameter Weibull distribution, often used in reliability analysis.", [
                new ParameterDescription("x"),
                new ParameterDescription("alpha"),
                new ParameterDescription("beta"),
                new ParameterDescription("cumulative")
            ]
                ),
            new FunctionDescription("Z.TEST", "This function returns the significance value of a z-test. The z-test generates a standard score for x with respect to the set of data and returns the two-tailed probability for the normal distribution.", [
                new ParameterDescription("array"),
                new ParameterDescription("x"),
                new ParameterDescription("sigma")
            ]
                ),
            new FunctionDescription("T.DIST.RT", "This function returns the right-tailed t-distribution.", [
                new ParameterDescription("x"),
                new ParameterDescription("deg")
            ]
                ),
            new FunctionDescription("T.DIST.2T", "This function returns the two-tailed t-distribution.", [
                new ParameterDescription("x"),
                new ParameterDescription("deg")
            ]
                ),
            new FunctionDescription("ISO.CEILING", "This function returns a number up to the nearest integer or to the nearest multiple of significance, regardless of sign of significance.", [
                new ParameterDescription("number"),
                new ParameterDescription("signif")
            ]
                ),
            new FunctionDescription("BETA.DIST", "This function returns the beta distribution.", [
                new ParameterDescription("x"),
                new ParameterDescription("alpha"),
                new ParameterDescription("beta"),
                new ParameterDescription("cumulative"),
                new ParameterDescription("lower"),
                new ParameterDescription("upper")
            ]
                ),
            new FunctionDescription("GAMMALN.PRECISE", "This function returns the natural logarithm of the gamma function.", [
                new ParameterDescription("value")
            ]
                ),
            new FunctionDescription("ERF.PRECISE", "This function returns the error function.", [
                new ParameterDescription("lowerlimit")
            ]
                ),
            new FunctionDescription("ERFC.PRECISE", "This function returns the complementary ERF function.", [
                new ParameterDescription("lowerlimit")
            ]
                ),
            new FunctionDescription("PERCENTRANK.EXC", "This function returns the percentage rank(0..1, exclusive) of a value in a data set.", [
                new ParameterDescription("array"),
                new ParameterDescription("n"),
                new ParameterDescription("signif")
            ]
                ),
            new FunctionDescription("HYPGEOM.DIST", "This function returns the hypergeometric distribution.", [
                new ParameterDescription("x"),
                new ParameterDescription("n"),
                new ParameterDescription("M"),
                new ParameterDescription("N"),
                new ParameterDescription("cumulative")
            ]
                ),
            new FunctionDescription("LOGNORM.DIST", "This function returns the log normal distribution of x.", [
                new ParameterDescription("x"),
                new ParameterDescription("mean"),
                new ParameterDescription("stdev"),
                new ParameterDescription("cumulative")
            ]
                ),
            new FunctionDescription("NEGBINOM.DIST", "This function returns the negative binomial distribution.", [
                new ParameterDescription("x"),
                new ParameterDescription("r"),
                new ParameterDescription("p"),
                new ParameterDescription("cumulative")
            ]
                ),
            new FunctionDescription("NORM.S.DIST", "This function returns the standard normal distribution.", [
                new ParameterDescription("z"),
                new ParameterDescription("cumulative")
            ]
                ),
            new FunctionDescription("T.DIST", "This function returns the t-distribution.", [
                new ParameterDescription("x"),
                new ParameterDescription("deg"),
                new ParameterDescription("cumulative")
            ]
                ),
            new FunctionDescription("F.DIST", "This function returns the F probability distribution.", [
                new ParameterDescription("x"),
                new ParameterDescription("degnum"),
                new ParameterDescription("degden"),
                new ParameterDescription("cumulative")
            ]
                ),
            new FunctionDescription("CHISQ.DIST", "This function returns the chi-squared distribution.", [
                new ParameterDescription("x"),
                new ParameterDescription("deg"),
                new ParameterDescription("cumulative")
            ]
                ),
            new FunctionDescription("F.INV", "This function returns the inverse of the F probability distribution.", [
                new ParameterDescription("probability"),
                new ParameterDescription("degnum"),
                new ParameterDescription("degden")
            ]
                ),
            new FunctionDescription("T.INV", "This function returns the left-tailed inverse of the t-distribution.", [
                new ParameterDescription("probability"),
                new ParameterDescription("deg")
            ]
                ),
            new FunctionDescription("CHISQ.INV", "This function returns the inverse of left-tailed probability of the chi-squared distribution.", [
                new ParameterDescription("probability"),
                new ParameterDescription("deg")
            ]
                ),
            new FunctionDescription("CONFIDENCE.T", "This function returns the confidence interval for a Student's t distribution.", [
                new ParameterDescription("alpha"),
                new ParameterDescription("stdev"),
                new ParameterDescription("size")
            ]
                ),
            new FunctionDescription("NETWORKDAYS.INTL", "This function returns the number of workdays between two dates using arguments to indicate holidays and weekend days.", [
                new ParameterDescription("startdate"),
                new ParameterDescription("enddate"),
                new ParameterDescription("weekend"),
                new ParameterDescription("holidays")
            ]
                ),
            new FunctionDescription("WORKDAY.INTL", "This function returns the serial number of the date before or after a number of workdays with custom weekend parameters. These parameters indicate weekend days and holidays.", [
                new ParameterDescription("startdate"),
                new ParameterDescription("numdays"),
                new ParameterDescription("weekend"),
                new ParameterDescription("holidays")
            ]
                )
        ];
    }
    //#endregion
}