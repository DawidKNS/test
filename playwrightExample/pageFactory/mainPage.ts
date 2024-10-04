import { BrowserContext, Locator, Page } from "@playwright/test";

interface Buttons {
	home: Locator;
}

export class MainPage {
	readonly page: Page;
	readonly context: BrowserContext;
	readonly buttons: Buttons;

	constructor(page: Page, context: BrowserContext) {
		this.page = page;
		this.context = context;
		this.buttons = {
			home: page.locator("//*[@role='navigation'] //*[@aria-label='Home']"),
		};
	}
}