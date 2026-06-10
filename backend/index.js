const express = require('express');
const cors = require('cors');
const config = require('config');
const globalErrorHandler = require('./middlewares/errorHandler');
const routes = require('./routes/index.js');

const app = express();
const port = config.get('APP.CONFIG.PORT') || 3001;

app.use(cors());

app.use(express.json());

app.use('/api', routes);

// ⚠️ CRITICAL: This global error handler middleware MUST be placed 
// after all your routes so it can catch incoming errors!
app.use(globalErrorHandler);

app.listen(port, () => {
    console.log(`server running at port ${port}`);
});