const express = require('express');
const listingRoute = require('./potterComponent/listingRoute');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use('/api/listAll', listingRoute);

//start listening
app.listen(5000, () => {
  console.log('server is running now');
});
//We should handle the unhandled promise rejection so below is the central place
//to do so
process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  app.close(() => {
    process.exit(1);
  });
});
