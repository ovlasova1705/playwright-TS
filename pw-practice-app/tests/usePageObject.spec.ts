import { test, expect } from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'
import { faker } from '@faker-js/faker'


test.beforeEach(async ({ page }) => {
    await page.goto('/')
})

test('navigate to form page @smoke @regression', async ({ page }) => {
    const pm = new PageManager(page)

    await pm.navigateTo().datePickerPage()
    await pm.navigateTo().formLayoutPage()
    await pm.navigateTo().smartTablePage()
    await pm.navigateTo().toasterPage()
    await pm.navigateTo().tooltipPage()
})

test('parametrized methods', async ({ page }) => {
    const pm = new PageManager(page)
    const randomFullName = faker.person.fullName()
    const randomEmail = `${randomFullName.replace(' ', '')}${faker.number.int(1000)}@test.com`

    await pm.navigateTo().formLayoutPage()
    await pm.onFormsLayoutsPage().submitUsingTheGridFormWithCredentialWithSelectOption(process.env.USER, process.env.PASSWORD, 'Option 1')
    await page.screenshot({ path: 'screenshots/formsLayoutsPage.png' })
    //const buffer = await page.screenshot()
    //console.log(buffer.toString('base64'))
    await pm.onFormsLayoutsPage().submitInlineFormWithNameEmailAndCheckbox(randomFullName, randomEmail, false)
    await page.locator('nb-card', { hasText: "Inline form" }).screenshot({ path: 'screenshots/inlineForm.png' })
    // await pm.navigateTo().datePickerPage()
    // await pm.onDatepickerPage().selectCommonDatePickerDateFromToday(1)
    // await pm.onDatepickerPage().selectDatepickerWithRangeFromToday(1, 10)

})
