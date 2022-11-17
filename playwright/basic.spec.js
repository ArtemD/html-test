const {test, expect, request} = require('@playwright/test');

test.describe('Verkkokauppa.com', () => {
    test('Checkout works', async({page}) => {
        

await page.setViewportSize({ width: 2048, height: 1034 })
await page.goto('https://www.verkkokauppa.com/fi/etusivu')

await page.waitForSelector('.Item-sc-ndftjm-0:nth-child(2) > .sc-sbzbtg-2 > .Container-sc-1juqqra-1 > .Carousel-sc-1juqqra-2 > .Item-sc-4pgx92-0:nth-child(1) > .sc-yeoxbb-1 > .Box-sc-eb7m1u-0:nth-child(1)')
await page.click('.Item-sc-ndftjm-0:nth-child(2) > .sc-sbzbtg-2 > .Container-sc-1juqqra-1 > .Carousel-sc-1juqqra-2 > .Item-sc-4pgx92-0:nth-child(1) > .sc-yeoxbb-1 > .Box-sc-eb7m1u-0:nth-child(1)')

await page.waitForSelector('.sc-c3oc22-1 > .Box-sc-eb7m1u-0 > .ButtonGroup-sc-1g32o11-0 > .Button-sc-mt7im1-0 > .sc-171xb08-0')
await page.click('.sc-c3oc22-1 > .Box-sc-eb7m1u-0 > .ButtonGroup-sc-1g32o11-0 > .Button-sc-mt7im1-0 > .sc-171xb08-0')

await page.waitForSelector('#checkout')
await page.click('#checkout')
        await expect(page.locator('xpath=//*[@id="main"]/div[2]/section/div[2]/span[2]/data')).toHaveText('34,99');
    })
})