const mongoose = require('mongoose');

const  connectTODB = async () => {

    mongoose.connect();
    
}


module.exports = connectTODB