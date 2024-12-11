import { EyesFixture } from '@applitools/eyes-playwright/fixture';
import { defineConfig, devices } from '@playwright/test';

export default defineConfig<EyesFixture>({
  testDir: './tests',
  reporter: '@applitools/eyes-playwright/reporter',

  projects: [
    {
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});
