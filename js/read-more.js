const btn = document.querySelector(".read-more-btn");

const text = document.querySelector(".card_read-more");

const cardHolder = document.querySelector(".f-e-card-container");

cardHolder.addEventListener("click", (e) => {
    const current = e.target;
  
    const isReadMoreBtn = current.classList.contains("read-more-btn");
  
    if (!isReadMoreBtn) return;
  
    const currentText = current.parentNode.querySelector(".card_read-more");
  
    currentText.classList.toggle("card_read-more--open");
    current.textContent = currentText.classList.contains("card_read-more--open")
      ? "Read less...."
      : "Read more";
  });