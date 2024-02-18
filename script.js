let url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
let box=document.getElementById("joke");
let button=document.getElementById("button");




button.addEventListener("click",function(){
    async function getJoke(){
        let info= await fetch(url);
         let data=(await info.json());
         box.innerHTML=data.joke;
     
     }
     getJoke();

})
