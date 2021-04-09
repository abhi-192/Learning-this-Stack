const mongoose = require('mongoose');

//connect to database , 'practice_database' is name of database
mongoose.connect('mongodb://localhost/practice_database');

const db = mongoose.connection;

//executed if db is not connected properly
db.on('error', console.error.bind(console, 'connection error:'));

//executed when database is connected properly
db.once('open', function() {
  // we're connected!
  console.log('Connected to database!!');
});
