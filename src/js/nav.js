document.addEventListener("scroll", function () {
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (scrollTop > 100) { //QUANDO O SCROLL PASSAR DOS 100px DO TOPO
        document.querySelector(".header").classList.add("header-small"); //TROCA P CLASSE MENOR
    } else {
        document.querySelector(".header").classList.remove("header-small"); //VOLTA P MENU GRANDE ORIGINAL
    }
});