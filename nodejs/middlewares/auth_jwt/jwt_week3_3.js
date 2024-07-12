const jwt = require("jsonwebtoken");

const userValue = {
    name: "roni",
    accountnumber : "8765432123456"
}
const token = jwt.sign(userValue, "SECRET");

console.log(token);