import { BasePage } from "./basePage";

export class LoginPage extends BasePage{
    constructor(page){
        super(page)
        this.linkSingupLogin = page.getByRole("link", {name: " Signup / Login"});
        this.newUserSignUp = page.locator("//h2[text()='New User Signup!']");
        this.loginToAccount = page.locator("//h2[text()='Login to your account']");
        this.inputNameForSignup = page.getByPlaceholder("Name");
        this.inputEmalForSignup = page.locator("[action='/signup'] [type='email']");
        this.buttonSignup = page.getByRole("button", {"name": "Signup"});
        this.accountInformation = page.getByText("Enter Account Information");
        this.accountCreated = page.getByText("Account Created!");
        this.continueButton = page.locator("[data-qa='continue-button']");

        this.inputLoginEmail = page.locator("#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=email]:nth-child(2)")
        this.inputPassword = page.locator("#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=password]:nth-child(3)")
        this.buttonLogin = page.getByRole("button", {"name": "Login"})
        this.linkLogout = page.getByRole("link", {name: " Logout"})
        this.concactUs = page.getByRole("link", {name: " Contact us"})
    }

    async login(username, password){
        await this.inputLoginEmail.fill(username)

        await this.inputPassword.fill(password)

        await this.buttonLogin.click()
    }

    async logout(){
        await this.linkLogout.click()
    }

    async signup(name, email){
        await this.inputNameForSignup.fill(name);
        await this.inputEmalForSignup.fill(email);
        await this.buttonSignup.click();
    }

    async enterUserSignupData(userData){

        await this.page.getByText("Enter Account Information").isVisible()

        //fill details: Title, Name, Email, Password, Date of birth
        await this.page.getByLabel(userData.gender).check()

        await this.page.getByLabel("Password ").fill(userData.password)

        await this.page.selectOption('select[id="days"]', userData.dayOfBirth)
        await this.page.selectOption('select[id="months"]', userData.monthOfBirth)
        await this.page.selectOption('select[id="years"]', userData.yearOfBirth)
        
        //select checkbox 'Sign up for our newsletter!'
        await this.page.getByText("Sign up for our newsletter!").click()

        //select checkbox 'Receive special offers from our partners!'
        await this.page.getByText("Receive special offers from our partners!").click()

        //fill other data
        await this.page.locator('input[id="first_name"]').fill(userData.first_name)

        await this.page.locator('input[id="last_name"]').fill(userData.last_name)

        await this.page.locator('input[id="company"]').fill(userData.company)

        await this.page.locator('input[id="address1"]').fill(userData.address1)

        await this.page.locator('input[id="address2"]').fill(userData.address2)

        await this.page.selectOption('select[id="country"]', userData.country)

        await this.page.locator('input[id="state"]').fill(userData.state)

        await this.page.locator('input[id="city"]').fill(userData.city)

        await this.page.locator('input[id="zipcode"]').fill(userData.zipcode)

        await this.page.locator('input[id="mobile_number"]').fill(userData.mobile_number)

    }

    async signupData(userData){
        await this.page.locator("[id='password']").fill(userData.password);
        await this.page.locator("[id='days']").selectOption(userData.day);
        await this.page.locator("[id='months']").selectOption(userData.month);
        await this.page.locator("[id='years']").selectOption(userData.year);
        
        await this.page.locator("[id='newsletter']").check();
        await this.page.locator("[id='optin']").check();
        
        await this.page.locator("[id='first_name']").fill(userData.firstName);
        await this.page.locator("[id='last_name']").fill(userData.lastName);
        await this.page.locator("[id='company']").fill(userData.company);
        await this.page.locator("[id='address1']").fill(userData.address1);
        await this.page.locator("[id='address2']").fill(userData.address2);
        await this.page.locator("[id='country']").selectOption(userData.country);
        await this.page.locator("[id='state']").fill(userData.state);
        await this.page.locator("[id='city']").fill(userData.city);
        await this.page.locator("[id='zipcode']").fill(userData.zipcode);
        await this.page.locator("[id='mobile_number']").fill(userData.mobile_number);
        
        await this.page.locator("[data-qa='create-account']").click();
    }

    async deleteAccount(){
        await this.page.locator("[href='/delete_account']").click();
        await this.page.getByText("Account Deleted!").isVisible()
        await this.page.locator("[data-qa='continue-button']").click();
    }
}