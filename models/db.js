const mongoose = require('mongoose');
const dbURI = require('./../.config/keys').dbURI;

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true}).
    catch(err => console.error(err));

mongoose.connection.on('connected', () =>{
    console.log("MongoDB Connected...");
});   


mongoose.connection.on('error', err => {
    console.error(err);
})

mongoose.connection.on('disconnected', function () { 
    console.log('Mongoose default connection disconnected'); 
});


process.on('SIGINT', function() {   
    mongoose.connection.close(function () { 
        console.log('Mongoose default connection disconnected through app termination'); 
        process.exit(0); 
    }); 
}); 
  