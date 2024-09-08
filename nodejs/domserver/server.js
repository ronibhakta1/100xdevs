const express = require("express");
const cors = require("cors"); // Import the cors package
const app = express();
const port = 3000;
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

app.get("/add-sum", (req,res)=>{
    const ab = parseInt(req.query.a);
    const ba =parseInt(req.query.b);
    const ans = ab + ba;
    res.send(ans.toString());

})

app.listen(port);