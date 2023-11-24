function isNull(element) {
    return element == undefined;
}

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