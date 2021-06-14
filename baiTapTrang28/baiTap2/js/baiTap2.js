/**
 * Đầu vào
 * Lấy thông tin người dùng nhập vào số nguyên
 * 
 * Xử lý
 * var tổng = 0
 * chạy vòng lặp if i%2==0 tong +=i
 * tạo button in ra kết quả tổng và sử dụng vòng lặp
 * 
 * Kết quả:
* In ra màn hình kết quả
 */

var btnKq = document.querySelector("#btnKq")

var number = document.querySelector("#number")
var whileFor2 = document.querySelector("#whileFor2")

var divShowInfoChanLe = document.querySelector(".divShowInfoChanLe")



function xacdinhWhileFor2(whileFor) {
    switch (whileFor) {
        case "1": {
            return "WHILE";
        }


        default: {
            return "FOR";
        }
    }
}


function tinhTongSoChan(whileFor, number) {
    var tongSoChan = 0

    switch (whileFor) {
        case "WHILE": {
            var i = 1;
            while (i <= number) {
                if (i % 2 === 0) {
                    tongSoChan += i
                }
                ++i
            }
            break;
        }

        default: {
            for (var i = 1; i <= number; ++i) {
                if (i % 2 === 0) {
                    tongSoChan += i
                }
            }
            break;
        }
    }
    return tongSoChan;
}




btnKq.addEventListener('click', e => {
    e.preventDefault()

    if (!number.value || number.value.includes('.') || number.value.includes(',') || Number(number.value) <= 0) {
        return;
    }

    var outPut = tinhTongSoChan(xacdinhWhileFor2(whileFor2.value), Number(number.value))


    divShowInfoChanLe.innerHTML = `Tổng các số chẵn từ 1 đến ${number.value}<br>Theo vòng lập ${xacdinhWhileFor2(whileFor2.value)} là: <b>${outPut}</b>`
})