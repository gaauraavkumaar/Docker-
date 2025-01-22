const express = require("express");
const app   = express();

app.get ("/",(req, res)=>{
    res.json([
        {
        id:1,
        name:"Gaurav Kumar",
        age:23
        },
        {
            id:2,
            name:"Saurav Kumar",
            age:24   
        },
        {
            id:3,
            name:"Harsh Kumar",
            age:24   
        },
        {
            id:4,
            name:"Himanshu Kumar",
            age:24   
        }

    ])

});
app.listen(5000,()=> {
    console.log("App is running on 5000 port")
})
