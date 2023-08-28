module.exports = function toReadable(number) {
    let result = "";
    const zeroToNineteen = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const dozens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const hundred = Math.floor(number / 100);
    number = number % 100;
    const ten = Math.floor(number / 10);
    const one = number % 10;

    if (number === 0) {
        result = "zero";
    }
    if (hundred) {
        result = zeroToNineteen[hundred] + " hundred";
    }
    if (ten > 0 || one > 0) {
        if (!(result === "")) {
            result += " ";
        }

        if (ten < 2) {
            result = result + zeroToNineteen[ten * 10 + one];
        } else {
            result += dozens[ten];
            if (one > 0) {
                result = result + " " + zeroToNineteen[one];
            }
        }
    }
    return result;
};
