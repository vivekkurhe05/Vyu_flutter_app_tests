import mainScreen from "../../screen-objects/main.screen.js";
import discoverScreen from "../../screen-objects/discover.screen.js";
import getQRCodeURL from "../../../../utils/qr_code_reader.js"

describe('Verify the functionality for GENUINE result', () => {

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
        getQRCodeURL()
        await expect(await discoverScreen.title).toHaveText('Discover');
        await driver.pause(10000);
    });
});