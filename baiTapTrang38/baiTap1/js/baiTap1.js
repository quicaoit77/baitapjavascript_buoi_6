/**
 * Đầu vào
 * Tạo button tính kết quả
 * Xử lý
 * Bắt sự kiện onclick cho buton btnTinhNguyenDuong
 * 
 * Đầu ra
 * Xuất thông tin = divShowInfoSoNguyenDuongNhoNhat
 */


var btnTinhNguyenDuong = document.getElementById("btnTinhNguyenDuong");
var divShowInfoSoNguyenDuongNhoNhat = document.querySelector(".divShowInfoSoNguyenDuongNhoNhat");



function soNguyenDuongNhoNhat() {
    var tong = 0;
    for (var i = 1; i < 10000; i++) {
        var n = i;
        tong += i;

        if (tong >= 10000) {
            break;
        }
    }
    return n;
}
btnTinhNguyenDuong.addEventListener('click', e => {
    e.preventDefault()

    var outPut;
    outPut = soNguyenDuongNhoNhat();
    divShowInfoSoNguyenDuongNhoNhat.innerHTML = `Theo công thức: 1 + 2 + ...+ n >1000 thì số nguyên nhỏ nhất là: <b>${outPut}</b>`
})