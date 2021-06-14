/**
 * Đầu vào
 * Người dùng nhập vào ô input
 * 
 * Xử lý
 * 
 * Bắt sự kiện onclick cho button
 * var giaThua =1
 * Dùng vòng lặp
 * giaiThua*=i
 * 
 * Đầu ra
 * Xuất kết quả ra màn hình = divShowInfoTinhGiaThua
 */

const btnTinhGiaThua = document.querySelector("#btnTinhGiaThua");
const soNguyen = document.querySelector("#soNguyen");

const divShowInfoTinhGiaThua = document.querySelector(".divShowInfoTinhGiaThua");

function tinhGiaiThua(n) {
    var giaiThua = 1;

    for (var i = 1; i <= n; ++i) {
        giaiThua *= i
    }
    return giaiThua;
}

btnTinhGiaThua.addEventListener('click', e => {
    e.preventDefault()

    if (!soNguyen.value || Number(soNguyen.value) <= 0) {
        return;
    } else {
        var outPut;
        outPut = tinhGiaiThua(Number(soNguyen.value));

        divShowInfoTinhGiaThua.innerHTML = `Kết quả phép tính là: <b>${outPut}</b>`
    }
})