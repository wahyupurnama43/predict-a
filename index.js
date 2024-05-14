const express = require("express");
const predictController = require("./controller/predictController");
const upload = require('./middleware/upload')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route to handle prediction requests
app.post('/predict', upload.single('image'), predictController.predict);
app.get('/predict/histories', predictController.getPredict);
app.get('/', (req, res) =>{
  res.status(201).send({status: "running true"});
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log('Hello world listening on port http://localhost:'+port);
});