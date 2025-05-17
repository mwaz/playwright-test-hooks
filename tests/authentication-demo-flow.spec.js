import { test, expect } from '@playwright/test';

test.describe('User  Authentication Flow', () => {
  test.beforeAll(async () => {
    // e.g. start a mock login server
  });

  test.beforeEach(async ({ page }) => {
    await page.goto('https://example.com/login');
  });

  test('has correct login title', async ({ page }) => {
    await expect(page).toHaveTitle(/Example/);
  });

  test.afterEach(async ({ page }) => {
    await page.context().clearCookies();
  });

  test.afterAll(async () => {
    // e.g. stop the mock login server
  });
});