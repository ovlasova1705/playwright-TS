import { Page } from "@playwright/test";
import { NavigationPage } from '../page-objects/navigationPage'
import { FormLayoutPage } from '../page-objects/formLayoutsPage'
import { DatepickerPage } from '../page-objects/datepickerPage'

export class PageManager {

    private readonly page: Page
    private readonly navigationPage: NavigationPage
    private readonly formLayoutPage: FormLayoutPage
    private readonly datepikcerPage: DatepickerPage

    constructor(page: Page) {
        this.page = page
        this.navigationPage = new NavigationPage(this.page)
        this.formLayoutPage = new FormLayoutPage(this.page)
        this.datepikcerPage = new DatepickerPage(this.page)
    }

    navigateTo() {
        return this.navigationPage
    }

    onFormsLayoutsPage() {
        return this.formLayoutPage
    }

    onDatepickerPage() {
        return this.datepikcerPage
    }
}