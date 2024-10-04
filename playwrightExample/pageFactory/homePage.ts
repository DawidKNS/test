import { BrowserContext, expect, Locator, Page } from "@playwright/test";

interface Buttons {
	language: Locator;
}

interface Elements {
	text: Locator;
}

export class HomePage {
	readonly page: Page;
	readonly context: BrowserContext;
	readonly buttons: Buttons;
	readonly elements: Elements;

	constructor(page: Page, context: BrowserContext) {
		this.page = page;
		this.context = context;
		this.buttons = {
			language: page.locator("//*[@id='app']/app-root/app-landing-page-main/div[1]/span/a[3]"),
		};
		this.elements = {
			text: page.locator("//*[@id='home']/div/div[1]/span/a[2]/span[1]"),
		};
	}

	public async checkLanguage(homePage: any) {
		if (await homePage.buttons.language.innerText() == "Polski") {
			return "Użyj kodu szkolenia" == await homePage.elements.text.innerText();

		} else {
			return "Use assignment code" == await homePage.elements.text.innerText();
		}
	}
}