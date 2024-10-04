import test from '@lib/baseTests';
import { expect } from '@playwright/test';

test.describe(`Checking bug, no translate text`, async () => {
	test(`Check translation`, async ({ page, runPage, mainPage, homePage, libraryPage }): Promise<void> => {
		let comunicationResourcesValue: string;
		let allResourcesValue: number;

		await test.step(`Go to page`, async (): Promise<void> => {
			await runPage.navigateToURL();
			expect(await libraryPage.elements.libraryTitle.isEnabled()).toBe(true);
		});

		await test.step(`Get to home page`, async (): Promise<void> => {
			await mainPage.buttons.home.click();
			await page.waitForTimeout(2000);
			expect(await homePage.elements.text.isEnabled()).toBe(true);
		});

		await test.step(`Check translation`, async (): Promise<void> => {
			expect(await homePage.checkLanguage(homePage)).toBe(true);
			await homePage.buttons.language.click();
			expect(await homePage.checkLanguage(homePage)).toBe(true);

		});
	});
});