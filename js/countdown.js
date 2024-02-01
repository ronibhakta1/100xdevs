let counter = 30;
function revtimer() {

console.log(counter)
    counter --;
    if(counter == -1 ){
        clearInterval(intervalid)
    }
    
}
const intervalid = setInterval(revtimer,1* 1000);