{
let inf=prompt("enter your name");
console.log("well come to percentage conveter",inf );

let scr = prompt("enter your percentage % ");
if(scr>=90 && scr<=100) {
    console.log(inf,"Congratulation! you have score A+ ");
}
else if(scr >=80 && scr <=89) {
    console.log(inf,"Congratulation! you have score A");
}
else if(scr >=70 && scr <= 79) {
    console.log(inf,"Congratulation! you have score B+");
}
else if(scr >= 60 && scr <= 69) {
    console.log(inf,"Congratulation! you have score B+");
}
else if(scr >= 50 && scr <= 59) {
    console.log(inf,"Congratulation! you have score c+");
}
else if(scr >= 0 && scr <= 49) {
    console.log(inf,"OOPS! you got N.G ");
}
}
