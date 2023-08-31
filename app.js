let btn = document.querySelector("#btn-str");
let timer = 0;
let score = 0;
let hitNum = 0;
let token = 0;
function zeroInitial(){
    score = 0;
    hitNum = 0;
    mkScore();
    mkHit();
}
function runTimer(){
    timer = 60;
    let time = setInterval(() => {
        if(timer > 0){
            timer--;
            document.querySelector("#timer").textContent = timer;
        }
        else{
            clearInterval(time);
            token = 0;
            zeroInitial();
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over!</h1>
                                                        <Button id="btn-str">Click to start</Button>
                                                        `;
            let btn = document.querySelector("#btn-str");
            console.log(btn);
            if(btn){
                addListenerBtn()
            }
        }
    }, 10);
}
function mkBubble(){
    let clutter = "";
    for(let i = 1;i<=100;i++){
        let rn = Math.floor(Math.random()*10)+1;
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
    sdoEff();
}

function mkScore(){
    if(score==0 && token == 0){
        document.querySelector("#score").textContent = score;
    }else{ 
        score +=10;
        document.querySelector("#score").textContent = score;
    }
    }

function mkHit(){
    if(hitNum == 0 && token == 0){
        document.querySelector("#hitval").textContent = hitNum
    }else{
        hitNum = Math.floor(Math.random()*10)+1; 
        document.querySelector("#hitval").textContent = hitNum
        
    }
}

function sdoEff(){
    let bub = document.querySelectorAll(".bubble")
    if(bub){
        let effect = setInterval(()=>{
            for(let i=0; i<bub.length; i++){
                bub[i].classList.toggle("sdo");
            }
        },1000);
    }
}
function addListenerBtn(){
    btn.addEventListener("click",()=>{
        console.log("Hello");
        token = 1;
        mkHit();
        mkBubble()
        runTimer();
    })
}
addListenerBtn()

let pbtm = document.querySelector("#pbtm");
pbtm.addEventListener("click",(e)=>{
    let num = Number(e.target.textContent);
    console.log(e.target);
    console.log("Hello");
    if(hitNum === num){
        mkScore();
        mkBubble();
        mkHit();
    }
})


    





