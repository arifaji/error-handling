const express = require('express');
const app = express()

require('./router')(app);
const PORT = process.env.PORT || 3000


app.listen(PORT, () => console.log(`server listening at port ${PORT}`))