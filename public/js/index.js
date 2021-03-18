var data = (localStorage.getItem("reminders")) || (localStorage.setItem("reminders", {
  reminders: [],
  dreminders: []    
}));
var cookie = (localStorage.getItem("cookie")) || (localStorage.setItem("cookie", false));




function Cookies() {
    var cookies = localStorage.getItem("cookie");
    if(cookie === 'false'){
        return window.location.assign("/policy");
    }
}