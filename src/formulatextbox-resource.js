var wijmo;
(function (wijmo) {
    ///<reference path="feature.ts" />
    (function (spread) {
        spread.feature("formulatextbox_resource");

        //#region EN
        var FormulaTextBoxResource_EN = (function () {
            function FormulaTextBoxResource_EN() {
            }
            FormulaTextBoxResource_EN.Functions = [
                {
                    name: "ABS",
                    //shortDescription: "",
                    description: "This function calculates the absolute value of the specified value.",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "ACCRINT",
                    //shortDescription: "",
                    description: "This function calculates the accrued interest for a security that pays periodic interest.",
                    parameters: [
                        {
                            name: "issue"
                        },
                        {
                            name: "first"
                        },
                        {
                            name: "settle"
                        },
                        {
                            name: "rate"
                        },
                        {
                            name: "par"
                        },
                        {
                            name: "frequency"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "ACCRINTM",
                    //shortDescription: "",
                    description: "This function calculates the accrued interest at maturity for a security that pays periodic interest.",
                    parameters: [
                        {
                            name: "issue"
                        },
                        {
                            name: "maturity"
                        },
                        {
                            name: "rate"
                        },
                        {
                            name: "par"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "ACOS",
                    //shortDescription: "",
                    description: "This function calculates the arccosine, that is, the angle whose cosine is the specified value.",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "ACOSH",
                    //shortDescription: "",
                    description: "This function calculates the inverse hyperbolic cosine of the specified value.",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "ADDRESS",
                    //shortDescription: "",
                    description: "This function uses the row and column numbers to create a cell address in text.",
                    parameters: [
                        {
                            name: "row"
                        },
                        {
                            name: "column"
                        },
                        {
                            name: "absnum"
                        },
                        {
                            name: "a1style"
                        },
                        {
                            name: "sheettext"
                        }
                    ]
                },
                {
                    name: "AMORDEGRC",
                    //shortDescription: "",
                    description: "This function returns the depreciation for an accounting period, taking into consideration prorated depreciation, and applies a depreciation coefficient in the calculation based on the life of the assets.",
                    parameters: [
                        {
                            name: "cost"
                        },
                        {
                            name: "datepurchased"
                        },
                        {
                            name: "firstperiod"
                        },
                        {
                            name: "salvage"
                        },
                        {
                            name: "period"
                        },
                        {
                            name: "drate"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "AMORLINC",
                    //shortDescription: "",
                    description: "This function calculates the depreciation for an accounting period, taking into account prorated depreciation.",
                    parameters: [
                        {
                            name: "cost"
                        },
                        {
                            name: "datepurchased"
                        },
                        {
                            name: "firstperiod"
                        },
                        {
                            name: "salvage"
                        },
                        {
                            name: "period"
                        },
                        {
                            name: "drate"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "AND",
                    //shortDescription: "",
                    description: "Check whether all argumengts are True,and returns True if all argements are True.",
                    parameters: [
                        {
                            name: "logical1"
                        },
                        {
                            name: "logical2"
                        }
                    ]
                },
                {
                    name: "ASIN",
                    //shortDescription: "",
                    description: "This function calculates the arcsine, that is, the angle whose sine is the specified value.",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "ASINH",
                    //shortDescription: "",
                    description: "This function calculates the inverse hyperbolic sine of a number.",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "ATAN",
                    //shortDescription: "",
                    description: "This function calculates the arctangent, that is, the angle whose tangent is the specified value.",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "ATAN2",
                    //shortDescription: "",
                    description: "This function calculates the arctangent of the specified x- and y-coordinates.",
                    parameters: [
                        {
                            name: "x"
                        },
                        {
                            name: "y"
                        }
                    ]
                },
                {
                    name: "ATANH",
                    //shortDescription: "",
                    description: "This function calculates the inverse hyperbolic tangent of a number.",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "AVEDEV",
                    //shortDescription: "",
                    description: "This function calculates the average of the absolute deviations of the specified values from their mean.",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "AVERAGE",
                    //shortDescription: "",
                    description: "This function calculates the average of the specified numeric values.",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "AVERAGEA",
                    //shortDescription: "",
                    description: "This function calculates the average of the specified values, including text or logical values as well as numeric values.",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "AVERAGEIF",
                    //shortDescription: "",
                    description: "This function calculates the average of the specified numeric values provided that they meet the specified criteria.",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        },
                        {
                            name: "condition"
                        }
                    ]
                },
                {
                    name: "AVERAGEIFS",
                    //shortDescription: "",
                    description: "This function calculates the average of all cells that meet multiple specified criteria.",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "condition1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        },
                        {
                            name: "condition2..."
                        }
                    ]
                },
                {
                    name: "BESSELI",
                    //shortDescription: "",
                    description: "This function calculates the modified Bessel function of the first kind evaluated for purely imaginary arguments.",
                    parameters: [
                        {
                            name: "value"
                        },
                        {
                            name: "order"
                        }
                    ]
                },
                {
                    name: "BESSELJ",
                    //shortDescription: "",
                    description: "This function calculates the Bessel function of the first kind.",
                    parameters: [
                        {
                            name: "value"
                        },
                        {
                            name: "order"
                        }
                    ]
                },
                {
                    name: "BESSELK",
                    //shortDescription: "",
                    description: "This function calculates the modified Bessel function of the second kind evaluated for purely imaginary arguments.",
                    parameters: [
                        {
                            name: "value"
                        },
                        {
                            name: "order"
                        }
                    ]
                },
                {
                    name: "BESSELY",
                    //shortDescription: "",
                    description: "This function calculates the Bessel function of the second kind.",
                    parameters: [
                        {
                            name: "value"
                        },
                        {
                            name: "order"
                        }
                    ]
                },
                {
                    name: "BETADIST",
                    //shortDescription: "",
                    description: "This function calculates the cumulative beta distribution function.",
                    parameters: [
                        {
                            name: "x"
                        },
                        {
                            name: "alpha"
                        },
                        {
                            name: "beta"
                        },
                        {
                            name: "lower"
                        },
                        {
                            name: "upper"
                        }
                    ]
                },
                {
                    name: "BETAINV",
                    //shortDescription: "",
                    description: "This function calculates the inverse of the cumulative beta distribution function.",
                    parameters: [
                        {
                            name: "prob"
                        },
                        {
                            name: "alpha"
                        },
                        {
                            name: "beta"
                        },
                        {
                            name: "lower"
                        },
                        {
                            name: "upper"
                        }
                    ]
                },
                {
                    name: "BIN2DEC",
                    //shortDescription: "",
                    description: "This function converts a binary number to a decimal number",
                    parameters: [
                        {
                            name: "number"
                        }
                    ]
                },
                {
                    name: "BIN2HEX",
                    //shortDescription: "",
                    description: "This function converts a binary number to a hexadecimal number.",
                    parameters: [
                        {
                            name: "number"
                        },
                        {
                            name: "places"
                        }
                    ]
                },
                {
                    name: "BIN2OCT",
                    //shortDescription: "",
                    description: "This function converts a binary number to an octal number.",
                    parameters: [
                        {
                            name: "number"
                        },
                        {
                            name: "places"
                        }
                    ]
                },
                {
                    name: "BINOMDIST",
                    //shortDescription: "",
                    description: "This function calculates the individual term binomial distribution probability.",
                    parameters: [
                        {
                            name: "x"
                        },
                        {
                            name: "n"
                        },
                        {
                            name: "p"
                        },
                        {
                            name: "cumulative"
                        }
                    ]
                },
                {
                    name: "CEILING",
                    //shortDescription: "",
                    description: "This function rounds a number up to the nearest multiple of a specified value.",
                    parameters: [
                        {
                            name: "value"
                        },
                        {
                            name: "signif"
                        }
                    ]
                },
                {
                    name: "CHAR",
                    //shortDescription: "",
                    description: "This function returns the character specified by a number.",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "CHIDIST",
                    //shortDescription: "",
                    description: "This function calculates the one-tailed probability of the chi-squared distribution.",
                    parameters: [
                        {
                            name: "value"
                        },
                        {
                            name: "deg"
                        }
                    ]
                },
                {
                    name: "CHIINV",
                    //shortDescription: "",
                    description: "This function calculates the inverse of the one-tailed probability of the chi-squared distribution",
                    parameters: [
                        {
                            name: "prob"
                        },
                        {
                            name: "deg"
                        }
                    ]
                },
                {
                    name: "CHITEST",
                    //shortDescription: "",
                    description: "This function calculates the test for independence from the chi-squared distribution.",
                    parameters: [
                        {
                            name: "obs_array"
                        },
                        {
                            name: "exp_array"
                        }
                    ]
                },
                {
                    name: "CHOOSE",
                    //shortDescription: "",
                    description: "This function returns a value from a list of values.",
                    parameters: [
                        {
                            name: "index"
                        },
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "CLEAN",
                    //shortDescription: "",
                    description: "This function removes all non-printable characters from text.",
                    parameters: [
                        {
                            name: "text"
                        }
                    ]
                },
                {
                    name: "CODE",
                    //shortDescription: "",
                    description: "This function returns a numeric code to represent the first character in a text string. The returned code corresponds to the Windows character set (ANSI).",
                    parameters: [
                        {
                            name: "text"
                        }
                    ]
                },
                {
                    name: "COLUMN",
                    //shortDescription: "",
                    description: "This function returns the column number of a reference.",
                    parameters: [
                        {
                            name: "reference"
                        }
                    ]
                },
                {
                    name: "COLUMNS",
                    //shortDescription: "",
                    description: "This function returns the number of columns in an array.",
                    parameters: [
                        {
                            name: "array"
                        }
                    ]
                },
                {
                    name: "COMBIN",
                    //shortDescription: "",
                    description: "This function calculates the number of possible combinations for a specified number of items.",
                    parameters: [
                        {
                            name: "k"
                        },
                        {
                            name: "n"
                        }
                    ]
                },
                {
                    name: "COMPLEX",
                    //shortDescription: "",
                    description: "This function converts real and imaginary coefficients into a complex number.",
                    parameters: [
                        {
                            name: "realcoeff"
                        },
                        {
                            name: "imagcoeff"
                        },
                        {
                            name: "suffix"
                        }
                    ]
                },
                {
                    name: "CONCATENATE",
                    //shortDescription: "",
                    description: "This function combines multiple text strings or numbers into one text string.",
                    parameters: [
                        {
                            name: "text1"
                        },
                        {
                            name: "text2"
                        },
                        {
                            name: "...."
                        }
                    ]
                },
                {
                    name: "CONFIDENCE",
                    //shortDescription: "",
                    description: "This function returns confidence interval for a population mean.",
                    parameters: [
                        {
                            name: "alpha"
                        },
                        {
                            name: "stdev"
                        },
                        {
                            name: "size"
                        }
                    ]
                },
                {
                    name: "CONVERT",
                    //shortDescription: "",
                    description: "This function converts a number from one measurement system to its equivalent in another measurement system.",
                    parameters: [
                        {
                            name: "number"
                        },
                        {
                            name: "from-unit"
                        },
                        {
                            name: "to-unit"
                        }
                    ]
                },
                {
                    name: "CORREL",
                    //shortDescription: "",
                    description: "This function returns the correlation coefficient of the two sets of data.",
                    parameters: [
                        {
                            name: "array1"
                        },
                        {
                            name: "array2"
                        }
                    ]
                },
                {
                    name: "COS",
                    //shortDescription: "",
                    description: "This function returns the cosine of the specified angle.",
                    parameters: [
                        {
                            name: "angle"
                        }
                    ]
                },
                {
                    name: "COSH",
                    //shortDescription: "",
                    description: "This function returns the hyperbolic cosine of the specified value.",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "COUNT",
                    //shortDescription: "",
                    description: "This function returns the number of cells that contain numbers.",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "COUNTA",
                    //shortDescription: "",
                    description: "This function returns the number of number of cells that contain numbers, text, or logical values.",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "COUNTBLANK",
                    //shortDescription: "",
                    description: "This function returns the number of empty (or blank) cells in a range of cells on a sheet.",
                    parameters: [
                        {
                            name: "cellrange"
                        }
                    ]
                },
                {
                    name: "COUNTIF",
                    //shortDescription: "",
                    description: "This function returns the number of cells that meet a certain condition",
                    parameters: [
                        {
                            name: "cellrange"
                        },
                        {
                            name: "condition"
                        }
                    ]
                },
                {
                    name: "COUNTIFS",
                    //shortDescription: "",
                    description: "This function returns the number of cells that meet multiple conditions.",
                    parameters: [
                        {
                            name: "cellrange"
                        },
                        {
                            name: "condition"
                        }
                    ]
                },
                {
                    name: "COUPDAYBS",
                    //shortDescription: "",
                    description: "This function calculates the number of days from the beginning of the coupon period to the settlement date.",
                    parameters: [
                        {
                            name: "settlement"
                        },
                        {
                            name: "maturity"
                        },
                        {
                            name: "frequency"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "COUPDAYS",
                    //shortDescription: "",
                    description: "This function returns the number of days in the coupon period that contains the settlement date.",
                    parameters: [
                        {
                            name: "settlement"
                        },
                        {
                            name: "maturity"
                        },
                        {
                            name: "frequency"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "COUPDAYSNC",
                    //shortDescription: "",
                    description: "This function calculates the number of days from the settlement date to the next coupon date.",
                    parameters: [
                        {
                            name: "settlement"
                        },
                        {
                            name: "maturity"
                        },
                        {
                            name: "frequency"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "COUPNCD",
                    //shortDescription: "",
                    description: "This function returns a date number of the next coupon date after the settlement date.",
                    parameters: [
                        {
                            name: "settlement"
                        },
                        {
                            name: "maturity"
                        },
                        {
                            name: "frequency"
                        },
                        {
                            name: "basi"
                        }
                    ]
                },
                {
                    name: "COUPNUM",
                    //shortDescription: "",
                    description: "This function returns the number of coupons due between the settlement date and maturity date.",
                    parameters: [
                        {
                            name: "settlement"
                        },
                        {
                            name: "maturity"
                        },
                        {
                            name: "frequency"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "COUPPCD",
                    //shortDescription: "",
                    description: "This function returns a date number of the previous coupon date before the settlement date.",
                    parameters: [
                        {
                            name: "settlement"
                        },
                        {
                            name: "maturity"
                        },
                        {
                            name: "frequency"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "COVAR",
                    //shortDescription: "",
                    description: "This function returns the covariance, which is the average of the products of deviations for each data point pair in two sets of numbers.",
                    parameters: [
                        {
                            name: "array1"
                        },
                        {
                            name: "array2"
                        }
                    ]
                },
                {
                    name: "CRITBINOM",
                    //shortDescription: "",
                    description: "This function returns the criterion binomial, the smallest value for which the cumulative binomial distribution is greater than or equal to a criterion value.",
                    parameters: [
                        {
                            name: "n"
                        },
                        {
                            name: "p"
                        },
                        {
                            name: "alpha"
                        }
                    ]
                },
                {
                    name: "CUMIPMT",
                    //shortDescription: "",
                    description: "This function returns the cumulative interest paid on a loan between the starting and ending periods.",
                    parameters: [
                        {
                            name: "rate"
                        },
                        {
                            name: "nper"
                        },
                        {
                            name: "pval"
                        },
                        {
                            name: "startperiod"
                        },
                        {
                            name: "endperiod"
                        },
                        {
                            name: "paytype"
                        }
                    ]
                },
                {
                    name: "CUMPRINC",
                    //shortDescription: "",
                    description: "This function returns the cumulative principal paid on a loan between the start and end periods.",
                    parameters: [
                        {
                            name: "rate"
                        },
                        {
                            name: "nper"
                        },
                        {
                            name: "pval"
                        },
                        {
                            name: "startperiod"
                        },
                        {
                            name: "endperiod"
                        },
                        {
                            name: "paytype"
                        }
                    ]
                },
                {
                    name: "DATE",
                    //shortDescription: "",
                    description: "This function returns the DateTime object for a particular date, specified by the year, month, and day.",
                    parameters: [
                        {
                            name: "year"
                        },
                        {
                            name: "month"
                        },
                        {
                            name: "day"
                        }
                    ]
                },
                {
                    name: "DATEDIF",
                    //shortDescription: "",
                    description: "This function returns the number of days, months, or years between two dates.",
                    parameters: [
                        {
                            name: "date1"
                        },
                        {
                            name: "date2"
                        },
                        {
                            name: "outputcode"
                        }
                    ]
                },
                {
                    name: "DATEVALUE",
                    //shortDescription: "",
                    description: "This function returns a DateTime object of the specified date.",
                    parameters: [
                        {
                            name: "date_string"
                        }
                    ]
                },
                {
                    name: "DAVERAGE",
                    //shortDescription: "",
                    description: "This function calculates the average of values in a column of a list or database that match the specified conditions.",
                    parameters: [
                        {
                            name: "database"
                        },
                        {
                            name: " field"
                        },
                        {
                            name: " criteria"
                        }
                    ]
                },
                {
                    name: "DAY",
                    //shortDescription: "",
                    description: "This function returns the day number of the month (integer 1 to 31) that corresponds to the specified date.",
                    parameters: [
                        {
                            name: "date"
                        }
                    ]
                },
                {
                    name: "DAYS360",
                    //shortDescription: "",
                    description: "This function returns the number of days between two dates based on a 360-day year.",
                    parameters: [
                        {
                            name: "startdate"
                        },
                        {
                            name: "enddate"
                        },
                        {
                            name: "method"
                        }
                    ]
                },
                {
                    name: "DB",
                    //shortDescription: "",
                    description: "This function calculates the depreciation of an asset for a specified period using the fixed‑declining balance method",
                    parameters: [
                        {
                            name: "cost"
                        },
                        {
                            name: "salvage"
                        },
                        {
                            name: "life"
                        },
                        {
                            name: "period"
                        },
                        {
                            name: "month"
                        }
                    ]
                },
                {
                    name: "DCOUNT",
                    //shortDescription: "",
                    description: "This function counts the cells that contain numbers in a column of a list or database that match the specified conditions",
                    parameters: [
                        {
                            name: "database"
                        },
                        {
                            name: " field"
                        },
                        {
                            name: " criteria"
                        }
                    ]
                },
                {
                    name: "DCOUNTA",
                    //shortDescription: "",
                    description: "This function counts the non-blank cells in a column of a list or database that match the specified conditions",
                    parameters: [
                        {
                            name: "database"
                        },
                        {
                            name: " field"
                        },
                        {
                            name: " criteria"
                        }
                    ]
                },
                {
                    name: "DDB",
                    //shortDescription: "",
                    description: "This function calculates the depreciation of an asset for a specified period using the double-declining balance method or another method you specify.",
                    parameters: [
                        {
                            name: "cost"
                        },
                        {
                            name: "salvage"
                        },
                        {
                            name: "life"
                        },
                        {
                            name: "period"
                        },
                        {
                            name: "factor"
                        }
                    ]
                },
                {
                    name: "DEC2BIN",
                    //shortDescription: "",
                    description: "This function converts a decimal number to a binary number.",
                    parameters: [
                        {
                            name: "number"
                        },
                        {
                            name: "places"
                        }
                    ]
                },
                {
                    name: "DEC2HEX",
                    //shortDescription: "",
                    description: "This function converts a decimal number to a hexadecimal number",
                    parameters: [
                        {
                            name: "number"
                        },
                        {
                            name: "places"
                        }
                    ]
                },
                {
                    name: "DEC2OCT",
                    //shortDescription: "",
                    description: "This function converts a decimal number to an octal number",
                    parameters: [
                        {
                            name: "number"
                        },
                        {
                            name: "places"
                        }
                    ]
                },
                {
                    name: "DEGREES",
                    //shortDescription: "",
                    description: "This function converts the specified value from radians to degrees",
                    parameters: [
                        {
                            name: "angle"
                        }
                    ]
                },
                {
                    name: "DELTA",
                    //shortDescription: "",
                    description: "This function identifies whether two values are equal. Returns 1 if they are equal; returns 0 otherwise.",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2"
                        }
                    ]
                },
                {
                    name: "DEVSQ",
                    //shortDescription: "",
                    description: "This function calculates the sum of the squares of deviations of data points (or of an array of data points) from their sample mean.",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "DGET",
                    //shortDescription: "",
                    description: "This function extracts a single value from a column of a list or database that matches the specified conditions.",
                    parameters: [
                        {
                            name: "database"
                        },
                        {
                            name: " field"
                        },
                        {
                            name: " criteria"
                        }
                    ]
                },
                {
                    name: "DISC",
                    //shortDescription: "",
                    description: "This function calculates the discount rate for a security.",
                    parameters: [
                        {
                            name: "settle"
                        },
                        {
                            name: "mature"
                        },
                        {
                            name: "pricep"
                        },
                        {
                            name: "redeem"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "DMAX",
                    //shortDescription: "",
                    description: "This function returns the largest number in a column of a list or database that matches the specified conditions.",
                    parameters: [
                        {
                            name: "database"
                        },
                        {
                            name: " field"
                        },
                        {
                            name: " criteria"
                        }
                    ]
                },
                {
                    name: "DMIN",
                    //shortDescription: "",
                    description: "This function returns the smallest number in a column of a list or database that matches the specified conditions.",
                    parameters: [
                        {
                            name: "database"
                        },
                        {
                            name: " field"
                        },
                        {
                            name: " criteria"
                        }
                    ]
                },
                {
                    name: "DOLLAR",
                    //shortDescription: "",
                    description: "This function converts a number to text using currency format, with the decimals rounded to the specified place.",
                    parameters: [
                        {
                            name: "value"
                        },
                        {
                            name: "digits"
                        }
                    ]
                },
                {
                    name: "DOLLARDE",
                    //shortDescription: "",
                    description: "This function converts a fraction dollar price to a decimal dollar price.",
                    parameters: [
                        {
                            name: "fractionaldollar"
                        },
                        {
                            name: "fraction"
                        }
                    ]
                },
                {
                    name: "DOLLARFR",
                    //shortDescription: "",
                    description: "This function converts a decimal number dollar price to a fraction dollar price.",
                    parameters: [
                        {
                            name: "decimaldollar"
                        },
                        {
                            name: "fraction"
                        }
                    ]
                },
                {
                    name: "DPRODUCT",
                    //shortDescription: "",
                    description: "This function multiplies the values in a column of a list or database that match the specified conditions.",
                    parameters: [
                        {
                            name: "database"
                        },
                        {
                            name: " field"
                        },
                        {
                            name: " criteria"
                        }
                    ]
                },
                {
                    name: "DSTDEV",
                    //shortDescription: "",
                    description: "This function estimates the standard deviation of a population based on a sample by using the numbers in a column of a list or database that match the specified conditions.",
                    parameters: [
                        {
                            name: "database"
                        },
                        {
                            name: " field"
                        },
                        {
                            name: " criteria"
                        }
                    ]
                },
                {
                    name: "DSTDEVP",
                    //shortDescription: "",
                    description: "This function calculates the standard deviation of a population based on the entire population using the numbers in a column of a list or database that match the specified conditions.",
                    parameters: [
                        {
                            name: "database"
                        },
                        {
                            name: " field"
                        },
                        {
                            name: " criteria"
                        }
                    ]
                },
                {
                    name: "DSUM",
                    //shortDescription: "",
                    description: "This function adds the numbers in a column of a list or database that match the specified conditions.",
                    parameters: [
                        {
                            name: "database"
                        },
                        {
                            name: " field"
                        },
                        {
                            name: " criteria"
                        }
                    ]
                },
                {
                    name: "DURATION",
                    //shortDescription: "",
                    description: "This function returns the Macauley duration for an assumed par value of $100.",
                    parameters: [
                        {
                            name: "settlement"
                        },
                        {
                            name: "maturity"
                        },
                        {
                            name: "coupon"
                        },
                        {
                            name: "yield"
                        },
                        {
                            name: "frequency"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "DVAR",
                    //shortDescription: "",
                    description: "This function estimates the variance of a population based on a sample by using the numbers in a column of a list or database that match the specified conditions.",
                    parameters: [
                        {
                            name: "database"
                        },
                        {
                            name: " field"
                        },
                        {
                            name: " criteria"
                        }
                    ]
                },
                {
                    name: "DVARP",
                    //shortDescription: "",
                    description: "This function calculates the variance of a population based on the entire population by using the numbers in a column of a list or database that match the specified conditions.",
                    parameters: [
                        {
                            name: "database"
                        },
                        {
                            name: " field"
                        },
                        {
                            name: " criteria"
                        }
                    ]
                },
                {
                    name: "EDATE",
                    //shortDescription: "",
                    description: "This function calculates the date that is the indicated number of months before or after a specified date.",
                    parameters: [
                        {
                            name: "startdate"
                        },
                        {
                            name: "months"
                        }
                    ]
                },
                {
                    name: "EFFECT",
                    //shortDescription: "",
                    description: "This function calculates the effective annual interest rate for a given nominal annual interest rate and the number of compounding periods per year.",
                    parameters: [
                        {
                            name: "nomrate"
                        },
                        {
                            name: "comper"
                        }
                    ]
                },
                {
                    name: "EOMONTH",
                    //shortDescription: "",
                    description: "This function calculates the date for the last day of the month (end of month) that is the indicated number of months before or after the starting date.",
                    parameters: [
                        {
                            name: "startdate"
                        },
                        {
                            name: "months"
                        }
                    ]
                },
                {
                    name: "ERF",
                    //shortDescription: "",
                    description: "This function calculates the error function integrated between a lower and an upper limit.",
                    parameters: [
                        {
                            name: "limit"
                        },
                        {
                            name: "upperlimit"
                        }
                    ]
                },
                {
                    name: "ERFC",
                    //shortDescription: "",
                    description: "This function calculates the complementary error function integrated between a lower limit and infinity.",
                    parameters: [
                        {
                            name: "lowerlimit"
                        }
                    ]
                },
                {
                    name: "ERROR.TYPE",
                    //shortDescription: "",
                    description: "This function returns a number corresponding to one of the error values.",
                    parameters: [
                        {
                            name: "errorvalue"
                        }
                    ]
                },
                {
                    name: "EURO",
                    //shortDescription: "",
                    description: "This function returns the equivalent of one Euro based on the ISO currency code.",
                    parameters: [
                        {
                            name: "code"
                        }
                    ]
                },
                {
                    name: "EUROCONVERT",
                    //shortDescription: "",
                    description: "This function converts currency from a Euro member currency (including Euros) to another Euro member currency (including Euros).",
                    parameters: [
                        {
                            name: "currency"
                        },
                        {
                            name: "source"
                        },
                        {
                            name: "target"
                        },
                        {
                            name: "fullprecision"
                        },
                        {
                            name: "triangulation"
                        }
                    ]
                },
                {
                    name: "EVEN",
                    //shortDescription: "",
                    description: "This function rounds the specified value up to the nearest even integer.",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "EXACT",
                    //shortDescription: "",
                    description: "This function returns true if two strings are the same; otherwise, false.",
                    parameters: [
                        {
                            name: "text1"
                        },
                        {
                            name: "text2"
                        }
                    ]
                },
                {
                    name: "EXP",
                    //shortDescription: "",
                    description: "This function returns e raised to the power of the specified value.",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "EXPONDIST",
                    //shortDescription: "",
                    description: "This function returns the exponential distribution or the probability density",
                    parameters: [
                        {
                            name: "value"
                        },
                        {
                            name: "lambda"
                        },
                        {
                            name: "cumulative"
                        }
                    ]
                },
                {
                    name: "FACT",
                    //shortDescription: "",
                    description: "This function calculates the factorial of the specified number.",
                    parameters: [
                        {
                            name: "number"
                        }
                    ]
                },
                {
                    name: "FACTDOUBLE",
                    //shortDescription: "",
                    description: "This function calculates the double factorial of the specified number.",
                    parameters: [
                        {
                            name: "number"
                        }
                    ]
                },
                {
                    name: "FALSE",
                    //shortDescription: "",
                    description: "This function returns the value for logical FALSE.",
                    parameters: []
                },
                {
                    name: "FDIST",
                    //shortDescription: "",
                    description: "This function calculates the F probability distribution, to see degrees of diversity between two sets of data.",
                    parameters: [
                        {
                            name: "value"
                        },
                        {
                            name: "degnum"
                        },
                        {
                            name: "degden"
                        }
                    ]
                },
                {
                    name: "FIND",
                    //shortDescription: "",
                    description: "This function finds one text value within another and returns the text value’s position in the text you searched.",
                    parameters: [
                        {
                            name: "findtext"
                        },
                        {
                            name: "intext"
                        },
                        {
                            name: "start"
                        }
                    ]
                },
                {
                    name: "FINV",
                    //shortDescription: "",
                    description: "This function returns the inverse of the F probability distribution.",
                    parameters: [
                        {
                            name: "p"
                        },
                        {
                            name: "degnum"
                        },
                        {
                            name: "degden"
                        }
                    ]
                },
                {
                    name: "FISHER",
                    //shortDescription: "",
                    description: "This function returns the Fisher transformation for a specified value",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "FISHERINV",
                    //shortDescription: "",
                    description: "This function returns the inverse of the Fisher transformation for a specified value.",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "FIXED",
                    //shortDescription: "",
                    description: "This function rounds a number to the specified number of decimal places, formats the number in decimal format using a period and commas (if so specified), and returns the result as text.",
                    parameters: [
                        {
                            name: "num"
                        },
                        {
                            name: "digits"
                        },
                        {
                            name: "notcomma"
                        }
                    ]
                },
                {
                    name: "FLOOR",
                    //shortDescription: "",
                    description: "This function rounds a number down to the nearest multiple of a specified value.",
                    parameters: [
                        {
                            name: "value"
                        },
                        {
                            name: "signif"
                        }
                    ]
                },
                {
                    name: "FORECAST",
                    //shortDescription: "",
                    description: "This function calculates a future value using existing values.",
                    parameters: [
                        {
                            name: "value"
                        },
                        {
                            name: "Yarray"
                        },
                        {
                            name: "Xarray"
                        }
                    ]
                },
                {
                    name: "FREQUENCY",
                    //shortDescription: "",
                    description: "This function calculates how often values occur within a range of values. This function returns a vertical array of numbers",
                    parameters: [
                        {
                            name: "dataarray"
                        },
                        {
                            name: "binarray"
                        }
                    ]
                },
                {
                    name: "FTEST",
                    //shortDescription: "",
                    description: "This function returns the result of an F-test, which returns the one-tailed probability that the variances in two arrays are not significantly different.",
                    parameters: [
                        {
                            name: "array1"
                        },
                        {
                            name: "array2"
                        }
                    ]
                },
                {
                    name: "FV",
                    //shortDescription: "",
                    description: "This function returns the future value of an investment based on a present value, periodic payments, and a specified interest rate.",
                    parameters: [
                        {
                            name: "rate"
                        },
                        {
                            name: "numper"
                        },
                        {
                            name: "paymt"
                        },
                        {
                            name: "pval"
                        },
                        {
                            name: "type"
                        }
                    ]
                },
                {
                    name: "FVSCHEDULE",
                    //shortDescription: "",
                    description: "This function returns the future value of an initial principal after applying a series of compound interest rates. Calculate future value of an investment with a variable or adjustable rate.",
                    parameters: [
                        {
                            name: "principal"
                        },
                        {
                            name: "schedule"
                        }
                    ]
                },
                {
                    name: "GAMMADIST",
                    //shortDescription: "",
                    description: "This function returns the gamma distribution.",
                    parameters: [
                        {
                            name: "x"
                        },
                        {
                            name: "alpha"
                        },
                        {
                            name: "beta"
                        },
                        {
                            name: "cumulative"
                        }
                    ]
                },
                {
                    name: "GAMMAINV",
                    //shortDescription: "",
                    description: "This function returns the inverse of the gamma cumulative distribution.",
                    parameters: [
                        {
                            name: "p"
                        },
                        {
                            name: "alpha"
                        },
                        {
                            name: "beta"
                        }
                    ]
                },
                {
                    name: "GAMMALN",
                    //shortDescription: "",
                    description: "This function returns the natural logarithm of the Gamma function, G(x).",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "GCD",
                    //shortDescription: "",
                    description: "This function returns the greatest common divisor of two numbers.",
                    parameters: [
                        {
                            name: "number1"
                        },
                        {
                            name: "number2"
                        }
                    ]
                },
                {
                    name: "GEOMEAN",
                    //shortDescription: "",
                    description: "This function returns the geometric mean of a set of positive data.",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "GESTEP",
                    //shortDescription: "",
                    description: "This function, greater than or equal to step, returns an indication of whether a number is equal to a threshold.",
                    parameters: [
                        {
                            name: "number"
                        },
                        {
                            name: "step"
                        }
                    ]
                },
                {
                    name: "GROWTH",
                    //shortDescription: "",
                    description: "This function calculates predicted exponential growth. This function returns the y values for a series of new x values that are specified by using existing x and y values.",
                    parameters: [
                        {
                            name: "y"
                        },
                        {
                            name: "x"
                        },
                        {
                            name: "newx"
                        },
                        {
                            name: "constant"
                        }
                    ]
                },
                {
                    name: "HARMEAN",
                    //shortDescription: "",
                    description: "This function returns the harmonic mean of a data set.",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "HEX2BIN",
                    //shortDescription: "",
                    description: "This function converts a hexadecimal number to a binary number.",
                    parameters: [
                        {
                            name: "number"
                        },
                        {
                            name: " places"
                        }
                    ]
                },
                {
                    name: "HEX2DEC",
                    //shortDescription: "",
                    description: "This function converts a hexadecimal number to a decimal number.",
                    parameters: [
                        {
                            name: "number"
                        }
                    ]
                },
                {
                    name: "HEX2OCT",
                    //shortDescription: "",
                    description: "This function converts a hexadecimal number to an octal number.",
                    parameters: [
                        {
                            name: "number"
                        },
                        {
                            name: " places"
                        }
                    ]
                },
                {
                    name: "HLOOKUP",
                    //shortDescription: "",
                    description: "This function searches for a value in the top row and then returns a value in the same column from a specified row.",
                    parameters: [
                        {
                            name: "value"
                        },
                        {
                            name: "array"
                        },
                        {
                            name: "row"
                        },
                        {
                            name: "approx"
                        }
                    ]
                },
                {
                    name: "HOUR",
                    //shortDescription: "",
                    description: "This function returns the hour that corresponds to a specified time.",
                    parameters: [
                        {
                            name: "time"
                        }
                    ]
                },
                {
                    name: "HYPGEOMDIST",
                    //shortDescription: "",
                    description: "This function returns the hypergeometric distribution.",
                    parameters: [
                        {
                            name: "x"
                        },
                        {
                            name: "n"
                        },
                        {
                            name: "M"
                        },
                        {
                            name: "N"
                        }
                    ]
                },
                {
                    name: "IF",
                    //shortDescription: "",
                    description: "This function performs a comparison and returns one of two provided values based on that comparison.",
                    parameters: [
                        {
                            name: "valueTest"
                        },
                        {
                            name: "valueTrue"
                        },
                        {
                            name: "valueFalse"
                        }
                    ]
                },
                {
                    name: "IFERROR",
                    //shortDescription: "",
                    description: "This function evaluates a formula and returns a value you provide if there is an error or the formula result.",
                    parameters: [
                        {
                            name: "value"
                        },
                        {
                            name: "error"
                        }
                    ]
                },
                {
                    name: "IMABS",
                    //shortDescription: "",
                    description: "This function returns the absolute value or modulus of a complex number.",
                    parameters: [
                        {
                            name: "complexnum"
                        }
                    ]
                },
                {
                    name: "IMAGINARY",
                    //shortDescription: "",
                    description: "This function returns the imaginary coefficient of a complex number.",
                    parameters: [
                        {
                            name: "complexnum"
                        }
                    ]
                },
                {
                    name: "IMARGUMENT",
                    //shortDescription: "",
                    description: "This function returns the argument theta, which is an angle expressed in radians.",
                    parameters: [
                        {
                            name: "complexnum"
                        }
                    ]
                },
                {
                    name: "IMCONJUGATE",
                    //shortDescription: "",
                    description: "This function returns the complex conjugate of a complex number.",
                    parameters: [
                        {
                            name: "complexnum"
                        }
                    ]
                },
                {
                    name: "IMCOS",
                    //shortDescription: "",
                    description: "This function returns the cosine of a complex number.",
                    parameters: [
                        {
                            name: "complexnum"
                        }
                    ]
                },
                {
                    name: "IMDIV",
                    //shortDescription: "",
                    description: "This function returns the quotient of two complex numbers.",
                    parameters: [
                        {
                            name: "complexnum"
                        },
                        {
                            name: "complexdenom"
                        }
                    ]
                },
                {
                    name: "IMEXP",
                    //shortDescription: "",
                    description: "This function returns the exponential of a complex number.",
                    parameters: [
                        {
                            name: "complexnum"
                        }
                    ]
                },
                {
                    name: "IMLN",
                    //shortDescription: "",
                    description: "This function returns the natural logarithm of a complex number.",
                    parameters: [
                        {
                            name: "complexnum"
                        }
                    ]
                },
                {
                    name: "IMLOG2",
                    //shortDescription: "",
                    description: "This function returns the base-2 logarithm of a complex number.",
                    parameters: [
                        {
                            name: "complexnum"
                        }
                    ]
                },
                {
                    name: "IMLOG10",
                    //shortDescription: "",
                    description: "This function returns the common logarithm of a complex number.",
                    parameters: [
                        {
                            name: "complexnum"
                        }
                    ]
                },
                {
                    name: "IMPOWER",
                    //shortDescription: "",
                    description: "This function returns a complex number raised to a power.",
                    parameters: [
                        {
                            name: "complexnum"
                        },
                        {
                            name: "powernum"
                        }
                    ]
                },
                {
                    name: "IMPRODUCT",
                    //shortDescription: "",
                    description: "This function returns the product of up to 29 complex numbers in the x+yi or x+yj text format",
                    parameters: [
                        {
                            name: "complexnum1"
                        },
                        {
                            name: "complexnum2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "IMREAL",
                    //shortDescription: "",
                    description: "This function returns the real coefficient of a complex number in the x+yi or x+yj text format.",
                    parameters: [
                        {
                            name: "complexnum"
                        }
                    ]
                },
                {
                    name: "IMSIN",
                    //shortDescription: "",
                    description: "This function returns the sine of a complex number in the x+yi or x+yj text format.",
                    parameters: [
                        {
                            name: "complexnum"
                        }
                    ]
                },
                {
                    name: "IMSQRT",
                    //shortDescription: "",
                    description: "This function returns the square root of a complex number in the x+yi or x+yj text format.",
                    parameters: [
                        {
                            name: "complexnum"
                        }
                    ]
                },
                {
                    name: "IMSUB",
                    //shortDescription: "",
                    description: "This function returns the difference of two complex numbers in the x+yi or x+yj text format.",
                    parameters: [
                        {
                            name: "complexnum1"
                        },
                        {
                            name: "complexnum2"
                        }
                    ]
                },
                {
                    name: "IMSUM",
                    //shortDescription: "",
                    description: "This function returns the sum of two or more complex numbers in the x+yi or x+yj text format.",
                    parameters: [
                        {
                            name: "complexnum1"
                        },
                        {
                            name: "complexnum2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "INDEX",
                    //shortDescription: "",
                    description: "This function returns a value or the reference to a value from within an array or range.",
                    parameters: [
                        {
                            name: "return"
                        },
                        {
                            name: "row"
                        },
                        {
                            name: "col"
                        },
                        {
                            name: "area"
                        }
                    ]
                },
                {
                    name: "INT",
                    //shortDescription: "",
                    description: "This function rounds a specified number down to the nearest integer.",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "INTERCEPT",
                    //shortDescription: "",
                    description: "This function returns the coordinates of a point at which a line intersects the y-axis, by using existing x values and y values.",
                    parameters: [
                        {
                            name: "dependent"
                        },
                        {
                            name: "independent"
                        }
                    ]
                },
                {
                    name: "INTRATE",
                    //shortDescription: "",
                    description: "This function calculates the interest rate for a fully invested security.",
                    parameters: [
                        {
                            name: "settle"
                        },
                        {
                            name: "mature"
                        },
                        {
                            name: "invest"
                        },
                        {
                            name: "redeem"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "IPMT",
                    //shortDescription: "",
                    description: "This function calculates the payment of interest on a loan.",
                    parameters: [
                        {
                            name: "rate"
                        },
                        {
                            name: "per"
                        },
                        {
                            name: "nper"
                        },
                        {
                            name: "pval"
                        },
                        {
                            name: "fval"
                        },
                        {
                            name: "type"
                        }
                    ]
                },
                {
                    name: "IRR",
                    //shortDescription: "",
                    description: "This function returns the internal rate of return for a series of cash flows represented by the numbers in an array.",
                    parameters: [
                        {
                            name: "arrayvals"
                        },
                        {
                            name: "estimate"
                        }
                    ]
                },
                {
                    name: "ISBLANK",
                    //shortDescription: "",
                    description: "This function tests whether a value, an expression, or contents of a referenced cell is empty.",
                    parameters: [
                        {
                            name: "cellreference"
                        }
                    ]
                },
                {
                    name: "ISERR",
                    //shortDescription: "",
                    description: "This function, Is Error Other Than Not Available, tests whether a value, an expression, or contents of a referenced cell has an error other than not available (#N/A).",
                    parameters: [
                        {
                            name: "cellreference"
                        }
                    ]
                },
                {
                    name: "ISERROR",
                    //shortDescription: "",
                    description: "This function, Is Error of Any Kind, tests whether a value, an expression, or contents of a referenced cell has an error of any kind.",
                    parameters: [
                        {
                            name: "cellreference"
                        }
                    ]
                },
                {
                    name: "ISEVEN",
                    //shortDescription: "",
                    description: "This function, Is Number Even, tests whether a value, an expression, or contents of a referenced cell is even.",
                    parameters: [
                        {
                            name: "cellreference"
                        }
                    ]
                },
                {
                    name: "ISLOGICAL",
                    //shortDescription: "",
                    description: "This function tests whether a value, an expression, or contents of a referenced cell is a logical (Boolean) value.",
                    parameters: [
                        {
                            name: "cellreference"
                        }
                    ]
                },
                {
                    name: "ISNA",
                    //shortDescription: "",
                    description: "This function, Is Not Available, tests whether a value, an expression, or contents of a referenced cell has the not available (#N/A) error value.",
                    parameters: [
                        {
                            name: "cellreference"
                        }
                    ]
                },
                {
                    name: "ISNONTEXT",
                    //shortDescription: "",
                    description: "This function tests whether a value, an expression, or contents of a referenced cell has any data type other than text.",
                    parameters: [
                        {
                            name: "cellreference"
                        }
                    ]
                },
                {
                    name: "ISNUMBER",
                    //shortDescription: "",
                    description: "This function tests whether a value, an expression, or contents of a referenced cell has numeric data.",
                    parameters: [
                        {
                            name: "cellreference"
                        }
                    ]
                },
                {
                    name: "ISODD",
                    //shortDescription: "",
                    description: "This function, Is Number Odd, tests whether a value, an expression, or contents of a referenced cell has numeric data.",
                    parameters: [
                        {
                            name: "cellreference"
                        }
                    ]
                },
                {
                    name: "ISPMT",
                    //shortDescription: "",
                    description: "This function calculates the interest paid during a specific period of an investment.",
                    parameters: [
                        {
                            name: "rate"
                        },
                        {
                            name: "per"
                        },
                        {
                            name: "nper"
                        },
                        {
                            name: "pv"
                        }
                    ]
                },
                {
                    name: "ISREF",
                    //shortDescription: "",
                    description: "This function, Is Reference, tests whether a value, an expression, or contents of a referenced cell is a reference to another cell.",
                    parameters: [
                        {
                            name: "cellreference"
                        }
                    ]
                },
                {
                    name: "ISTEXT",
                    //shortDescription: "",
                    description: "This function tests whether a value, an expression, or contents of a referenced cell has text data.",
                    parameters: [
                        {
                            name: "cellreference"
                        }
                    ]
                },
                {
                    name: "KURT",
                    //shortDescription: "",
                    description: "This function returns the kurtosis of a data set.",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2"
                        },
                        {
                            name: "value3"
                        },
                        {
                            name: "value4",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "LARGE",
                    //shortDescription: "",
                    description: "This function returns the nth largest value in a data set, where n is specified.",
                    parameters: [
                        {
                            name: "array"
                        },
                        {
                            name: "n"
                        }
                    ]
                },
                {
                    name: "LCM",
                    //shortDescription: "",
                    description: "This function returns the least common multiple of two numbers.",
                    parameters: [
                        {
                            name: "number1"
                        },
                        {
                            name: "number2"
                        }
                    ]
                },
                {
                    name: "LEFT",
                    //shortDescription: "",
                    description: "This function returns the specified leftmost characters from a text value.",
                    parameters: [
                        {
                            name: "mytext"
                        },
                        {
                            name: "num_chars"
                        }
                    ]
                },
                {
                    name: "LEN",
                    //shortDescription: "",
                    description: "This function returns the length of, the number of characters in, a text string.",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "LINEST",
                    //shortDescription: "",
                    description: "This function calculates the statistics for a line.",
                    parameters: [
                        {
                            name: "y"
                        },
                        {
                            name: "x"
                        },
                        {
                            name: "constant"
                        },
                        {
                            name: "stats"
                        }
                    ]
                },
                {
                    name: "LN",
                    //shortDescription: "",
                    description: "This function returns the natural logarithm of the specified number.",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "LOG",
                    //shortDescription: "",
                    description: "This function returns the logarithm base Y of a number X.",
                    parameters: [
                        {
                            name: "number"
                        },
                        {
                            name: "base"
                        }
                    ]
                },
                {
                    name: "LOG10",
                    //shortDescription: "",
                    description: "This function returns the logarithm base 10 of the number given.",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "LOGEST",
                    //shortDescription: "",
                    description: "This function calculates an exponential curve that fits the data and returns an array of values that describes the curve.",
                    parameters: [
                        {
                            name: "y"
                        },
                        {
                            name: "x"
                        },
                        {
                            name: "constant"
                        },
                        {
                            name: "stats"
                        }
                    ]
                },
                {
                    name: "LOGINV",
                    //shortDescription: "",
                    description: "This function returns the inverse of the lognormal cumulative distribution function of x, where LN(x) is normally distributed with the specified mean and standard deviation.",
                    parameters: [
                        {
                            name: "prob"
                        },
                        {
                            name: "mean"
                        },
                        {
                            name: "stdev"
                        }
                    ]
                },
                {
                    name: "LOGNORMDIST",
                    //shortDescription: "",
                    description: "This function returns the cumulative natural log normal distribution of x, where LN(x) is normally distributed with the specified mean and standard deviation. Analyze data that has been logarithmically transformed with this function.",
                    parameters: [
                        {
                            name: "x"
                        },
                        {
                            name: "mean"
                        },
                        {
                            name: "stdev"
                        }
                    ]
                },
                {
                    name: "LOOKUP",
                    //shortDescription: "",
                    description: "This function searches for a value and returns a value from the same location in a second area.",
                    parameters: [
                        {
                            name: "lookupvalue"
                        },
                        {
                            name: "lookupvector"
                        },
                        {
                            name: "resultvector"
                        }
                    ]
                },
                {
                    name: "LOWER",
                    //shortDescription: "",
                    description: "This function converts text to lower case letters.",
                    parameters: [
                        {
                            name: "string"
                        }
                    ]
                },
                {
                    name: "MATCH",
                    //shortDescription: "",
                    description: "This function returns the relative position of a specified item in a range.",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "array"
                        },
                        {
                            name: "type"
                        }
                    ]
                },
                {
                    name: "MAX",
                    //shortDescription: "",
                    description: "This function returns the maximum value, the greatest value, of all the values in the arguments.",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "MAXA",
                    //shortDescription: "",
                    description: "This function returns the largest value in a list of arguments, including text and logical values.",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "MDETERM",
                    //shortDescription: "",
                    description: "This function returns the matrix determinant of an array.",
                    parameters: [
                        {
                            name: "array"
                        }
                    ]
                },
                {
                    name: "MDURATION",
                    //shortDescription: "",
                    description: "This function calculates the modified Macauley duration of a security with an assumed par value of $100.",
                    parameters: [
                        {
                            name: "settlement"
                        },
                        {
                            name: "maturity"
                        },
                        {
                            name: "coupon"
                        },
                        {
                            name: "yield"
                        },
                        {
                            name: "frequency"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "MEDIAN",
                    //shortDescription: "",
                    description: "This function returns the median, the number in the middle of the provided set of numbers; that is, half the numbers have values that are greater than the median, and half have values that are less than the median.",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "MID",
                    //shortDescription: "",
                    description: "This function returns the requested number of characters from a text string starting at the position you specify.",
                    parameters: [
                        {
                            name: "text"
                        },
                        {
                            name: "start_num"
                        },
                        {
                            name: "num_chars"
                        }
                    ]
                },
                {
                    name: "MIN",
                    //shortDescription: "",
                    description: "This function returns the minimum value, the least value, of all the values in the arguments",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "MINA",
                    //shortDescription: "",
                    description: "This function returns the minimum value in a list of arguments, including text and logical values.",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "MINUTE",
                    //shortDescription: "",
                    description: "This function returns the minute corresponding to a specified time.",
                    parameters: [
                        {
                            name: "time"
                        }
                    ]
                },
                {
                    name: "MINVERSE",
                    //shortDescription: "",
                    description: "This function returns the inverse matrix for the matrix stored in an array.",
                    parameters: [
                        {
                            name: "array"
                        }
                    ]
                },
                {
                    name: "MIRR",
                    //shortDescription: "",
                    description: "This function returns the modified internal rate of return for a series of periodic cash flows.",
                    parameters: [
                        {
                            name: "arrayvals"
                        },
                        {
                            name: "payment_int"
                        },
                        {
                            name: "income_int"
                        }
                    ]
                },
                {
                    name: "MMULT",
                    //shortDescription: "",
                    description: "This function returns the matrix product for two arrays.",
                    parameters: [
                        {
                            name: "array1"
                        },
                        {
                            name: "array2"
                        }
                    ]
                },
                {
                    name: "MOD",
                    //shortDescription: "",
                    description: "This function returns the remainder of a division operation.",
                    parameters: [
                        {
                            name: "dividend"
                        },
                        {
                            name: "divisor"
                        }
                    ]
                },
                {
                    name: "MODE",
                    //shortDescription: "",
                    description: "This function returns the most frequently occurring value in a set of data.",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "MONTH",
                    //shortDescription: "",
                    description: "This function returns the month corresponding to the specified date value.",
                    parameters: [
                        {
                            name: "date"
                        }
                    ]
                },
                {
                    name: "MROUND",
                    //shortDescription: "",
                    description: "This function returns a number rounded to the desired multiple.",
                    parameters: [
                        {
                            name: "number"
                        },
                        {
                            name: "multiple"
                        }
                    ]
                },
                {
                    name: "MULTINOMIAL",
                    //shortDescription: "",
                    description: "This function calculates the ratio of the factorial of a sum of values to the product of factorials.",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "N",
                    //shortDescription: "",
                    description: "This function returns a value converted to a number.",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "NA",
                    //shortDescription: "",
                    description: "This function returns the error value #N/A that means not available.",
                    parameters: []
                },
                {
                    name: "NEGBINOMDIST",
                    //shortDescription: "",
                    description: "This function returns the negative binomial distribution.",
                    parameters: [
                        {
                            name: "x"
                        },
                        {
                            name: "r"
                        },
                        {
                            name: "p"
                        }
                    ]
                },
                {
                    name: "NETWORKDAYS",
                    //shortDescription: "",
                    description: "This function returns the total number of complete working days between the start and end dates.",
                    parameters: [
                        {
                            name: "startdate"
                        },
                        {
                            name: "enddate"
                        },
                        {
                            name: "holidays"
                        }
                    ]
                },
                {
                    name: "NOMINAL",
                    //shortDescription: "",
                    description: "This function returns the nominal annual interest rate for a given effective rate and number of compounding periods per year.",
                    parameters: [
                        {
                            name: "effrate"
                        },
                        {
                            name: "comper"
                        }
                    ]
                },
                {
                    name: "NORMDIST",
                    //shortDescription: "",
                    description: "This function returns the normal cumulative distribution for the specified mean and standard deviation.",
                    parameters: [
                        {
                            name: "x"
                        },
                        {
                            name: "mean"
                        },
                        {
                            name: "stdev"
                        },
                        {
                            name: "cumulative"
                        }
                    ]
                },
                {
                    name: "NORMINV",
                    //shortDescription: "",
                    description: "This function returns the inverse of the normal cumulative distribution for the given mean and standard deviation.",
                    parameters: [
                        {
                            name: "prob"
                        },
                        {
                            name: "mean"
                        },
                        {
                            name: "stdev"
                        }
                    ]
                },
                {
                    name: "NORMSDIST",
                    //shortDescription: "",
                    description: "This function returns the standard normal cumulative distribution function.",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "NORMSINV",
                    //shortDescription: "",
                    description: "This function returns the inverse of the standard normal cumulative distribution. The distribution has a mean of zero and a standard deviation of one.",
                    parameters: [
                        {
                            name: "prob"
                        }
                    ]
                },
                {
                    name: "NOT",
                    //shortDescription: "",
                    description: "This function reverses the logical value of its argument.",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "NOW",
                    //shortDescription: "",
                    description: "This function returns the current date and time.",
                    parameters: []
                },
                {
                    name: "NPER",
                    //shortDescription: "",
                    description: "This function returns the number of periods for an investment based on a present value, future value, periodic payments, and a specified interest rate.",
                    parameters: [
                        {
                            name: "rate"
                        },
                        {
                            name: "paymt"
                        },
                        {
                            name: "pval"
                        },
                        {
                            name: "fval"
                        },
                        {
                            name: "type"
                        }
                    ]
                },
                {
                    name: "NPV",
                    //shortDescription: "",
                    description: "This function calculates the net present value of an investment by using a discount rate and a series of future payments and income.",
                    parameters: [
                        {
                            name: "discount"
                        },
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "OCT2BIN",
                    //shortDescription: "",
                    description: "This function converts an octal number to a binary number.",
                    parameters: [
                        {
                            name: "number"
                        },
                        {
                            name: "places"
                        }
                    ]
                },
                {
                    name: "OCT2DEC",
                    //shortDescription: "",
                    description: "This function converts an octal number to a decimal number.",
                    parameters: [
                        {
                            name: "number"
                        }
                    ]
                },
                {
                    name: "OCT2HEX",
                    //shortDescription: "",
                    description: "This function converts an octal number to a hexadecimal number.",
                    parameters: [
                        {
                            name: "number"
                        },
                        {
                            name: "places"
                        }
                    ]
                },
                {
                    name: "ODD",
                    //shortDescription: "",
                    description: "This function rounds the specified value up to the nearest odd integer.",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "ODDFPRICE",
                    //shortDescription: "",
                    description: "This function calculates the price per $100 face value of a security with an odd first period.",
                    parameters: [
                        {
                            name: "settle"
                        },
                        {
                            name: "maturity"
                        },
                        {
                            name: "issue"
                        },
                        {
                            name: "first"
                        },
                        {
                            name: "rate"
                        },
                        {
                            name: "yield"
                        },
                        {
                            name: "redeem"
                        },
                        {
                            name: "freq"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "ODDFYIELD",
                    //shortDescription: "",
                    description: "This function calculates the yield of a security with an odd first period.",
                    parameters: [
                        {
                            name: "settle"
                        },
                        {
                            name: "maturity"
                        },
                        {
                            name: "issue"
                        },
                        {
                            name: "first"
                        },
                        {
                            name: "rate"
                        },
                        {
                            name: "price"
                        },
                        {
                            name: "redeem"
                        },
                        {
                            name: "freq"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "ODDLPRICE",
                    //shortDescription: "",
                    description: "This function calculates the price per $100 face value of a security with an odd last coupon period.",
                    parameters: [
                        {
                            name: "settle"
                        },
                        {
                            name: "maturity"
                        },
                        {
                            name: "last"
                        },
                        {
                            name: "rate"
                        },
                        {
                            name: "yield"
                        },
                        {
                            name: "redeem"
                        },
                        {
                            name: "freq"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "ODDLYIELD",
                    //shortDescription: "",
                    description: "This function calculates the yield of a security with an odd last period.",
                    parameters: [
                        {
                            name: "settle"
                        },
                        {
                            name: "maturity"
                        },
                        {
                            name: "last"
                        },
                        {
                            name: "rate"
                        },
                        {
                            name: "price"
                        },
                        {
                            name: "redeem"
                        },
                        {
                            name: "freq"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "OFFSET",
                    //shortDescription: "",
                    description: "This function returns a reference to a range. The range is a specified number of rows and columns from a cell or range of cells. The function returns a single cell or a range of cells.",
                    parameters: [
                        {
                            name: "reference"
                        },
                        {
                            name: "rows"
                        },
                        {
                            name: "cols"
                        },
                        {
                            name: "height"
                        },
                        {
                            name: "width"
                        }
                    ]
                },
                {
                    name: "OR",
                    //shortDescription: "",
                    description: "This function calculates logical OR. It returns TRUE if any of its arguments are true; otherwise, returns FALSE if all arguments are false.",
                    parameters: [
                        {
                            name: "argument1"
                        },
                        {
                            name: "argument2..."
                        }
                    ]
                },
                {
                    name: "PEARSON",
                    //shortDescription: "",
                    description: "This function returns the Pearson product moment correlation coefficient, a dimensionless index between -1.0 to 1.0 inclusive indicative of the linear relationship of two data sets.",
                    parameters: [
                        {
                            name: "array_ind"
                        },
                        {
                            name: "array_dep"
                        }
                    ]
                },
                {
                    name: "PERCENTILE",
                    //shortDescription: "",
                    description: "This function returns the nth percentile of values in a range.",
                    parameters: [
                        {
                            name: "array"
                        },
                        {
                            name: "n"
                        }
                    ]
                },
                {
                    name: "PERCENTRANK",
                    //shortDescription: "",
                    description: "This function returns the rank of a value in a data set as a percentage of the data set.",
                    parameters: [
                        {
                            name: "array"
                        },
                        {
                            name: "n"
                        },
                        {
                            name: "sigdig"
                        }
                    ]
                },
                {
                    name: "PERMUT",
                    //shortDescription: "",
                    description: "This function returns the number of possible permutations for a specified number of items.",
                    parameters: [
                        {
                            name: "k"
                        },
                        {
                            name: "n"
                        }
                    ]
                },
                {
                    name: "PI",
                    //shortDescription: "",
                    description: "This function returns PI as 3.1415926536.",
                    parameters: []
                },
                {
                    name: "PMT",
                    //shortDescription: "",
                    description: "This function returns the payment amount for a loan given the present value, specified interest rate, and number of terms.",
                    parameters: [
                        {
                            name: "rate"
                        },
                        {
                            name: "nper"
                        },
                        {
                            name: "pval"
                        },
                        {
                            name: "fval"
                        },
                        {
                            name: "type"
                        }
                    ]
                },
                {
                    name: "POISSON",
                    //shortDescription: "",
                    description: "This function returns the Poisson distribution.",
                    parameters: [
                        {
                            name: "nevents"
                        },
                        {
                            name: "mean"
                        },
                        {
                            name: "cumulative"
                        }
                    ]
                },
                {
                    name: "POWER",
                    //shortDescription: "",
                    description: "This function raises the specified number to the specified power.",
                    parameters: [
                        {
                            name: "number"
                        },
                        {
                            name: "power"
                        }
                    ]
                },
                {
                    name: "PPMT",
                    //shortDescription: "",
                    description: "This function returns the amount of payment of principal for a loan given the present value, specified interest rate, and number of terms.",
                    parameters: [
                        {
                            name: "rate"
                        },
                        {
                            name: "per"
                        },
                        {
                            name: "nper"
                        },
                        {
                            name: "pval"
                        },
                        {
                            name: "fval"
                        },
                        {
                            name: "type"
                        }
                    ]
                },
                {
                    name: "PRICE",
                    //shortDescription: "",
                    description: "This function calculates the price per $100 face value of a periodic interest security",
                    parameters: [
                        {
                            name: "settlement"
                        },
                        {
                            name: "maturity"
                        },
                        {
                            name: "rate"
                        },
                        {
                            name: "yield"
                        },
                        {
                            name: "redeem"
                        },
                        {
                            name: "frequency"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "PRICEDISC",
                    //shortDescription: "",
                    description: "This function returns the price per $100 face value of a discounted security.",
                    parameters: [
                        {
                            name: "settle"
                        },
                        {
                            name: "mature"
                        },
                        {
                            name: "discount"
                        },
                        {
                            name: "redeem"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "PRICEMAT",
                    //shortDescription: "",
                    description: "This function returns the price at maturity per $100 face value of a security that pays interest.",
                    parameters: [
                        {
                            name: "settle"
                        },
                        {
                            name: "mature"
                        },
                        {
                            name: "issue"
                        },
                        {
                            name: "rate"
                        },
                        {
                            name: "yield"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "PROB",
                    //shortDescription: "",
                    description: "This function returns the probability that values in a range are between two limits.",
                    parameters: [
                        {
                            name: "array"
                        },
                        {
                            name: "probs"
                        },
                        {
                            name: "lower"
                        },
                        {
                            name: "upper"
                        }
                    ]
                },
                {
                    name: "PRODUCT",
                    //shortDescription: "",
                    description: "This function multiplies all the arguments and returns the product.",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                //{
                //    name: "PROPER",
                //    //shortDescription: "",
                //    description: "This function capitalizes the first letter in each word of a text string.",
                //    parameters: [
                //        {
                //            name: "text",
                //            //description: ""
                //        }
                //    ]
                //},
                {
                    name: "PV",
                    //shortDescription: "",
                    description: "This function returns the present value of an investment based on the interest rate, number and amount of periodic payments, and future value. The present value is the total amount that a series of future payments is worth now.",
                    parameters: [
                        {
                            name: "rate"
                        },
                        {
                            name: "numper"
                        },
                        {
                            name: "paymt"
                        },
                        {
                            name: "fval"
                        },
                        {
                            name: "type"
                        }
                    ]
                },
                {
                    name: "QUARTILE",
                    //shortDescription: "",
                    description: "This function returns which quartile (which quarter or 25 percent) of a data set a value is.",
                    parameters: [
                        {
                            name: "array"
                        },
                        {
                            name: "quart"
                        }
                    ]
                },
                {
                    name: "QUOTIENT",
                    //shortDescription: "",
                    description: "This function returns the integer portion of a division. Use this to ignore the remainder of a division.",
                    parameters: [
                        {
                            name: "numerator"
                        },
                        {
                            name: "denominator"
                        }
                    ]
                },
                {
                    name: "RADIANS",
                    //shortDescription: "",
                    description: "This function converts the specified number from degrees to radians.",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "RADIANS",
                    //shortDescription: "",
                    description: "This function converts the specified number from degrees to radians.",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "RAND",
                    //shortDescription: "",
                    description: "This function returns an evenly distributed random number between 0 and 1.",
                    parameters: []
                },
                {
                    name: "RANDBETWEEN",
                    //shortDescription: "",
                    description: "This function returns a random number between the numbers you specify.",
                    parameters: [
                        {
                            name: "lower"
                        },
                        {
                            name: "upper"
                        }
                    ]
                },
                {
                    name: "RANK",
                    //shortDescription: "",
                    description: "This function returns the rank of a number in a set of numbers. If you were to sort the set, the rank of the number would be its position in the list.",
                    parameters: [
                        {
                            name: "number"
                        },
                        {
                            name: "array"
                        },
                        {
                            name: "order"
                        }
                    ]
                },
                {
                    name: "RATE",
                    //shortDescription: "",
                    description: "This function returns the interest rate per period of an annuity.",
                    parameters: [
                        {
                            name: "nper"
                        },
                        {
                            name: "pmt"
                        },
                        {
                            name: "pval"
                        },
                        {
                            name: "fval"
                        },
                        {
                            name: "type"
                        },
                        {
                            name: "guess"
                        }
                    ]
                },
                {
                    name: "RECEIVED",
                    //shortDescription: "",
                    description: "This function returns the amount received at maturity for a fully invested security.",
                    parameters: [
                        {
                            name: "settle"
                        },
                        {
                            name: "mature"
                        },
                        {
                            name: "invest"
                        },
                        {
                            name: "discount"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "REPLACE",
                    //shortDescription: "",
                    description: "This function replaces part of a text string with a different text string.",
                    parameters: [
                        {
                            name: "old_text"
                        },
                        {
                            name: "start_char"
                        },
                        {
                            name: "num_chars"
                        },
                        {
                            name: "new_text"
                        }
                    ]
                },
                {
                    name: "REPT",
                    //shortDescription: "",
                    description: "This function repeats text a specified number of times.",
                    parameters: [
                        {
                            name: "text"
                        },
                        {
                            name: "number"
                        }
                    ]
                },
                {
                    name: "RIGHT",
                    //shortDescription: "",
                    description: "This function returns the specified rightmost characters from a text value.",
                    parameters: [
                        {
                            name: "text"
                        },
                        {
                            name: "num_chars"
                        }
                    ]
                },
                {
                    name: "ROMAN",
                    //shortDescription: "",
                    description: "This function converts an arabic numeral to a roman numeral text equivalent.",
                    parameters: [
                        {
                            name: "number"
                        },
                        {
                            name: "style"
                        }
                    ]
                },
                {
                    name: "ROUND",
                    //shortDescription: "",
                    description: "This function rounds the specified value to the nearest number, using the specified number of decimal places.",
                    parameters: [
                        {
                            name: "value"
                        },
                        {
                            name: "places"
                        }
                    ]
                },
                {
                    name: "ROUNDDOWN",
                    //shortDescription: "",
                    description: "This function rounds the specified number down to the nearest number, using the specified number of decimal places.",
                    parameters: [
                        {
                            name: "value"
                        },
                        {
                            name: "places"
                        }
                    ]
                },
                {
                    name: "ROUNDUP",
                    //shortDescription: "",
                    description: "This function rounds the specified number up to the nearest number, using the specified number of decimal places.",
                    parameters: [
                        {
                            name: "value"
                        },
                        {
                            name: "places"
                        }
                    ]
                },
                {
                    name: "ROW",
                    //shortDescription: "",
                    description: "This function returns the number of a row from a reference.",
                    parameters: [
                        {
                            name: "reference"
                        }
                    ]
                },
                {
                    name: "ROWS",
                    //shortDescription: "",
                    description: "This function returns the number of rows in an array.",
                    parameters: [
                        {
                            name: "array"
                        }
                    ]
                },
                {
                    name: "RSQ",
                    //shortDescription: "",
                    description: "This function returns the square of the Pearson product moment correlation coefficient (R‑squared) through data points in known y’s and known x’s.",
                    parameters: [
                        {
                            name: "array_dep"
                        },
                        {
                            name: "array_ind"
                        }
                    ]
                },
                {
                    name: "SEARCH",
                    //shortDescription: "",
                    description: "This function finds one text string in another text string and returns the index of the starting position of the found text.",
                    parameters: [
                        {
                            name: "string1"
                        },
                        {
                            name: "string2"
                        }
                    ]
                },
                {
                    name: "SECOND",
                    //shortDescription: "",
                    description: "This function returns the seconds (0 to 59) value for a specified time.",
                    parameters: [
                        {
                            name: "time"
                        }
                    ]
                },
                {
                    name: "SERIESSUM",
                    //shortDescription: "",
                    description: "This function returns the sum of a power series.",
                    parameters: [
                        {
                            name: "x"
                        },
                        {
                            name: "n"
                        },
                        {
                            name: "m"
                        },
                        {
                            name: "coeff"
                        }
                    ]
                },
                {
                    name: "SIGN",
                    //shortDescription: "",
                    description: "This function returns the sign of a number or expression.",
                    parameters: [
                        {
                            name: "cellreference"
                        }
                    ]
                },
                {
                    name: "SIN",
                    //shortDescription: "",
                    description: "This function returns the sine of the specified angle.",
                    parameters: [
                        {
                            name: "angle"
                        }
                    ]
                },
                {
                    name: "SINH",
                    //shortDescription: "",
                    description: "This function returns the hyperbolic sine of the specified number.",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "SKEW",
                    //shortDescription: "",
                    description: "This function returns the skewness of a distribution.",
                    parameters: [
                        {
                            name: "number1"
                        },
                        {
                            name: "number2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "SLN",
                    //shortDescription: "",
                    description: "This function returns the straight-line depreciation of an asset for one period.",
                    parameters: [
                        {
                            name: "cost"
                        },
                        {
                            name: "salvage"
                        },
                        {
                            name: "life"
                        }
                    ]
                },
                {
                    name: "SLOPE",
                    //shortDescription: "",
                    description: "This function calculates the slope of a linear regression.",
                    parameters: [
                        {
                            name: "array_dep"
                        },
                        {
                            name: "array_ind"
                        }
                    ]
                },
                {
                    name: "SMALL",
                    //shortDescription: "",
                    description: "This function returns the nth smallest value in a data set, where n is specified.",
                    parameters: [
                        {
                            name: "array"
                        },
                        {
                            name: "n"
                        }
                    ]
                },
                {
                    name: "SQRT",
                    //shortDescription: "",
                    description: "This function returns the positive square root of the specified number.",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "SQRTPI",
                    //shortDescription: "",
                    description: "This function returns the positive square root of a multiple of pi (p).",
                    parameters: [
                        {
                            name: "multiple"
                        }
                    ]
                },
                {
                    name: "STANDARDIZE",
                    //shortDescription: "",
                    description: "This function returns a normalized value from a distribution characterized by mean and standard deviation.",
                    parameters: [
                        {
                            name: "x"
                        },
                        {
                            name: "mean"
                        },
                        {
                            name: "stdev"
                        }
                    ]
                },
                {
                    name: "STDEVA",
                    //shortDescription: "",
                    description: "This function returns the standard deviation for a set of numbers, text, or logical values.",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "STDEVP",
                    //shortDescription: "",
                    description: "This function returns the standard deviation for an entire specified population (of numeric values).",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "STDEVPA",
                    //shortDescription: "",
                    description: "This function returns the standard deviation for an entire specified population, including text or logical values as well as numeric values.",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "STEYX",
                    //shortDescription: "",
                    description: "This function returns the standard error of the predicted y value for each x. The standard error is a measure of the amount of error in the prediction of y for a value of x.",
                    parameters: [
                        {
                            name: "array_dep"
                        },
                        {
                            name: "array_ind"
                        }
                    ]
                },
                {
                    name: "SUBSTITUTE",
                    //shortDescription: "",
                    description: "This function substitutes a new string for specified characters in an existing string.",
                    parameters: [
                        {
                            name: "text"
                        },
                        {
                            name: "old_piece"
                        },
                        {
                            name: "new_piece"
                        },
                        {
                            name: "instance"
                        }
                    ]
                },
                {
                    name: "SUBTOTAL",
                    //shortDescription: "",
                    description: "This function calculates a subtotal of a list of numbers using a specified built-in function.",
                    parameters: [
                        {
                            name: "functioncode"
                        },
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "SUM",
                    //shortDescription: "",
                    description: "This function returns the sum of cells or range of cells.",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "SUMIF",
                    //shortDescription: "",
                    description: "This function adds the cells using a given criteria.",
                    parameters: [
                        {
                            name: "array"
                        },
                        {
                            name: "condition"
                        },
                        {
                            name: "sumrange"
                        }
                    ]
                },
                {
                    name: "SUMIFS",
                    //shortDescription: "",
                    description: "This function adds the cells in a range using multiple criteria.",
                    parameters: [
                        {
                            name: "array"
                        },
                        {
                            name: "conditionarray"
                        },
                        {
                            name: "condition",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "SUMPRODUCT",
                    //shortDescription: "",
                    description: "This function returns the sum of products of cells. Multiplies corresponding components in the given arrays, and returns the sum of those products.",
                    parameters: [
                        {
                            name: "array1"
                        },
                        {
                            name: "array2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "SUMSQ",
                    //shortDescription: "",
                    description: "This function returns the sum of the squares of the arguments.",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "SUMX2MY2",
                    //shortDescription: "",
                    description: "This function returns the sum of the difference of the squares of corresponding values in two arrays.",
                    parameters: [
                        {
                            name: "array_x"
                        },
                        {
                            name: "array_y"
                        }
                    ]
                },
                {
                    name: "SUMX2PY2",
                    //shortDescription: "",
                    description: "This function returns the sum of the sum of squares of corresponding values in two arrays.",
                    parameters: [
                        {
                            name: "array_x"
                        },
                        {
                            name: "array_y"
                        }
                    ]
                },
                {
                    name: "SUMXMY2",
                    //shortDescription: "",
                    description: "This function returns the sum of the square of the differences of corresponding values in two arrays.",
                    parameters: [
                        {
                            name: "array_x"
                        },
                        {
                            name: "array_y"
                        }
                    ]
                },
                {
                    name: "SYD",
                    //shortDescription: "",
                    description: "This function returns the sum-of-years’ digits depreciation of an asset for a specified period.",
                    parameters: [
                        {
                            name: "cost"
                        },
                        {
                            name: "salvage"
                        },
                        {
                            name: "life"
                        },
                        {
                            name: "period"
                        }
                    ]
                },
                {
                    name: "T",
                    //shortDescription: "",
                    description: "This function returns the text in a specified cell.",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "TAN",
                    //shortDescription: "",
                    description: "This function returns the tangent of the specified angle.",
                    parameters: [
                        {
                            name: "angle"
                        }
                    ]
                },
                {
                    name: "TANH",
                    //shortDescription: "",
                    description: "This function returns the hyperbolic tangent of the specified number.",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "TBILLEQ",
                    //shortDescription: "",
                    description: "This function returns the equivalent yield for a Treasury bill (or T-bill)",
                    parameters: [
                        {
                            name: "settle"
                        },
                        {
                            name: "mature"
                        },
                        {
                            name: "discount"
                        }
                    ]
                },
                {
                    name: "TBILLPRICE",
                    //shortDescription: "",
                    description: "This function returns the price per $100 face value for a Treasury bill (or T-bill).",
                    parameters: [
                        {
                            name: "settle"
                        },
                        {
                            name: "mature"
                        },
                        {
                            name: "discount"
                        }
                    ]
                },
                {
                    name: "TBILLYIELD",
                    //shortDescription: "",
                    description: "This function returns the yield for a Treasury bill (or T-bill).",
                    parameters: [
                        {
                            name: "settle"
                        },
                        {
                            name: "mature"
                        },
                        {
                            name: "priceper"
                        }
                    ]
                },
                {
                    name: "TDIST",
                    //shortDescription: "",
                    description: "This function returns the probability for the t-distribution.",
                    parameters: [
                        {
                            name: "x"
                        },
                        {
                            name: "deg"
                        },
                        {
                            name: "tails"
                        }
                    ]
                },
                {
                    name: "TEXT",
                    //shortDescription: "",
                    description: "This function formats a number and converts it to text.",
                    parameters: [
                        {
                            name: "value"
                        },
                        {
                            name: "text"
                        }
                    ]
                },
                {
                    name: "TIME",
                    //shortDescription: "",
                    description: "This function returns the TimeSpan object for a specified time.",
                    parameters: [
                        {
                            name: "hour"
                        },
                        {
                            name: "minutes"
                        },
                        {
                            name: "seconds"
                        }
                    ]
                },
                {
                    name: "TIMEVALUE",
                    //shortDescription: "",
                    description: "This function returns the TimeSpan object of the time represented by a text string.",
                    parameters: [
                        {
                            name: "time_string"
                        }
                    ]
                },
                {
                    name: "TINV",
                    //shortDescription: "",
                    description: "This function returns the t-value of the student's t-distribution as a function of the probability and the degrees of freedom.",
                    parameters: [
                        {
                            name: "prog"
                        },
                        {
                            name: "deg"
                        }
                    ]
                },
                {
                    name: "TODAY",
                    //shortDescription: "",
                    description: "This function returns the date and time of the current date.",
                    parameters: []
                },
                {
                    name: "TRANSPOSE",
                    //shortDescription: "",
                    description: "This function returns a vertical range of cells as a horizontal range or a horizontal range of cells as a vertical range.",
                    parameters: [
                        {
                            name: "array"
                        }
                    ]
                },
                {
                    name: "TREND",
                    //shortDescription: "",
                    description: "This function returns values along a linear trend. This function fits a straight line to the arrays known x and y values. Trend returns the y values along that line for the array of specified new x values.",
                    parameters: [
                        {
                            name: "y"
                        },
                        {
                            name: "x"
                        },
                        {
                            name: "newx"
                        },
                        {
                            name: "constant"
                        }
                    ]
                },
                {
                    name: "TRIM",
                    //shortDescription: "",
                    description: "This function removes extra spaces from a string and leaves single spaces between words.",
                    parameters: [
                        {
                            name: "text"
                        }
                    ]
                },
                {
                    name: "TRIMMEAN",
                    //shortDescription: "",
                    description: "This function returns the mean of a subset of data excluding the top and bottom data.",
                    parameters: [
                        {
                            name: "array"
                        },
                        {
                            name: "percent"
                        }
                    ]
                },
                {
                    name: "TRUE",
                    //shortDescription: "",
                    description: "This function returns the value for logical TRUE.",
                    parameters: []
                },
                {
                    name: "TRUNC",
                    //shortDescription: "",
                    description: "This function removes the specified fractional part of the specified number.",
                    parameters: [
                        {
                            name: "value"
                        },
                        {
                            name: "precision"
                        }
                    ]
                },
                {
                    name: "TTEST",
                    //shortDescription: "",
                    description: "This function returns the probability associated with a t-test.",
                    parameters: [
                        {
                            name: "array1"
                        },
                        {
                            name: "array2"
                        },
                        {
                            name: "tails"
                        },
                        {
                            name: "type"
                        }
                    ]
                },
                {
                    name: "TYPE",
                    //shortDescription: "",
                    description: "This function returns the type of value.",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "UPPER",
                    //shortDescription: "",
                    description: "This function converts text to uppercase letters.",
                    parameters: [
                        {
                            name: "string"
                        }
                    ]
                },
                {
                    name: "VALUE",
                    //shortDescription: "",
                    description: "This function converts a text string that is a number to a numeric value.",
                    parameters: [
                        {
                            name: "text"
                        }
                    ]
                },
                {
                    name: "VAR",
                    //shortDescription: "",
                    description: "This function returns the variance based on a sample of a population, which uses only numeric values.",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "VARA",
                    //shortDescription: "",
                    description: "This function returns the variance based on a sample of a population, which includes numeric, logical, or text values.",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "VARP",
                    //shortDescription: "",
                    description: "This function returns variance based on the entire population, which uses only numeric values.",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "VARPA",
                    //shortDescription: "",
                    description: "This function returns variance based on the entire population, which includes numeric, logical, or text values.",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "VDB",
                    //shortDescription: "",
                    description: "This function returns the depreciation of an asset for any period you specify using the variable declining balance method.",
                    parameters: [
                        {
                            name: "cost"
                        },
                        {
                            name: "salvage"
                        },
                        {
                            name: "life"
                        },
                        {
                            name: "start"
                        },
                        {
                            name: "end"
                        },
                        {
                            name: "factor"
                        },
                        {
                            name: "switchnot"
                        }
                    ]
                },
                {
                    name: "VLOOKUP",
                    //shortDescription: "",
                    description: "This function searches for a value in the leftmost column and returns a value in the same row from a column you specify.",
                    parameters: [
                        {
                            name: "value"
                        },
                        {
                            name: "array"
                        },
                        {
                            name: "colindex"
                        },
                        {
                            name: "approx"
                        }
                    ]
                },
                {
                    name: "WEEKDAY",
                    //shortDescription: "",
                    description: "This function returns the number corresponding to the day of the week for a specified date.",
                    parameters: [
                        {
                            name: "date"
                        },
                        {
                            name: "type"
                        }
                    ]
                },
                {
                    name: "WEEKNUM",
                    //shortDescription: "",
                    description: "This function returns a number that indicates the week of the year numerically.",
                    parameters: [
                        {
                            name: "date"
                        },
                        {
                            name: "weektype"
                        }
                    ]
                },
                {
                    name: "WEIBULL",
                    //shortDescription: "",
                    description: "This function returns the two-parameter Weibull distribution, often used in reliability analysis.",
                    parameters: [
                        {
                            name: "x"
                        },
                        {
                            name: "alpha"
                        },
                        {
                            name: "beta"
                        },
                        {
                            name: "cumulative"
                        }
                    ]
                },
                {
                    name: "WORKDAY",
                    //shortDescription: "",
                    description: "This function returns the number of working days before or after the starting date.",
                    parameters: [
                        {
                            name: "startdate"
                        },
                        {
                            name: "numdays"
                        },
                        {
                            name: "holidays"
                        }
                    ]
                },
                {
                    name: "XIRR",
                    //shortDescription: "",
                    description: "This function calculates the internal rate of return for a schedule of cash flows that may not be periodic.",
                    parameters: [
                        {
                            name: "values"
                        },
                        {
                            name: "dates"
                        },
                        {
                            name: "guess"
                        }
                    ]
                },
                {
                    name: "XNPV",
                    //shortDescription: "",
                    description: "This function calculates the net present value for a schedule of cash flows that may not be periodic.",
                    parameters: [
                        {
                            name: "rate"
                        },
                        {
                            name: "values"
                        },
                        {
                            name: "dates"
                        }
                    ]
                },
                {
                    name: "YEAR",
                    //shortDescription: "",
                    description: "This function returns the year as an integer for a specified date.",
                    parameters: [
                        {
                            name: "date"
                        }
                    ]
                },
                {
                    name: "YEARFRAC",
                    //shortDescription: "",
                    description: "This function returns the fraction of the year represented by the number of whole days between the start and end dates.",
                    parameters: [
                        {
                            name: "startdate"
                        },
                        {
                            name: "enddate"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "YIELD",
                    //shortDescription: "",
                    description: "This function calculates the yield on a security that pays periodic interest.",
                    parameters: [
                        {
                            name: "settle"
                        },
                        {
                            name: "maturity"
                        },
                        {
                            name: "rate"
                        },
                        {
                            name: "price"
                        },
                        {
                            name: "redeem"
                        },
                        {
                            name: "frequency"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "YIELDDISC",
                    //shortDescription: "",
                    description: "This function calculates the annual yield for a discounted security.",
                    parameters: [
                        {
                            name: "settle"
                        },
                        {
                            name: "maturity"
                        },
                        {
                            name: "price"
                        },
                        {
                            name: "redeem"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "YIELDMAT",
                    //shortDescription: "",
                    description: "This function calculates the annual yield of a security that pays interest at maturity.",
                    parameters: [
                        {
                            name: "settle"
                        },
                        {
                            name: "maturity"
                        },
                        {
                            name: "issue"
                        },
                        {
                            name: "issrate"
                        },
                        {
                            name: "price"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "ZTEST",
                    //shortDescription: "",
                    description: "This function returns the significance value of a z-test. The z-test generates a standard score for x with respect to the set of data and returns the two-tailed probability for the normal distribution.",
                    parameters: [
                        {
                            name: "array"
                        },
                        {
                            name: "x"
                        },
                        {
                            name: "sigma"
                        }
                    ]
                },
                {
                    name: "PIESPARKLINE",
                    //shortDescription: "",
                    description: "This function returns a data set used for representing a pie sparkline",
                    parameters: [
                        {
                            name: "range|percentage"
                        },
                        {
                            name: "color",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "AREASPARKLINE",
                    //shortDescription: "",
                    description: "This function returns a data set used for representing a area sparkline",
                    parameters: [
                        {
                            name: "points"
                        },
                        {
                            name: "mini"
                        },
                        {
                            name: "maxi"
                        },
                        {
                            name: "line1"
                        },
                        {
                            name: "line2"
                        },
                        {
                            name: "colorPositive"
                        },
                        {
                            name: "colorNegative"
                        }
                    ]
                },
                {
                    name: "SCATTERSPARKLINE",
                    //shortDescription: "",
                    description: "This function returns a data set used for representing a scatter sparkline",
                    parameters: [
                        {
                            name: "points1"
                        },
                        {
                            name: "points2"
                        },
                        {
                            name: "minX"
                        },
                        {
                            name: "maxX"
                        },
                        {
                            name: "minY"
                        },
                        {
                            name: "maxY"
                        },
                        {
                            name: "hLine"
                        },
                        {
                            name: "vLine"
                        },
                        {
                            name: "xMinZone"
                        },
                        {
                            name: "xMaxZone"
                        },
                        {
                            name: "yMinZone"
                        },
                        {
                            name: "yMaxZone"
                        },
                        {
                            name: "tags"
                        },
                        {
                            name: "drawSymbol"
                        },
                        {
                            name: "drawLines"
                        },
                        {
                            name: "color1"
                        },
                        {
                            name: "color2"
                        },
                        {
                            name: "dash"
                        }
                    ]
                },
                {
                    name: "LINESPARKLINE",
                    //shortDescription: "",
                    description: "This function returns a data set used for representing a line sparkline",
                    parameters: [
                        {
                            name: "data"
                        },
                        {
                            name: "dataOrientation"
                        },
                        {
                            name: "dateAxisData"
                        },
                        {
                            name: "dateAxisOrientation"
                        },
                        {
                            name: "setting"
                        }
                    ]
                },
                {
                    name: "COLUMNSPARKLINE",
                    //shortDescription: "",
                    description: "This function returns a data set used for representing a column sparkline",
                    parameters: [
                        {
                            name: "data"
                        },
                        {
                            name: "dataOrientation"
                        },
                        {
                            name: "dateAxisData"
                        },
                        {
                            name: "dateAxisOrientation"
                        },
                        {
                            name: "setting"
                        }
                    ]
                },
                {
                    name: "WINLOSSSPARKLINE",
                    //shortDescription: "",
                    description: "This function returns a data set used for representing a win/loss sparkline",
                    parameters: [
                        {
                            name: "data"
                        },
                        {
                            name: "dataOrientation"
                        },
                        {
                            name: "dateAxisData"
                        },
                        {
                            name: "dateAxisOrientation"
                        },
                        {
                            name: "setting"
                        }
                    ]
                }
            ];
            return FormulaTextBoxResource_EN;
        })();
        spread.FormulaTextBoxResource_EN = FormulaTextBoxResource_EN;

        //#endregion
        //#region JP
        var FormulaTextBoxResource_JP = (function () {
            function FormulaTextBoxResource_JP() {
            }
            FormulaTextBoxResource_JP.Functions = [
                {
                    name: "ABS",
                    //shortDescription: "",
                    description: "指定した値の絶対値を返します。",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "ACCRINT",
                    //shortDescription: "",
                    description: "定期的に利息が支払われる証券の未収利息額を算出します。",
                    parameters: [
                        {
                            name: "issue"
                        },
                        {
                            name: "first"
                        },
                        {
                            name: "settle"
                        },
                        {
                            name: "rate"
                        },
                        {
                            name: "par"
                        },
                        {
                            name: "frequency"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "ACCRINTM",
                    //shortDescription: "",
                    description: "満期に利息が支払われる証券の未収利息額を算出します。",
                    parameters: [
                        {
                            name: "issue"
                        },
                        {
                            name: "maturity"
                        },
                        {
                            name: "rate"
                        },
                        {
                            name: "par"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "ACOS",
                    //shortDescription: "",
                    description: "指定の値がコサインとなる角度を返します。戻り値の角度は 0～π（ラジアン単位）です。",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "ACOSH",
                    //shortDescription: "",
                    description: "指定した角度のハイパーボリックコサインの逆関数値を算出します。",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "ADDRESS",
                    //shortDescription: "",
                    description: "指定の行番号および列番号に基づき、セル アドレスを表すテキストを生成します。",
                    parameters: [
                        {
                            name: "row"
                        },
                        {
                            name: "column"
                        },
                        {
                            name: "absnum"
                        },
                        {
                            name: "a1style"
                        },
                        {
                            name: "sheettext"
                        }
                    ]
                },
                {
                    name: "AMORDEGRC",
                    //shortDescription: "",
                    description: "日割り計算による減価償却を考慮し、資産耐用年数に基づく減価償却係数を計算に適用して、会計期ごとの減価償却を返します。",
                    parameters: [
                        {
                            name: "cost"
                        },
                        {
                            name: "datepurchased"
                        },
                        {
                            name: "firstperiod"
                        },
                        {
                            name: "salvage"
                        },
                        {
                            name: "period"
                        },
                        {
                            name: "drate"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "AMORLINC",
                    //shortDescription: "",
                    description: "日割り計算による減価消却を考慮し、指定の会計期の減価償却費を計算します。",
                    parameters: [
                        {
                            name: "cost"
                        },
                        {
                            name: "datepurchased"
                        },
                        {
                            name: "firstperiod"
                        },
                        {
                            name: "salvage"
                        },
                        {
                            name: "period"
                        },
                        {
                            name: "drate"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "AND",
                    //shortDescription: "",
                    description: "すべての引数が真であれば True を、１つ以上の引数が偽であれば False を返します。",
                    parameters: [
                        {
                            name: "logical1"
                        },
                        {
                            name: "logical2"
                        }
                    ]
                },
                {
                    name: "ASIN",
                    //shortDescription: "",
                    description: "指定の値がサインとなる角度を返します。戻り値の角度は -π/2～π/2（ラジアン単位）です。",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "ASINH",
                    //shortDescription: "",
                    description: "指定した数値のハイパーボリックサインの逆関数値を算出します。",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "ATAN",
                    //shortDescription: "",
                    description: "指定の値がタンジェントとなる角度を返します。戻り値の角度は -π/2～π/2（ラジアン単位）です。",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "ATAN2",
                    //shortDescription: "",
                    description: "指定の x 座標および y 座標のアークタンジェントを返します。戻り値の角度は -π～π（ラジアン単位、ただし -π を除く）です。",
                    parameters: [
                        {
                            name: "x"
                        },
                        {
                            name: "y"
                        }
                    ]
                },
                {
                    name: "ATANH",
                    //shortDescription: "",
                    description: "指定した数値のハイパーボリックタンジェントの逆関数値を算出します。",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "AVEDEV",
                    //shortDescription: "",
                    description: "指定のデータ全体の平均値に対する、個々の値の絶対偏差の平均値を算出します。",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "AVERAGE",
                    //shortDescription: "",
                    description: "指定した数値の平均値を算出します。",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "AVERAGEA",
                    //shortDescription: "",
                    description: "指定した数値の平均値を算出します。",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "AVERAGEIF",
                    //shortDescription: "",
                    description: "指定した基準を満たすデータセットの平均値を計算します。",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        },
                        {
                            name: "condition"
                        }
                    ]
                },
                {
                    name: "AVERAGEIFS",
                    //shortDescription: "",
                    description: "指定した複数の基準を満たすデータセットの平均値を計算します。",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "condition1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        },
                        {
                            name: "condition2..."
                        }
                    ]
                },
                {
                    name: "BESSELI",
                    //shortDescription: "",
                    description: "純虚数を引数としたときの第１種変形ベッセル関数を返します。",
                    parameters: [
                        {
                            name: "value"
                        },
                        {
                            name: "order"
                        }
                    ]
                },
                {
                    name: "BESSELJ",
                    //shortDescription: "",
                    description: "第１種ベッセル関数を返します。",
                    parameters: [
                        {
                            name: "value"
                        },
                        {
                            name: "order"
                        }
                    ]
                },
                {
                    name: "BESSELK",
                    //shortDescription: "",
                    description: "純虚数を引数としたときの第２種変形ベッセル関数を返します。",
                    parameters: [
                        {
                            name: "value"
                        },
                        {
                            name: "order"
                        }
                    ]
                },
                {
                    name: "BESSELY",
                    //shortDescription: "",
                    description: "第２種ベッセル関数を返します。",
                    parameters: [
                        {
                            name: "value"
                        },
                        {
                            name: "order"
                        }
                    ]
                },
                {
                    name: "BETADIST",
                    //shortDescription: "",
                    description: "累積β確率密度関数の値を算出します。",
                    parameters: [
                        {
                            name: "x"
                        },
                        {
                            name: "alpha"
                        },
                        {
                            name: "beta"
                        },
                        {
                            name: "lower"
                        },
                        {
                            name: "upper"
                        }
                    ]
                },
                {
                    name: "BETAINV",
                    //shortDescription: "",
                    description: "累積β確率密度関数の逆関数の値を算出します。",
                    parameters: [
                        {
                            name: "prob"
                        },
                        {
                            name: "alpha"
                        },
                        {
                            name: "beta"
                        },
                        {
                            name: "lower"
                        },
                        {
                            name: "upper"
                        }
                    ]
                },
                {
                    name: "BIN2DEC",
                    //shortDescription: "",
                    description: "２進数値を 10 進数値に変換します。",
                    parameters: [
                        {
                            name: "number"
                        }
                    ]
                },
                {
                    name: "BIN2HEX",
                    //shortDescription: "",
                    description: "２進数値を 16 進数値に変換します。",
                    parameters: [
                        {
                            name: "number"
                        },
                        {
                            name: "places"
                        }
                    ]
                },
                {
                    name: "BIN2OCT",
                    //shortDescription: "",
                    description: "２進数値を８進数値に変換します。",
                    parameters: [
                        {
                            name: "number"
                        },
                        {
                            name: "places"
                        }
                    ]
                },
                {
                    name: "BINOMDIST",
                    //shortDescription: "",
                    description: "個別項の二項分布の確率を算出します。",
                    parameters: [
                        {
                            name: "x"
                        },
                        {
                            name: "n"
                        },
                        {
                            name: "p"
                        },
                        {
                            name: "cumulative"
                        }
                    ]
                },
                {
                    name: "CEILING",
                    //shortDescription: "",
                    description: "指定した基準値の倍数になるように数値を丸め、元の値に最も近い値を返します。",
                    parameters: [
                        {
                            name: "value"
                        },
                        {
                            name: "signif"
                        }
                    ]
                },
                {
                    name: "CHAR",
                    //shortDescription: "",
                    description: "指定した数値に対応する文字を返します。",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "CHIDIST",
                    //shortDescription: "",
                    description: "片側カイ２乗分布の確率を算出します。",
                    parameters: [
                        {
                            name: "value"
                        },
                        {
                            name: "deg"
                        }
                    ]
                },
                {
                    name: "CHIINV",
                    //shortDescription: "",
                    description: "片側カイ２乗分布確率の逆関数を算出します。",
                    parameters: [
                        {
                            name: "prob"
                        },
                        {
                            name: "deg"
                        }
                    ]
                },
                {
                    name: "CHITEST",
                    //shortDescription: "",
                    description: "カイ２乗分布からの独立性を検定します。",
                    parameters: [
                        {
                            name: "obs_array"
                        },
                        {
                            name: "exp_array"
                        }
                    ]
                },
                {
                    name: "CHOOSE",
                    //shortDescription: "",
                    description: "値リストの中から特定の値を返します。",
                    parameters: [
                        {
                            name: "index"
                        },
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "CLEAN",
                    //shortDescription: "",
                    description: "指定のテキストから、印刷できないすべての文字を削除します。",
                    parameters: [
                        {
                            name: "text"
                        }
                    ]
                },
                {
                    name: "CODE",
                    //shortDescription: "",
                    description: "テキスト内の先頭文字に対応する数値コードを返します。返されるコードは、Unicodeです。",
                    parameters: [
                        {
                            name: "text"
                        }
                    ]
                },
                {
                    name: "COLUMN",
                    //shortDescription: "",
                    description: "参照の列番号を返します。",
                    parameters: [
                        {
                            name: "reference"
                        }
                    ]
                },
                {
                    name: "COLUMNS",
                    //shortDescription: "",
                    description: "配列内の列数を返します。",
                    parameters: [
                        {
                            name: "array"
                        }
                    ]
                },
                {
                    name: "COMBIN",
                    //shortDescription: "",
                    description: "総数から指定の個数を抜き取る場合、選択可能な組み合わせの数を返します。",
                    parameters: [
                        {
                            name: "k"
                        },
                        {
                            name: "n"
                        }
                    ]
                },
                {
                    name: "COMPLEX",
                    //shortDescription: "",
                    description: "実数係数および虚数係数を複素数に変換します。",
                    parameters: [
                        {
                            name: "realcoeff"
                        },
                        {
                            name: "imagcoeff"
                        },
                        {
                            name: "suffix"
                        }
                    ]
                },
                {
                    name: "CONCATENATE",
                    //shortDescription: "",
                    description: "指定の文字列または数値を１つの文字列に統合します。",
                    parameters: [
                        {
                            name: "text1"
                        },
                        {
                            name: "text2"
                        },
                        {
                            name: "...."
                        }
                    ]
                },
                {
                    name: "CONFIDENCE",
                    //shortDescription: "",
                    description: "母集団の平均値に対する信頼区間を返します。",
                    parameters: [
                        {
                            name: "alpha"
                        },
                        {
                            name: "stdev"
                        },
                        {
                            name: "size"
                        }
                    ]
                },
                {
                    name: "CONVERT",
                    //shortDescription: "",
                    description: "ある計測単位の値を、別の計測単位に変換します。",
                    parameters: [
                        {
                            name: "number"
                        },
                        {
                            name: "from-unit"
                        },
                        {
                            name: "to-unit"
                        }
                    ]
                },
                {
                    name: "CORREL",
                    //shortDescription: "",
                    description: "２組のデータセット間の相関係数を返します。",
                    parameters: [
                        {
                            name: "array1"
                        },
                        {
                            name: "array2"
                        }
                    ]
                },
                {
                    name: "COS",
                    //shortDescription: "",
                    description: "指定した角度のコサインを返します。",
                    parameters: [
                        {
                            name: "angle"
                        }
                    ]
                },
                {
                    name: "COSH",
                    //shortDescription: "",
                    description: "指定した角度のハイパーボリックコサインを返します。",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "COUNT",
                    //shortDescription: "",
                    description: "指定した複数の値に数値が何個含まれているか個数を返します。",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "COUNTA",
                    //shortDescription: "",
                    description: "指定した複数の値に数値が何個含まれているか個数を返します。",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "COUNTBLANK",
                    //shortDescription: "",
                    description: "シート上の指定のセル範囲から、空白セルの数を返します。",
                    parameters: [
                        {
                            name: "cellrange"
                        }
                    ]
                },
                {
                    name: "COUNTIF",
                    //shortDescription: "",
                    description: "特定の条件を満たすセルの数を返します。",
                    parameters: [
                        {
                            name: "cellrange"
                        },
                        {
                            name: "condition"
                        }
                    ]
                },
                {
                    name: "COUNTIFS",
                    //shortDescription: "",
                    description: "複数の条件を満たすセルの数を返します。",
                    parameters: [
                        {
                            name: "cellrange"
                        },
                        {
                            name: "condition"
                        }
                    ]
                },
                {
                    name: "COUPDAYBS",
                    //shortDescription: "",
                    description: "証券の利払期間の１日目から受渡日までの日数を計算します。",
                    parameters: [
                        {
                            name: "settlement"
                        },
                        {
                            name: "maturity"
                        },
                        {
                            name: "frequency"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "COUPDAYS",
                    //shortDescription: "",
                    description: "証券の利払期間（受渡日を含む）を表す日数を返します。",
                    parameters: [
                        {
                            name: "settlement"
                        },
                        {
                            name: "maturity"
                        },
                        {
                            name: "frequency"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "COUPDAYSNC",
                    //shortDescription: "",
                    description: "証券の受渡日から次の利払日までの日数を計算します。",
                    parameters: [
                        {
                            name: "settlement"
                        },
                        {
                            name: "maturity"
                        },
                        {
                            name: "frequency"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "COUPNCD",
                    //shortDescription: "",
                    description: "証券の受渡後の次回の利払日を日付値で返します。",
                    parameters: [
                        {
                            name: "settlement"
                        },
                        {
                            name: "maturity"
                        },
                        {
                            name: "frequency"
                        },
                        {
                            name: "basi"
                        }
                    ]
                },
                {
                    name: "COUPNUM",
                    //shortDescription: "",
                    description: "証券の受渡日から満期日までの期間中の利払回数を返します。",
                    parameters: [
                        {
                            name: "settlement"
                        },
                        {
                            name: "maturity"
                        },
                        {
                            name: "frequency"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "COUPPCD",
                    //shortDescription: "",
                    description: "証券の受渡日直前の利払日を日付値で返します。",
                    parameters: [
                        {
                            name: "settlement"
                        },
                        {
                            name: "maturity"
                        },
                        {
                            name: "frequency"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "COVAR",
                    //shortDescription: "",
                    description: "２組の対応するデータの標準偏差の積の平均値を返します。",
                    parameters: [
                        {
                            name: "array1"
                        },
                        {
                            name: "array2"
                        }
                    ]
                },
                {
                    name: "CRITBINOM",
                    //shortDescription: "",
                    description: "累積二項分布の値が基準値以上となる最小値を返します。",
                    parameters: [
                        {
                            name: "n"
                        },
                        {
                            name: "p"
                        },
                        {
                            name: "alpha"
                        }
                    ]
                },
                {
                    name: "CUMIPMT",
                    //shortDescription: "",
                    description: "開始期から終了期までの期間内で、貸付金に対して支払われる利息の累計を計算します。",
                    parameters: [
                        {
                            name: "rate"
                        },
                        {
                            name: "nper"
                        },
                        {
                            name: "pval"
                        },
                        {
                            name: "startperiod"
                        },
                        {
                            name: "endperiod"
                        },
                        {
                            name: "paytype"
                        }
                    ]
                },
                {
                    name: "CUMPRINC",
                    //shortDescription: "",
                    description: "開始期から終了期までの期間内で、貸付金に対して支払われる元金の累計を計算します。",
                    parameters: [
                        {
                            name: "rate"
                        },
                        {
                            name: "nper"
                        },
                        {
                            name: "pval"
                        },
                        {
                            name: "startperiod"
                        },
                        {
                            name: "endperiod"
                        },
                        {
                            name: "paytype"
                        }
                    ]
                },
                {
                    name: "DATE",
                    //shortDescription: "",
                    description: "年、月、日で指定した日付に対する日付オブジェクトを返します。",
                    parameters: [
                        {
                            name: "year"
                        },
                        {
                            name: "month"
                        },
                        {
                            name: "day"
                        }
                    ]
                },
                {
                    name: "DATEDIF",
                    //shortDescription: "",
                    description: "２つの日付間の日数、月数、または年数を返します。",
                    parameters: [
                        {
                            name: "date1"
                        },
                        {
                            name: "date2"
                        },
                        {
                            name: "outputcode"
                        }
                    ]
                },
                {
                    name: "DATEVALUE",
                    //shortDescription: "",
                    description: "指定の日付に対する日時を返します。",
                    parameters: [
                        {
                            name: "date_string"
                        }
                    ]
                },
                {
                    name: "DAVERAGE",
                    //shortDescription: "",
                    description: "リストまたはデータベース内の指定の１列において、指定の条件を満たす値の平均値を計算します。",
                    parameters: [
                        {
                            name: "database"
                        },
                        {
                            name: " field"
                        },
                        {
                            name: " criteria"
                        }
                    ]
                },
                {
                    name: "DAY",
                    //shortDescription: "",
                    description: "特定の日付に対応する、月内の日（1～31）を返します。",
                    parameters: [
                        {
                            name: "date"
                        }
                    ]
                },
                {
                    name: "DAYS360",
                    //shortDescription: "",
                    description: "１年を 360 日（１月が 30 日）とみなし、２つの日付間の日数を返します。",
                    parameters: [
                        {
                            name: "startdate"
                        },
                        {
                            name: "enddate"
                        },
                        {
                            name: "method"
                        }
                    ]
                },
                {
                    name: "DB",
                    //shortDescription: "",
                    description: "定率法を使用して、特定の期の資産の減価償却費を算出します。",
                    parameters: [
                        {
                            name: "cost"
                        },
                        {
                            name: "salvage"
                        },
                        {
                            name: "life"
                        },
                        {
                            name: "period"
                        },
                        {
                            name: "month"
                        }
                    ]
                },
                {
                    name: "DCOUNT",
                    //shortDescription: "",
                    description: "リストまたはデータベース内の指定の１列において、指定の条件を満たす数値を保持するセル数をカウントします。",
                    parameters: [
                        {
                            name: "database"
                        },
                        {
                            name: " field"
                        },
                        {
                            name: " criteria"
                        }
                    ]
                },
                {
                    name: "DCOUNTA",
                    //shortDescription: "",
                    description: "リストまたはデータベース内の指定の１列において、指定の条件を満たす、空白以外のセル数をカウントします。",
                    parameters: [
                        {
                            name: "database"
                        },
                        {
                            name: " field"
                        },
                        {
                            name: " criteria"
                        }
                    ]
                },
                {
                    name: "DDB",
                    //shortDescription: "",
                    description: "倍率法、またはその他の指定の計算方法を使用して、特定の期の資産の減価償却費を算出します。",
                    parameters: [
                        {
                            name: "cost"
                        },
                        {
                            name: "salvage"
                        },
                        {
                            name: "life"
                        },
                        {
                            name: "period"
                        },
                        {
                            name: "factor"
                        }
                    ]
                },
                {
                    name: "DEC2BIN",
                    //shortDescription: "",
                    description: "10 進数値を２進数値に変換します。",
                    parameters: [
                        {
                            name: "number"
                        },
                        {
                            name: "places"
                        }
                    ]
                },
                {
                    name: "DEC2HEX",
                    //shortDescription: "",
                    description: "10 進数値を 16 進数値に変換します。",
                    parameters: [
                        {
                            name: "number"
                        },
                        {
                            name: "places"
                        }
                    ]
                },
                {
                    name: "DEC2OCT",
                    //shortDescription: "",
                    description: "10 進数値を８進数値に変換します。",
                    parameters: [
                        {
                            name: "number"
                        },
                        {
                            name: "places"
                        }
                    ]
                },
                {
                    name: "DEGREES",
                    //shortDescription: "",
                    description: "指定したラジアン単位の角度の値を度単位に変換します。",
                    parameters: [
                        {
                            name: "angle"
                        }
                    ]
                },
                {
                    name: "DELTA",
                    //shortDescription: "",
                    description: "２つの値が等しいかどうかを調べます。２つの値が等しければ１、そうでなければ０を返します。",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2"
                        }
                    ]
                },
                {
                    name: "DEVSQ",
                    //shortDescription: "",
                    description: "平均値に対する個々のデータ点の偏差の平方和を算出します。",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "DGET",
                    //shortDescription: "",
                    description: "リストまたはデータベース内の指定の１列において、指定の条件を満たす１つの値を抽出します。",
                    parameters: [
                        {
                            name: "database"
                        },
                        {
                            name: " field"
                        },
                        {
                            name: " criteria"
                        }
                    ]
                },
                {
                    name: "DISC",
                    //shortDescription: "",
                    description: "証券の割引率を算出します。",
                    parameters: [
                        {
                            name: "settle"
                        },
                        {
                            name: "mature"
                        },
                        {
                            name: "pricep"
                        },
                        {
                            name: "redeem"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "DMAX",
                    //shortDescription: "",
                    description: "リストまたはデータベース内の指定の１列において、指定の条件を満たす最大値を返します。",
                    parameters: [
                        {
                            name: "database"
                        },
                        {
                            name: " field"
                        },
                        {
                            name: " criteria"
                        }
                    ]
                },
                {
                    name: "DMIN",
                    //shortDescription: "",
                    description: "リストまたはデータベース内の指定の１列において、指定の条件を満たす最小値を返します。",
                    parameters: [
                        {
                            name: "database"
                        },
                        {
                            name: " field"
                        },
                        {
                            name: " criteria"
                        }
                    ]
                },
                {
                    name: "DOLLAR",
                    //shortDescription: "",
                    description: "数値を指定の小数位になるように四捨五入し、通貨書式を施した文字列に変換します。",
                    parameters: [
                        {
                            name: "value"
                        },
                        {
                            name: "digits"
                        }
                    ]
                },
                {
                    name: "DOLLARDE",
                    //shortDescription: "",
                    description: "分数表記されたドル値を、小数表記のドル値に変換します。",
                    parameters: [
                        {
                            name: "fractionaldollar"
                        },
                        {
                            name: "fraction"
                        }
                    ]
                },
                {
                    name: "DOLLARFR",
                    //shortDescription: "",
                    description: "小数表記されたドル値を、分数表記のドル値に変換します。",
                    parameters: [
                        {
                            name: "decimaldollar"
                        },
                        {
                            name: "fraction"
                        }
                    ]
                },
                {
                    name: "DPRODUCT",
                    //shortDescription: "",
                    description: "リストまたはデータベース内の指定の１列において、指定の条件を満たす値を乗算します。",
                    parameters: [
                        {
                            name: "database"
                        },
                        {
                            name: " field"
                        },
                        {
                            name: " criteria"
                        }
                    ]
                },
                {
                    name: "DSTDEV",
                    //shortDescription: "",
                    description: "リストまたはデータベース内の指定の１列における、指定の条件を満たす数値を標本として使用して、母集団の標準偏差を評価します",
                    parameters: [
                        {
                            name: "database"
                        },
                        {
                            name: " field"
                        },
                        {
                            name: " criteria"
                        }
                    ]
                },
                {
                    name: "DSTDEVP",
                    //shortDescription: "",
                    description: "リストまたはデータベース内の指定の１列における、指定の条件を満たす数値を使用して、母集団全体に基づく標準偏差を計算します。",
                    parameters: [
                        {
                            name: "database"
                        },
                        {
                            name: " field"
                        },
                        {
                            name: " criteria"
                        }
                    ]
                },
                {
                    name: "DSUM",
                    //shortDescription: "",
                    description: "リストまたはデータベース内の指定の１列において、指定の条件を満たす数値を加算します。",
                    parameters: [
                        {
                            name: "database"
                        },
                        {
                            name: " field"
                        },
                        {
                            name: " criteria"
                        }
                    ]
                },
                {
                    name: "DURATION",
                    //shortDescription: "",
                    description: "額面を $100 とみなした証券のマコーレー デュレーションを返します。",
                    parameters: [
                        {
                            name: "settlement"
                        },
                        {
                            name: "maturity"
                        },
                        {
                            name: "coupon"
                        },
                        {
                            name: "yield"
                        },
                        {
                            name: "frequency"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "DVAR",
                    //shortDescription: "",
                    description: "リストまたはデータベース内の指定の１列における、指定の条件を満たす数値を標本として使用して、母集団の分散を評価します。",
                    parameters: [
                        {
                            name: "database"
                        },
                        {
                            name: " field"
                        },
                        {
                            name: " criteria"
                        }
                    ]
                },
                {
                    name: "DVARP",
                    //shortDescription: "",
                    description: "リストまたはデータベース内の指定の１列における、指定の条件を満たす数値を使用して、母集団全体に基づく分散を計算します。",
                    parameters: [
                        {
                            name: "database"
                        },
                        {
                            name: " field"
                        },
                        {
                            name: " criteria"
                        }
                    ]
                },
                {
                    name: "EDATE",
                    //shortDescription: "",
                    description: "指定の日付から、指定の月数だけ前または後の日時を返します。",
                    parameters: [
                        {
                            name: "startdate"
                        },
                        {
                            name: "months"
                        }
                    ]
                },
                {
                    name: "EFFECT",
                    //shortDescription: "",
                    description: "指定の名目年利率と１年あたりの複利計算期間に基づき、実効年利率を返します。",
                    parameters: [
                        {
                            name: "nomrate"
                        },
                        {
                            name: "comper"
                        }
                    ]
                },
                {
                    name: "EOMONTH",
                    //shortDescription: "",
                    description: "指定の日付から、指定の月数だけ前または後の月の最終日（月末日）となる日時を返します。",
                    parameters: [
                        {
                            name: "startdate"
                        },
                        {
                            name: "months"
                        }
                    ]
                },
                {
                    name: "ERF",
                    //shortDescription: "",
                    description: "上限から下限の範囲で、誤差関数の積分値を返します。",
                    parameters: [
                        {
                            name: "limit"
                        },
                        {
                            name: "upperlimit"
                        }
                    ]
                },
                {
                    name: "ERFC",
                    //shortDescription: "",
                    description: "下限から無限大の範囲で、相補誤差関数の積分値を返します。",
                    parameters: [
                        {
                            name: "lowerlimit"
                        }
                    ]
                },
                {
                    name: "ERROR.TYPE",
                    //shortDescription: "",
                    description: "エラー値に対応する数値を返します。エラーがない場合は、#N/A を返します。",
                    parameters: [
                        {
                            name: "errorvalue"
                        }
                    ]
                },
                {
                    name: "EURO",
                    //shortDescription: "",
                    description: "ISO 通貨コードに基づき、１ユーロに相当する通貨値を返します。",
                    parameters: [
                        {
                            name: "code"
                        }
                    ]
                },
                {
                    name: "EUROCONVERT",
                    //shortDescription: "",
                    description: "ユーロ加盟国通貨（ユーロを含む）間で、ある通貨値を別の通貨値に変換します。",
                    parameters: [
                        {
                            name: "currency"
                        },
                        {
                            name: "source"
                        },
                        {
                            name: "target"
                        },
                        {
                            name: "fullprecision"
                        },
                        {
                            name: "triangulation"
                        }
                    ]
                },
                {
                    name: "EVEN",
                    //shortDescription: "",
                    description: "指定した値を切り上げ、最も近い偶数の整数値を返します。",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "EXACT",
                    //shortDescription: "",
                    description: "２つの文字列が等しければ True を、そうでなければ False を返します。",
                    parameters: [
                        {
                            name: "text1"
                        },
                        {
                            name: "text2"
                        }
                    ]
                },
                {
                    name: "EXP",
                    //shortDescription: "",
                    description: "e（自然対数の底）を底とする、指定の数のべき乗 (ex) を返します。EXP 関数は LN の逆関数です。",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "EXPONDIST",
                    //shortDescription: "",
                    description: "指数分布関数または確率密度関数の値を算出します。",
                    parameters: [
                        {
                            name: "value"
                        },
                        {
                            name: "lambda"
                        },
                        {
                            name: "cumulative"
                        }
                    ]
                },
                {
                    name: "FACT",
                    //shortDescription: "",
                    description: "指定した値の階乗を返します。",
                    parameters: [
                        {
                            name: "number"
                        }
                    ]
                },
                {
                    name: "FACTDOUBLE",
                    //shortDescription: "",
                    description: "数値の２乗階乗を返します。",
                    parameters: [
                        {
                            name: "number"
                        }
                    ]
                },
                {
                    name: "FALSE",
                    //shortDescription: "",
                    description: "論理値０（False）を返します。",
                    parameters: []
                },
                {
                    name: "FDIST",
                    //shortDescription: "",
                    description: "２組のデータ間の分散度を比較する F 確率分布関数を算出します。",
                    parameters: [
                        {
                            name: "value"
                        },
                        {
                            name: "degnum"
                        },
                        {
                            name: "degden"
                        }
                    ]
                },
                {
                    name: "FIND",
                    //shortDescription: "",
                    description: "テキスト内から指定の文字を検索し、この文字の位置を返します。",
                    parameters: [
                        {
                            name: "findtext"
                        },
                        {
                            name: "intext"
                        },
                        {
                            name: "start"
                        }
                    ]
                },
                {
                    name: "FINV",
                    //shortDescription: "",
                    description: "F 確率分布関数の逆関数の値を返します。p = FDIST(x,...) であるとき、FINV(p,...) = x となります。",
                    parameters: [
                        {
                            name: "p"
                        },
                        {
                            name: "degnum"
                        },
                        {
                            name: "degden"
                        }
                    ]
                },
                {
                    name: "FISHER",
                    //shortDescription: "",
                    description: "指定の値に対するフィッシャー変換値を算出します。",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "FISHERINV",
                    //shortDescription: "",
                    description: "フィッシャー変換の逆関数の値を算出します。",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "FIXED",
                    //shortDescription: "",
                    description: "数値を指定の小数位になるように四捨五入し、ピリオドとコンマ（指定した場合）による小数書式を適用した結果をテキストとして返します。",
                    parameters: [
                        {
                            name: "num"
                        },
                        {
                            name: "digits"
                        },
                        {
                            name: "notcomma"
                        }
                    ]
                },
                {
                    name: "FLOOR",
                    //shortDescription: "",
                    description: "指定した基準値の倍数になるように数値を切り捨て、元の値に最も近い値を返します。",
                    parameters: [
                        {
                            name: "value"
                        },
                        {
                            name: "signif"
                        }
                    ]
                },
                {
                    name: "FORECAST",
                    //shortDescription: "",
                    description: "既知の値を使用して予測値を算出します。",
                    parameters: [
                        {
                            name: "value"
                        },
                        {
                            name: "Yarray"
                        },
                        {
                            name: "Xarray"
                        }
                    ]
                },
                {
                    name: "FREQUENCY",
                    //shortDescription: "",
                    description: "指定の値範囲内で値が出現する頻度を計算します。 この関数は、数値の垂直配列を返します。",
                    parameters: [
                        {
                            name: "dataarray"
                        },
                        {
                            name: "binarray"
                        }
                    ]
                },
                {
                    name: "FTEST",
                    //shortDescription: "",
                    description: "F 検定の結果を返します。これは、２つの配列内のデータの分散に有意な差が認められない片側確率の算出結果です。",
                    parameters: [
                        {
                            name: "array1"
                        },
                        {
                            name: "array2"
                        }
                    ]
                },
                {
                    name: "FV",
                    //shortDescription: "",
                    description: "現在価値、定期払い、および特定の利率を条件とし、投資の将来価値を算出します。",
                    parameters: [
                        {
                            name: "rate"
                        },
                        {
                            name: "numper"
                        },
                        {
                            name: "paymt"
                        },
                        {
                            name: "pval"
                        },
                        {
                            name: "type"
                        }
                    ]
                },
                {
                    name: "FVSCHEDULE",
                    //shortDescription: "",
                    description: "投資期間内の一連の金利を複合計算することにより、初期投資（元金）の将来価値を算出します。",
                    parameters: [
                        {
                            name: "principal"
                        },
                        {
                            name: "schedule"
                        }
                    ]
                },
                {
                    name: "GAMMADIST",
                    //shortDescription: "",
                    description: "ガンマ分布関数の値を算出します。",
                    parameters: [
                        {
                            name: "x"
                        },
                        {
                            name: "alpha"
                        },
                        {
                            name: "beta"
                        },
                        {
                            name: "cumulative"
                        }
                    ]
                },
                {
                    name: "GAMMAINV",
                    //shortDescription: "",
                    description: "ガンマ累積分布関数の逆関数の値を返します。p = GAMMADIST(x,...) であるとき、GAMMAINV(p,...) = x となります。",
                    parameters: [
                        {
                            name: "p"
                        },
                        {
                            name: "alpha"
                        },
                        {
                            name: "beta"
                        }
                    ]
                },
                {
                    name: "GAMMALN",
                    //shortDescription: "",
                    description: "ガンマ関数の値の自然対数 (x) を返します。",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "GCD",
                    //shortDescription: "",
                    description: "２つの数値間の最大公約数を返します。最大公約数とは、対象となるすべての値を余りを出さずに割り切ることのできる最大の整数です。",
                    parameters: [
                        {
                            name: "number1"
                        },
                        {
                            name: "number2"
                        }
                    ]
                },
                {
                    name: "GEOMEAN",
                    //shortDescription: "",
                    description: "一群の正数の相乗平均値を算出します。",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "GESTEP",
                    //shortDescription: "",
                    description: "数値がしきい値に等しいかどうかを判定します。指定した数値がしきい値と等しいか、それ以上であれば１、そうでない場合は０を返します。",
                    parameters: [
                        {
                            name: "number"
                        },
                        {
                            name: "step"
                        }
                    ]
                },
                {
                    name: "GROWTH",
                    //shortDescription: "",
                    description: "予測される指数曲線を計算します。",
                    parameters: [
                        {
                            name: "y"
                        },
                        {
                            name: "x"
                        },
                        {
                            name: "newx"
                        },
                        {
                            name: "constant"
                        }
                    ]
                },
                {
                    name: "HARMEAN",
                    //shortDescription: "",
                    description: "一群の数値の調和平均を算出します。",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "HEX2BIN",
                    //shortDescription: "",
                    description: "16 進数値を２進数値に変換します。",
                    parameters: [
                        {
                            name: "number"
                        },
                        {
                            name: " places"
                        }
                    ]
                },
                {
                    name: "HEX2DEC",
                    //shortDescription: "",
                    description: "16 進数値を 10 進数値に変換します。",
                    parameters: [
                        {
                            name: "number"
                        }
                    ]
                },
                {
                    name: "HEX2OCT",
                    //shortDescription: "",
                    description: "16 進数値を８進数値に変換します。",
                    parameters: [
                        {
                            name: "number"
                        },
                        {
                            name: " places"
                        }
                    ]
                },
                {
                    name: "HLOOKUP",
                    //shortDescription: "",
                    description: "指定範囲の最上行から値を検索し、指定の行から、この値と同じ列内の値を返します。",
                    parameters: [
                        {
                            name: "value"
                        },
                        {
                            name: "array"
                        },
                        {
                            name: "row"
                        },
                        {
                            name: "approx"
                        }
                    ]
                },
                {
                    name: "HOUR",
                    //shortDescription: "",
                    description: "指定の時刻値に対応する時を返します。",
                    parameters: [
                        {
                            name: "time"
                        }
                    ]
                },
                {
                    name: "HYPGEOMDIST",
                    //shortDescription: "",
                    description: "超幾何分布関数の値を算出します。",
                    parameters: [
                        {
                            name: "x"
                        },
                        {
                            name: "n"
                        },
                        {
                            name: "M"
                        },
                        {
                            name: "N"
                        }
                    ]
                },
                {
                    name: "IF",
                    //shortDescription: "",
                    description: "論理式の結果を表す値を返します。",
                    parameters: [
                        {
                            name: "valueTest"
                        },
                        {
                            name: "valueTrue"
                        },
                        {
                            name: "valueFalse"
                        }
                    ]
                },
                {
                    name: "IFERROR",
                    //shortDescription: "",
                    description: "数式を評価し、エラーの場合には指定した値、その他の場合には数式の結果を返します。",
                    parameters: [
                        {
                            name: "value"
                        },
                        {
                            name: "error"
                        }
                    ]
                },
                {
                    name: "IMABS",
                    //shortDescription: "",
                    description: "複素数の絶対値を返します。",
                    parameters: [
                        {
                            name: "complexnum"
                        }
                    ]
                },
                {
                    name: "IMAGINARY",
                    //shortDescription: "",
                    description: "複素数の虚数係数を返します。",
                    parameters: [
                        {
                            name: "complexnum"
                        }
                    ]
                },
                {
                    name: "IMARGUMENT",
                    //shortDescription: "",
                    description: "ラジアン単位の角度である引数θを返します。",
                    parameters: [
                        {
                            name: "complexnum"
                        }
                    ]
                },
                {
                    name: "IMCONJUGATE",
                    //shortDescription: "",
                    description: "複素数の複素共役を返します。",
                    parameters: [
                        {
                            name: "complexnum"
                        }
                    ]
                },
                {
                    name: "IMCOS",
                    //shortDescription: "",
                    description: "複素数のコサインを返します。",
                    parameters: [
                        {
                            name: "complexnum"
                        }
                    ]
                },
                {
                    name: "IMDIV",
                    //shortDescription: "",
                    description: "２つの複素数の商を返します。",
                    parameters: [
                        {
                            name: "complexnum"
                        },
                        {
                            name: "complexdenom"
                        }
                    ]
                },
                {
                    name: "IMEXP",
                    //shortDescription: "",
                    description: "複素数の指数関数を返します。",
                    parameters: [
                        {
                            name: "complexnum"
                        }
                    ]
                },
                {
                    name: "IMLN",
                    //shortDescription: "",
                    description: "複素数の自然対数を返します。",
                    parameters: [
                        {
                            name: "complexnum"
                        }
                    ]
                },
                {
                    name: "IMLOG2",
                    //shortDescription: "",
                    description: "複素数の２を底とする対数を返します。",
                    parameters: [
                        {
                            name: "complexnum"
                        }
                    ]
                },
                {
                    name: "IMLOG10",
                    //shortDescription: "",
                    description: "複素数の常用対数を返します。",
                    parameters: [
                        {
                            name: "complexnum"
                        }
                    ]
                },
                {
                    name: "IMPOWER",
                    //shortDescription: "",
                    description: "複素数の整数乗を返します。",
                    parameters: [
                        {
                            name: "complexnum"
                        },
                        {
                            name: "powernum"
                        }
                    ]
                },
                {
                    name: "IMPRODUCT",
                    //shortDescription: "",
                    description: "\"x+yi\" または \"x+yj\" 形式のテキストで指定した、最大 29 個の複素数の積を返します。",
                    parameters: [
                        {
                            name: "complexnum1"
                        },
                        {
                            name: "complexnum2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "IMREAL",
                    //shortDescription: "",
                    description: "\"x+yi\" または \"x+yj\" 形式のテキストで指定した複素数の実数係数を返します。",
                    parameters: [
                        {
                            name: "complexnum"
                        }
                    ]
                },
                {
                    name: "IMSIN",
                    //shortDescription: "",
                    description: "\"x+yi\" または \"x+yj\" 形式のテキストで指定した複素数のサインを返します。",
                    parameters: [
                        {
                            name: "complexnum"
                        }
                    ]
                },
                {
                    name: "IMSQRT",
                    //shortDescription: "",
                    description: "\"x+yi\" または \"x+yj\" 形式のテキストで指定した複素数の平方根を返します。",
                    parameters: [
                        {
                            name: "complexnum"
                        }
                    ]
                },
                {
                    name: "IMSUB",
                    //shortDescription: "",
                    description: "\"x+yi\" または \"x+yj\" 形式のテキストで指定した２つの複素数の差を返します。",
                    parameters: [
                        {
                            name: "complexnum1"
                        },
                        {
                            name: "complexnum2"
                        }
                    ]
                },
                {
                    name: "IMSUM",
                    //shortDescription: "",
                    description: "x+yi\" または \"x+yj\" 形式のテキストで指定した２つ以上の複素数の合計を返します。",
                    parameters: [
                        {
                            name: "complexnum1"
                        },
                        {
                            name: "complexnum2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "INDEX",
                    //shortDescription: "",
                    description: "配列またはセル範囲の中から、特定の値または値への参照を返します。",
                    parameters: [
                        {
                            name: "return"
                        },
                        {
                            name: "row"
                        },
                        {
                            name: "col"
                        },
                        {
                            name: "area"
                        }
                    ]
                },
                {
                    name: "INT",
                    //shortDescription: "",
                    description: "指定した値の小数部分を切り捨て、最も近い整数値を返します。",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "INTERCEPT",
                    //shortDescription: "",
                    description: "指定の x 値と y 値を使用して得た回帰直線が y 軸と交わる点を求めます。",
                    parameters: [
                        {
                            name: "dependent"
                        },
                        {
                            name: "independent"
                        }
                    ]
                },
                {
                    name: "INTRATE",
                    //shortDescription: "",
                    description: "全額投資された証券の利率を算出します。",
                    parameters: [
                        {
                            name: "settle"
                        },
                        {
                            name: "mature"
                        },
                        {
                            name: "invest"
                        },
                        {
                            name: "redeem"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "IPMT",
                    //shortDescription: "",
                    description: "借入金返済において、支払うべき金利を算出します。",
                    parameters: [
                        {
                            name: "rate"
                        },
                        {
                            name: "per"
                        },
                        {
                            name: "nper"
                        },
                        {
                            name: "pval"
                        },
                        {
                            name: "fval"
                        },
                        {
                            name: "type"
                        }
                    ]
                },
                {
                    name: "IRR",
                    //shortDescription: "",
                    description: "一連の定期的なキャッシュフロー（values 引数の配列値で指定）に基づき、内部利益率を算出します。",
                    parameters: [
                        {
                            name: "arrayvals"
                        },
                        {
                            name: "estimate"
                        }
                    ]
                },
                {
                    name: "ISBLANK",
                    //shortDescription: "",
                    description: "セルなどの値が空白かどうかを判定します。",
                    parameters: [
                        {
                            name: "cellreference"
                        }
                    ]
                },
                {
                    name: "ISERR",
                    //shortDescription: "",
                    description: "セルなどの値が、#N/A（利用不可）以外のエラー値を参照するかどうかを判定します。",
                    parameters: [
                        {
                            name: "cellreference"
                        }
                    ]
                },
                {
                    name: "ISERROR",
                    //shortDescription: "",
                    description: "セルなどの値が、任意のエラー値を参照するかどうかを判定します。",
                    parameters: [
                        {
                            name: "cellreference"
                        }
                    ]
                },
                {
                    name: "ISEVEN",
                    //shortDescription: "",
                    description: "セルなどの値が偶数かどうかを判定します。",
                    parameters: [
                        {
                            name: "cellreference"
                        }
                    ]
                },
                {
                    name: "ISLOGICAL",
                    //shortDescription: "",
                    description: "セルなどの値が論理値かどうかを判定します。",
                    parameters: [
                        {
                            name: "cellreference"
                        }
                    ]
                },
                {
                    name: "ISNA",
                    //shortDescription: "",
                    description: "セルなどの値が、エラー値 #N/A（利用不可）を参照するかどうかを判定します。",
                    parameters: [
                        {
                            name: "cellreference"
                        }
                    ]
                },
                {
                    name: "ISNONTEXT",
                    //shortDescription: "",
                    description: "セルなどの値が、テキスト以外のデータかどうかを判定します。",
                    parameters: [
                        {
                            name: "cellreference"
                        }
                    ]
                },
                {
                    name: "ISNUMBER",
                    //shortDescription: "",
                    description: "セルなどの値が数値かどうかを判定します。",
                    parameters: [
                        {
                            name: "cellreference"
                        }
                    ]
                },
                {
                    name: "ISODD",
                    //shortDescription: "",
                    description: "セルなどの値が奇数かどうかを判定します。",
                    parameters: [
                        {
                            name: "cellreference"
                        }
                    ]
                },
                {
                    name: "ISPMT",
                    //shortDescription: "",
                    description: "指定の投資期間に支払われる金利を計算します。",
                    parameters: [
                        {
                            name: "rate"
                        },
                        {
                            name: "per"
                        },
                        {
                            name: "nper"
                        },
                        {
                            name: "pv"
                        }
                    ]
                },
                {
                    name: "ISREF",
                    //shortDescription: "",
                    description: "セルなどの値が、他のセルへの参照かどうかを判定します。",
                    parameters: [
                        {
                            name: "cellreference"
                        }
                    ]
                },
                {
                    name: "ISTEXT",
                    //shortDescription: "",
                    description: "セルなどの値が文字列かどうかを判定します。",
                    parameters: [
                        {
                            name: "cellreference"
                        }
                    ]
                },
                {
                    name: "KURT",
                    //shortDescription: "",
                    description: "データ集合の尖度を返します。",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2"
                        },
                        {
                            name: "value3"
                        },
                        {
                            name: "value4",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "LARGE",
                    //shortDescription: "",
                    description: "データ集合内で n 番目に大きい値を返します。",
                    parameters: [
                        {
                            name: "array"
                        },
                        {
                            name: "n"
                        }
                    ]
                },
                {
                    name: "LCM",
                    //shortDescription: "",
                    description: "指定した整数の最小公倍数を返します。",
                    parameters: [
                        {
                            name: "number1"
                        },
                        {
                            name: "number2"
                        }
                    ]
                },
                {
                    name: "LEFT",
                    //shortDescription: "",
                    description: "テキスト値から先頭（左端）の文字を返します。",
                    parameters: [
                        {
                            name: "mytext"
                        },
                        {
                            name: "num_chars"
                        }
                    ]
                },
                {
                    name: "LEN",
                    //shortDescription: "",
                    description: "テキストの文字数を返します。",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "LINEST",
                    //shortDescription: "",
                    description: "直線に基づく統計値を計算します。",
                    parameters: [
                        {
                            name: "y"
                        },
                        {
                            name: "x"
                        },
                        {
                            name: "constant"
                        },
                        {
                            name: "stats"
                        }
                    ]
                },
                {
                    name: "LN",
                    //shortDescription: "",
                    description: "指定した数の自然対数を返します。LN は EXP の逆関数です。",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "LOG",
                    //shortDescription: "",
                    description: "Y を底とする数値 X の対数を返します。",
                    parameters: [
                        {
                            name: "number"
                        },
                        {
                            name: "base"
                        }
                    ]
                },
                {
                    name: "LOG10",
                    //shortDescription: "",
                    description: "10 を底とする数値 X の対数を返します。",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "LOGEST",
                    //shortDescription: "",
                    description: "データに適合する指数曲線を計算し、この曲線を表す値の配列を返します。",
                    parameters: [
                        {
                            name: "y"
                        },
                        {
                            name: "x"
                        },
                        {
                            name: "constant"
                        },
                        {
                            name: "stats"
                        }
                    ]
                },
                {
                    name: "LOGINV",
                    //shortDescription: "",
                    description: "x の対数正規累積分布関数の逆関数の値を算出します。",
                    parameters: [
                        {
                            name: "prob"
                        },
                        {
                            name: "mean"
                        },
                        {
                            name: "stdev"
                        }
                    ]
                },
                {
                    name: "LOGNORMDIST",
                    //shortDescription: "",
                    description: "x の対数正規累積分布関数の値を算出します。",
                    parameters: [
                        {
                            name: "x"
                        },
                        {
                            name: "mean"
                        },
                        {
                            name: "stdev"
                        }
                    ]
                },
                {
                    name: "LOOKUP",
                    //shortDescription: "",
                    description: "１行または１列内のセル範囲、または配列から値を検索します。",
                    parameters: [
                        {
                            name: "lookupvalue"
                        },
                        {
                            name: "lookupvector"
                        },
                        {
                            name: "resultvector"
                        }
                    ]
                },
                {
                    name: "LOWER",
                    //shortDescription: "",
                    description: "テキストを小文字に変換します。",
                    parameters: [
                        {
                            name: "string"
                        }
                    ]
                },
                {
                    name: "MATCH",
                    //shortDescription: "",
                    description: "指定された項目の範囲内における相対位置を返します。",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "array"
                        },
                        {
                            name: "type"
                        }
                    ]
                },
                {
                    name: "MAX",
                    //shortDescription: "",
                    description: "引数リストの中から最大値を返します。",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "MAXA",
                    //shortDescription: "",
                    description: "引数リストの中から最大値を返します。",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "MDETERM",
                    //shortDescription: "",
                    description: "配列の行列式を返します。",
                    parameters: [
                        {
                            name: "array"
                        }
                    ]
                },
                {
                    name: "MDURATION",
                    //shortDescription: "",
                    description: "額面を $100 とみなした証券の修正マコーレー デュレーションを返します。",
                    parameters: [
                        {
                            name: "settlement"
                        },
                        {
                            name: "maturity"
                        },
                        {
                            name: "coupon"
                        },
                        {
                            name: "yield"
                        },
                        {
                            name: "frequency"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "MEDIAN",
                    //shortDescription: "",
                    description: "指定した一群の数値の中からメジアン（中央値）を返します。",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "MID",
                    //shortDescription: "",
                    description: "テキスト内の指定位置から、指定した数の文字を取り出して返します。",
                    parameters: [
                        {
                            name: "text"
                        },
                        {
                            name: "start_num"
                        },
                        {
                            name: "num_chars"
                        }
                    ]
                },
                {
                    name: "MIN",
                    //shortDescription: "",
                    description: "引数リストの中から最小値を返します。",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "MINA",
                    //shortDescription: "",
                    description: "引数リストの中から最小値を返します。",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "MINUTE",
                    //shortDescription: "",
                    description: "引数リストの中から最小値を返します。",
                    parameters: [
                        {
                            name: "time"
                        }
                    ]
                },
                {
                    name: "MINVERSE",
                    //shortDescription: "",
                    description: "配列に指定した行列の逆行列を返します。",
                    parameters: [
                        {
                            name: "array"
                        }
                    ]
                },
                {
                    name: "MIRR",
                    //shortDescription: "",
                    description: "一連の定期的なキャッシュフローに基づき、修正内部利益率を算出します。",
                    parameters: [
                        {
                            name: "arrayvals"
                        },
                        {
                            name: "payment_int"
                        },
                        {
                            name: "income_int"
                        }
                    ]
                },
                {
                    name: "MMULT",
                    //shortDescription: "",
                    description: "２つの配列に指定した行列の積を返します。",
                    parameters: [
                        {
                            name: "array1"
                        },
                        {
                            name: "array2"
                        }
                    ]
                },
                {
                    name: "MOD",
                    //shortDescription: "",
                    description: "number 引数（被除数）を divisor 引数（除数）で割ったときの剰余を返します。",
                    parameters: [
                        {
                            name: "dividend"
                        },
                        {
                            name: "divisor"
                        }
                    ]
                },
                {
                    name: "MODE",
                    //shortDescription: "",
                    description: "指定の引数リストの中で、最も頻繁に出現する値を返します。",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "MONTH",
                    //shortDescription: "",
                    description: "指定の日付値に対応する月を返します。",
                    parameters: [
                        {
                            name: "date"
                        }
                    ]
                },
                {
                    name: "MROUND",
                    //shortDescription: "",
                    description: "指定の倍数となるように丸めた値を返します。",
                    parameters: [
                        {
                            name: "number"
                        },
                        {
                            name: "multiple"
                        }
                    ]
                },
                {
                    name: "MULTINOMIAL",
                    //shortDescription: "",
                    description: "指定された引数リストの多項係数（リスト内の値の和の階乗と、各値の階乗の積との比）を算出します。",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "N",
                    //shortDescription: "",
                    description: "数値に変換した値を返します。",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "NA",
                    //shortDescription: "",
                    description: "「利用不可」を意味するエラー値 #N/A を返します。",
                    parameters: []
                },
                {
                    name: "NEGBINOMDIST",
                    //shortDescription: "",
                    description: "負の二項分布を算出します。",
                    parameters: [
                        {
                            name: "x"
                        },
                        {
                            name: "r"
                        },
                        {
                            name: "p"
                        }
                    ]
                },
                {
                    name: "NETWORKDAYS",
                    //shortDescription: "",
                    description: "開始日から終了日までの期間内で、完全な稼働日の合計を計算します。",
                    parameters: [
                        {
                            name: "startdate"
                        },
                        {
                            name: "enddate"
                        },
                        {
                            name: "holidays"
                        }
                    ]
                },
                {
                    name: "NOMINAL",
                    //shortDescription: "",
                    description: "指定の実効利率と１年あたりの複利計算期間に基づき、名目上の年利率を算出します。",
                    parameters: [
                        {
                            name: "effrate"
                        },
                        {
                            name: "comper"
                        }
                    ]
                },
                {
                    name: "NORMDIST",
                    //shortDescription: "",
                    description: "指定の平均と標準偏差に対する正規累積分布関数の値を返します。",
                    parameters: [
                        {
                            name: "x"
                        },
                        {
                            name: "mean"
                        },
                        {
                            name: "stdev"
                        },
                        {
                            name: "cumulative"
                        }
                    ]
                },
                {
                    name: "NORMINV",
                    //shortDescription: "",
                    description: "指定の平均と標準偏差に対する正規累積分布関数の逆関数の値を返します。",
                    parameters: [
                        {
                            name: "prob"
                        },
                        {
                            name: "mean"
                        },
                        {
                            name: "stdev"
                        }
                    ]
                },
                {
                    name: "NORMSDIST",
                    //shortDescription: "",
                    description: "標準正規累積分布関数の値を算出します。",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "NORMSINV",
                    //shortDescription: "",
                    description: "標準正規累積分布関数の逆関数の値を返します。この分布では、平均が０、標準偏差が１となります。",
                    parameters: [
                        {
                            name: "prob"
                        }
                    ]
                },
                {
                    name: "NOT",
                    //shortDescription: "",
                    description: "引数の論理値を逆にします。",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "NOW",
                    //shortDescription: "",
                    description: "現在の日付と時刻を表す値を返します。",
                    parameters: []
                },
                {
                    name: "NPER",
                    //shortDescription: "",
                    description: "現行価値、将来価値、定期払い、および特定の利率を条件とし、投資に必要な期間（支払回数）を返します。",
                    parameters: [
                        {
                            name: "rate"
                        },
                        {
                            name: "paymt"
                        },
                        {
                            name: "pval"
                        },
                        {
                            name: "fval"
                        },
                        {
                            name: "type"
                        }
                    ]
                },
                {
                    name: "NPV",
                    //shortDescription: "",
                    description: "割引率と、将来行われる一連の支払いおよびその収益に基づいて、投資の正味現在価値を算出します。",
                    parameters: [
                        {
                            name: "discount"
                        },
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "OCT2BIN",
                    //shortDescription: "",
                    description: "８進数値を２進数値に変換します。",
                    parameters: [
                        {
                            name: "number"
                        },
                        {
                            name: "places"
                        }
                    ]
                },
                {
                    name: "OCT2DEC",
                    //shortDescription: "",
                    description: "８進数値を 10 進数値に変換します。",
                    parameters: [
                        {
                            name: "number"
                        }
                    ]
                },
                {
                    name: "OCT2HEX",
                    //shortDescription: "",
                    description: "８進数値を 16 進数値に変換します。",
                    parameters: [
                        {
                            name: "number"
                        },
                        {
                            name: "places"
                        }
                    ]
                },
                {
                    name: "ODD",
                    //shortDescription: "",
                    description: "指定した値を切り上げ、最も近い奇数の整数値を返します。",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "ODDFPRICE",
                    //shortDescription: "",
                    description: "１期目の日数が半端な証券に対し、額面 $100 あたりの価格を計算します。",
                    parameters: [
                        {
                            name: "settle"
                        },
                        {
                            name: "maturity"
                        },
                        {
                            name: "issue"
                        },
                        {
                            name: "first"
                        },
                        {
                            name: "rate"
                        },
                        {
                            name: "yield"
                        },
                        {
                            name: "redeem"
                        },
                        {
                            name: "freq"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "ODDFYIELD",
                    //shortDescription: "",
                    description: "１期目の日数が半端な証券の利回りを計算します。",
                    parameters: [
                        {
                            name: "settle"
                        },
                        {
                            name: "maturity"
                        },
                        {
                            name: "issue"
                        },
                        {
                            name: "first"
                        },
                        {
                            name: "rate"
                        },
                        {
                            name: "price"
                        },
                        {
                            name: "redeem"
                        },
                        {
                            name: "freq"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "ODDLPRICE",
                    //shortDescription: "",
                    description: "最終期の日数が半端な証券に対し、額面 $100 あたりの価格を計算します。",
                    parameters: [
                        {
                            name: "settle"
                        },
                        {
                            name: "maturity"
                        },
                        {
                            name: "last"
                        },
                        {
                            name: "rate"
                        },
                        {
                            name: "yield"
                        },
                        {
                            name: "redeem"
                        },
                        {
                            name: "freq"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "ODDLYIELD",
                    //shortDescription: "",
                    description: "最終期の日数が半端な証券の利回りを計算します。",
                    parameters: [
                        {
                            name: "settle"
                        },
                        {
                            name: "maturity"
                        },
                        {
                            name: "last"
                        },
                        {
                            name: "rate"
                        },
                        {
                            name: "price"
                        },
                        {
                            name: "redeem"
                        },
                        {
                            name: "freq"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "OFFSET",
                    //shortDescription: "",
                    description: "この関数は、セル範囲への参照を返します。 返されるセル範囲は、単一のセルまたはセル範囲からの行数と列数で指定します。 これにより、単一のセルまたはセル範囲が返されます。",
                    parameters: [
                        {
                            name: "reference"
                        },
                        {
                            name: "rows"
                        },
                        {
                            name: "cols"
                        },
                        {
                            name: "height"
                        },
                        {
                            name: "width"
                        }
                    ]
                },
                {
                    name: "OR",
                    //shortDescription: "",
                    description: "いずれかの引数が真であれば１（True）を、すべての引数が偽であれば０（False）を返します。",
                    parameters: [
                        {
                            name: "argument1"
                        },
                        {
                            name: "argument2..."
                        }
                    ]
                },
                {
                    name: "PEARSON",
                    //shortDescription: "",
                    description: "ピアソンの積率相関係数を返します。これは -1.0～1.0 の範囲の数値であり、２組のデータ間での線形相関の程度を示します。",
                    parameters: [
                        {
                            name: "array_ind"
                        },
                        {
                            name: "array_dep"
                        }
                    ]
                },
                {
                    name: "PERCENTILE",
                    //shortDescription: "",
                    description: "ある範囲内の値の中で n 番目の百分位を持つ値を返します。",
                    parameters: [
                        {
                            name: "array"
                        },
                        {
                            name: "n"
                        }
                    ]
                },
                {
                    name: "PERCENTRANK",
                    //shortDescription: "",
                    description: "データセット内の値の順位を、このデータセット内の百分率として返します。",
                    parameters: [
                        {
                            name: "array"
                        },
                        {
                            name: "n"
                        },
                        {
                            name: "sigdig"
                        }
                    ]
                },
                {
                    name: "PERMUT",
                    //shortDescription: "",
                    description: "指定した数の標本を抜き取る際の、有効な順列の数を返します。",
                    parameters: [
                        {
                            name: "k"
                        },
                        {
                            name: "n"
                        }
                    ]
                },
                {
                    name: "PI",
                    //shortDescription: "",
                    description: "円周率（π）を 3.1415926536 として返します。",
                    parameters: []
                },
                {
                    name: "PMT",
                    //shortDescription: "",
                    description: "現在価値、指定の利率、および支払回数に基づき、借入金返済での定期支払額を算出します。",
                    parameters: [
                        {
                            name: "rate"
                        },
                        {
                            name: "nper"
                        },
                        {
                            name: "pval"
                        },
                        {
                            name: "fval"
                        },
                        {
                            name: "type"
                        }
                    ]
                },
                {
                    name: "POISSON",
                    //shortDescription: "",
                    description: "ポアソン確率分布の値を算出します。",
                    parameters: [
                        {
                            name: "nevents"
                        },
                        {
                            name: "mean"
                        },
                        {
                            name: "cumulative"
                        }
                    ]
                },
                {
                    name: "POWER",
                    //shortDescription: "",
                    description: "指定の数（X）を底とする指数（Y）のべき乗を求めます。",
                    parameters: [
                        {
                            name: "number"
                        },
                        {
                            name: "power"
                        }
                    ]
                },
                {
                    name: "PPMT",
                    //shortDescription: "",
                    description: "元金の返済額を返します。",
                    parameters: [
                        {
                            name: "rate"
                        },
                        {
                            name: "per"
                        },
                        {
                            name: "nper"
                        },
                        {
                            name: "pval"
                        },
                        {
                            name: "fval"
                        },
                        {
                            name: "type"
                        }
                    ]
                },
                {
                    name: "PRICE",
                    //shortDescription: "",
                    description: "定期的に利息が支払われる証券に対し、額面 $100 あたりの価格を計算します。",
                    parameters: [
                        {
                            name: "settlement"
                        },
                        {
                            name: "maturity"
                        },
                        {
                            name: "rate"
                        },
                        {
                            name: "yield"
                        },
                        {
                            name: "redeem"
                        },
                        {
                            name: "frequency"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "PRICEDISC",
                    //shortDescription: "",
                    description: "割引債の額面 $100 あたりの価格を算出します。",
                    parameters: [
                        {
                            name: "settle"
                        },
                        {
                            name: "mature"
                        },
                        {
                            name: "discount"
                        },
                        {
                            name: "redeem"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "PRICEMAT",
                    //shortDescription: "",
                    description: "満期日に利息が払われる証券に対し、額面 $100 あたりの価格を返します。",
                    parameters: [
                        {
                            name: "settle"
                        },
                        {
                            name: "mature"
                        },
                        {
                            name: "issue"
                        },
                        {
                            name: "rate"
                        },
                        {
                            name: "yield"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "PROB",
                    //shortDescription: "",
                    description: "特定範囲内の値が上限と下限の間に収まる確率を返します。",
                    parameters: [
                        {
                            name: "array"
                        },
                        {
                            name: "probs"
                        },
                        {
                            name: "lower"
                        },
                        {
                            name: "upper"
                        }
                    ]
                },
                {
                    name: "PRODUCT",
                    //shortDescription: "",
                    description: "すべての引数値を乗算して得た積を返します。",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                //{
                //    name: "PROPER",
                //    //shortDescription: "",
                //    description: "文字列内の全英単語の先頭文字を大文字に変換します。",
                //    parameters: [
                //        {
                //            name: "text",
                //            //description: ""
                //        }
                //    ]
                //},
                {
                    name: "PV",
                    //shortDescription: "",
                    description: "特定の利率、定期払いの回数と支払額、および将来価値を条件として、投資の現在価値を返します。",
                    parameters: [
                        {
                            name: "rate"
                        },
                        {
                            name: "numper"
                        },
                        {
                            name: "paymt"
                        },
                        {
                            name: "fval"
                        },
                        {
                            name: "type"
                        }
                    ]
                },
                {
                    name: "QUARTILE",
                    //shortDescription: "",
                    description: "データセットから、指定した四分位数（データセットの 1/4［25%］）を返します。",
                    parameters: [
                        {
                            name: "array"
                        },
                        {
                            name: "quart"
                        }
                    ]
                },
                {
                    name: "QUOTIENT",
                    //shortDescription: "",
                    description: "除算で得た商の整数部分を返します。QUOTIENT 関数は、商の余り（剰余）を無視したい場合に使用します。",
                    parameters: [
                        {
                            name: "numerator"
                        },
                        {
                            name: "denominator"
                        }
                    ]
                },
                {
                    name: "RADIANS",
                    //shortDescription: "",
                    description: "度単位の角度の値をラジアン単位に変換します。",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "RADIANS",
                    //shortDescription: "",
                    description: "度単位の角度の値をラジアン単位に変換します。",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "RAND",
                    //shortDescription: "",
                    description: "分布が一様な、0以上1未満の乱数を発生させます。RAND 関数は、スプレッドシートが再計算されるたびに新たな乱数を発生させます。",
                    parameters: []
                },
                {
                    name: "RANDBETWEEN",
                    //shortDescription: "",
                    description: "指定した２つの数値間の範囲で乱数を発生させます。RANDBETWEEN 関数は、シートが再計算されるたびに新たに乱数を発生させます。",
                    parameters: [
                        {
                            name: "lower"
                        },
                        {
                            name: "upper"
                        }
                    ]
                },
                {
                    name: "RANK",
                    //shortDescription: "",
                    description: "数値リストの中から、指定の数値が何番目に位置するかを返します。RANK 関数の返す順位は、リスト内の数値を並べ替えた場合の数値の順位となります。",
                    parameters: [
                        {
                            name: "number"
                        },
                        {
                            name: "array"
                        },
                        {
                            name: "order"
                        }
                    ]
                },
                {
                    name: "RATE",
                    //shortDescription: "",
                    description: "投資期間を通じた利率を返します。",
                    parameters: [
                        {
                            name: "nper"
                        },
                        {
                            name: "pmt"
                        },
                        {
                            name: "pval"
                        },
                        {
                            name: "fval"
                        },
                        {
                            name: "type"
                        },
                        {
                            name: "guess"
                        }
                    ]
                },
                {
                    name: "RECEIVED",
                    //shortDescription: "",
                    description: "全額投資された証券に対して、満期に支払われる金額を返します。",
                    parameters: [
                        {
                            name: "settle"
                        },
                        {
                            name: "mature"
                        },
                        {
                            name: "invest"
                        },
                        {
                            name: "discount"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "REPLACE",
                    //shortDescription: "",
                    description: "文字列の一部を別の文字列に置き換えます。",
                    parameters: [
                        {
                            name: "old_text"
                        },
                        {
                            name: "start_char"
                        },
                        {
                            name: "num_chars"
                        },
                        {
                            name: "new_text"
                        }
                    ]
                },
                {
                    name: "REPT",
                    //shortDescription: "",
                    description: "文字列を指定の回数分、繰り返し表示します。",
                    parameters: [
                        {
                            name: "text"
                        },
                        {
                            name: "number"
                        }
                    ]
                },
                {
                    name: "RIGHT",
                    //shortDescription: "",
                    description: "テキスト値から右端の文字を返します。",
                    parameters: [
                        {
                            name: "text"
                        },
                        {
                            name: "num_chars"
                        }
                    ]
                },
                {
                    name: "ROMAN",
                    //shortDescription: "",
                    description: "アラビア数字を、ローマ数字を表すテキストに変換します。",
                    parameters: [
                        {
                            name: "number"
                        },
                        {
                            name: "style"
                        }
                    ]
                },
                {
                    name: "ROUND",
                    //shortDescription: "",
                    description: "指定の数値を、指定の桁数になるように四捨五入します。",
                    parameters: [
                        {
                            name: "value"
                        },
                        {
                            name: "places"
                        }
                    ]
                },
                {
                    name: "ROUNDDOWN",
                    //shortDescription: "",
                    description: "指定の数値を、指定の桁数になるように切り捨てます。",
                    parameters: [
                        {
                            name: "value"
                        },
                        {
                            name: "places"
                        }
                    ]
                },
                {
                    name: "ROUNDUP",
                    //shortDescription: "",
                    description: "指定の数値を、指定の桁数になるように切り上げます。",
                    parameters: [
                        {
                            name: "value"
                        },
                        {
                            name: "places"
                        }
                    ]
                },
                {
                    name: "ROW",
                    //shortDescription: "",
                    description: "参照の行番号を返します。",
                    parameters: [
                        {
                            name: "reference"
                        }
                    ]
                },
                {
                    name: "ROWS",
                    //shortDescription: "",
                    description: "配列内の行数を返します。",
                    parameters: [
                        {
                            name: "array"
                        }
                    ]
                },
                {
                    name: "RSQ",
                    //shortDescription: "",
                    description: "既知の x と既知の Y を通過する回帰直線のデータ点を使用して、ピアソン積率相関係数の二乗を返します。",
                    parameters: [
                        {
                            name: "array_dep"
                        },
                        {
                            name: "array_ind"
                        }
                    ]
                },
                {
                    name: "SEARCH",
                    //shortDescription: "",
                    description: "テキスト内から指定の文字を検索し、テキスト内におけるこの文字の開始位置を返します。",
                    parameters: [
                        {
                            name: "string1"
                        },
                        {
                            name: "string2"
                        }
                    ]
                },
                {
                    name: "SECOND",
                    //shortDescription: "",
                    description: "指定の時刻値に対応する秒の値（0～59）を返します。",
                    parameters: [
                        {
                            name: "time"
                        }
                    ]
                },
                {
                    name: "SERIESSUM",
                    //shortDescription: "",
                    description: "べき級数を返します。",
                    parameters: [
                        {
                            name: "x"
                        },
                        {
                            name: "n"
                        },
                        {
                            name: "m"
                        },
                        {
                            name: "coeff"
                        }
                    ]
                },
                {
                    name: "SIGN",
                    //shortDescription: "",
                    description: "数値の符号を返します。",
                    parameters: [
                        {
                            name: "cellreference"
                        }
                    ]
                },
                {
                    name: "SIN",
                    //shortDescription: "",
                    description: "指定した角度のサインを返します。",
                    parameters: [
                        {
                            name: "angle"
                        }
                    ]
                },
                {
                    name: "SINH",
                    //shortDescription: "",
                    description: "指定した数値のハイパーボリックサインを返します。",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "SKEW",
                    //shortDescription: "",
                    description: "分布の歪度（平均値からのデータの偏り）を返します。",
                    parameters: [
                        {
                            name: "number1"
                        },
                        {
                            name: "number2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "SLN",
                    //shortDescription: "",
                    description: "定額法を使用して、１期あたりの資産の減価償却費を算出します。",
                    parameters: [
                        {
                            name: "cost"
                        },
                        {
                            name: "salvage"
                        },
                        {
                            name: "life"
                        }
                    ]
                },
                {
                    name: "SLOPE",
                    //shortDescription: "",
                    description: "回帰直線の傾きを算出します。",
                    parameters: [
                        {
                            name: "array_dep"
                        },
                        {
                            name: "array_ind"
                        }
                    ]
                },
                {
                    name: "SMALL",
                    //shortDescription: "",
                    description: "データ集合内で n 番目に小さい値を返します。",
                    parameters: [
                        {
                            name: "array"
                        },
                        {
                            name: "n"
                        }
                    ]
                },
                {
                    name: "SQRT",
                    //shortDescription: "",
                    description: "指定した数値の正の平方根を返します。",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "SQRTPI",
                    //shortDescription: "",
                    description: "指定の数値を円周率に掛けた値の正の平方根を返します。",
                    parameters: [
                        {
                            name: "multiple"
                        }
                    ]
                },
                {
                    name: "STANDARDIZE",
                    //shortDescription: "",
                    description: "特定の平均値と標準偏差で決定される分布を標準化するための変量を返します。",
                    parameters: [
                        {
                            name: "x"
                        },
                        {
                            name: "mean"
                        },
                        {
                            name: "stdev"
                        }
                    ]
                },
                {
                    name: "STDEVA",
                    //shortDescription: "",
                    description: "指定した数値の集合から標準偏差を算出します。",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "STDEVP",
                    //shortDescription: "",
                    description: "引数として指定した母集団全体の標準偏差を算出します。",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "STDEVPA",
                    //shortDescription: "",
                    description: "引数として指定した母集団全体の標準偏差を算出します。",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "STEYX",
                    //shortDescription: "",
                    description: "個別の x に対する y の予測値の標準誤差を返します。標準誤差とは、x 値に対して予測される y 値の誤差の量を表す指標です。",
                    parameters: [
                        {
                            name: "array_dep"
                        },
                        {
                            name: "array_ind"
                        }
                    ]
                },
                {
                    name: "SUBSTITUTE",
                    //shortDescription: "",
                    description: "既存文字列内の指定の文字を、新規文字列に置き換えます。",
                    parameters: [
                        {
                            name: "text"
                        },
                        {
                            name: "old_piece"
                        },
                        {
                            name: "new_piece"
                        },
                        {
                            name: "instance"
                        }
                    ]
                },
                {
                    name: "SUBTOTAL",
                    //shortDescription: "",
                    description: "小計を返します。",
                    parameters: [
                        {
                            name: "functioncode"
                        },
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "SUM",
                    //shortDescription: "",
                    description: "セルまたはセルブロックの和を返します。",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "SUMIF",
                    //shortDescription: "",
                    description: "指定の基準に基づき、セル値を合計します。",
                    parameters: [
                        {
                            name: "array"
                        },
                        {
                            name: "condition"
                        },
                        {
                            name: "sumrange"
                        }
                    ]
                },
                {
                    name: "SUMIFS",
                    //shortDescription: "",
                    description: "複数の基準に基づき、セル値を合計します。",
                    parameters: [
                        {
                            name: "array"
                        },
                        {
                            name: "conditionarray"
                        },
                        {
                            name: "condition",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "SUMPRODUCT",
                    //shortDescription: "",
                    description: "指定の配列内の対応する要素の積を算出し、これらの積の合計を返します。",
                    parameters: [
                        {
                            name: "array1"
                        },
                        {
                            name: "array2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "SUMSQ",
                    //shortDescription: "",
                    description: "引数に指定した値の２乗の合計を返します。",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "SUMX2MY2",
                    //shortDescription: "",
                    description: "２つの配列内の対応する要素の平方差を合計して返します。",
                    parameters: [
                        {
                            name: "array_x"
                        },
                        {
                            name: "array_y"
                        }
                    ]
                },
                {
                    name: "SUMX2PY2",
                    //shortDescription: "",
                    description: "２つの配列内の対応する要素の平方和を合計して返します。",
                    parameters: [
                        {
                            name: "array_x"
                        },
                        {
                            name: "array_y"
                        }
                    ]
                },
                {
                    name: "SUMXMY2",
                    //shortDescription: "",
                    description: "２つの配列内の対応する要素の差を２乗して合計します。",
                    parameters: [
                        {
                            name: "array_x"
                        },
                        {
                            name: "array_y"
                        }
                    ]
                },
                {
                    name: "SYD",
                    //shortDescription: "",
                    description: "定額逓減法を使用して、特定期間の資産の減価償却費を返します。",
                    parameters: [
                        {
                            name: "cost"
                        },
                        {
                            name: "salvage"
                        },
                        {
                            name: "life"
                        },
                        {
                            name: "period"
                        }
                    ]
                },
                {
                    name: "T",
                    //shortDescription: "",
                    description: "セル内にテキストが保持されている場合にこのテキストを返します。",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "TAN",
                    //shortDescription: "",
                    description: "指定した角度のタンジェントを返します。",
                    parameters: [
                        {
                            name: "angle"
                        }
                    ]
                },
                {
                    name: "TANH",
                    //shortDescription: "",
                    description: "指定した数値のハイパーボリックタンジェントを返します。",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "TBILLEQ",
                    //shortDescription: "",
                    description: "米国財務省短期証券（TB）の債券に相当する利回りを返します。",
                    parameters: [
                        {
                            name: "settle"
                        },
                        {
                            name: "mature"
                        },
                        {
                            name: "discount"
                        }
                    ]
                },
                {
                    name: "TBILLPRICE",
                    //shortDescription: "",
                    description: "米国財務省短期証券（TB）の額面 $100 あたりの価格を返します。",
                    parameters: [
                        {
                            name: "settle"
                        },
                        {
                            name: "mature"
                        },
                        {
                            name: "discount"
                        }
                    ]
                },
                {
                    name: "TBILLYIELD",
                    //shortDescription: "",
                    description: "米国財務省短期証券（TB）の利回りを返します。",
                    parameters: [
                        {
                            name: "settle"
                        },
                        {
                            name: "mature"
                        },
                        {
                            name: "priceper"
                        }
                    ]
                },
                {
                    name: "TDIST",
                    //shortDescription: "",
                    description: "t 分布の確率を返します。",
                    parameters: [
                        {
                            name: "x"
                        },
                        {
                            name: "deg"
                        },
                        {
                            name: "tails"
                        }
                    ]
                },
                {
                    name: "TEXT",
                    //shortDescription: "",
                    description: "数値を書式設定し、テキストに変換します。",
                    parameters: [
                        {
                            name: "value"
                        },
                        {
                            name: "text"
                        }
                    ]
                },
                {
                    name: "TIME",
                    //shortDescription: "",
                    description: "指定の時間に対する DateTime オブジェクトを返します。",
                    parameters: [
                        {
                            name: "hour"
                        },
                        {
                            name: "minutes"
                        },
                        {
                            name: "seconds"
                        }
                    ]
                },
                {
                    name: "TIMEVALUE",
                    //shortDescription: "",
                    description: "文字列で表される時刻に対応する時間間隔値を返します。",
                    parameters: [
                        {
                            name: "time_string"
                        }
                    ]
                },
                {
                    name: "TINV",
                    //shortDescription: "",
                    description: "スチューデントの t 分布の値を、確率と自由度を使用した関数として算出します。",
                    parameters: [
                        {
                            name: "prog"
                        },
                        {
                            name: "deg"
                        }
                    ]
                },
                {
                    name: "TODAY",
                    //shortDescription: "",
                    description: "現在の日付を表す連続値を返します。",
                    parameters: []
                },
                {
                    name: "TRANSPOSE",
                    //shortDescription: "",
                    description: "水平セル範囲を垂直セル範囲として返し、垂直セル範囲を水平セル範囲として返します。",
                    parameters: [
                        {
                            name: "array"
                        }
                    ]
                },
                {
                    name: "TREND",
                    //shortDescription: "",
                    description: "回帰直線に対して予測される値を返します。",
                    parameters: [
                        {
                            name: "y"
                        },
                        {
                            name: "x"
                        },
                        {
                            name: "newx"
                        },
                        {
                            name: "constant"
                        }
                    ]
                },
                {
                    name: "TRIM",
                    //shortDescription: "",
                    description: "文字列から余分なスペースを削除し、単語間に１文字分のスペースを保ちます。",
                    parameters: [
                        {
                            name: "text"
                        }
                    ]
                },
                {
                    name: "TRIMMEAN",
                    //shortDescription: "",
                    description: "上位および下位のデータを除外した、データセット内の中間データの平均値を算出します。",
                    parameters: [
                        {
                            name: "array"
                        },
                        {
                            name: "percent"
                        }
                    ]
                },
                {
                    name: "TRUE",
                    //shortDescription: "",
                    description: "論理値１（True）を返します。",
                    parameters: []
                },
                {
                    name: "TRUNC",
                    //shortDescription: "",
                    description: "スチューデントの t 検定に関連する確率を返します。",
                    parameters: [
                        {
                            name: "value"
                        },
                        {
                            name: "precision"
                        }
                    ]
                },
                {
                    name: "TTEST",
                    //shortDescription: "",
                    description: "スチューデントの t 検定に関連する確率を返します。",
                    parameters: [
                        {
                            name: "array1"
                        },
                        {
                            name: "array2"
                        },
                        {
                            name: "tails"
                        },
                        {
                            name: "type"
                        }
                    ]
                },
                {
                    name: "TYPE",
                    //shortDescription: "",
                    description: "値のデータ型を返します。",
                    parameters: [
                        {
                            name: "value"
                        }
                    ]
                },
                {
                    name: "UPPER",
                    //shortDescription: "",
                    description: "テキストを大文字に変換します。",
                    parameters: [
                        {
                            name: "string"
                        }
                    ]
                },
                {
                    name: "VALUE",
                    //shortDescription: "",
                    description: "数値を表す文字列を数値に変換します。",
                    parameters: [
                        {
                            name: "text"
                        }
                    ]
                },
                {
                    name: "VAR",
                    //shortDescription: "",
                    description: "引数値を母集団の標本とみなし、母集団の分散を算出します。",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "VARA",
                    //shortDescription: "",
                    description: "引数値を母集団の標本とみなし、母集団の分散を算出します。",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "VARP",
                    //shortDescription: "",
                    description: "母集団全体の分散を算出します。",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "VARPA",
                    //shortDescription: "",
                    description: "母集団全体の分散を算出します。",
                    parameters: [
                        {
                            name: "value1"
                        },
                        {
                            name: "value2",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "VDB",
                    //shortDescription: "",
                    description: "倍率法を使用して、指定した任意の期間における資産の減価償却費を算出します。",
                    parameters: [
                        {
                            name: "cost"
                        },
                        {
                            name: "salvage"
                        },
                        {
                            name: "life"
                        },
                        {
                            name: "start"
                        },
                        {
                            name: "end"
                        },
                        {
                            name: "factor"
                        },
                        {
                            name: "switchnot"
                        }
                    ]
                },
                {
                    name: "VLOOKUP",
                    //shortDescription: "",
                    description: "指定範囲の最左列から値を検索し、指定の列から、この値と同じ行内の値を返します。",
                    parameters: [
                        {
                            name: "value"
                        },
                        {
                            name: "array"
                        },
                        {
                            name: "colindex"
                        },
                        {
                            name: "approx"
                        }
                    ]
                },
                {
                    name: "WEEKDAY",
                    //shortDescription: "",
                    description: "指定の日付に対応する曜日を返します。",
                    parameters: [
                        {
                            name: "date"
                        },
                        {
                            name: "type"
                        }
                    ]
                },
                {
                    name: "WEEKNUM",
                    //shortDescription: "",
                    description: "指定の日付がその年の何週目に当たるかを表す数値を返します。",
                    parameters: [
                        {
                            name: "date"
                        },
                        {
                            name: "weektype"
                        }
                    ]
                },
                {
                    name: "WEIBULL",
                    //shortDescription: "",
                    description: "２つのパラメータによるワイブル分布の値を算出します。これは、信頼性の分析などによく使用されます。",
                    parameters: [
                        {
                            name: "x"
                        },
                        {
                            name: "alpha"
                        },
                        {
                            name: "beta"
                        },
                        {
                            name: "cumulative"
                        }
                    ]
                },
                {
                    name: "WORKDAY",
                    //shortDescription: "",
                    description: "開始日より指定の日数分以前または以降の稼働日の値を返します。",
                    parameters: [
                        {
                            name: "startdate"
                        },
                        {
                            name: "numdays"
                        },
                        {
                            name: "holidays"
                        }
                    ]
                },
                {
                    name: "XIRR",
                    //shortDescription: "",
                    description: "予定されているキャッシュフロー（定期的、または不定期）に基づき、内部利益率を計算します。",
                    parameters: [
                        {
                            name: "values"
                        },
                        {
                            name: "dates"
                        },
                        {
                            name: "guess"
                        }
                    ]
                },
                {
                    name: "XNPV",
                    //shortDescription: "",
                    description: "予定されているキャッシュフロー（定期的、または不定期）に基づき、正味現在価値を計算します。",
                    parameters: [
                        {
                            name: "rate"
                        },
                        {
                            name: "values"
                        },
                        {
                            name: "dates"
                        }
                    ]
                },
                {
                    name: "YEAR",
                    //shortDescription: "",
                    description: "指定の日付に対応する年を表す整数を返します。",
                    parameters: [
                        {
                            name: "date"
                        }
                    ]
                },
                {
                    name: "YEARFRAC",
                    //shortDescription: "",
                    description: "開始日から終了日までの期間内の完全な日数が、１年のどれだけを占めるかを表す割合を返します。",
                    parameters: [
                        {
                            name: "startdate"
                        },
                        {
                            name: "enddate"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "YIELD",
                    //shortDescription: "",
                    description: "定期的に利息が支払われる証券の利回りを計算します。",
                    parameters: [
                        {
                            name: "settle"
                        },
                        {
                            name: "maturity"
                        },
                        {
                            name: "rate"
                        },
                        {
                            name: "price"
                        },
                        {
                            name: "redeem"
                        },
                        {
                            name: "frequency"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "YIELDDISC",
                    //shortDescription: "",
                    description: "割引債の年利回りを計算します。",
                    parameters: [
                        {
                            name: "settle"
                        },
                        {
                            name: "maturity"
                        },
                        {
                            name: "price"
                        },
                        {
                            name: "redeem"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "YIELDMAT",
                    //shortDescription: "",
                    description: "満期に利息が支払われる証券の年利回りを計算します。",
                    parameters: [
                        {
                            name: "settle"
                        },
                        {
                            name: "maturity"
                        },
                        {
                            name: "issue"
                        },
                        {
                            name: "issrate"
                        },
                        {
                            name: "price"
                        },
                        {
                            name: "basis"
                        }
                    ]
                },
                {
                    name: "ZTEST",
                    //shortDescription: "",
                    description: "z 検定の有意値を返します。z 検定では、一群のデータに対する検定値 x の標準スコアを生成し、正規分布の両側の確率値を返します。",
                    parameters: [
                        {
                            name: "array"
                        },
                        {
                            name: "x"
                        },
                        {
                            name: "sigma"
                        }
                    ]
                },
                {
                    name: "PIESPARKLINE",
                    //shortDescription: "",
                    description: "This function returns a data set used for representing a pie sparkline",
                    parameters: [
                        {
                            name: "range|percentage"
                        },
                        {
                            name: "color",
                            repeatable: true
                        }
                    ]
                },
                {
                    name: "AREASPARKLINE",
                    //shortDescription: "",
                    description: "This function returns a data set used for representing a area sparkline",
                    parameters: [
                        {
                            name: "points"
                        },
                        {
                            name: "mini"
                        },
                        {
                            name: "maxi"
                        },
                        {
                            name: "line1"
                        },
                        {
                            name: "line2"
                        },
                        {
                            name: "colorPositive"
                        },
                        {
                            name: "colorNegative"
                        }
                    ]
                },
                {
                    name: "SCATTERSPARKLINE",
                    //shortDescription: "",
                    description: "This function returns a data set used for representing a scatter sparkline",
                    parameters: [
                        {
                            name: "points1"
                        },
                        {
                            name: "points2"
                        },
                        {
                            name: "minX"
                        },
                        {
                            name: "maxX"
                        },
                        {
                            name: "minY"
                        },
                        {
                            name: "maxY"
                        },
                        {
                            name: "hLine"
                        },
                        {
                            name: "vLine"
                        },
                        {
                            name: "xMinZone"
                        },
                        {
                            name: "xMaxZone"
                        },
                        {
                            name: "yMinZone"
                        },
                        {
                            name: "yMaxZone"
                        },
                        {
                            name: "tags"
                        },
                        {
                            name: "drawSymbol"
                        },
                        {
                            name: "drawLines"
                        },
                        {
                            name: "color1"
                        },
                        {
                            name: "color2"
                        },
                        {
                            name: "dash"
                        }
                    ]
                },
                {
                    name: "LINESPARKLINE",
                    //shortDescription: "",
                    description: "This function returns a data set used for representing a line sparkline",
                    parameters: [
                        {
                            name: "data"
                        },
                        {
                            name: "dataOrientation"
                        },
                        {
                            name: "dateAxisData"
                        },
                        {
                            name: "dateAxisOrientation"
                        },
                        {
                            name: "setting"
                        }
                    ]
                },
                {
                    name: "COLUMNSPARKLINE",
                    //shortDescription: "",
                    description: "This function returns a data set used for representing a column sparkline",
                    parameters: [
                        {
                            name: "data"
                        },
                        {
                            name: "dataOrientation"
                        },
                        {
                            name: "dateAxisData"
                        },
                        {
                            name: "dateAxisOrientation"
                        },
                        {
                            name: "setting"
                        }
                    ]
                },
                {
                    name: "WINLOSSSPARKLINE",
                    //shortDescription: "",
                    description: "This function returns a data set used for representing a win/loss sparkline",
                    parameters: [
                        {
                            name: "data"
                        },
                        {
                            name: "dataOrientation"
                        },
                        {
                            name: "dateAxisData"
                        },
                        {
                            name: "dateAxisOrientation"
                        },
                        {
                            name: "setting"
                        }
                    ]
                }
            ];
            return FormulaTextBoxResource_JP;
        })();
        spread.FormulaTextBoxResource_JP = FormulaTextBoxResource_JP;
    })(wijmo.spread || (wijmo.spread = {}));
    var spread = wijmo.spread;
})(wijmo || (wijmo = {}));
