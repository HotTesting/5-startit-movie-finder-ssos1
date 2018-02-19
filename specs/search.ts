import { browser, $, $$, element, by} from 'protractor'
import {HomePage} from "../pages/home";

describe('Search ', async function(){
    const homePage = new HomePage();

    it('by exisiting name, should show first movie with complete name match', async function(){
        await homePage.open();
        let firstMovieName = await homePage.getMovieTitle(0);
        await homePage.searchFor(firstMovieName);
        let firstSearchedName = await homePage.getSearhedMovieTitle(0);
        await expect(await firstSearchedName).toEqual(await firstMovieName);
    });

    it('results (all of them) should contain search request', async function(){
        let searchQuery = 'action';
        await homePage.open();
        await homePage.searchFor(searchQuery);
        let searchResults : any = await homePage.getSearchResultGroup();
        for (let searchElem of searchResults) {
            //There defect in search results like 'double dare' search query for 'action'
            await expect((await searchElem.getText()).toLowerCase()).toContain(searchQuery)
        }
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