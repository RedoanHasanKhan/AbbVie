import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dev2.abbviepro.com/de/de.html');
  await page.getByRole('button', { name: 'ACCEPT ALL' }).click();
  await page.getByRole('list').locator('li').filter({ hasText: 'Events & Fortbildungen' }).getByRole('button').click();
  await page.getByRole('link', { name: 'Medizinisch-' }).click();
  await page.getByPlaceholder('E-Mail').click();
  await page.getByPlaceholder('E-Mail').fill('spusersp23@yopmail.com');
  await page.getByPlaceholder('Passwort').click();
  await page.getByPlaceholder('Passwort').fill('Cse1234@');
  await page.getByRole('button', { name: 'Anmelden' }).click();

  //await page.goto('https://dev2.abbviepro.com/de/de/events-und-fortbildungen/medizinisch-wissenschaftliche-events.html');
  //await page.getByRole('combobox', { name: 'Therapiegebiet' }).click();
  //await page.getByRole('combobox', { name: 'CME-Zertifizierung' }).click();
  //await page.locator('#bs-select-3-1').click();
  await page.getByRole('combobox', { name: 'Eventreihe/Kongress' }).click();
  await page.getByLabel('This is a button').click();
  await page.getByRole('link', { name: 'StreamedUp – Ophthalmo Live „' }).click();
  await expect(
    page.getByRole('heading', { name: 'Error 404 - Page not found.' })
).toBeVisible();
});