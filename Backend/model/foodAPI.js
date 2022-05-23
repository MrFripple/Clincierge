const axios = require('axios');




module.exports = {

  getImageCallback: async function (callback) {
    try {
      const payload = await axios({
        method: 'get',
        url: 'https://foodish-api.herokuapp.com/api/',
      });
      callback(null, payload.data);
    } catch (err) {
      callback(err, null)
    }

  }


}