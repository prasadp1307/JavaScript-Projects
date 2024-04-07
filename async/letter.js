function writeLetter(callback){
   setTimeout(function() => {
    console.log("Wrote Letter")
    callback()
   },2000)
}

function postLeter(){
    setTimeout(function() => {
        console.log("Letter Posted")
        // callback()
    },1000)    
}

writeLetter( ()=>{
    postLeter()

    
})

