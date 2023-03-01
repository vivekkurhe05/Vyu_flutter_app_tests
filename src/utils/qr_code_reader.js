// const Jimp = require('jimp');
// const fs = require('fs');
// const qrCodeReader = require('qrcode-reader');
// const buffer = fs.readFileSync('../../qr-codes/qa_democarton.png');

// Jimp.read(buffer, function(err, image) {
//     if(err) {
//         console.log(err);
//     }

//     const qrCodeInstance = new qrCodeReader();

//     qrCodeInstance.callback = function(err, value) {
//         if(err) {
//             console.error(err);
//         }

//         console.log(value.result);
//     }

//     qrCodeInstance.decode(image.bitmap);
// })