import { test, expect } from '@playwright/test'
import { config } from 'dotenv';
config();

test.beforeEach(async ({ page }, testInfo) => {
    //const url: string = process.env.URL!;
    await page.goto(process.env.URL)
    await page.getByText('Button Triggering AJAX Request').click()
    testInfo.setTimeout(testInfo.timeout + 2000)
})

test('auto waiting', async ({ page }) => {
    const successButton = page.locator('.bg-success')
    //await successButton.click()

    //const text = await successButton.textContent()

    //await successButton.waitFor({state:"attached"})

    //const text = await successButton.allTextContents()
    //expect(text).toContain('Data loaded with AJAX get request.') 

    await expect(successButton).toHaveText('Data loaded with AJAX get request.', { timeout: 20000 })

})

test.skip('alternative waits', async ({ page }) => {
    const successButton = page.locator('.bg-success')

    //__wait for element
    //await page.waitForSelector('.bg-success')

    //__wait for particular response
    //await page.waitForResponse('http://uitestingplayground.com/ajaxdata')

    //__wait for nework calls to be completed (NOT recommended)
    await page.waitForLoadState('networkidle')

    const text = await successButton.allTextContents()
    expect(text).toContain('Data loaded with AJAX get request.')

})

test.skip('timeouts', async ({ page }) => {
    //test.setTimeout(10000)
    test.slow() //multiply defoult timeout x3

    const successButton = page.locator('.bg-success')
    await successButton.click({ timeout: 16000 })


})
