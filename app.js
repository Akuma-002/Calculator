let key = document.querySelector(".key");
let out = document.querySelector(".out");
let btn = document.querySelectorAll(".button");
let k1 = document.querySelector("#k1");
let k2 = document.querySelector("#k2");
let k3 = document.querySelector("#k3");
let k4 = document.querySelector("#k4");
let k5 = document.querySelector("#k5");
let k6 = document.querySelector("#k6");
let k7 = document.querySelector("#k7");
let k8 = document.querySelector("#k8");
let k9 = document.querySelector("#k9");
let k00 = document.querySelector("#k00");
let k0 = document.querySelector("#k0");
let k_ = document.querySelector("#k_");
let divide = document.querySelector("#divide");
let multiply = document.querySelector("#multiply");
let minus = document.querySelector("#minus");
let plus = document.querySelector("#plus");
let equal = document.querySelector("#equal");
let ac = document.querySelector("#ac");
let remove = document.querySelector("#remove")
let a = document.querySelector(".num1");
let oo = document.querySelector(".operator");
let b = document.querySelector(".num2");
let percentage = document.querySelector("#percentage");
b.style.disply="none";
let sum = document.querySelector(".sum");
sum.style.disply="none";
let op = "";
k1.value = 1;
k2.value = 2;
k3.value = 3;
k4.value = 4;
k5.value = 5;
k6.value = 6;
k7.value = 7;
k8.value = 8;
k9.value = 9;
k00.value = "00";
k0.value = 0;
k_.value = '.';


k1.onclick = function(){
    out.append(k1.value);
}
k2.onclick = function(){
    out.append(k2.value);
}
k3.onclick = function(){
    out.append(k3.value);
}
k4.onclick = function(){
    out.append(k4.value);
}
k5.onclick = function(){
    out.append(k5.value);
}
k6.onclick = function(){
    out.append(k6.value);
}
k7.onclick = function(){
    out.append(k7.value);
}
k8.onclick = function(){
    out.append(k8.value);
}
k9.onclick = function(){
    out.append(k9.value);
}
k00.onclick = function(){
    out.append(k00.value);
}
k0.onclick = function(){
    out.append(k0.value);
}

k_.onclick = function(){
    out.append(k_.value);
}


divide.addEventListener("click", function(){
    console.log("divide");
    a.innerText = parseFloat(out.innerText);
    oo.innerText = "/";
    a.style.disply="none";
    out.innerText = "";
    op = "di";
});
multiply.addEventListener("click", function(){
    console.log("multiply");
    a.innerText = parseFloat(out.innerText);
    oo.innerText = "x";

    a.style.disply="none";
    out.innerText = "";
    op = "mu";
});
minus.addEventListener("click", function(){
    console.log("minus");
    a.innerText = parseFloat(out.innerText);
    oo.innerText = "-";

    a.style.disply="none";
    out.innerText = "";
    op = "mi";
});
plus.addEventListener("click", function(){
    console.log("plus");
    oo.innerText = "+";

    a.innerText = parseFloat(out.innerText);
    a.style.disply="none";
    out.innerText = "";
    op = "pl";
});
percentage.addEventListener("click", function(){
    console.log("percentage");
    oo.innerText = "%";

    a.innerText = parseFloat(out.innerText);
    a.style.disply="none";
    out.innerText = "";
    op = "pe";
});
remove.addEventListener("click", function(){

})

equal.addEventListener("click", function(){
    console.log("Equal");
    b.innerText = parseFloat(out.innerText);
    switch(op){
        case "di" : sum.innerText = parseFloat(a.innerText) / parseFloat(b.innerText);
        break;
        case "mu" : sum.innerText = parseFloat(a.innerText) * parseFloat(b.innerText);
        break;
        case "mi" : sum.innerText = parseFloat(a.innerText) - parseFloat(b.innerText);
        break;
        case "pl" : sum.innerText = parseFloat(a.innerText) + parseFloat(b.innerText);
        break;
        case "pe" : sum.innerText = parseFloat(a.innerText)/100 * parseFloat(b.innerText);
        break;
        default: 
    }
    out.innerText = sum.innerText;
})

ac.addEventListener("click", function(){
    a.innerText= "";
    b.innerText = "";
    out.innerText = "";
})