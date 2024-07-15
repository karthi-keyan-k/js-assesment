function longestWord(s) {
    const words = s.split(' ');
    let longest = "";
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}
console.log(longestWord("Hello, how are you?"));