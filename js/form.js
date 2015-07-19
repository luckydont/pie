/**
 * Created by Роман on 12.07.2015.
 */
var switchElement = document.querySelector("#phase-switcher");

var statusValue   = document.querySelector("#phase-status").getAttribute("name");
var formQuestion  = document.querySelector(".form-question");
var submit        = document.querySelector("#login-button");


switchElement.onclick = function() {
    if (statusValue == "sign-up") {

        formQuestion.textContent   = "Already have an account? ";
        switchElement.textContent  = "Log In";
        submit.textContent         = "Create Account";

        document.querySelector("#phase-status").setAttribute("name", "log-in");
        statusValue                = 'log-in';

    } else if (statusValue == "log-in") {
        formQuestion.textContent   = "Don't have an account? ";
        switchElement.textContent  = "Sign Up";
        submit.textContent         = "Login";

        document.querySelector("#phase-status").setAttribute("name", "sign-up");
        statusValue                = 'sign-up';
    }
};


function validation(string) {

    var regExp = /\W/i;
    return (string.length > 2 && string.length < 16 && !regExp.test(string));
}

var inputElements = document.querySelectorAll('.form-container input');
var msgBox;

for (var i = 0; i < inputElements.length; i++) {
    inputElements[i].onfocus = function () {


        if (this.classList.contains("error")) this.classList.remove("error");

        // Показываем подсказку
        msgBox = document.getElementById(this.id + "-msg-box");

        if (msgBox.classList.contains("error-box")) msgBox.classList.remove("error-box");

        msgBox.classList.add("msg-box");
        msgBox.innerHTML = "Field must have 3-14 signs and contain only numbers, latin letters or sign _";
    };

    inputElements[i].onblur = function check() {

        msgBox = document.getElementById(this.id + "-msg-box");


        msgBox.innerHTML = "";
        // Удаляем пробелы, мать их
        this.value = this.value.replace(/\s+/g, "");
        //Начинаем верификацию
        if (!validation(this.value)) {
            this.classList.remove('correct');
            this.classList.add("error");
            if (msgBox.classList.contains("msg-box")) msgBox.classList.remove("msg-box");

            msgBox.classList.add("error-box");
            msgBox.innerHTML = "Field must have 3-14 signs and contain only numbers, latin letters or sign _";
        } else this.classList.add("correct");

    };
}