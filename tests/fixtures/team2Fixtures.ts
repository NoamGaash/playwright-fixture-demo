import {test as eyesTest} from '@applitools/eyes-playwright/fixture';

export const test = eyesTest.extend({
    eyesConfig: async ({}, use) => {
        await use({
            apiKey: process.env.APPLITOOLS_API_KEY,
            batch: {
                name: 'team 2 tests',
                id: 'team2-batch-id' + Math.floor(new Date().getTime() / 1000)
            }
        })
    }
})