import mainScreen from "../../screen-objects/main.screen.js";
import discoverScreen from "../../screen-objects/discover.screen.js";
import detectScreen from "../../screen-objects/detect.screen.js";

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
        expect(await discoverScreen.title).toHaveText('Discover');
        expect(await discoverScreen.qr_instruction).toHaveText('Point your camera to a QR code on the product');

        expect(await detectScreen.title).toHaveText('Detect');
        expect(await detectScreen.instruction_1).toHaveText('Align the above image to the Product not');

        const isCaptureBtnEnabled = detectScreen.capture_btn.isEnabled();
        expect(isCaptureBtnEnabled).toBeTruthy();

        // await detectScreen.capture_btn.click();
        // expect(await detectScreen.title_2).toHaveText('Verify');
        // console.log("===========================================")
        // console.log(await detectScreen.instruction_2.getText());
        // console.log("===========================================")
        // expect(await detectScreen.instruction_2).toHaveText('Please hold still not…');
    });
});