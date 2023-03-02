import Jimp from 'jimp';
import fs from 'fs';
import qrCodeReader from 'qrcode-reader';
const buffer = fs.readFileSync(path.join(process.cwd() + '\\qr-codes\\qa_democarton.png'));

export default function getQRCodeURL() {
    Jimp.read(buffer, function(err, image) {
        if(err) {
            console.log(err);
        }
    
        const qrCodeInstance = new qrCodeReader();
    
        qrCodeInstance.callback = function(err, value) {
            if(err) {
                console.error(err);
            }
    
            console.log(value.result);
        }
    
        qrCodeInstance.decode(image.bitmap);
    })
}