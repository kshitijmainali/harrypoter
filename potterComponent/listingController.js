const fs = require('fs');

const file = `${__dirname}/charecter.json`;
const charecters = JSON.parse(fs.readFileSync(file));

const charecterLister = async (req, res) => {
  console.log('request arrived');
  try {
    res.status(200).json({
      success: true,
      charecters,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'an internal error occured',
    });
  }
};

const singleCharecter = async (req, res) => {
  try {
    const key = req.params.name;
    const detail = charecters.filter((ch) => ch.key === key);
    res.status(200).json({
      success: true,
      detail,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'an internal error occured',
    });
  }
  // const required = charecters.name
};
const controllers = {
  charecterLister,
  singleCharecter,
};
module.exports = controllers;
