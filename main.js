//INI BELUM LIAT SOLUTION VIDEOOOOO **********
function printNumber(totalNumber) {
    let count = 1;
    let hasil = "";
    const n = totalNumber;
    for (let i = 1; i <= n; i++) {
        hasil += count;
        if (count === 3) {
            count = 1;
            hasil += "";
        }
        else{
            count++;
        }
    }
        console.log(hasil);
        return hasil;
}
// 4, 7, 10
console.log(printNumber(2));
console.log(printNumber(3));
console.log(printNumber(6));
console.log(printNumber(10));
console.log(printNumber(30));

module.exports = printNumber
