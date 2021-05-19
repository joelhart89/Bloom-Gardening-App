require('dotenv').config()
const Express = require('express');
const app = Express();
const BodyParser = require('body-parser');
const PORT = 8080;
const moment = require('moment');
const db = require('./db/lib/db')
const maintenenceRoutes = require('./routes/maintenance')
const vegetableRoutes = require('./routes/vegetables')
const vegetableBasketRoutes = require('./routes/vegetableBasket')

// Express Configuration
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.use(Express.static('public'));


app.use(maintenenceRoutes)
app.use(vegetableRoutes)
app.use(vegetableBasketRoutes)

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});



