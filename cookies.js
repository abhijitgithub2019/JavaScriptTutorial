
let cId = document.getElementById("c");
cId.innerHTML = document.cookie;


function logIn(name) {
    let date = new Date();
    date.setTime(date.getTime()+ 6*1000);
    // const p = window.location.pathname;
    // console.log(p);
    document.cookie =`userName = ${name}; expires=${date.toUTCString()}; path="/"; domain="example.com; sameSite='strict'`
}

//
//set-cookie: authetication =""; httpOnly: true

//example.com
//subdomain.example.com

function checkCookie() {
    window.location.reload();
}

function AddCookie(n) {
    for(let i =0; i< n; i++) {
        let date = new Date();
        date.setTime(date.getTime()+ 6*1000);
        document.cookie = `Data_${i}=${i}; expires=${date.toUTCString()}; path='/cookies.html'`
    }
}

function getCookie(key) {
    let cookies = document.cookie.split(";");
    let str ="No cookies is found";
    for(let i =0; i < cookies.length; i++) {
        let keyValue = cookies[i].split("=");
        if(key === keyValue[0].trim()) {
            str = keyValue[1];
            break;
        }
    }
    cId.innerHTML = str;
}