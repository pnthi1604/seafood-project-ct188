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