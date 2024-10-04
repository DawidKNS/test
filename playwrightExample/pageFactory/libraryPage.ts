import { BrowserContext, Locator, Page } from "@playwright/test";

interface Elements {
	libraryTitle: Locator;
	communicationValue: Locator;
	listItems: Locator;
	resourcesTitle: Locator;
}

interface Buttons {
	communication: Locator;
}

export class LibraryPage {
	readonly page: Page;
	readonly context: BrowserContext;
	readonly buttons: Buttons;
	readonly elements: Elements;

	constructor(page: Page, context: BrowserContext) {
		this.page = page;
		this.context = context;
		this.elements = {
			libraryTitle: page.locator(".main-toolbar .main-toolbar__title"),
			communicationValue: page.locator("//*[@id='mat-tab-content-0-0']/div/app-resources-tree/div/div[2]/div[1]/app-resources-navigator/span/div/div/ul[2]/li[5]/a/span[2]"),
			listItems: this.page.locator('//*[@id="mat-tab-content-0-0"]/div/app-resources-tree/div/div[2]/div[1]/app-resources-navigator/span/div/div/ul[3]/li'),
			resourcesTitle: this.page.locator('//*[@id="mat-tab-content-0-0"]/div/app-resources-tree/div/div[2]/div[1]/app-resources-navigator/span/div/div/ul[2]/li'),
		};
		this.buttons = {
			communication: page.locator("//*[@id='mat-tab-content-0-0']/div/app-resources-tree/div/div[2]/div[1]/app-resources-navigator/span/div/div/ul[2]/li[5]/a"),
		};
	}

	/**
 * count value in li
 */
	public async coutCominicationObjects(): Promise<number> {
		let totalSum = 0;

		// Pobierz liczbę elementów zu
		const count = await this.elements.listItems.count();

		// Iteracja po wszystkich li
		for (let i = 0; i < count; i++) {
			const listItem = this.elements.listItems.nth(i);

			// Pobranie tekstu ze span wewnątrz li
			const spanValue = await listItem.locator('span.subcategories__count').innerText();

			// Konwersja na liczbę
			const numericValue = parseInt(spanValue, 10);

			// Dodajemy wartość do sumy
			totalSum += numericValue;
		}

		return totalSum;
	}
}