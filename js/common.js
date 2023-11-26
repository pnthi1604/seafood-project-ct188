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

//LIST ALL PRODUCT
let allProduct =
    [
        { src: "../resources/img/anhsanpham/tom/tom1.jpg", name: "Tôm Mũ Ni", price: "950000" },

        { src: "../resources/img/anhsanpham/tom/tom2.jpg", name: "Tôm Càng Xanh", price: "425000" },

        { src: "../resources/img/anhsanpham/tom/tom3.jpg", name: "Tôm Rảo", price: "200000" },

        { src: "../resources/img/anhsanpham/tom/tom4.jpg", name: "Tôm Hùm Tasmania Úc", price: "1325000" },

        { src: "../resources/img/anhsanpham/tom/tom5.jpg", name: "Tôm Đất", price: "150000" },

        { src: "../resources/img/anhsanpham/tom/tom6.jpg", name: "Tôm Bạc", price: "450000" },

        { src: "../resources/img/anhsanpham/tom/tom7.jpg", name: "Bề Bề", price: "300000" },

        { src: "../resources/img/anhsanpham/tom/tom8.jpg", name: "Bọ Biển", price: "980000" },

        { src: "../resources/img/anhsanpham/tom/tom9.jpg", name: "Tôm Hùm", price: "2040000" },

        { src: "../resources/img/anhsanpham/tom/tom10.jpg", name: "Tôm Hùm Bông", price: "1380000" },

        { src: "../resources/img/anhsanpham/tom/tom11.jpg", name: "Tôm Hùm Bông", price: "1380000" },

        { src: "../resources/img/anhsanpham/tom/tom12.jpg", name: "Tôm Hùm Bông", price: "1380000" },

        { src: "../resources/img/anhsanpham/tom/tom13.jpg", name: "Tôm Hùm Bông", price: "1380000" },

        { src: "../resources/img/anhsanpham/tom/tom14.jpg", name: "Tôm Hùm Bông", price: "1380000" },

        { src: "../resources/img/anhsanpham/tom/tom15.jpg", name: "Tôm Hùm Bông", price: "1380000" },

        { src: "../resources/img/anhsanpham/cua/cua1.jpg", name: "Cua Hoàng Đế", price: "1790000" },

        { src: "../resources/img/anhsanpham/cua/cua2.jpg", name: "Cua Biển Xanh", price: "580000" },

        { src: "../resources/img/anhsanpham/cua/cua3.jpg", name: "Cua Biển Gạch", price: "490000" },

        { src: "../resources/img/anhsanpham/cua/cua4.jpg", name: "Ghẹ Gạch", price: "186000" },

        { src: "../resources/img/anhsanpham/cua/cua5.jpg", name: "Cua Bể", price: "490000" },

        { src: "../resources/img/anhsanpham/cua/cua6.jpg", name: "Cua Biển Thịt", price: "261000" },

        { src: "../resources/img/anhsanpham/cua/cua7.jpg", name: "Cua Biển Cà Mau", price: "450000" },

        { src: "../resources/img/anhsanpham/cua/cua8.jpg", name: "Cua Lông", price: "380000" },

        { src: "../resources/img/anhsanpham/cua/cua9.jpg", name: "Ghẹ Đỏ", price: "360000" },

        { src: "../resources/img/anhsanpham/cua/cua10.jpg", name: "Ghẹ Xanh", price: "420000" },

        { src: "../resources/img/anhsanpham/cua/cua11.jpg", name: "Cua Lông", price: "380000" },

        { src: "../resources/img/anhsanpham/cua/cua12.jpg", name: "Ghẹ Đỏ", price: "360000" },

        { src: "../resources/img/anhsanpham/cua/cua13.jpg", name: "Ghẹ Xanh", price: "420000" },

        { src: "../resources/img/anhsanpham/ca/ca1.jpg", name: "Cá Chỉ Vàng", price: "120000" },

        { src: "../resources/img/anhsanpham/ca/ca2.jpg", name: "Cá Lăng Đuôi Đỏ", price: "500000" },

        { src: "../resources/img/anhsanpham/ca/ca3.jpg", name: "Cá Mút Đá", price: "200000" },

        { src: "../resources/img/anhsanpham/ca/ca4.jpg", name: "Cá Thu", price: "250000" },

        { src: "../resources/img/anhsanpham/ca/ca5.jpg", name: "Cá Ngừ Bông", price: "120000" },

        { src: "../resources/img/anhsanpham/ca/ca6.jpg", name: "Cá Dìa Biển", price: "180000" },

        { src: "../resources/img/anhsanpham/ca/ca7.jpg", name: "Cá Trao Tráo", price: "150000" },

        { src: "../resources/img/anhsanpham/ca/ca8.jpg", name: "Cá Đục", price: "250000" },

        { src: "../resources/img/anhsanpham/ca/ca9.jpg", name: "Cá Thác Lác", price: "90000" },

        { src: "../resources/img/anhsanpham/ca/ca10.jpg", name: "Cá Ngừ Sọc Dừa", price: "180000" },

        { src: "../resources/img/anhsanpham/ca/ca11.jpg", name: "Cá Bò Da", price: "160000" },

        { src: "../resources/img/anhsanpham/ca/ca12.jpg", name: "Cá Bơn Vàng", price: "1590000" },

        { src: "../resources/img/anhsanpham/ca/ca13.jpg", name: "Cá Bã Trầu", price: "150000" },

        { src: "../resources/img/anhsanpham/ca/ca14.jpg", name: "Cá Hồi SaPa", price: "520000" },

        { src: "../resources/img/anhsanpham/ca/ca15.jpg", name: "Cá Sòng", price: "70000" },

        { src: "../resources/img/anhsanpham/ca/ca16.jpg", name: "Cá Tráp Đen", price: "250000" },

        { src: "../resources/img/anhsanpham/ca/ca17.jpg", name: "Cá Trích Phi Lê", price: "280000" },

        { src: "../resources/img/anhsanpham/ca/ca18.jpg", name: "Cá Trao Tráo Vàng", price: "150000" },

        { src: "../resources/img/anhsanpham/ca/ca19.jpg", name: "Cá Lăng", price: "70000" },

        { src: "../resources/img/anhsanpham/ca/ca20.jpg", name: "Cá Mối Một Nắng", price: "170000" },

        { src: "../resources/img/anhsanpham/ca/ca21.jpg", name: "Cá Chim Đen Nước Ngọt", price: "100000" },

        { src: "../resources/img/anhsanpham/ca/ca22.jpg", name: "Cá Lóc", price: "300000" },

        { src: "../resources/img/anhsanpham/ca/ca23.jpg", name: "Cá Chim Trắng Biển", price: "270000" },

        { src: "../resources/img/anhsanpham/ca/ca24.jpg", name: "Cá Thu Cắt Khúc", price: "260000" },

        { src: "../resources/img/anhsanpham/ca/ca25.jpg", name: "Cá Mối", price: "120000" },

        { src: "../resources/img/anhsanpham/oc/oc1.jpg", name: "Ngao Hoa", price: "150000" },

        { src: "../resources/img/anhsanpham/oc/oc2.jpg", name: "Ốc Nhảy Đỏ", price: "270000" },

        { src: "../resources/img/anhsanpham/oc/oc3.jpg", name: "Ốc Hương", price: "500000" },

        { src: "../resources/img/anhsanpham/oc/oc4.jpg", name: "Ốc Móng Tay", price: "1000000" },

        { src: "../resources/img/anhsanpham/oc/oc5.jpg", name: "Ốc Mỡ", price: "210000" },

        { src: "../resources/img/anhsanpham/oc/oc6.jpg", name: "Ốc Gai", price: "220000" },

        { src: "../resources/img/anhsanpham/oc/oc7.jpg", name: "Ốc Hương Pháp", price: "150000" },

        { src: "../resources/img/anhsanpham/oc/oc8.jpg", name: "Bào Ngư", price: "900000" },

        { src: "../resources/img/anhsanpham/oc/oc9.jpg", name: "Hào Biển", price: "60000" },

        { src: "../resources/img/anhsanpham/oc/oc10.jpg", name: "Ốc Hương Cồ", price: "950000" },

        { src: "../resources/img/anhsanpham/oc/oc11.jpg", name: "Ốc Mỡ Trắng", price: "150000" },

        { src: "../resources/img/anhsanpham/oc/oc12.jpg", name: "Ốc Vòi Voi", price: "450000" },

        { src: "../resources/img/anhsanpham/oc/oc13.jpg", name: "Ốc Móng Tay Chúa", price: "400000" },

        { src: "../resources/img/anhsanpham/oc/oc14.jpg", name: "Ốc Sư Tử", price: "220000" },

        { src: "../resources/img/anhsanpham/oc/oc15.jpg", name: "Ốc Đá", price: "280000" },

        { src: "../resources/img/anhsanpham/monan/mon1.jpeg", name: "Tôm Càng Số Cajun", price: "199000" },

        { src: "../resources/img/anhsanpham/monan/mon2.jpeg", name: "Cua Thịt Hấp", price: "630000" },

        { src: "../resources/img/anhsanpham/monan/mon3.jpeg", name: "Tôm Sú Sốt Hoàng Kim", price: "199000" },

        { src: "../resources/img/anhsanpham/monan/mon4.jpeg", name: "Tôm Hùm Nướng Phô Mai", price: "420000" },

        { src: "../resources/img/anhsanpham/monan/mon5.jpeg", name: "Tôm Càng Nướng Mọi", price: "199000" },

        { src: "../resources/img/anhsanpham/monan/mon6.jpeg", name: "Tôm Sú Nướng Mọi", price: "199000" },

        { src: "../resources/img/anhsanpham/monan/mon7.jpeg", name: "Ốc Hương Cháy Tỏi", price: "199000" },

        { src: "../resources/img/anhsanpham/monan/mon8.jpeg", name: "Bào Ngư Nướng Mỡ Hành", price: "599000" },

        { src: "../resources/img/anhsanpham/monan/mon9.jpeg", name: "Ốc Hương Hấp Sả", price: "166000" },

        { src: "../resources/img/anhsanpham/monan/mon10.jpeg", name: "Mì Xào Hải Sản", price: "129000" },

        { src: "../resources/img/anhsanpham/monan/mon11.jpeg", name: "Hào Nướng Phô Mai", price: "32000" },

        { src: "../resources/img/anhsanpham/monan/mon12.jpeg", name: "Hàu Nướng Mỡ Hành", price: "32000" },

        { src: "../resources/img/anhsanpham/monan/mon13.jpeg", name: "Càng Ghẹ Sốt Bơ Tỏi", price: "60000" },

        { src: "../resources/img/anhsanpham/monan/mon14.jpeg", name: "Ốc Móng Tay Cháy Tỏi", price: "55000" },

        { src: "../resources/img/anhsanpham/monan/mon15.jpeg", name: "Ốc Móng Tay Sốt Me", price: "55000" },

        { src: "../resources/img/anhsanpham/nuoc/nuoc1.jpg", name: "Coca cola", price: "15000" },

        { src: "../resources/img/anhsanpham/nuoc/nuoc2.jpg", name: "Pepsi", price: "15000" },

        { src: "../resources/img/anhsanpham/nuoc/nuoc3.jpg", name: "7up", price: "15000" },

        { src: "../resources/img/anhsanpham/nuoc/nuoc4.jpeg", name: "Trà mãng cầu vàng", price: "32000" },

        { src: "../resources/img/anhsanpham/nuoc/nuoc5.jpeg", name: "Trà Lựu Đỏ Bưởi", price: "32000" },

        { src: "../resources/img/anhsanpham/nuoc/nuoc6.jpg", name: "Trà Đào Cam Sả", price: "40000" },

        { src: "../resources/img/anhsanpham/nuoc/nuoc7.jpeg", name: "Trà Việt Quốc", price: "40000" },

        { src: "../resources/img/anhsanpham/nuoc/nuoc8.jpeg", name: "Trà Bưởi Băng Tuyết", price: "40000" },

        { src: "../resources/img/anhsanpham/nuoc/nuoc9.jpeg", name: "Trà Dâu Tằm", price: "40000" },

        { src: "../resources/img/anhsanpham/nuoc/nuoc10.jpeg", name: "Trà Xanh (Matcha)", price: "25000" },
    ];
//  END LIST PRODUCT 

// LIST DETAIL PRODUCT 

let listDetailProduct = [
    {
        code: 'ca',
        status: 'còn hàng',
        content: 'Giống như các thức hải sản khác, nhìn chung cá có rất nhiều chất dinh dưỡng. Hầu hết chúng đều có tác động tích cực đến sức khỏe con người ở mọi lứa tuổi. Do vậy, bạn có thể yên tâm khi chế biến món ăn này cho tất cả thành viên gia đình cùng thưởng thức.',
    },
    {
        code: 'cua',
        status: 'còn hàng',
        content: 'Cua biển thịt, cung cấp đến hơn 100% nhu cầu vitamin B12 cho cơ thể người. Ngoài ra 100g thịt cua có đến 34,7mcg, 0,1mg vitamin B1. Đặc biệt chúng cung cấp 3-8% hàm lượng sắt, kali mà cơ thể cần hàng ngày. Cua biển thịt rất giàu canxi, kẽm, đạm và đồng.',
    },
    {
        code: 'monan',
        status: 'còn hàng',
        content: 'Hương vị tuyệt vời, đa dạng và phong phú, đồ ăn ngon là hành trình khám phá hạt giống văn hóa. Mỗi miếng ngon là sự kết hợp tinh tế giữa nguyên liệu tươi ngon và sự sáng tạo nấu nướng, làm hài lòng vị giác và mang lại trải nghiệm độc đáo.',
    },
    {
        code: 'nuoc',
        status: 'còn hàng',
        content: 'Hương vị tinh tế của nước giải khát hoặc bia, là cuộc phiêu lưu tuyệt vời giữa những đồng cỏ hương thơm. Mỗi giọt là một chuyến hành trình, là niềm vui khám phá, thưởng thức, và chìm đắm trong khoảnh khắc.',
    },
    {
        code: 'oc',
        status: 'còn hàng',
        content: 'Hương vị tuyệt vời của ốc là hòa quyện giữa biển cả. Mỗi miếng nhỏ là một trải nghiệm ngon miệng, đậm đà và đặc sắc.',
    },
    {
        code: 'tom',
        status: 'còn hàng',
        content: 'Chúng ta biết rằng, tôm thì loại nào cũng quý và nhiều dinh dưỡng. Tuy nhiên với tôm mũ ni các chuyên gia nghiên cứu đã chỉ ra rằng, chúng có nhiều dinh dưỡng nổi trội hơn các loại tôm hùm, tôm biển thông thường. Vậy nên chúng là thực phẩm rất tốt cho cơ thể, có nhiều tác dụng ngăn ngừa bệnh hiệu quả',
    },
];

// END LIST DETAIL PRODUCT S

// END COMMON 

//============================================================================================================

// DETAIL

let amountElement=document.getElementById('amount');
let amount;
if(!isNull(amountElement)) {
    amount = amountElement.value;    
    amountElement.addEventListener('input',() => {
        amount=amountElement.value;
        amount=parseInt(amount);
        amount=isNaN(amount)?1:amount;
        render(amount);
    });
}

let render=(amount) =>{
   amountElement.value=amount
}

//handel plus
let handelPlus = () =>{
    amount++;
    render(amount);
}

//handel minus
let handelMinus = () =>{
    if(amount>0)
        amount--;
    render(amount);
}

//END DETAIL

//============================================================================================================

// SHOW PAY DETAIL 

let queryObject = Object.fromEntries(new URLSearchParams(window.location.search));

const VND = new Intl.NumberFormat('vi-VN',{
        style: 'currency',
        currency: 'VND'
    });

var priceArr = [];

function renderPay (){
    if(isNull(queryObject)) {
        return;
    }
    for (var key in queryObject) {
        let detail = document.getElementById('pay-detail');
        if (queryObject[key] == 'true'  && !isNull(detail)){
            var price = Number(allProduct[key].price) * Number(window.localStorage.getItem(key));
            priceArr.push(price);
            detail.innerHTML = detail.innerHTML +
            `
            <div class="pay-product">
                <div class="pay-product-name">${allProduct[key].name}</div>
                <div class="pay-product-amount">${window.localStorage.getItem(key)}</div>
                <div class="pay-product-price">${VND.format(price)}</div>
            </div>
            `
        }
    }
}

let thanhToanPage = document.getElementById('thanhtoan');
if(!isNull(thanhToanPage)) {
    thanhToanPage.onload = renderPay();
}

function getTotal (arr){
    return arr.reduce((total, price) => {
        return total += price;
    }, 0);
}

var total = document.getElementById('pay-total');
if(!isNull(total)) {
    total.innerHTML += `<div>${VND.format(getTotal(priceArr))}</div>`;
}

function removeItemChecked() {
    for(let key in queryObject) {
        if(queryObject[key] == true) {
            
            localStorage.removeItem(key);
        }
    }
}

// END SHOW PAY DETAIL 

//============================================================================================================

// VALIDATOR FORM

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

// END VALIDATOR FORM

// HANDLE SLIDER 

let items = document.querySelectorAll('.slider-item');
let prevBtn = document.querySelector('button.prev');
let nextBtn = document.querySelector('button.next');
const prevAnimation = "prev-animation";
const nextAnimation = "next-animation";

function findCurrentItem() {
    for(let i = 0; i < items.length; i++) {
        let item = items[i];
        if(item.style.display != 'none') {
            return i;
        }
    }
    return undefined;
}

function handleIndex({index, del}) {
    index = Number(index) + del;
    if(index >= 0 && index < items.length) {
        return index;
    }
    if(index == -1) {
        return items.length - 1;
    }
    if(index == items.length) {
        return 0;
    }
}

function removeClass(element, className) {
    if(element.classList.contains(className)) {
        element.classList.remove(className);
    }
}

function handleSlider(del) {
    let index = findCurrentItem();
    let curItem = items[index];
    removeClass(curItem, prevAnimation);
    removeClass(curItem, nextAnimation);
    let nextIndex = handleIndex({index, del});
    let nextItem = items[nextIndex];
    nextItem.classList.add((del == -1 ? prevAnimation : nextAnimation));
    curItem.style.display = "none";
    nextItem.style.display = "block";
}   

if(!isNull(prevBtn)) {
    prevBtn.addEventListener('click', (event) => {
        handleSlider(-1);
    });
}

if(!isNull(nextBtn)) {
    nextBtn.addEventListener('click', (event) => {
        handleSlider(1);
    });
}

// END HANDLE SLIDER 

// ADD PRODUCT

// ADD CART IN DETAIL PAGE 

let numberOrderNode = document.querySelector('input#amount');
let addCartBtn = document.querySelector('.add-cart');
let imgNode = document.querySelector('.hinh1');

function findCodeProduct(src) {
    //index == code
    for(let i = 0; i < allProduct.length; i++) {
        let product = allProduct[i];
        if(product.src == src) {
            return i;
        }
    }
    return undefined;
}

function getSum(val1, val2) {
    return Number(val1) + Number(val2);
}


function addCart(code, numberOrder) {
    if(typeof localStorage[code] === "undefined") {
        localStorage.setItem(code, numberOrder);
    } else {
        let current = localStorage.getItem(code);
        let total = getSum(numberOrder, current);
        localStorage[code] = Math.min(100, total);
    }
}

function handleAddCart({numberOrder, imgSrc}) {
    if(!isNull(numberOrderNode)) {
        numberOrder = numberOrderNode.value;
    } else {
        numberOrder = 1;
    }
    if(!isNull(imgNode)) {
        imgSrc = imgNode.getAttribute('src');
    }
    let code = findCodeProduct(imgSrc);
    if(!isNull(code) && numberOrder != 0) {
        addCart(code, numberOrder);
    }
}

if(!isNull(addCartBtn)) {
    addCartBtn.addEventListener('click', (event) => {
        handleAddCart({});
    });
}


// ADD CART IN SANPHAM PAGE  

function getImgSrcProduct({orderBtn}) {
    let parentNode = orderBtn.parentNode;
    let imgNode = parentNode.querySelector('img');
    imgSrc = imgNode.getAttribute('src');
    return imgSrc;
}

let orderBtns = document.querySelectorAll('.order');

if(!isNull(orderBtns)) {
    orderBtns.forEach((orderBtn) => {
        orderBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            event.preventDefault();
            let imgSrc = getImgSrcProduct({orderBtn});
            handleAddCart({imgSrc});
            orderBtn.innerHTML = `
            ĐÃ THÊM<i class="fas fa-shopping-basket"></i>`;
        });
    });
}

// END ADD PRODUCT

//========================================================================================================

// RENDER CART 

function handleShowPrice(price) {
    if (typeof price !== "string") {
        price = price.toString();
    }
    let handlePrice = "";
    let i;
    for (i = price.length - 1; i - 2 > 0; i -= 3) {
        for (let j = i; j >= i - 2; j--) {
            handlePrice = price[j] + handlePrice;
        }
        handlePrice = '.' + handlePrice;
    }
    while (i != -1) {
        handlePrice = price[i] + handlePrice;
        i--;
    }
    return handlePrice;
}

//create array checkedBoxs
//checkBoxs[code] == true <=> checkedBox of allProduct[code] is checked
let checkedBoxs = new Array(allProduct.length).fill(false);

function createNode(nameTag, nameClass) {
    let element = document.createElement(nameTag);
    element.classList.add(nameClass);
    return element;
}

function getTotalValueProduct({ code }) {
    let number = localStorage[code];
    let price = allProduct[code].price;
    let total = Number(number) * Number(price);
    return total;
}

function checkedBoxProduct({ product, code }) {
    product.querySelector('.select').checked = checkedBoxs[code];
}

function renderContentProduct({ product, code }) {
    let { src, name, price } = allProduct[code];
    let totalPrice = getTotalValueProduct({ code });
    totalPrice = handleShowPrice(totalPrice);
    price = handleShowPrice(price);
    product.innerHTML = `                
        <li class="check-box">
            <input type="checkbox" class="select" code="${code}">
        </li>
        <li class="detail">
            <img src="${src}" alt="" class="image">
            <p class="name">${name}</p>
        </li>
        <li class="price">
            ${price}đ
        </li>
        <li class="number">
            ${localStorage[code]}
        </li>
        <li class="total-price">
            ${totalPrice}đ
        </li>
        <li class="delete-product">
            <button class="delete" code="${code}"> 
                <i class="fa-solid fa-trash"></i>
            </button>
        </li>`;
    checkedBoxProduct({ product, code });
}

function renderTotalMoneyAllProduct(totalMoneyAllProduct) {
    let totalMoneyNode = document.querySelector('.invoice-price');
    if (!isNull(totalMoneyNode)) {
        totalMoneyNode.textContent = `${handleShowPrice(totalMoneyAllProduct)}Đ`;
    }
}

function updateTotalMoneyAllProduct() {
    let totalMoneyAllProduct = 0;
    for (let code = 0; code < checkedBoxs.length; code++) {
        let checkedBox = checkedBoxs[code];
        if (checkedBox) {
            let totalMoneyProduct = getTotalValueProduct({ code });
            totalMoneyAllProduct += totalMoneyProduct;
        }
    }
    return totalMoneyAllProduct;
}

let detailOrder = document.querySelector('.detail-order');

function renderCart() {
    if(isNull(detailOrder)) {
        return;
    }
    let totalMoneyAllProduct = updateTotalMoneyAllProduct();
    renderTotalMoneyAllProduct(totalMoneyAllProduct);
    detailOrder.innerHTML = `
        <ul class="order-attribute">
            <li class="attribute">Chọn</li>
            <li class="attribute">Sản phẩm</li>
            <li class="attribute">Giá</li>
            <li class="attribute">SL</li>
            <li class="attribute">Tổng</li>
            <li class="attribute">Xóa</li>
        </ul>`;
    for (let i = 0; i < localStorage.length; i++) {
        let code = localStorage.key(i);
        if(!(code >= '0' && code < allProduct.length)) {
            localStorage.removeItem(code);
            continue;
        }
        let product = createNode('ul', 'product');
        renderContentProduct({ product, code });
        detailOrder.append(product);
    }

    let checkBoxInputs = detailOrder.querySelectorAll('.select');

    if (!isNull(checkBoxInputs)) {
        for (let i = 0; i < checkBoxInputs.length; i++) {
            let checkBoxInput = checkBoxInputs[i];
            checkBoxInput.addEventListener('change', (event) => {
                let code = checkBoxInput.getAttribute('code');
                checkedBoxs[code] = checkBoxInput.checked;
                totalMoneyAllProduct = updateTotalMoneyAllProduct();
                renderTotalMoneyAllProduct(totalMoneyAllProduct);
            });
        }
    }

    let deleteBtns = detailOrder.querySelectorAll('button.delete');
    if (!isNull(deleteBtns)) {
        for (let i = 0; i < deleteBtns.length; i++) {
            let deleteBtn = deleteBtns[i];
            let code = deleteBtn.getAttribute('code');
            deleteBtn.addEventListener('click', (event) => {
                checkedBoxs[code] = false;
                localStorage.removeItem(code);
                renderCart();
            });
        }
    }
}

renderCart();

window.onstorage = function () {
    renderCart();
}

function getIsBuy() {
    var isBuy = {};
    for(let code = 0; code < allProduct.length; code++) {
        isBuy[code] = checkedBoxs[code];
    }
    return isBuy;
}

if(!isNull(detailOrder)) {
    var url = document.querySelector('a[href="../html/thanhtoan.html"]');
    if(!isNull(url)) {
        url.onclick = function(e) {
            // renderCart();
            let isBuy = getIsBuy();
            let queryparam  = '?' + new URLSearchParams(isBuy).toString();
            this.setAttribute('href',`../html/thanhtoan.html${queryparam}`);
        }        
    }
}

// END RENDER CART 

//============================================================================================================

//SHOW DETAIL PRODUCT

let products = document.querySelectorAll(".seafood");

function getCodeStatusContent(type) {
    for(let i = 0; i < listDetailProduct.length; i++) {
        const detailProduct = listDetailProduct[i];
        if(detailProduct.code == type) {
            return detailProduct;
        }
    }
}

function getPrice(detailPrice) {
    detailPrice = detailPrice.trim();
    let price = "";
    for(let i = 0; i < detailPrice.length; i++) {
        if(detailPrice[i] == ' ') {
            break;
        } else {
            price = price + detailPrice[i];
        }
    }
    return price;
}

function getDetailProduct(product) {
    const name = product.querySelector('.name-product').textContent;
    const type = product.parentNode.getAttribute('name');
    const {code, status, content} = getCodeStatusContent(type);
    const deltailPrice = product.querySelector('.price').textContent;
    const price = getPrice(deltailPrice);
    const linkImg = product.querySelector('img').getAttribute('src');
    return {name, code, status, price, content, linkImg};
}

if(!isNull(products)) {
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        if(!isNull(product)) {
            product.addEventListener('click', (event) => {
                event.preventDefault();
                let detailProduct = getDetailProduct(product);
                navigateToPage('detail.html', detailProduct);
            });
        }
    }
}

function navigateToPage(page, data) {
    let queryParams = new URLSearchParams(data);
    window.location.href = `${page}?${queryParams.toString()}`;
}

function getQueryParams() {
    let queryParams = new URLSearchParams(window.location.search);
    let params = {};
    for (let [key, value] of queryParams) {
        params[key] = value;
    }
    return params;
}

function renderDetailProduct({name, code, status, price, content, linkImg}) {
    if(isNull(name) || isNull(code) || isNull(status) || isNull(price) || isNull(content) || isNull(linkImg)) {
        return;
    }
    let imgNode = document.querySelector('.hinh1');
    let imgMiniNode = document.querySelector('.hinh1-mini');
    let infoNode = document.querySelector('.info');
    let nameNode = infoNode.querySelector('.name-product');
    let codeNode = infoNode.querySelector('.code');
    let statusNode = infoNode.querySelector('span.status');
    let contentNode = infoNode.querySelector('.content-product');
    let priceNode = infoNode.querySelector('span.price-header');
    let unitCode = infoNode.querySelector('span.unit');

    //reset detail product
    imgNode.setAttribute('src', linkImg);
    imgMiniNode.setAttribute('src', linkImg);
    nameNode.textContent = name;
    codeNode.textContent = code;
    statusNode.textContent = status;
    contentNode.textContent = content;
    priceNode.textContent = `Giá: ${price}`;
    if(code == 'nuoc') {
        unitCode.innerHTML = "";
    }
}

renderDetailProduct(getQueryParams());

// END SHOW DETAIL PRODUCT 

//============================================================================================================

// SHOW MENU MOBILE: RESPONSIVE

function isNull(element) {
    return element == undefined;
}

let mobileMenuBtn = document.querySelector('.nav-bar-mobile .icon');
if(!isNull(mobileMenuBtn)) {
    mobileMenuBtn.addEventListener('click', (event) => {
        let mobileListproduct = document.querySelector('.nav-bar-mobile .category .list-product');
        mobileListproduct.style.display = (mobileListproduct.style.display == 'block' ? 'none' : 'block');
    });
}

// END SHOW MENU MOBILE: RESPONSIVE

//=============================================================================================================