

function closeMobileNav() {
    document.querySelector(".mobile-nav").style.width = "0";
}

document.getElementById("homeLink").addEventListener("click",closeMobileNav);
document.getElementById("frontendLink").addEventListener("click",closeMobileNav);
document.getElementById("uidesignLink").addEventListener("click",closeMobileNav);
document.getElementById("photographyLink").addEventListener("click",closeMobileNav);
document.getElementById("aboutLink").addEventListener("click",closeMobileNav);
document.getElementById("contactLink").addEventListener("click",closeMobileNav);