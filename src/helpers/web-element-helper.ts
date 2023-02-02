import {ElementKey, ElementLocator, GlobalConfig, GlobalVariables} from "../env/global";
import {Page} from "playwright";

export const getElementLocator = (
    page: Page,
    elementKey: ElementKey,
    globalVariables: GlobalVariables,
    globalConfig: GlobalConfig,
): ElementLocator => {
    const {pageElementMappings} = globalConfig;

    const currentPage = globalVariables.currentScreen;

    return pageElementMappings[currentPage]?.[elementKey] || pageElementMappings.common?.[elementKey]
}