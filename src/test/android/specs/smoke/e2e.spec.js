import mainScreen from "../../screen-objects/main.screen.js";
import discoverScreen from "../../screen-objects/discover.screen.js";
import Jimp from 'jimp';
import fs from 'fs';
import qrCodeReader from 'qrcode-reader';
const buffer = fs.readFileSync('C:\\Users\\VivekKurhe\\Vyu_flutter_app_tests\\qr-codes\\qa_democarton.png');

describe('Verify the functionality for GENUINE result', () => {

    let qa_url = "";

    beforeEach(async () => {
        await driver.isLocked().then(async function(isLocked) {
            if(isLocked) await driver.unlock();
        });
        await mainScreen.start_btn.click();
    });

    after(async () => {
        await driver.closeApp();
    })

    it('Should launch app, scan QR code and democarton artwork and give GENUINE result', async () => {
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
                qa_url = value.result;
            }

            qrCodeInstance.decode(image.bitmap);
        })
        // await expect(await discoverScreen.title).toHaveText('Discover');
        await driver.pause(10000);
    });
});