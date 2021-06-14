/**
 Đầu vào
 Người dùng nhập vào giá trị x,n

 Xử lý

 Bắt sự kiện onclick cho nút button
 var tong=0
 Dùng vòng lặp i<=n
 tong += Math.pow(x,i)

 Đầu ra

 Xuất ra kết quả 
 */
var btnTinhXY = document.querySelector("#btnTinhXY");
var x = document.querySelector("#x");
var y = document.querySelector("#y");




var divShowInfoTinhTongXY = document.querySelector(".divShowInfoTinhTongXY");



function tinhTong(x, y) {
    var tong = 0;

    for (var i = 1; i <= y; i++) {
        tong += Math.pow(x, i)
    }
    return tong;
}

btnTinhXY.addEventListener('click', e => {
    e.preventDefault()

    if (!x.value || !y.value || Number(x.value) < 0 || Number(y.value) <= 0) {
        return;
    } else {
        var outPut;
        outPut = tinhTong(Number(x.value), Number(y.value));

        divShowInfoTinhTongXY.innerHTML = `Kết quả phép tính là: <b>${outPut}</b>`
    }
})