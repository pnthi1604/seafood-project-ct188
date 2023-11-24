function isNull(element) {
    return element == undefined;
}

function debug(element) {
    console.log(element);
}

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