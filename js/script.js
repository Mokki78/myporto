const images = document.querySelectorAll(".photo-gallery .myImage");
let imgSrc;

images.forEach((img) => {
    img.addEventListener("click", (e) => {
        imgSrc = e.target.src;
        imgModal(imgSrc);
        console.log("my images:", imgSrc)
    });
});


function imgModal(src) {

    const modal = document.getElementById("myModal");
    modal.style.display = "block";
    

    const modalImg = document.getElementById("img01");
    modalImg.src = src;

    const closeBtn = document.querySelector(".close")
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
};



