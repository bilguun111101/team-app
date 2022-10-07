const mongoose = require("mongoose");

const connect = async () => {
    try {
        await mongoose.connect(`mongodb+srv://bilguun:${"bilguun70"}@cluster0.ga9g7h1.mongodb.net/?retryWrites=true&w=majority`);
        console.log("connected");
    } catch(err) {
        console.log(err)
    }
}

module.exports = connect;