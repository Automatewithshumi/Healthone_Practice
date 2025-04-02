const PatientSearchPage = require('../pages/patientSearch.page'); // Path to your PatientSearchPage.js

describe('Patient Search Test for HealthOne', () => {

    // Test case to open the Patient Search page and check if it loads correctly
    it('should load the patient search page', async () => {
        // Open the patient search page
        await PatientSearchPage.open();

        // Wait for the search input field to be displayed (make sure the page loaded)
        await browser.waitUntil(async () => {
            return await PatientSearchPage.searchField.isDisplayed();
        }, { timeout: 5000, timeoutMsg: 'Patient search page did not load within time limit' });

        // Assert that the search field is displayed
        const isSearchFieldVisible = await PatientSearchPage.searchField.isDisplayed();
        expect(isSearchFieldVisible).toBe(true);
    });

    // Test case to perform a successful search
    it('should perform a search for a patient', async () => {
        await PatientSearchPage.open();

        // Perform a search with a valid patient name
        const patientName = 'John Doe';  // Replace with an actual patient name
        await PatientSearchPage.searchForPatient(patientName);

        // Wait until results are displayed
        await browser.waitUntil(async () => {
            return await PatientSearchPage.areResultsDisplayed();
        }, { timeout: 5000, timeoutMsg: 'Patient search results did not load within time limit' });

        // Assert that the search results are displayed
        const areResultsVisible = await PatientSearchPage.areResultsDisplayed();
        expect(areResultsVisible).toBe(true);
    });

    // Test case to check if no results message is displayed for invalid search
    it('should display no results message for an invalid search', async () => {
        await PatientSearchPage.open();

        // Perform a search with a patient name that will return no results
        const invalidPatientName = 'Invalid Patient';  // Replace with a name that is expected to return no results
        await PatientSearchPage.searchForPatient(invalidPatientName);

        // Wait until the 'no results' message is displayed
        await browser.waitUntil(async () => {
            return await PatientSearchPage.isNoResultsMessageDisplayed();
        }, { timeout: 5000, timeoutMsg: 'No results message did not display within time limit' });

        // Assert that the 'no results' message is displayed
        const isNoResultsMessageVisible = await PatientSearchPage.isNoResultsMessageDisplayed();
        expect(isNoResultsMessageVisible).toBe(true);
    });

    // You can add additional tests here based on other features of the page, like:
    // - Checking if the search results match the patient name.
    // - Testing for pagination in the results.
    // - Validating search filters if available.
});
