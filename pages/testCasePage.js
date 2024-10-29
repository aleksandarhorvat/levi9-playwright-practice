import { BasePage } from "./basePage";

export class TestCasePage extends BasePage{
    constructor(page){
        super(page);
        this.testCaseButton = page.locator("ul.nav.navbar-nav [href='/test_cases']");
    }
}