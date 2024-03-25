const images = document.querySelectorAll(".photo img");
let imgSrc;
images.forEach((img) => {
    img.addEventListener("click", (e) => {
        imgSrc = e.target.src;
        console.log("my images:", imgSrc)
    });
});


let imgModal = (src) => {

    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    document.querySelector(".image-container").append(modal);

    const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
    modal.append(newImage)
};

imgModal();

const close = document.createElement("i");
close.setAttribute("class", "fas fa-times closeBtn");

close.onclick = () => {
    modal.remove();
};

modal.append(newImage, close);

