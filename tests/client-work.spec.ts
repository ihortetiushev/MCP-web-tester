import { test, expect } from '@playwright/test';

test.describe('EPAM client work navigation', () => {
  test('opens Client Work from the Services menu', async ({ page }) => {
    await page.goto('https://www.epam.com/');

    // The responsive header exposes the main menu through the hamburger button.
    await page.locator('button.hamburger-menu__button').click();
    await page
      .locator("nav[aria-label='Main navigation'] a.hamburger-menu__link.first-level-link[href='/services']:not(.hidden-underline-node)")
      .click();

    await expect(page).toHaveURL(/https:\/\/www\.epam\.com\/services\/?$/);

    await page.locator("a.bold-underlined-hover[href='/services/client-work']").click();

    await expect(page).toHaveURL(/https:\/\/www\.epam\.com\/services\/client-work\/?$/);
    await expect(page.getByRole('heading', { name: 'Client Work', exact: true })).toBeVisible();
  });
});
