/**
 * Đầu vào
 * Tạo thẻ select cho người dùng chọn số chẵn lẻ, bước nhảy hoặc chia hết cho 2
 * 
 * xử lý
 * tạp button tạo in số chẵn lẻ và dùng bước nhảy hoặc dùng chia hết cho 2
 * Dùng vòng lặp
 * chẵn i%2==0 ngược lại là lẻ
 * 
 * Đầu ra
 * In ra kết quả chẵn lẻ và dùng bước nhảy hoặc chia hết cho 2
 */


var btnIn = document.querySelector('#btnIn')

var chanLe = document.querySelector('#chanLe')
var whileFor = document.querySelector('#whileFor')
var phuongThuc = document.querySelector('#phuongThuc')

var divShowInfoChanLe = document.querySelector('.divShowInfoChanLe')


function xacDinhChanLe(chanLe) {
    return chanLe == "1" ? "CHAN" : "LE"


}

function xacDinhWhileFor(whileFor) {
    return whileFor == "1" ? "WHILE" : "FOR"

}


function xacDinhMethod(phuongThuc) {
    return phuongThuc == "1" ? "BUOC_NHAY" : "CHIA_HET_CHO_2"

}

function inKetQua(chanLe, whileFor, phuongThuc) {
    var result = ""
    switch (chanLe) {
        case "CHAN": {
            if (whileFor == "FOR") {
                switch (phuongThuc) {
                    case "BUOC_NHAY": {
                        var i = 2;
                        while (i < 100) {
                            result += i + ", ";
                            i += 2
                        }
                        break;
                    }

                    default: {
                        var i = 1;
                        while (i < 100) {
                            if (i % 2 == 0) {

                                result += i + ", ";
                                ++i
                            }
                            ++i
                        }
                        break;
                    }
                }
            } else {
                switch (phuongThuc) {
                    case "BUOC_NHAY": {
                        for (var i = 2; i < 100; i += 2) {
                            result += i + ", ";
                        }
                        break;
                    }

                    default: {
                        for (var i = 1; i < 100; i++) {
                            if (i % 2 == 0) result += i + ", ";
                        }
                        break;
                    }
                }
            }
            break;
        }


        default: {
            if (whileFor === "FOR") {
                switch (phuongThuc) {
                    case "BUOC_NHAY": {
                        var i = 1;
                        while (i < 100) {
                            result += i + ", ";
                            i += 2
                        }
                        break;
                    }

                    default: {
                        var i = 1;
                        while (i < 100) {
                            if (i % 2 != 0) {
                                result += i + ", ";
                                ++i
                            }
                            ++i
                        }
                        break;
                    }
                }
            } else {
                switch (phuongThuc) {
                    case "BUOC_NHAY": {
                        for (var i = 1; i < 100; i += 2) {
                            result += i + ", ";
                        }
                        break;
                    }

                    default: {
                        for (var i = 1; i < 100; i++) {
                            if (i % 2 != 0) result += i + ", ";
                        }
                        break;
                    }
                }
            }
            break;
        }
    }

    return result
}



btnIn.addEventListener('click', e => {
    var outPut
    e.preventDefault()
    outPut = inKetQua(xacDinhChanLe(chanLe.value), xacDinhWhileFor(whileFor.value), xacDinhMethod(phuongThuc.value))

    divShowInfoChanLe.innerHTML = `<tt>Kết quả tính bằng vòng lặp "FOR/WHTE" và dùng phương thức
    ${xacDinhMethod(phuongThuc.value) == "BUOC_NHAY" ? "BƯỚC NHHẢY" : "CHIA HẾT CHO 2"} là:<br> ${outPut}</tt>`

})