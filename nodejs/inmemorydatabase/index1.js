// node js part 3 

const express = require('express')
const app = express();
const port = 3000;

// This is "In memory" database
const user = [{
    name: "roni",
    kidenys: [{
        healthy: false
    }]
}]
let newkidneys = [];

app.get("/", (req, res) => {
    const kidn = newkidneys.length;
    const roniskidney = user[0].kidenys;
    const numofkidneys = roniskidney.length;
    let numofhealthykidneys = 0;
    for (let index = 0; index < roniskidney.length; index++) {
        if (roniskidney[index].healthy) {
            numofhealthykidneys = numofhealthykidneys + 1;
        }
    }
    const numofunhealthykidneys = numofkidneys - numofhealthykidneys;
    res.json({
        numofkidneys,
        numofhealthykidneys,
        numofunhealthykidneys,
        kidn
    })

    // console.log(user[0].kidenys)

});

app.use(express.json()); //used for getting data from body in josn format

app.post('/', (req, res) => {
    const ishealthy = req.body.ishealthy;
    user[0].kidenys.push({
        healthy: ishealthy
    })
    res.json({
        msg: 'Done!'
    })
})

app.put('/', (req, res) => {
    for (let index = 0; index < user[0].kidenys.length; index++) {
        user[0].kidenys[index].healthy = true;
    }
    res.json({});
})

app.delete('/', (req, res) => {
    if (thekidneyishealthy()) {
        for (let index = 0; index < user[0].kidenys.length; index++) {
            if (user[0].kidenys[index].healthy) {
                newkidneys.push({
                    ishealthy: true
                })
            }
        }
        user[0].kidenys = newkidneys;

        res.json({ msg: "Done!", newkidneys })
        console.log("this is old user kideney" + user[0].kidenys + "this is tempo kidney" + newkidneys);
    }
    else {
        res.status(411).json({
            msg: "You have no unhealthy kidenys"
        })
    }
})

function thekidneyishealthy() {
    let thekidneyishealthyornot = false;
    for (let index = 0; index < user[0].kidenys.length; index++) {
        if (!user[0].kidenys[index].healthy) {
            thekidneyishealthyornot = true;
        }
    }
    return thekidneyishealthyornot;
}

app.listen(port);