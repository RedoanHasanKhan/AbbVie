import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dev2.abbviepro.com/de/de.html');
  await page.getByRole('button', { name: 'ACCEPT ALL' }).click();
  await page.getByRole('list').locator('li').filter({ hasText: 'Events & Fortbildungen' }).getByRole('button').click();
  await page.getByRole('link', { name: 'Medizinisch-' }).click();
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByText('Geben Sie einen Wert in das').click();
  await page.getByPlaceholder('E-Mail').click();
  await page.getByPlaceholder('E-Mail').fill('spusersp23@yopmail.com');
  await page.getByPlaceholder('E-Mail').press('Tab');
  await page.getByPlaceholder('Passwort').fill('Cse1234@');
  await page.getByRole('button', { name: 'Anmelden' }).click();
});