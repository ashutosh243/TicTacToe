console.log("TicToc");
let click=new Audio("audio/ting.mp3")
let Gameover=new Audio("audio/music.mp3");
// change turn
let iswin=false;
let isdraw=true;

function changeturn(turn)
{
    if(turn==="X")
    {
        return "O";
    }
    else
    {
        return "X";
    }
}
function checkwin()
{
    let wins=[
          [0,1,2,4,5,0],
          [3,4,5,4 ,16 ,0],
          [6,7,8,4,27 ,0],
          [0,3,6,-9,17,90],
          [1,4,7,3,17,90],
          [2,5,8,15,17,90],
          [0,4,8,3,16,942],
          [2,4,6,3,16,138]
        ];
    wins.forEach(function(e){

        // console.log("Hi")
        let textbox=document.getElementsByClassName("boxtest");
        if((textbox[e[0]].innerText===textbox[e[1]].innerText)&&(textbox[e[1]].innerText==textbox[e[2]].innerText)&&(textbox[e[0]].innerText!==""))
        {
            document.getElementById("turn").innerText=`----> Winner of the game is ${textbox[e[0]].innerText}`;
            console.log("HEllo");
            iswin=true;
            let img=document.getElementById("gif");
            Gameover.play();
            img.style.width="28vw";
            // line concept------
            let l=document.querySelector('.line');
            l.style.transform=`translate(${e[3]}vw ,${e[4]}vw) rotate(${e[5]}deg)`;
            l.style.width='29vw';
            isdraw=false
        }
    })
}
// main logic--------------
let turn="X";
let box=document.getElementsByClassName("box");
Array.from(box).forEach(function(element){
   
    element.addEventListener("click",function(){
    let textbox=element.querySelector(".boxtest");
    if(textbox.innerHTML==="")
    { 
       textbox.innerHTML=turn;
       click.play();
       turn=changeturn(turn);
       checkwin();
       if(!iswin)
       {
         document.getElementById("turn").innerText=`----> Turn for ${turn}`;
       }
    }

  });
});
document.getElementById("reset").addEventListener("click",function(e){
    location.reload();
})
