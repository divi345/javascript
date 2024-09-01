const btnEl = document.getElementById("btn"); 
const emojiEl = document.getElementById("emoji-name");

const emoji = [];

async function getEmoji(){
     let response = await fetch("https://emoji-api.com/emojis?access_key=85ab81c400797bc2ccd43ac42e4a3a6d0609e4d1");

     data = await response.json();

     
     for(let i=0; i<=500 ; i++){
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName,
        });
     }
}


getEmoji()


btnEl.addEventListener("click" , ()=>{
    const randomNum = Math.floor(Math.random() * emoji.length);
    btnEl.innerText = emoji[randomNum].emojiName;
    emojiEl.innerText = emoji[randomNum].emojiCode;
})