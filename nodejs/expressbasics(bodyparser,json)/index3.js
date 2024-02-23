// node js part 2


const express =require("express")
const app = express();
const port =3000;

// creating an function to be used an example in increment

function cal(n){
    let ans =0;
    for(let i =0;i<n;i++){
        ans = ans+1;
    }
    return ans;
}

app.get('/',(req,res)=>{
    const n = req.query.n;
    let ans = cal(n)
    res.send(ans.toString());
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})