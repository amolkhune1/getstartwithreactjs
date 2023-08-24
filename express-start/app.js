const express = require('express');
const app = express();
const port = process.env.APP_PORT || 3000;
const routeUser = require('./routes/user');
const cors = require('cors');
app.use('/users', routeUser);
app.use(cors({ origin: '*' }));
app.listen(port, () => console.log(`Server is running on port: ${port}`));
