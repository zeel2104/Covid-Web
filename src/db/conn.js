const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/zeel", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("conn success");
}).catch((error) => {
console.log("error");
})