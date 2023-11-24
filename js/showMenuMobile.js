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