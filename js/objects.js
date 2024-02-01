const array =[{
    firstname : "roni",
    gender : "male"
},{
    firstname: "rakesh",
    gender:"male"
},
{
    firstname:"anaya",
    gender:"female"
}]

for (let int = 0; int < array.length; int++) {
      if(array[int]["gender"] == "male"){
        console.log(array[int]["firstname"])
      }
    
}