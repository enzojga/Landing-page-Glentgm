const testeRight = document.querySelector(".flip-face");
const classesArr = ["plane","kurisu","portrait","hikaru","laroca"];
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

setTimeout(() => setInterval(toggleClass,5000), 2000);
