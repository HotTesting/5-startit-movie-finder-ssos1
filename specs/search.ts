import { browser, $, $$, element, by} from 'protractor'

describe('Search ', async function(){

    it('by exisiting name, should show first movie with complete name match', async function(){
        let movieCardTitles = $$('movie-card').$$('a');
        let searchField = $('[name="searchStr"]');
        let goButton = $('.input-group-btn button');
        let searchResultGroup = $('movies > div:nth-child(3) > div').$$('movie-card').$$('a');
            await browser.get('/');
            let firstMovieName = await movieCardTitles.get(0).getText();
            await browser.sleep(1000);
            await searchField.sendKeys(firstMovieName);
            await goButton.click();
            await browser.sleep(1000);
            let firstSearchedName = await searchResultGroup.get(0).getText();
            expect(firstSearchedName).toEqual(firstMovieName);
    });

    it('results (all of them) should contain search request', async function(){
        let movieCardTitles = $$('movie-card').$$('a');
        let searchField = $('[name="searchStr"]');
        let goButton = $('.input-group-btn button');
        let searchResultGroup = $('movies > div:nth-child(3) > div').$$('movie-card').$$('h4 > a');
            await browser.get('/');
        let firstMovieName = await movieCardTitles.get(0).getText();
            await browser.sleep(1000);
            await searchField.sendKeys(firstMovieName);
            await goButton.click();
            await browser.sleep(1000);
        let searchResults : any = await searchResultGroup;
        await searchResults.forEach(searchResults => expect(searchResults.getText()).toContain(firstMovieName))
    });

    it('result should be empty, after request for nonexistent movie', async function(){
        let searchField = $('[name="searchStr"]');
        let goButton = $('.input-group-btn button');
        let searchResultGroup = $$('movies > div:nth-child(3) > div').$$('movie-card').$$('a');
            await browser.get('/');
            await browser.sleep(1000);
            await searchField.sendKeys('shouldBeEmpty');
            await goButton.click();
            await browser.sleep(1000);
        let searchResults = await searchResultGroup.count();
        expect(searchResults).toEqual(0);
    })
})