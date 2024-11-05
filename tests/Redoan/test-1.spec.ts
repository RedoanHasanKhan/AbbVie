import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dev.abbviepro.com/de/de.html');
  await page.getByRole('link', { name: 'AbbVie Pro' }).click();
  const page1Promise = page.waitForEvent('popup');
  
 
});