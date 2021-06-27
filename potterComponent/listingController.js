const fs = require('fs');

const file = `${__dirname}/charecter.json`;
const charecters = JSON.parse(fs.readFileSync(file));

const charecterLister = async (req, res) => {
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

module.exports = charecterLister;
