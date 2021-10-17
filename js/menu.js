window.onload = function() {
    var all_links = document.getElementById("myDropdown").getElementsByTagName("a"),
        i=0, len=all_links.length,
        full_path = location.href.split("d-VorNick.github.io");
        alert(full_path);
    for(; i<len; i++) {
        if(all_links[i].href.split('#')[0] === full_path) {
            all_links[i].className += " active";
        }
    }
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}