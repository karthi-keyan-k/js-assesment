function countCharacters(s) {
    const charCount = {};
    for (let char of s) {
        charCount[char] = charCount[char] + 1 || 1;
    }
    return charCount;
}
console.log(countCharacters("hello"));