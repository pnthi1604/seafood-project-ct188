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

function debug(element) {
    console.log(element);
}

function isNull(element) {
    return element == undefined;
}

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
            this.setAttribute('href',`thanhtoan.html${queryparam}`);
        }        
    }
}