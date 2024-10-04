import {BrowserContext, Page} from '@playwright/test';
import testConfig from "@config/*";

export class RunPage {
	readonly page: Page;
	readonly context: BrowserContext;

	constructor(page: Page, context: BrowserContext) {
		this.page = page;
		this.context = context;
	}

    /**
     * Open test page.
     */
    public async navigateToURL(): Promise<void> {
        await this.page.goto(testConfig.use!.testConfig!.url);
    }
}