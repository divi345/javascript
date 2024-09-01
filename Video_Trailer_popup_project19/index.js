const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const trailercontainerEl = document.querySelector(".trailer-container");
const videoEl = document.querySelector("video")
btnEl.addEventListener("click", ()=>{
    trailercontainerEl.classList.remove("active");
});

closeIconEl.addEventListener("click", ()=>{
    trailercontainerEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;
});

