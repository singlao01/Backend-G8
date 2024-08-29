const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/myDatabase', { useNewUrlParser: true, useUnifiedTopology: true });

const MySchema = new mongoose.Schema({ name: String });
const MyNewCollection = mongoose.model('MyNewCollection', MySchema);

db.myNewCollection.insertMany([
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 30, occupation: "Designer" },
    { name: "Charlie", age: 28, occupation: "Doctor" }
])
