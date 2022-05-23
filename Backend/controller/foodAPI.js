const foodAPI = require('../model/foodAPI.js');

module.exports = {

  getImageCallback: function (req, res) {

    var callback = (err, payload) => {
      if (err) {
        throw new Error(err)
      } else {
        res.status(200).send(payload)     
      }
    };
    foodAPI.getImageCallback(callback);
  }


};