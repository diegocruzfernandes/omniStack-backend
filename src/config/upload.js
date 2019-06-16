const muter = require('multer');
const path = require('path');

module.exports = {
  storage: new muter.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename: function(req, file, cb) {
      cb(null, file.originalname);
    }
  })
};
