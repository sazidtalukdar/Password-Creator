const len = document.getElementById('st');
const output = document.getElementById("value");
const button = document.getElementById("generate");
const copy1 = document.getElementById("copy");
const string = "1234567890abcdefghijklmnopurstuvwxyzABCDEFGHIJKLMONOPQRSTUVWXYX!@#$%&";
let store = [];


function create(length) {
    let pass = "";
    for (let i = 0; i < length; i++) {
        const ran = Math.floor(Math.random() * string.length);
        pass =pass+ string[ran];
    }
    return pass;
}

 function update (){ 
    const password = create(len.value);
    while(store.includes(password)){
        password = create(len.value);   
     }
   output.textContent = password;
   store.push(password);
}
function empty(){
    if(len.value==""){
        output.textContent="Null";
    }
}
function copy() {
    const txt = document.createElement("input");
    txt.value = output.textContent; 
    document.body.appendChild(txt); 
    txt.select();
    document.execCommand("copy"); 
    document.body.removeChild(txt); 
    alert("Copied the Password: " + txt.value);
 }
 
copy1.addEventListener('click',copy);
button.addEventListener('click',update);

len.addEventListener('input',empty);

