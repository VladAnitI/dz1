const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://anitvlad:anitvlad@cluster0.9fqsjbx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const dataSchema = new mongoose.Schema({
    cats: [String],
    dogs: [String]
});

const Data = mongoose.model('Data', dataSchema);

app.get('/data', async (req, res) => {
    const data = await Data.find();
    res.send(data);
});

app.listen(5000, () => console.log('Server is running on port 5000'));
