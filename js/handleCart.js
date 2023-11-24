function debug(element) {
    console.log(element);
}

let allListSeafood = document.querySelectorAll('.list-seafood');
let allProduct = [];

function getPrice(detailPrice) {
    detailPrice = detailPrice.trim();
    let price = "";
    for (let i = 0; i < detailPrice.length; i++) {
        if (detailPrice[i] == ' ') {
            break;
        } else {
            price = price + detailPrice[i];
        }
    }
    return price;
}

function pushProduct(product) {
    let src = product.querySelector('img').getAttribute('src');
    let name = product.querySelector('.name-product').textContent;
    let detailPrice = product.querySelector('.price').textContent;
    let price = getPrice(detailPrice);
    allProduct.push({ src, name, price });
}

function pushListSeafood(listProduct) {
    listProduct.forEach((product) => {
        pushProduct(product);
    });
}

//create list allProduct
allListSeafood.forEach((listSeafood) => {
    let products = listSeafood.querySelectorAll('.seafood');
    pushListSeafood(products);
});

let ans = "";

allProduct.forEach((product) => {
    let {src, name, price} = product;
    ans += `{ src: "${src}", name: "${name}", price: "${price}" },`;
});

// let ans = [
//     { src: "../resources/img/anhsanpham/tom/tom1.jpg", name: "Tôm Mũ Ni", price: "950.000" },

//     { src: "../resources/img/anhsanpham/tom/tom2.jpg", name: "Tôm Càng Xanh", price: "425.000" },

//     { src: "../resources/img/anhsanpham/tom/tom3.jpg", name: "Tôm Rảo", price: "200.000" },

//     { src: "../resources/img/anhsanpham/tom/tom4.jpg", name: "Tôm Hùm Tasmania Úc", price: "1.325.000" },

//     { src: "../resources/img/anhsanpham/tom/tom5.jpg", name: "Tôm Đất", price: "150.000" },

//     { src: "../resources/img/anhsanpham/tom/tom6.jpg", name: "Tôm Bạc", price: "450.000" },

//     { src: "../resources/img/anhsanpham/tom/tom7.jpg", name: "Bề Bề", price: "300.000" },

//     { src: "../resources/img/anhsanpham/tom/tom8.jpg", name: "Bọ Biển", price: "980.000" },

//     { src: "../resources/img/anhsanpham/tom/tom9.jpg", name: "Tôm Hùm", price: "2.040.000" },

//     { src: "../resources/img/anhsanpham/tom/tom10.jpg", name: "Tôm Hùm Bông", price: "1.380.000" },

//     { src: "../resources/img/anhsanpham/cua/cua1.jpg", name: "Cua Hoàng Đế", price: "1.790.000" },

//     { src: "../resources/img/anhsanpham/cua/cua2.jpg", name: "Cua Biển Xanh", price: "580.000" },

//     { src: "../resources/img/anhsanpham/cua/cua3.jpg", name: "Cua Biển Gạch", price: "490.000" },

//     { src: "../resources/img/anhsanpham/cua/cua4.jpg", name: "Ghẹ Gạch", price: "186.000" },

//     { src: "../resources/img/anhsanpham/cua/cua5.jpg", name: "Cua Bể", price: "490.000" },

//     { src: "../resources/img/anhsanpham/cua/cua6.jpg", name: "Cua Biển Thịt", price: "261.000" },

//     { src: "../resources/img/anhsanpham/cua/cua7.jpg", name: "Cua Biển Cà Mau", price: "450.000" },

//     { src: "../resources/img/anhsanpham/cua/cua8.jpg", name: "Cua Lông", price: "380.000" },

//     { src: "../resources/img/anhsanpham/cua/cua9.jpg", name: "Ghẹ Đỏ", price: "360.000" },

//     { src: "../resources/img/anhsanpham/cua/cua10.jpg", name: "Ghẹ Xanh", price: "420.000" },

//     { src: "../resources/img/anhsanpham/ca/ca1.jpg", name: "Cá Chỉ Vàng", price: "120.000" },

//     { src: "../resources/img/anhsanpham/ca/ca2.jpg", name: "Cá Lăng Đuôi Đỏ", price: "500.000" },

//     { src: "../resources/img/anhsanpham/ca/ca3.jpg", name: "Cá Mút Đá", price: "200.000" },

//     { src: "../resources/img/anhsanpham/ca/ca4.jpg", name: "Cá Thu", price: "250.000" },

//     { src: "../resources/img/anhsanpham/ca/ca5.jpg", name: "Cá Ngừ Bông", price: "120.000" },

//     { src: "../resources/img/anhsanpham/ca/ca6.jpg", name: "Cá Dìa Biển", price: "180.000" },

//     { src: "../resources/img/anhsanpham/ca/ca7.jpg", name: "Cá Trao Tráo", price: "150.000" },

//     { src: "../resources/img/anhsanpham/ca/ca8.jpg", name: "Cá Đục", price: "250.000" },

//     { src: "../resources/img/anhsanpham/ca/ca9.jpg", name: "Cá Thác Lác", price: "90.000" },

//     { src: "../resources/img/anhsanpham/ca/ca10.jpg", name: "Cá Ngừ Sọc Dừa", price: "180.000" },

//     { src: "../resources/img/anhsanpham/oc/oc1.jpg", name: "Ngao Hoa", price: "150.000" },

//     { src: "../resources/img/anhsanpham/oc/oc2.jpg", name: "Ốc Nhảy Đỏ", price: "270.000" },

//     { src: "../resources/img/anhsanpham/oc/oc3.jpg", name: "Ốc Hương", price: "500.000" },

//     { src: "../resources/img/anhsanpham/oc/oc4.jpg", name: "Ốc Móng Tay", price: "1.000.000" },

//     { src: "../resources/img/anhsanpham/oc/oc5.jpg", name: "Ốc Mỡ", price: "210.000" },

//     { src: "../resources/img/anhsanpham/oc/oc6.jpg", name: "Ốc Gai", price: "220.000" },

//     { src: "../resources/img/anhsanpham/oc/oc7.jpg", name: "Ốc Hương Pháp", price: "150.000" },

//     { src: "../resources/img/anhsanpham/oc/oc8.jpg", name: "Bào Ngư", price: "900.000" },

//     { src: "../resources/img/anhsanpham/oc/oc9.jpg", name: "Hào Biển", price: "60.000" },

//     { src: "../resources/img/anhsanpham/oc/oc10.jpg", name: "Ốc Hương Cồ", price: "950.000" },

//     { src: "../resources/img/anhsanpham/monan/mon1.jpeg", name: "Tôm Càng Số Cajun", price: "199.000đ" },

//     { src: "../resources/img/anhsanpham/monan/mon2.jpeg", name: "Cua Thịt Hấp", price: "630.000đ" },

//     { src: "../resources/img/anhsanpham/monan/mon3.jpeg", name: "Tôm Sú Sốt Hoàng Kim", price: "199.000đ" },

//     { src: "../resources/img/anhsanpham/monan/mon4.jpeg", name: "Tôm Hùm Nướng Phô Mai", price: "420.000đ" },

//     { src: "../resources/img/anhsanpham/monan/mon5.jpeg", name: "Tôm Càng Nướng Mọi", price: "199.000đ" },

//     { src: "../resources/img/anhsanpham/monan/mon6.jpeg", name: "Tôm Sú Nướng Mọi", price: "199.000đ" },

//     { src: "../resources/img/anhsanpham/monan/mon7.jpeg", name: "Ốc Hương Cháy Tỏi", price: "199.000đ" },

//     { src: "../resources/img/anhsanpham/monan/mon8.jpeg", name: "Bào Ngư Nướng Mỡ Hành", price: "599.000" },

//     { src: "../resources/img/anhsanpham/monan/mon9.jpeg", name: "Ốc Hương Hấp Sả", price: "166.000" },

//     { src: "../resources/img/anhsanpham/monan/mon10.jpeg", name: "Mì Xào Hải Sản", price: "129.000" },

//     { src: "../resources/img/anhsanpham/nuoc/nuoc1.jpg", name: "Coca cola", price: "15.000đ" },

//     { src: "../resources/img/anhsanpham/nuoc/nuoc2.jpg", name: "Pepsi", price: "15.000đ" },

//     { src: "../resources/img/anhsanpham/nuoc/nuoc3.jpg", name: "7up", price: "15.000đ" },

//     { src: "../resources/img/anhsanpham/nuoc/nuoc4.jpeg", name: "Trà mãng cầu vàng", price: "32.000đ" },

//     { src: "../resources/img/anhsanpham/nuoc/nuoc5.jpeg", name: "Trà Lựu Đỏ Bưởi", price: "32.000đ" },

//     { src: "../resources/img/anhsanpham/nuoc/nuoc6.jpg", name: "Trà Đào Cam Sả", price: "40.000đ" },

//     { src: "../resources/img/anhsanpham/nuoc/nuoc7.jpeg", name: "Trà Việt Quốc", price: "40.000đ" },

//     { src: "../resources/img/anhsanpham/nuoc/nuoc8.jpeg", name: "Trà Bưởi Băng Tuyết", price: "40.000" },

//     { src: "../resources/img/anhsanpham/nuoc/nuoc9.jpeg", name: "Trà Dâu Tằm", price: "40.000" },

//     { src: "../resources/img/anhsanpham/nuoc/nuoc10.jpeg", name: "Trà Xanh (Matcha)", price: "25.000" },
// ];

debug(ans);