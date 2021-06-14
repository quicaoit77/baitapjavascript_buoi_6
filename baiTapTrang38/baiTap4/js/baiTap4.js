/**
 * Đầu vào
 * tạo nút button
 * 
 * Xử lý
 * Bắt sự kiện cho nút button
 * var div = 0
 * dùng vòng lặp
 * i%2 ==0 div+=i
 * 
 * Đầu ra
 * Xuất thông tin Kết quả ra màn hình = divShowInfoInThe
 * 
 */
var btnInThe = document.querySelector("#btnInThe");

var divShowInfoInThe = document.querySelector(".divShowInfoInThe");

function inTheDiv() {
    var div = "";
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            div += `<div class="bg-danger w-100 text-white" style="height: 30px">${i}</div>`

        } else {
            div += `<div class="bg-primary w-100 text-white" style="height: 30px">${i}</div>`
        }
    }
    return div;
}

btnInThe.addEventListener('click', e => {
    e.preventDefault()

    let outPut = inTheDiv();

    divShowInfoInThe.innerHTML = outPut

})