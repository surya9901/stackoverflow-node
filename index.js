const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors({
    origin: "*"
}))


app.get("/Questions", function (req, res) {
    res.json([
        {
            id: 1,
            message: "this is the question"
        },
        {
            id: 2,
            message: "this is the second question"
        }
    ])
})


app.listen(3001, function () {
    console.log("The app is listening to the port 3001")
})