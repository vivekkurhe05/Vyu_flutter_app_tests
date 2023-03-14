const TITLE = '~Discover';
const QR_INSTRUCTION = '//android.view.View[@content-desc="Point your camera to a QR code on the product"]'

class DiscoverScreen {

    get title() {
        $(TITLE).waitForDisplayed({timeout: 5000});
        return $(TITLE);
    }

    get qr_instruction() {
        $(QR_INSTRUCTION).waitForDisplayed({timeout: 5000});
        return $(QR_INSTRUCTION);
    }
}

export default new DiscoverScreen();