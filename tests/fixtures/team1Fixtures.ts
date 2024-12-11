import {test as eyesTest} from '@applitools/eyes-playwright/fixture';

export const test = eyesTest.extend({
    eyesConfig: async ({}, use) => {
        await use({
            apiKey: process.env.APPLITOOLS_API_KEY,
            batch: {
                name: 'team 1 tests',
                id: 'team1-batch-id ' + Math.floor(new Date().getTime() / 1000)
            }
        })
    }
})