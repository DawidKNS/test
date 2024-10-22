import test from '@lib/baseTests';
import { expect } from '@playwright/test';

test.describe(`Checking the requirement to accept the consents`, async () => {
	test(`Checking requirement consents "I accept the regulations"`, async ({ page, runPage, homePage }): Promise<void> => {
		await test.step(`Go to page`, async (): Promise<void> => {
			await runPage.navigateToURL();
			expect(await homePage.elements.pageTitle.isEnabled()).toBe(true);
			expect(await homePage.elements.pageTitle.innerText()).toBe('Załóż konto');
		});

		await test.step(`Completion of required fields`, async (): Promise<void> => {
			await homePage.elements.name.fill("Dawid");
			await homePage.elements.familyName.fill("Kondracki");
			await homePage.elements.email.fill("dawidK@test.pl");
			await homePage.elements.password.fill("Test123456789!");
			await homePage.elements.repetPassword.fill("Test123456789!");
			await homePage.elements.date.click();
			await homePage.elements.selectData.click();
			await homePage.buttons.zarejestruj.click();
			expect(await homePage.elements.messageAcceptConsents.innerText()).toBe("To pole jest wymagane");
		});
	});
});