test('basic test', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator("h1").textContent()).toHaveText('Playwright');
  });