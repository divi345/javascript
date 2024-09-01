//selecting popup overlay, popup box, button

var popupoverlay = document.querySelector(".popup-overlay");
var popupBox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block";
    popupBox.style.display="block";
})

//select cancel button
var cancelPopup = document.getElementById("cancel-popup")

cancelPopup.addEventListener("click",function(event){
    event.preventDefault();
    popupoverlay.style.display="none";
    popupBox.style.display="none";
})

//select container, add-book, book-title-input, book-author-input, book-description

var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescription = document.getElementById("book-description");

addbook.addEventListener("click",function(event){
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class","book-container");
    div.innerHTML = `<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescription.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div);
    popupoverlay.style.display="none";
    popupBox.style.display="none";

})

function deletebook(event){
    event.target.parentElement.remove();
}