const input = document.querySelector("#input");
const check = document.querySelector("#button");
const cat   = document.querySelector("#fuckyou");
const reg   = new RegExp(input.pattern);

input.oninput = () => {
    if (!reg.test(input.value)) {
        input.value = "";
        check.disabled = true;
    } else {
        check.disabled = false;
    }
};

check.onclick = () => {
    cat.hidden = false;
    cat.requestFullscreen();
    setTimeout(() => { 
        document.exitFullscreen();
        cat.hidden = true;
    }, 60);
};
