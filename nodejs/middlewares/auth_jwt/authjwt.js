const express = require("express")
const port = 3000;
const jwt = require("jsonwebtoken");
const jwtPassword = "SECRECT";
const app = express();
app.use(express.json());


// In memory user database

const ALL_USERS = [
    {
        username: "roni@gmail.com",
        password: 123

    },
    {
        username: "raman@gmail.com",
        password: 123321
    
    },
    {
        username: "priya@gmail.com",
        password: 123321
    
    }
];

// function userExists(username, password) {
//     // write logic to return true or false if this user exists
//     // in ALL_USERS array
//     const userExists = false;
//     for (let i = 0; i < ALL_USERS.length; i++) {
//         if (ALL_USERS.username[i] === username && ALL_USERS.password[i] === password) {
//             userExists = true;
//             break;
//         }
//     }
//     console.log("userExists result:", userExists);
//     //encountered that using this logic funtion was not getting the data even after delaration
//     return userExists;

// }

function userExists(username, password) {
    return ALL_USERS.some((user) =>
    user.username === username && user.password === password
    );
    }

app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesnt exist in our in memory db",
        });
    }

    var token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token,
    });
});

app.get("/users", function (req, res) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        res.json({
            users: ALL_USERS.filter((value)=>{
                if (value.username == username) {
                    return false;
                }
                return true;
            })
        })
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});

app.listen(port);

/// send data from postman to the required url