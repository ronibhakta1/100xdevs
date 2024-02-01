function time(){
    let now =new Date();
    let hours = now.getHours();
    let minuites = now.getMinutes();
    let seconds = now.getSeconds();
    let arm = (hours >=12) ? "pm" : "am" //terinary operator (if else condition)

    console.log(hours+ ":" + minuites+ ":" + seconds +":"+ arm);
}
setInterval(time , 1000);