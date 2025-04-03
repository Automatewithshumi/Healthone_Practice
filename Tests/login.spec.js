const LoginPage = require('../pages/login.page');  // Path to your LoginPage.js
const assert = require('assert');

describe('Login Test for HealthOne', () => {
    // Test case: Successful login with valid credentials
    it.only('should successfully log in with valid credentials', async () => {
        // Open the login page
        await LoginPage.open();

        // Login with valid username and password
        const username = 'chuck@norris.com';  // Replace with valid username
        const password = 'Norris1234!';  // Replace with valid password
        await LoginPage.login(username, password);

        // Wait for the page to load and redirect to the home page after login
        await browser.waitUntil(async () => {
            return (await browser.getUrl()) !== 'https://healthone-qa-identity.altronhealthtech.com/Identity/Account/Login';  // URL change after login
        }, { timeout: 5000, timeoutMsg: 'Login did not redirect within time limit' });

        // Verify successful login by checking for an element that should only be visible after login
        const loggedInElement = await $('selector-for-element-on-logged-in-page');  // Update with a selector of an element you expect to see after login
        expect(await loggedInElement.isDisplayed()).toBe(true);  // Expect the element to be displayed
    });

    // Test case: Log in and click a post-login element
    it('should log in and click the post-login element', async () => {
        await LoginPage.open();
        
        // Login with valid credentials
        const username = 'chuck@norris.com';
        const password = 'Norris1234!';
        await LoginPage.login(username, password);

        // Wait for post-login element and click on it
        const postLoginElement = await $('selector-for-post-login-element'); // Replace with actual post-login element
        await postLoginElement.waitForDisplayed();
        await postLoginElement.click();

        // Optionally add some validation after clicking the element (like verifying new page or behavior)
        const newUrl = await browser.getUrl();
        expect(newUrl).toContain('expected-part-of-url');  // Adjust to expected URL part
    });

    // Test case: Navigate to "HealthOne Practice" page after login
    it('should go to HealthOne Practice', async () => {
        await LoginPage.open();

        // Login with valid credentials
        const username = 'chuck@norris.com';
        const password = 'Norris1234!';
        await LoginPage.login(username, password);

        // Navigate to HealthOne Practice
        const healthOnePracticeLink = await $('selector-for-healthone-practice-link'); // Replace with the selector for HealthOne Practice link
        await healthOnePracticeLink.click();

        // Verify successful navigation
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toContain('healthone-practice');  // Adjust based on expected URL or page content
    });

    // Test case: Verify welcome message after successful login
    it.only('should see the welcome back Chuck Norris', async () => {
        await LoginPage.open();

        // Login with valid credentials
        const username = 'chuck@norris.com';
        const password = 'Norris1234!';
        await LoginPage.login(username, password);

        // Verify the presence of the welcome message
        const welcomeMessage = await $('#welcome-message');

        await welcomeMessage.waitForDisplayed();

        const messageText = await welcomeMessage.getText();
        expect(messageText).toBe('Welcome back, Chuck Norris'); // Update with exact text expected
    });
});
