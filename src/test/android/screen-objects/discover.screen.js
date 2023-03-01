const TITLE = '//android.view.View[@content-desc="Discover"]';

class DiscoverScreen {

    get title() {
        $(TITLE).waitForDisplayed({timeout: 5000});
        return $(TITLE);
    }
}

export default new DiscoverScreen();