// const { off } = require("process");

const bulbswt = document.querySelector("#bulbswt");
const bulb = document.querySelector("#bulb");

bulbswt.addEventListener('click',function(){
    console.log(bulb.src)
    
    if(bulb.src.match('off')){
        bulb.src = "on.gif";
    }else{
        bulb.src = "off.gif"
    }
    
})