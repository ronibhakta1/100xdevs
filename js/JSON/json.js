let object1= '{"name" : "Roni","age" : 21}'
const user = JSON.parse(object1)
console.log(user)
const user1 = JSON.stringify(user);
console.log(user1)
const user2 = JSON.parse(user1)
console.log(user2)
