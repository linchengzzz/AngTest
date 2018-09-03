// import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('workspace-project App', () => {
    // let page: AppPage;
    let _heroNames = ['Mr. IQ', 'Magneta', 'Bombasto'];
    let _masterName = 'Master';

    beforeAll(function() {
        browser.get('?e2e');
    });
    // beforeEach(() => {
    //     page = new AppPage();
    // });

    it('should display welcome message', () => {
        // page.navigateTo();
        // expect(page.getParagraphText()).toEqual('Welcome to AngTest!');
        let parent = element.all(by.tagName('app-hero-parent')).get(0);
        let heroes = parent.all(by.tagName('app-hero-child'));

        for (let i = 0; i < _heroNames.length; i++) {
            let childTitle = heroes
                .get(i)
                .element(by.tagName('h3'))
                .getText();
            let childDetail = heroes
                .get(i)
                .element(by.tagName('p'))
                .getText();
            expect(childTitle).toEqual(_heroNames[i] + ' says:');
            expect(childDetail).toContain(_masterName);
        }
    });
});
