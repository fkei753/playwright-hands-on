import { test, expect } from '@playwright/test';

test('トップページが正しく表示される', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Sample App/);
  await expect(page.locator('h1')).toContainText('ようこそ');
});
