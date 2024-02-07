import { Locator, Page } from "@playwright/test";

//Artem Bondat does not recommend to use this approach, but Playwright does recommend it.

export class NavigationPage {

    readonly page: Page
    readonly formLayoutsMenuItem: Locator
    readonly datePickerMenuItem: Locator
    readonly smartTableMenuItem: Locator
    readonly toasterPageMenuItem: Locator
    readonly tooltipPageMenuItem: Locator


    constructor(page: Page) {

        this.page = page
        this.formLayoutsMenuItem = page.getByText('Form Layouts')
        this.datePickerMenuItem = page.getByText('Datepicker')
        this.smartTableMenuItem = page.getByText('Smart Table')
        this.toasterPageMenuItem = page.getByText('Toastr')
        this.tooltipPageMenuItem = page.getByText('Tooltip')
    }
    async formLayoutPage() {
        await this.selectGroupMenuItem('Forms')
        await this.formLayoutsMenuItem.click()
    }

    async datePickerPage() {
        await this.selectGroupMenuItem('Forms')
        await this.datePickerMenuItem.click()

    }

    async smartTablePage() {
        await this.selectGroupMenuItem('Tables & Data')
        await this.smartTableMenuItem.click()

    }

    async toasterPage() {
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.toasterPageMenuItem.click()

    }

    async tooltipPage() {
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.tooltipPageMenuItem.click()

    }

    private async selectGroupMenuItem(groupItemTitle: string) {
        const groupMenuItem = this.page.getByTitle(groupItemTitle)
        const expandedState = await groupMenuItem.getAttribute('aria-expanded')
        if (expandedState == "false")
            await groupMenuItem.click()

    }


}