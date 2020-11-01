/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (haystack === needle || !needle) {
        return 0
    }
    const table = generateTable(needle)
    let i = 0, j = 0
    while (i < haystack.length) {
        if (haystack[i] === needle[j]) {
            ++i, ++j;
        } else {
            if (j > 0) {
                j = table[j]
            } else {
                ++i
            }
        }
        if (j === needle.length) {
            return i - j
        }
    }
    return -1
}

const generateTable = (str) => {
    const table = new Array(str.length).fill(0)
    let i = 1, j = 0
    while (i < str.length) {
        if (str[i] === str[j]) {
            i++;
            j++;
            table[i] = j
        } else {
            if (j > 0) {
                j = table[j]
            } else {
                i++
            }
        }
    }
    return table
}