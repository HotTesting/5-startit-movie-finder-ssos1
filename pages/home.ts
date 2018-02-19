import { browser, element, By, by, until, $, $$, Key, ExpectedConditions as EC } from 'protractor'

export class HomePage {
    private searchField = $('[name="searchStr"]');
    private goButton = $('.input-group-btn button');
    private movieCardTitles = $$('movie-card a');
    private searchResultGroup = $('movies > div:nth-child(3) > div').$$('.text-ellipsis a');

    private foundMovies = $$('movies > div > div.row.is-flex movie-card');

    async open() {
        await browser.get('/', 1000)
    }

    async searchFor(search_query) {
        await this.searchField.sendKeys(search_query);
        await this.goButton.click();
    }

    async getMovieTitle(id) {
        await browser.wait(EC.visibilityOf(this.movieCardTitles.get(id)), 5000, 'Title not loaded!')
        return this.movieCardTitles.get(id).getText()
    }

    async getSearchResultGroup(): Promise<any> {
        await browser.wait(EC.visibilityOf(this.searchResultGroup.first()), 5000, 'Movies not loaded!')
        return await this.searchResultGroup.asElementFinders_()
    }

    async getSearhedMovieTitle(id) {
        await browser.wait(EC.visibilityOf(this.searchResultGroup.get(id)), 5000, 'Title not loaded!')
        return this.searchResultGroup.get(id).getText()
    }

    async getFoundMovies(): Promise<any> {
        await browser.wait(EC.visibilityOf(this.foundMovies.first()), 5000, 'Movies not loaded!')
        return this.foundMovies
    }

    async getFoundMoviesTitles() {
        return (await this.getFoundMovies())
            .$$('a[title]')
            .getAttribute('title')
    }
}