import { browser, $, $$, element, by} from 'protractor'

describe('Navigation ',async function() {

    it('should open "Upcoming movies" section', async function() {
        let upcomingMovies = $('[routerlink="/upcoming"]');
        await browser.get('/');
        await upcomingMovies.click();
        expect(await browser.getCurrentUrl()).toEqual(await browser.baseUrl + "upcoming")
        let upcomingMoviesTitle =  await upcomingMovies.getText();
        expect(upcomingMoviesTitle).toEqual('Upcoming Movies')
    })

    it('should open "Popular Series" section', async function(){
        let popuarSeries = $('[routerlink="popular/series"]');
        await browser.get('/');
        await popuarSeries.click();
        expect(await browser.getCurrentUrl()).toEqual(await browser.baseUrl + "popular/series")
        let popuarSeriesTitle =  await popuarSeries.getText();
        expect(popuarSeriesTitle).toEqual('Popular Series')
    })

    it('should open "Action" category', async function(){
        let actionCategory = $('[ng-reflect-router-link="/genres/28/Action"]');
        await browser.get('/');
        await actionCategory.click();
        expect(await browser.getCurrentUrl()).toEqual(await browser.baseUrl + "genres/28/Action")
        let actionCategoryTitle =  await actionCategory.getText();
        expect(actionCategoryTitle).toEqual('Action')
    })
})