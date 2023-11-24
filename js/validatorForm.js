// COMMON 

let TEXT_NOT_EMPTY = "Không được để trống";
let INVALID = "không hợp lệ"; 
let SUBMITTED = "Đã gửi dữ liệu thành công!";
let PLEASE_CHOOSE = "Hãy chọn 1 phương thức thanh toán!";
function debug(element) {
    console.log('debugging');
    console.log(element);
}

function isNull(element) {
    return element == undefined;
}

// END COMMON 

function isEmail(email) {
    let emailReg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    let valid = emailReg.test(email);
    if(valid == true) {
        return {
            status: true,
            error: "",
        }
    } else {
        return {
            status: false,
            error: "Email không hợp lệ!",
        }
    }
}

function isPassword(password) {
    let valid = password.length >= 8;
    if(valid == true) {
        return {
            status: true,
            error: "",
        }
    } else {
        return {
            status: false,
            error: "Mật khẩu ít nhất 8 ký tự!",
        }
    }
}

function isUsername(name) {
    let valid = name.length >= 4;
    if(valid == true) {
        return {
            status: true,
            error: "",
        }
    } else {
        return {
            status: false,
            error: "Tên người dùng ít nhất 4 ký tự!",
        }
    }
}

function isContact(content) {
    let valid = content.length >= 10;
    if(valid == true) {
        return {
            status: true,
            error: "",
        }
    } else {
        return {
            status: false,
            error: "Nội dung ít nhất 10 ký tự!",
        }
    }
}

function isAddress(text) {
    let valid = text.length >= 10;
    if(valid == true) {
        return {
            status: true,
            error: "",
        }
    } else {
        return {
            status: false,
            error: "Địa chỉ ít nhất 10 ký tự!",
        }
    }
}

function isPhoneNumber(number) {
    for(let i = 0; i < number.length; i++) {
        if(number[i] >= '0' && number[i] <= '9') {
            continue;
        }
        return {
            status: false,
            error: "Số điện thoại chỉ được chứa các chữ số 0 - 9!",
        }
    }
    let valid = number.length >= 8;
    if(valid) {
        return {
            status: true,
            error: "",
        }
    } else {
        return {
            status: false,
            error: "Số điện thoại ít nhất 8 chữ số",
        }
    }
}

function validateInput(input) {
    let name = input.getAttribute('name');
    let value = input.value;
    if(name == 'email') {
        return isEmail(value);
    } else if(name == 'password') {
        return isPassword(value);
    } else if(name == 'username') {
        return isUsername(value);
    } else if(name == 'contact') {
        return isContact(value);
    } else if(name == 'phone-number') {
        return isPhoneNumber(value);
    } else if(name == 'address') {
        return isAddress(value);
    }
    return {
        status: input.checked,
        error: "",
    }
}

function showNotification(error) {
    var notification = document.querySelector(".notification");
    notification.innerHTML = error;
    notification.style.display = "block";
    setTimeout(function() {
        notification.style.display = "none";
    }, 3000);
}

function trySubmit(submitBtn, listInputValidate) {
    let haveInputRadio = false, validInputRadio = false;
    if(!isNull(submitBtn)) {
        submitBtn.addEventListener('click', (event) => {
            for(let i = 0; i < listInputValidate.length; i++) {
                let input = listInputValidate[i];
                let {status, error} = validateInput(input);
                let type = input.getAttribute('type');
                if(type == 'radio') {
                    haveInputRadio = true;
                    if(status) {
                        validInputRadio = true;
                    }
                } else if(status == false) {
                    event.preventDefault();
                    showNotification(error);
                    break;
                }
                if(i == listInputValidate.length - 1 && (haveInputRadio == false || validInputRadio == true)) {
                    alert(SUBMITTED);
                } else if(i == listInputValidate.length - 1) {
                    event.preventDefault();
                    showNotification(PLEASE_CHOOSE);
                }
            }
        });
    }
}

function findSubmitBtn(form) {
    let listBtn = form.querySelectorAll('button');
    let btnSubmit;
    listBtn.forEach((btn) => {
        if(btn.type == 'submit') {
            btnSubmit = btn; 
        }
    });
    return btnSubmit;
}

function validateForm(form) {
    let inputs = form.querySelectorAll('input');
    let contactInputs = form.querySelectorAll('textarea');
    let listInputValidate = [];
    inputs.forEach((input) => {
        listInputValidate.push(input);
    });
    contactInputs.forEach((input) => {
        listInputValidate.push(input);
    });

    let submitBtn = findSubmitBtn(form);
    if(!isNull(submitBtn)) {
        trySubmit(submitBtn, listInputValidate);
    }
}

let listForm = document.querySelectorAll('form.need-validator');
if(!isNull(listForm)) {
    for(let i = 0; i < listForm.length; i++) {
        validateForm(listForm[i]);
    }
}