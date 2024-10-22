import {test as baseTest} from '@playwright/test';
import {RunPage} from "@pages/runPage";
import {HomePage} from "@pages/HomePage";

const test = baseTest.extend<{
	runPage: RunPage;
	homePage: HomePage;

}>({
	runPage: async ({page, context}, use) => {
		await use(new RunPage(page, context));
	},
	homePage: async ({page, context}, use) => {
		await use(new HomePage(page, context));
	}
})

export default test;