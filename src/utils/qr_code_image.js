import QRReader from 'qrcode-reader';
import fs from 'fs';
import jimp from 'jimp';
import qrcode from 'qrcode';

// run().catch(error => console.error(error.stack));

export default async function run() {
    const img = await jimp.read(fs.readFileSync('C:\\Users\\VivekKurhe\\Vyu_flutter_app_tests\\qr-codes\\qa_democarton.png'));
  
    const qr = new QRReader();
  
    // qrcode-reader's API doesn't support promises, so wrap it
    const value = await new Promise((resolve, reject) => {
      qr.callback = (err, v) => err != null ? reject(err) : resolve(v);
      qr.decode(img.bitmap);
    });

    console.log(value);

  console.log(value.result);

  const qrDataUrl = await qrcode.toDataURL(value.result)
  const image = await jimp.read(qrDataUrl)
  await image.writeAsync('salesdemo.txt')

  // fs.writeFileSync('./qr.html', `<img src="${res}">`);
  // console.log('Wrote to ./qr.html');
}
