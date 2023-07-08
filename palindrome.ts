function palindrome(string: string): boolean {
  // Menghapus spasi pada string dan mengubahnya menjadi huruf kecil
  string = string.replace(/\s/g, "").toLowerCase();

  // Mengecek apakah string merupakan palindrome
  for (let i = 0; i < Math.floor(string.length / 2); i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(palindrome("civic")); // Output: true
console.log(palindrome("katak")); // Output: true
console.log(palindrome("kasur rusak")); // Output: true
console.log(palindrome("kupu-kupu")); // Output: false
console.log(palindrome("lion")); // Output: false
