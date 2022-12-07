const testeRight = document.querySelector(".flip-face");
const classesArr = ["plane","kurisu","portrait","hikaru","laroca"];
const discordInfo = document.querySelector(".glengm-discord");
const glentgm = "Glentgm#6224";
let animationGlent = [""];
let count = glentgm.length - 1;
let position = 1;
let turn = false;
function toggleClass(){
    if(turn){

        if(position > 4){
            position = 0;
            testeRight.classList.remove(classesArr[4]);
            testeRight.classList.toggle(classesArr[0]);
        }else{
            testeRight.classList.toggle(classesArr[position]);
            testeRight.classList.toggle(classesArr[position -1]);    
        }
        position++;
    }
    turn = !turn;
}
function insertText(){
    if(count < 0){
        return
    }
    animationGlent.push(glentgm[count]);
    count--;
    const htmlArr = [""];
    for(let i = animationGlent.length - 1; i > 0; i--){
        htmlArr.push(animationGlent[i]);
    }
    console.log(htmlArr,animationGlent,count);
    discordInfo.innerHTML = htmlArr.join('');
}

setTimeout(() => setInterval(toggleClass,5000), 2000);

setTimeout(() => setInterval(insertText, 100), 2500);
