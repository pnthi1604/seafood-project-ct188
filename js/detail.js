function isNull(element) {
    return element == undefined;
}

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