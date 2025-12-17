import { test, expect } from "@playwright/test";

test("iphone orientation is portait-primary", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  const orientation = await page.evaluate(() => screen.orientation.type);

  expect(orientation).toBe("portrait-primary");

  await page.goto("https://github.com/microsoft/playwright");

  const newOrientation = await page.evaluate(() => screen.orientation.type);

  expect(newOrientation).toBe("portrait-primary");
});
