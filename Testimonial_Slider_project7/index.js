const testimonials= [
    {
        name:"Cherise G",
        photoURL:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"Apple products have transformed my daily life with their innovative design and seamless performance. I can't imagine using anything else—absolutely top-notch quality and user experience!"

    },

    {
        name:"Sarah Thompson",
        photoURL:"https://images.unsplash.com/photo-1541823709867-1b206113eafd?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"Apple's ecosystem is incredibly intuitive and reliable, making both my personal and professional life easier. From my iPhone to my MacBook, every product exceeds expectations."

    },

    {
        name:"John Anderson",
        photoURL:"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"Apple devices consistently deliver exceptional performance and sleek design. Their user-friendly interface and robust ecosystem make them a joy to use daily."

    }
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username")

let idx = 0;
updateTestimonial();


function updateTestimonial(){
    const {name,photoURL,text}=testimonials[idx];
    imgEl.src = photoURL;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++;
    if(idx === testimonials.length){
        idx = 0;
    }
    setTimeout(()=>{
       updateTestimonial()
    },4000)

}