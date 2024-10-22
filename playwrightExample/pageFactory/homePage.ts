import { BrowserContext, expect, Locator, Page } from "@playwright/test";

interface Buttons {
	zarejestruj: Locator;
}

interface CheckBox {
	akceptacjaRegulaminu: Locator;
}

interface Elements {
	name: Locator;
	familyName: Locator;
	email: Locator;
	password: Locator;
	repetPassword: Locator;
	date: Locator;
	pageTitle:Locator;
	selectData:Locator;	
	messageAcceptConsents:Locator;	
}

export class HomePage {
	readonly page: Page;
	readonly context: BrowserContext;
	readonly buttons: Buttons;
	readonly elements: Elements;
	readonly checkBox: CheckBox;

	constructor(page: Page, context: BrowserContext) {
		this.page = page;
		this.context = context;
		this.buttons = {
			zarejestruj: page.locator("//*[@class='btn']"),
		};
		this.checkBox = {
			akceptacjaRegulaminu: page.locator("//*[@type='checkbox']"),
		};
		this.elements = {
			name: page.locator('//*[@placeholder="Imię"]'),
			familyName: page.locator('//*[@placeholder="Nazwisko"]'),
			email: page.locator('//*[@placeholder="Twój adres e-mail"]'),
			password: page.locator('//*[@placeholder="Hasło"]'),
			repetPassword: page.locator('//*[@placeholder="Powtórz hasło"]'),
			date: page.locator('//*[@placeholder="Data urodzenia"]'),
			pageTitle: page.locator('//h1'),
			selectData: page.locator('//*[@title="2024-10-14"]'),	
			messageAcceptConsents: page.locator('//html/body/div/div/div/div/div/form/span[8]/label/span'),
		};
	}
}