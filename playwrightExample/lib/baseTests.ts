import {test as baseTest} from '@playwright/test';
import {RunPage} from "@pages/runPage";
import {LibraryPage} from "@pages/LibraryPage";
import {MainPage} from "@pages/MainPage";
import {HomePage} from "@pages/HomePage";

const test = baseTest.extend<{
	runPage: RunPage;
	libraryPage: LibraryPage;
	mainPage: MainPage;
	homePage: HomePage;

}>({
	runPage: async ({page, context}, use) => {
		await use(new RunPage(page, context));
	},
	libraryPage: async ({page, context}, use) => {
		await use(new LibraryPage(page, context));
	},
	mainPage: async ({page, context}, use) => {
		await use(new MainPage(page, context));
	},
	homePage: async ({page, context}, use) => {
		await use(new HomePage(page, context));
	}
})

export default test;