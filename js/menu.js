const pageLoadTime = (function() {
document.getElementById("pageload").innerHTML = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart + ' ms';
});

window.onload = function() {
    var all_links = document.getElementById("myDropdown").getElementsByTagName("a"),
        i=0, len=all_links.length,
        full_path = location.href.pathname;
    for(; i<len; i++) {
        if(all_links[i].pathname === full_path) {
            all_links[i].className += " active";
        }
    }
    pageLoadTime();
}

function showMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdown = document.getElementsByClassName("dropdown-content");
        if (dropdown[0].classList.contains('show')) {
            dropdown[0].classList.remove('show');
        }
    }
}
