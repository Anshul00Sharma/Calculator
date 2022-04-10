var button = document.querySelector('.buttons');

var ac = document.querySelector('.ac');
var percent = document.querySelector('.percent');
var divide = document.querySelector('.divide');
var seven = document.querySelector('.button-7');
var eight = document.querySelector('.button-8');
var nine = document.querySelector('.button-9');
var multiply = document.querySelector('.multiply');
var four = document.querySelector('.button-4');
var five = document.querySelector('.button-5');
var six = document.querySelector('.button-6');
var sub = document.querySelector('.sub');
var one = document.querySelector('.button-1');
var two = document.querySelector('.button-2');
var three = document.querySelector('.button-3');
var add = document.querySelector('.add')
var zero = document.querySelector('.button-0');
var equals = document.querySelector('.equals');
var view = document.querySelector('#display');
var dig1;
var dig2;
var total;
var operator;

function typeOnViewOne() {
    view.insertAdjacentText('beforeend', 1);

}
function typeOnViewTwo() {
    view.insertAdjacentText('beforeend', 2);

}
function typeOnViewThree() {
    view.insertAdjacentText('beforeend', 3);

}
function typeOnViewFour() {
    view.insertAdjacentText('beforeend', 4);

}
function typeOnViewFive() {
    view.insertAdjacentText('beforeend', 5);

}
function typeOnViewSix() {
    view.insertAdjacentText('beforeend', 6);

}
function typeOnViewSeven() {
    view.insertAdjacentText('beforeend', 7);

}
function typeOnViewEight() {
    view.insertAdjacentText('beforeend', 8);

}
function typeOnViewNine() {
    view.insertAdjacentText('beforeend', 9);

}
function typeOnViewZero() {
    view.insertAdjacentText('beforeend', 0);

}
function clear() {
    view.textContent = '';
    dig1 = 0;
    dig2 = 0;
    total = 0;
    clearbackground()

}
function addition() {
    operator = "+";
    if (view.textContent != "") {
        dig1 = view.textContent;

    }
    console.log(dig1 + " add");
    view.textContent = "";
    clearbackground()
    add.style.backgroundColor = "rgb(219, 128, 78)";
}
function subtraction() {
    operator = "-";
    if (view.textContent != "") {
        dig1 = view.textContent;

    }
    console.log(dig1 + " sub");
    view.textContent = "";
    clearbackground()
    sub.style.backgroundColor = "rgb(219, 128, 78)";


}
function multiplication() {
    operator = "*";
    if (view.textContent != "") {
        dig1 = view.textContent;

    }
    console.log(dig1 + " mul");
    view.textContent = "";
    clearbackground()
    multiply.style.backgroundColor = "rgb(219, 128, 78)";


}
function divition() {
    operator = "/";
    if (view.textContent != "") {
        dig1 = view.textContent;

    }
    console.log(dig1 + " div");
    view.textContent = "";
    clearbackground()
    divide.style.backgroundColor = "rgb(219, 128, 78)";

}
function modulus() {
    operator = "%";
    if (view.textContent != "") {
        dig1 = view.textContent;

    }
    console.log(dig1 + " mod");
    view.textContent = "";
    clearbackground()
    percent.style.backgroundColor = "rgb(219, 128, 78)";

}
function evaluate() {
    dig2 = view.textContent;
    console.log(dig1 + " " + dig2)
    total = eval(dig1 + " " + operator + " " + dig2)
    view.textContent = total;
    console.log(dig1 + " " + operator + " " + dig2 + " = " + total);
    clearbackground()

}
function clearbackground() {
    add.style.backgroundColor = "rgb(196, 71, 60)";
    percent.style.backgroundColor = "rgb(196, 71, 60)";
    multiply.style.backgroundColor = "rgb(196, 71, 60)";
    divide.style.backgroundColor = "rgb(196, 71, 60)";
    sub.style.backgroundColor = "rgb(196, 71, 60)";
}
one.addEventListener("click", typeOnViewOne);
two.addEventListener("click", typeOnViewTwo);
three.addEventListener("click", typeOnViewThree);
four.addEventListener("click", typeOnViewFour);
five.addEventListener("click", typeOnViewFive);
six.addEventListener("click", typeOnViewSix);
seven.addEventListener("click", typeOnViewSeven);
eight.addEventListener("click", typeOnViewEight);
nine.addEventListener("click", typeOnViewNine);
zero.addEventListener("click", typeOnViewZero);

ac.addEventListener("click", clear);
add.addEventListener("click", addition);
percent.addEventListener("click", modulus);
multiply.addEventListener("click", multiplication);
divide.addEventListener("click", divition);
sub.addEventListener("click", subtraction);
equals.addEventListener("click", evaluate);
function highlight(op) {
    switch (op) {
        case "+": add.style.backgroundColor = rgb(219, 128, 78);
            break;
    }

}





