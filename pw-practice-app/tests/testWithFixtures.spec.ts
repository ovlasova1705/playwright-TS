import { test } from '../test-option'
import { faker } from '@faker-js/faker'



test('parametrized methods', async ({ pageManager }) => {

    const randomFullName = faker.person.fullName()
    const randomEmail = `${randomFullName.replace(' ', '')}${faker.number.int(1000)}@test.com`


    await pageManager.onFormsLayoutsPage().submitUsingTheGridFormWithCredentialWithSelectOption(process.env.USER, process.env.PASSWORD, 'Option 2')
    await pageManager.onFormsLayoutsPage().submitInlineFormWithNameEmailAndCheckbox(randomFullName, randomEmail, false)

})
