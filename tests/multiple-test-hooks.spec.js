import { test, expect } from "@playwright/test";

test.describe("Multiple hooks", () => {
  test.beforeAll(async () => {
    console.log(">>> beforeAll");
  });

  test.beforeEach(async ({ page }) => {
    console.log(">>> beforeEach");
    await page.goto("https://example.com");
  });

  test("test 1", async ({ page }) => {
    console.log(">>> running test 1");
    await expect(page).toHaveTitle("Example Domain");
  });

  test("test 2", async ({ page }) => {
    console.log(">>> running test 2");
    const header = await page.locator("h1");
    await expect(header).toHaveText("Example Domain");
  });

  test.afterEach(async () => {
    console.log(">>> afterEach");
  });

  test.afterAll(async () => {
    console.log(">>> afterAll");
  });
});
