import { test as setup, expect } from '@playwright/test';

setup('create new article', async ({ request }) => {
    const articleResponse = await request.post('https://api.realworld.io/api/articles/', {
        data: {
            "article": { "title": "Likes test article", "description": "Test2", "body": "Test3", "tagList": [] }
        }
    })
    expect(articleResponse.status()).toEqual(201)
    const response = await articleResponse.json()
    const slugId = response.article.slug
    process.env['SLUGID'] = slugId

})
