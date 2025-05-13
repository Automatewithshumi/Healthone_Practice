
describe('Healthone Practice Test Suit', () => {
  it('should displaye error when password is missing');
  it('should dispaly error when username is missing');
  it('should display error when username and passowrd are missing');
  it('should display error when username is incorrect');
  it('should display error when password is incorrent');
  



    
  it.only('should login with valid standard user', async () => {

        await browser.url('https://healthone-qa.altronhealthtech.com/');

        const userNameTextBox = $('#Input_Email');
        const passwordTextBox = $('#Input_Password');
        const loginButton = $('#login-submit');

        await userNameTextBox.setValue('chuck@norris.com');
        await passwordTextBox.setValue('Norris1234!');
        await loginButton.click();

        const welcomeTitle = $('.flex');
        await expect(welcomeTitle).toBeDisplayed();

    });

    it('should click on the patient search button', async () => {
        // Open the application (replace with your actual URL)
        await page.goto('https://your-app-url.com'); // Replace with the actual URL
    
        // Wait for the patient search button to be visible
        const patientSearchButton = await page.locator('#root > div > div.h-screen_banner > main > div > div.hidden.w-32.bg-altron-bold-blue-500.md\\:block.overflow-y-auto > div > div.flex-1.w-full.px-2.space-y-1 > a.hover\\:bg-altron-bold-blue-600.bg-altron-bold-blue-500.w-full.group.rounded-md.flex.items-center.font-medium.bg-altron-fresh-blue-500.hover\\:bg-altron-fresh-blue-600.text-white.p-3.flex-col.text-xxs > span');
        await patientSearchButton.waitFor({ state: 'visible' });
    
        // Click the patient search button
        await patientSearchButton.click();
    
        // Optional: Verify that the search page or results load after clicking
        // Example: Check that a specific element in the search page is visible
        const searchFieldVisible = await page.locator('#search-input').isVisible(); // Replace with actual search field selector
        expect(searchFieldVisible).toBe(true);
      });
    });