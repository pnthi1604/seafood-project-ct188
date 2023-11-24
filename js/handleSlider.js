function debug(element) {
    console.log(element);
}

function isNull(element) {
    return element == undefined;
}

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