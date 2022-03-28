const cloudinary = require('cloudinary');
const { append } = require('express/lib/response');

cloudinary.config({ 
    cloud_name: 'dxftkmxch', 
    api_key: '584197229878387', 
    api_secret: '2dghdM6Up5bFAj57S5-0z3iG8k8' 
  });

  app.post('/upload', function(req, res, next) {
      const file = req.files.photo;
      cloudinary.uploader.upload(file.tempFilePath, function(err, result) {
          res.send({
              success: true,
              result
          })
      })
  })