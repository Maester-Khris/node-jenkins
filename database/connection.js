const mongoose = require('mongoose')
// const localConnection = "mongodb://127.0.0.1:27017/Taskalert";
// const mongodb

async function OpenConnection(connectionString) {
    await mongoose.connect(connectionString)
}

module.exports = { OpenConnection }
