let id = (id) => document.getElementById(id);
let querySelector = (querySelector) => document.querySelector(querySelector);

class Validator {
    constructor(form, listInputForm, templateFormMessage) {
        this.form = form;
        this.listInputForm = listInputForm;
        this.templateFormMessage = templateFormMessage; //templateFormMassage + typeInputForm = selectorFormMessage
    }

    getAllSelector() {
        this.selectorForm = id(this.form);
        this.listSelectorInputForm = [];
        this.listInputForm.forEach((inputForm) => {
            let selectorInputForm = querySelector(inputForm.getSelector);
            let typeInputForm = inputForm.getType;
            this.listSelectorInputForm.push({selectorInputForm, typeInputForm});
        });
    }

    isUsername(selectorInputUsername) {
        if(selectorInputUsername.value.trim() === "") {
            return "Invalid username";
        }
        return "";
    }
    
    isEmail(selectorInputEmail) {
        let email = selectorInputEmail.value;
        if(email.length <= 10 || email.substring(email.length - 10, email.length) != "@gmail.com") {
            return "Invalid email";
        }
        return "";
    }

    isPassword(selectorInputPassword) {
        if(selectorInputPassword.value.trim() === "") {
            return "Invalid password";
        }
        return "";
    }

    isPasswordConfirmation(selectorInputPasswordConfirmation) {
        let idSelectorInputPasswork = 0;
        for(let i = 0; i < this.listSelectorInputForm.length; i++) {
            if(this.listSelectorInputForm[i].typeInputForm == "password") {
                idSelectorInputPasswork = i;
                break;
            }
        }
        let selectorInputPassword = this.listSelectorInputForm[idSelectorInputPasswork].selectorInputForm;
        let password = selectorInputPassword.value;
        let passwordConfirmation = selectorInputPasswordConfirmation.value;
        if(password.trim() === "" || password != passwordConfirmation) {
            return "Invalid password";
        }
        return "";
    }

    checkForm() {
        this.getAllSelector();
        for(let i = 0; i < this.listSelectorInputForm.length; i++) {
            let {selectorInputForm, typeInputForm} = this.listSelectorInputForm[i];
            let text;
            let formSelectorMessage = querySelector(this.templateFormMessage + typeInputForm);
            if(typeInputForm == "username") {
                text = this.isUsername(selectorInputForm);
            }
            if(typeInputForm == "email") {
                text = this.isEmail(selectorInputForm);
            }
            if(typeInputForm == "password") {
                text = this.isPassword(selectorInputForm);
            }
            if(typeInputForm == "password_confirmation") {
                text = this.isPasswordConfirmation(selectorInputForm);
            }
            formSelectorMessage.textContent = text;
            if(text != "")
                return false;
        }
        return true;
    }
}

class InputForm {
    constructor(selector, type) {
        this.selector = selector;
        this.type = type;
    }

    get getSelector() {
        return this.selector;
    }

    get getType() {
        return this.type;
    }
}

let form = "form-1";
let listInputForm = [
    new InputForm("input#username.form-control", "username"),
    new InputForm("input#email.form-control", "email"),
    new InputForm("input#password.form-control", "password"),
    new InputForm("input#password_confirmation.form-control", "password_confirmation"),
];
let templateFormMessage = ".form-1-message-";

let checkForm = new Validator(form, listInputForm, templateFormMessage);
let selectorFrom = id(form);
selectorFrom.addEventListener('submit', (e) => {
    let valid = checkForm.checkForm();
    if(valid == false) {
        e.preventDefault();
    }
});