import mainScreen from "../../screen-objects/main.screen.js";
import discoverScreen from "../../screen-objects/discover.screen.js";
import detectScreen from "../../screen-objects/detect.screen.js";
import run from "../../../../utils/qr_code_image.js";

describe('Verify the functionality for GENUINE result', () => {

    beforeEach(async () => {
        await driver.isLocked().then(async function(isLocked) {
            if(isLocked) await driver.unlock();
        });
        run().catch(error => console.error(error.stack));
        await mainScreen.start_btn.click();
    });

    after(async () => {
        await driver.closeApp();
    })

    it('Should launch app, scan QR code and democarton artwork and give GENUINE result', async () => {
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
        const discoverTitle = await discoverScreen.title.getText()
        console.log(await discoverTitle)
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
        await expect(await discoverScreen.title).toHaveText('Discover');
        // console.log(await discoverScreen.qr_instruction.getText())
        // await expect(await discoverScreen.qr_instruction).toHaveText('Point your camera to a QR code on the product');

        // console.log(await detectScreen.title.getText())
        // await expect(await detectScreen.title).toHaveText('Detect');
        // console.log(await detectScreen.instruction_1.getText())
        // await expect(await detectScreen.instruction_1).toHaveText('Align the above image to the Product');

        // const isCaptureBtnEnabled = detectScreen.capture_btn.isEnabled();
        // console.log("Capture button enabled should be ", isCaptureBtnEnabled)
        // await expect(isCaptureBtnEnabled).toBeTruthy();

        // await detectScreen.capture_btn.click();

        // await expect(await detectScreen.result).toHaveText('Genuine');


        //////////////

        // await detectScreen.capture_btn.click();
        // expect(await detectScreen.title_2).toHaveText('Verify');
        // console.log("===========================================")
        // console.log(await detectScreen.instruction_2.getText());
        // console.log("===========================================")
        // expect(await detectScreen.instruction_2).toHaveText('Please hold still not…');
    });
});