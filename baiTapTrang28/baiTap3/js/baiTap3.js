/**
 * Đầu vào
 * Tạo thẻ select cho người dùng chọn theo vòng lặp while/for
 * 
 * Xử lý
 * Bắt sự kiên onclick để in ra kết quả
 * var chiahetcho3
 * if i%3 ==0 thì chiahetcho3++
 * dùng vòng lặp while/for
 * 
 * Đầu ra
 * Xuất ra màn hình thông qua divShowInfoChiaHetCho3
 */

var btnKetQua = document.querySelector("#btnKetQua")

var whileFor3 = document.querySelector("#whileFor3")

var divShowInfoChiaHetCho3 = document.querySelector(".divShowInfoChiaHetCho3")



function soChiaHetCho3(whileFor) {
    var chiaHetCho3 = 0;
    switch (whileFor) {
        case "1": {
            var i = 0;
            while (i <= 1000) {
                if (i % 3 === 0) chiaHetCho3++


                ++i
            }
            break;
        }
        default: {
            for (var i = 0; i <= 1000; ++i) {
                if (i % 3 === 0) chiaHetCho3++
            }
            break;
        }
    }
    return chiaHetCho3
}







btnKetQua.addEventListener('click', e => {
    e.preventDefault()
    var outPut = soChiaHetCho3(whileFor3.value)


    divShowInfoChiaHetCho3.innerHTML = `Theo vòng lặp ${whileFor3.value === "1" ? "WHILE" : "FOR"} từ 0 - 1000:
                                Có ${outPut}</b> số chia hết cho 3`

})