class LoginPage {
    // Getters for the input fields and submit button
    get inputUsername () {
        return $('#Input_Email');  // Make sure to update with the correct selector if needed
    }

    get inputPassword () {
        return $('#Input_Password');  // Make sure to update with the correct selector if needed
    }

    get btnSubmit () {
        return $('button[type="submit"]');  // You may need to update this if the selector is different
    }

     // Define the element that should be clicked after login
    get postLoginElement() {
        return $('body > div > div > div.mx-auto.w-full.max-w-xl.p-5.xl\\:p-0 > div > div > div > div > div > form > div.flex.md\\:flex-row.flex-col.md\\:space-x-2.md\\:space-y-0.space-y-2.justify-start > a:nth-child(4)');
    }

    // Method to login using provided username and password
    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    // Open method to navigate to the login page
    async open() {
        await browser.url('https://healthone-qa-identity.altronhealthtech.com/Identity/Account/Login');
    }
}

module.exports = new LoginPage();
