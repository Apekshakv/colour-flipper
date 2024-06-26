const colours=["green","pink","yellow","black","purple","brown","#FFEBCD","grey","blue"];
let colour= document.getElementsByClassName("colou")[0]
let back=document.getElementsByClassName("net")[0];
function Change(){
    const randomnumber= getrandomnumber();
    console.log(randomnumber);
    document.body.style.backgroundColor=colours[randomnumber];
   colour.textContent=colours[randomnumber];
}
function getrandomnumber(){
    return Math.floor(Math.random()*colours.length)
}