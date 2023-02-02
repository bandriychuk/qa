import {Then} from "@cucumber/cucumber";
import {getElementLocator} from "../../helpers/web-element-helper";
import {waitFor} from "../../helpers/wait-for-behavior";


Then(/^the "([^"]*)" should be displayed$/, async function (elementKey: string) {
    const {
        screen: {page},
        globalVariables,
        globalConfig,
    } = this;

    console.log(`the ${elementKey} should should be displayed`)

    const elementIdentifier = getElementLocator(page, elementKey, globalVariables, globalConfig);

    await waitFor(async () => {
        const isElementVisible = (await page.$(elementIdentifier)) != null;
        return isElementVisible;
    });
});