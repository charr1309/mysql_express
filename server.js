const express = require("express");
const morgan = require("morgan");
const {join} = require("path");
const {router} = require("./routes");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use(router);

app.use((req,res,next) =>{
    try {
        res.status(404).sendFile(join(__dirname, "pages/NotFound.html"));
    }catch(error) {
        next(error);
    }
});

app.use((err,req,res,next) =>{
    res.status(500).json({msg: err.message});
})

app.listen(3001, () => console.log("Server listening..."));