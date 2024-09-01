const containerEl = document.querySelector(".container");


window.addEventListener("mousemove",
    (event) =>{
       containerEl.innerHTML =  `
         <div class="mouse-event">
            ${event.clientX}
            <h4> mouse X Position(px)</h4>
         </div>
         <div class="mouse-event">
            ${event.clientY}
            <h4> mouse Y Position(px)</h4>
         </div>` 
    }
)