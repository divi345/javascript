const navEl = document.querySelector(".navbar");
const bottomcontainerEl = document.querySelector(".bottom-container");

// console.log(navEl.offsetHeight);
// console.log(bottomcontainerEl.offsetTop)
window.addEventListener("scroll", () =>{
      if(window.scrollY > bottomcontainerEl.offsetTop - navEl.offsetHeight -50){
        navEl.classList.add("active");
      }
      else{
        navEl.classList.remove("active");
      }
});