/////// VARIANT 2
module.exports = function reverse(n) {
    let buf = Math.abs(n);
    let accum = 0;

    while (buf != 0) {
        accum = Math.round((accum + ((buf / 10) % 1)) * 10);
        buf = Math.trunc(buf / 10);
    }

    return accum;
};

/////// VARIANT 1
// module.exports = function reverse(n) {
//     return Number(Math.abs(n).toString().split("").reverse().join(""));
// };
