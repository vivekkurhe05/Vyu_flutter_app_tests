const TITLE = '~Detect';
const TITLE_2 = '~Verify';
const INSTRUCTION_1 = '//android.view.View[@content-desc="Align the above image to the Product"]';
const INSTRUCTION_2 = '//android.view.View[@content-desc="Please hold still…"]';
const INSTRUCTION_3 = '//android.view.View[@content-desc="Please wait while we verify this product for you….."]';
const CAPTURE_BTN = '~CAPTURE';

class DetectScreen {

    get title() {
        $(TITLE).waitForDisplayed({timeout: 10000});
        return $(TITLE)
    }

    get title_2() {
        $(TITLE_2).waitForDisplayed({timeout: 10000});
        return $(TITLE_2);
    }

    get instruction_1() {
        $(INSTRUCTION_1).waitForDisplayed({timeout: 10000});
        return $(INSTRUCTION_1);
    }

    get instruction_2() {
        $(INSTRUCTION_2).waitForExist({timeout: 10000});
        return $(INSTRUCTION_2);
    }

    get instruction_3() {
        $(INSTRUCTION_3).waitForDisplayed({timeout: 10000});
        return $(INSTRUCTION_3);
    }

    get capture_btn() {
        $(CAPTURE_BTN).waitForDisplayed({timeout: 10000});
        return $(CAPTURE_BTN);
    }
}

export default new DetectScreen();