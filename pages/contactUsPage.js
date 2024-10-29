import { BasePage } from "./basePage";

export class ContactUsPage extends BasePage{
    constructor(page){
        super(page);
        this.contactUsButton = page.locator("ul.nav.navbar-nav [href='/contact_us']");
    }

    /**
    *   Fills in the form and submit it
    */
    async fillForm(name, email, subject, message){
        await this.page.getByText("Get In Touch").isVisible();

        await this.page.locator("[data-qa='name']").fill(name);

        await this.page.locator("[data-qa='email']").fill(email);

        await this.page.locator("[data-qa='subject']").fill(subject);

        await this.page.locator("[data-qa='message']").fill(message);

        await this.page.locator("input[type='file'][class='form-control']").click();

        this.page.on('dialog', async dialog => {
            await dialog.accept();
        });

        await this.page.locator("[data-qa='submit-button']").click();
    }

    /**
     * Checks if form is successfully submitted
     */
    async isFormSubmited(){
        await this.page.locator("div.status.alert.alert-success").getByText("Success! Your details have been submitted successfully.").isVisible();

        await this.page.locator("a.btn.btn-success").click();
    }
}