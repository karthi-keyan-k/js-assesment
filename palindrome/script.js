function isPalindrome(s) {
    s = s.toLowerCase(); // Convert string to lowercase
    return s === s.split('').reverse().join('');
}


 console.log(isPalindrome("racecar"));  // Output: true
console.log(isPalindrome("hello")); 