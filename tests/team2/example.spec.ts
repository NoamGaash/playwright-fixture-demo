import { test } from '../fixtures/team2Fixtures';

test('the second team tests applitools.com', async ({ page, eyes }) => {
  await page.goto('https://applitools.com/');
  await eyes.check();
});
