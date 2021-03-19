var data = (localStorage.getItem("reminders")) || (localStorage.setItem("reminders", []));

var cookie = (localStorage.getItem("cookie")) || (localStorage.setItem("cookie", false));
var tdata = (localStorage.getItem("token")) || (localStorage.setItem("token", false));
document.getElementById("form").style.visibility = "hidden";
document.getElementById("reminders").style.visibility = "hidden";



function Notify() {
    if(window.Notification && Notification.permission !== "denied") {
	Notification.requestPermission(function(status) {  
		if(status === 'granted'){
            document.getElementById("notify").style.display = "none";
            document.getElementById("form").style.visibility = "visible";
            document.getElementById("reminders").style.visibility = "visible";
        } else {
            document.getElementById("nerror").textContent = "Error, Notification Request resulted in " + '"Denied"';
        }
	});
}
}

function Token() {
    let urlparams = new URLSearchParams(window.location.search);
    let tok = urlparams.get("token");
    if(localStorage.getItem("token") !== 'false') {
        if(tok) return;
        window.location.assign(`/?token=${localStorage.getItem("token")}`);
    }
    let request = new XMLHttpRequest();
    request.open("GET", "/token/generate");
    request.send();

    setTimeout(function() {
        localStorage.setItem("token", request.response);
        if(tok) return;
        window.location.assign(`/?token=${request.response}`);
    }, 1500)
}
Token();