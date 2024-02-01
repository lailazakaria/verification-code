let one = document.querySelector('[name = one]');
let two = document.querySelector('[name = two]');
let three = document.querySelector('[name = three]');
let four = document.querySelector('[name = four]');
let five = document.querySelector('[name = five]');
console.log(one, two, three, four, five);
let loader = document.getElementsByClassName("loader")[0];
let text = document.querySelector("h4");
let form = document.forms[0];
console.log(loader, form);
window.onload = () => {
    one.focus();
    one.onkeyup = () => {
        if (one.value.length === 1) {
            one.blur();
            two.focus();
        } else {
            one.value = one.value[0];
        }
    };
    two.onkeyup = () => {
        if (two.value.length === 1) {
            two.blur();
            three.focus();
        } else {
            two.value = two.value[0];
        }
    };
    three.onkeyup = () => {
        if (three.value.length === 1) {
            three.blur();
            four.focus();
        } else {
            three.value = three.value[0];
        }
    };
    four.onkeyup = () => {
        if (four.value.length == 1) {
            four.blur();
            five.focus();
        } else {
            four.value = four.value[0];
        }
    };
    five.onkeyup = () => {
        if (five.value.length == 1) {
            five.blur();
            loader.style.display = "block";
            text.style.display = "none";
        } else {
            five.value = five.value[0];
        }
    };
};
form.onsubmit = () => {
    loader.style.display = "block";
    text.style.display = "none";
};
document.querySelector("button").onclick = () => {
    text.style.display = "none";
};
