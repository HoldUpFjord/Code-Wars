var isPalindrome = function(s) {
    // 1. Create a set to look up characters.
    const set = new Set(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);

    // 2. Create a helper function that returns a boolean value.
    const isAlphaNumeric = (char) => {
        return set.has(char);
    }

    // 3. Convert the input string to lowercase.
    const str = s.toLowerCase();

    // 4. Initialize pointers.
    let left = 0;
    let right = str.length - 1;

    // 5. Check only the left and right halves.
    while (left < right) {
        // 5-1. If it's not an alphanumeric value, skip it.
        // Example: , ! ? " "
        while (left < right && !isAlphaNumeric(str[left])) {
            left++;
        }
        // 5-2. If it's not an alphanumeric value, skip it.
        while (left < right && !isAlphaNumeric(str[right])) {
            right--;
        }
        // 6. Once they are facing alphanumeric values, check if they are the same. If not, return false.
        if (str[left] !== str[right]) return false;

        // Move pointers.
        left++;
        right--;
    }
    return true;
}