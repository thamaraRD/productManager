const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;
const productRoutes = require('./server/routes/product.routes');
require('./server/config/mongoose.config');
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

productRoutes(app);

app.listen(port, () => console.log("Listening at Port 8000!"));