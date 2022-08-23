const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors());

const AllBookRoutes = require('./server/routes/book.routes');
AllBookRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));