function eksponensiasi(x: number, n: number): number | string {
  if (n < 0) {
    return "input salah";
  } else if (n === 0) {
    return 1;
  } else {
    let hasil = 1;
    for (let i = 1; i <= n; i++) {
      hasil *= x;
    }
    return hasil;
  }
}

console.log(eksponensiasi(2, 3)); // Output: 8
console.log(eksponensiasi(2, 12)); // Output: 4096
console.log(eksponensiasi(7, 2)); // Output: 49
console.log(eksponensiasi(9, 3)); // Output: 729
console.log(eksponensiasi(22, 5)); // Output: 5153632
console.log(eksponensiasi(1996, 0)); // Output: 1
console.log(eksponensiasi(4213, -3)); // Output: "input salah"
