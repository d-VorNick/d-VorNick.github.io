const pageLoadTime = (function() {
document.getElementById("pageload").innerHTML = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart + ' ms';
});

window.onload = function() {
    const all_links = document.getElementById("myDropdown").getElementsByTagName("a");
    let i=0;
    let = len=all_links.length,
    const = full_path = location.pathname;
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
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.dropbtn');
    window.addEventListener('click', e => {
    if (!e.target.matches('.dropbtn')) {
        const dropdown = document.getElementsByClassName("dropdown-content");
        if (dropdown[0].classList.contains('show')) {
            dropdown[0].classList.remove('show');
        }
    }
  })
})
