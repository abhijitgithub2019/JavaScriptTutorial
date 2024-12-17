let s = document.getElementById("sessionS");
let l = document.getElementById("localS");

function onCreateSStorage(name) {
    sessionStorage.setItem("userName", name);
}

function onCreateLocalStorage(name) {
    for(let i =0; i < 100; i++) {
        localStorage.setItem(`userName_local_${i}`, `${name}_${i}`);
    }
    
}

function onGetSStorage() {
    s.innerHTML = sessionStorage.getItem("userName");
}

function onGetLocalStorage() {
    l.innerHTML = localStorage.getItem("userName_local_1");
}

function OnRemoveSessionStorage() {
    sessionStorage.removeItem("userName");
}

function OnRemoveStorage() {
    localStorage.removeItem("userName_local_1");
}

function OnClearSessionStorage() {
    sessionStorage.clear();
}

function OnClearLocalStorage() {
    localStorage.clear();
}

function OnCalCulateLocalStorage() {
    let totalLen =0;
    for(let prop in localStorage) {
        if(!localStorage.hasOwnProperty(prop)) {
            console.log(prop);
            continue;
        }
        if(!isNaN(localStorage[prop].length))  {
            totalLen+= localStorage[prop].length *2;
        }
       
    }
    let {size} = new Blob(Object.values(localStorage));
    //console.log(size)
    //totalLen = totalLen/1024;
    l.innerHTML = (size*2/1024).toFixed(2);
    console.log((totalLen/1024).toFixed(2));
}