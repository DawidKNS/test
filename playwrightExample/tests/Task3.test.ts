import test from '@lib/baseTests';
import { expect } from '@playwright/test';

test.describe(`Checking the value of the counter in Communication with the number of items in that category`, async () => {
	test(`Checking value`, async ({ page, runPage, libraryPage }): Promise<void> => {
		let comunicationResourcesValue: string;
		let allResourcesValue: number;

		await test.step(`Go to page`, async (): Promise<void> => {
			await runPage.navigateToURL();
			expect(await libraryPage.elements.libraryTitle.isEnabled()).toBe(true);
		});

		await test.step(`Get communication value from library page and go to comminication`, async (): Promise<void> => {
			comunicationResourcesValue = await libraryPage.elements.communicationValue.innerText();
			await page.waitForTimeout(1000);
			await libraryPage.buttons.communication.click();
			await page.waitForTimeout(2000);
			expect(await libraryPage.elements.resourcesTitle.isEnabled()).toBe(true);
		});

		await test.step(`Get value from comunication object and compare`, async (): Promise<void> => {
			allResourcesValue = await libraryPage.coutCominicationObjects()
			expect(comunicationResourcesValue == allResourcesValue.toString()).toBe(true);
		});

	});
});