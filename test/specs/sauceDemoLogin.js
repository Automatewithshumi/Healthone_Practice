
describe('sause demo app login', () => {


    it('should login with valid standard user', async () => {

        await browser.url('https://www.saucedemo.com/');

        const userNameTextBox = $('#user-name');
        const passwordTextBox = $('#password');
        const loginButton = $('#login-button');

        await userNameTextBox.setValue('standard_user');
        await passwordTextBox.setValue('secret_sauce');
        await loginButton.click();

        const productTitle = $('.title');
        await expect(productTitle).toBeDisplayed();

    });

    it('should login with valid standard user', async () => {

        await browser.url('https://www.saucedemo.com/');

        const userNameTextBox = $('#user-name');
        
        await userNameTextBox.setValue('standard_user');
       
        console.log('User Name with set value:', await userNameTextBox.getValue());

        await userNameTextBox.addValue('oneMoreUser');

        console.log('User Name with add value:', await userNameTextBox.getValue());

        await userNameTextBox.clearValue();

        console.log('User Name with clear value:', await userNameTextBox.getValue());

    });
})