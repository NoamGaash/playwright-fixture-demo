import { test } from '../fixtures/team1Fixtures';

test('the first team tests example.com', async ({ page, eyes }) => {
  await page.goto('https://example.com/');
  await eyes.check();
});
