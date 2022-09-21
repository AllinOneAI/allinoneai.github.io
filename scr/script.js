const input = document.querySelector("#input");
const check = document.querySelector("#button");
const cat   = document.querySelector("#fuckyou");
const reg   = new RegExp(input.pattern);

input.oninput = () => {
    if (!reg.test(input.value)) {
        input.value = "";
        check.disabled = true
        cat.hidden = false
    } else {
        check.disabled = false
        cat.hidden = true
    }
};

check.onclick = () => {

};
