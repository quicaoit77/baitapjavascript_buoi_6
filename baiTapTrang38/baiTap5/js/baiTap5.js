/**
 * Đầu vào
 * Người dùng nhập giá trị
 * 
 * Xử lý
 * Bắt sự kiện onclick cho button
 * dùng vòng lặp
 * nếu soNguyenTo % 1 và chính nó
 * 
 * Đầu ra
 * Xuất thông tin KẾT QUẢ ra màn hình = divShowInfoSoNguyenTo
 * 
 */

var btnTinhSoNguyenTo = document.querySelector("#btnTinhSoNguyenTo");
var soNguyenTo = document.querySelector("#soNguyenTo");

var divShowInfoSoNguyenTo = document.querySelector(".divShowInfoSoNguyenTo");

function timSoNguyenTo(number) {
    var soNT = 0;


    for (var i = 2; i <= number; i++) {
        if (i == 2 || i == 3 || i == 5 || i == 7) {
            soNT += i
        }

        if (i > 10 && i % 2 != 0 && i % 3 != 0 &&
            i % 4 != 0 && i % 5 != 0 &&
            i % 6 != 0 && i % 7 != 0 &&
            i % 8 != 0 && i % 9 != 0 && i % 10 != 0) {
            soNT += i
        }
    }

    return soNT;
}

btnTinhSoNguyenTo.addEventListener('click', e => {
    e.preventDefault()

    if (!soNguyenTo.value || Number(soNguyenTo.value) <= 1) {
        return;
    }

    var outPut = timSoNguyenTo(Number(soNguyenTo.value));

    divShowInfoSoNguyenTo.innerHTML = `Các số nguyên tố <= ${soNguyenTo.value} là: <br>${outPut}`

})