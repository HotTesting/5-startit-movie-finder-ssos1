import { browser, $, $$, element, by} from 'protractor'

describe('Movie card ', async function(){

    it('should have name', async function(){
        let movieCardTitles = $$('movie-card').$$('a');
            await browser.get('/');
            await expect(movieCardTitles.get(0).getText()).not.toBeNull('Movie card name is empty')
    });

    it('should have "raiting" pointer', async function(){
        let raitingPointer = $$('.label-success').first();
            await browser.get('/');
            await expect(raitingPointer.isDisplayed()).toBe(true);
    });

    it('should open appropriate "movie details" page, after click on "name" field', async function(){
        let movieCardTitles = $$('movie-card').$$('a');
        let movieDetailsTitle = $('div:nth-child(1) > div.col-md-8 > h2');
        let titleOnHomePage;
        let  titleOnDetailsPage;

            await browser.get('/');
            titleOnHomePage = await movieCardTitles.get(0).getText();
            await movieCardTitles.get(0).click();
            await browser.sleep(3000);
            titleOnDetailsPage = await movieDetailsTitle.getText();
            await expect(titleOnDetailsPage).toContain(titleOnHomePage);

    })
})