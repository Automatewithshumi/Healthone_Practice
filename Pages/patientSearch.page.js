class PatientSearchPage {
    // Define selectors for elements on the Patient Search page
    get searchField() {
        return $('#patient-search-input'); // Replace with the actual selector for the search input
    }

    get searchButton() {
        return $('#patient-search-button'); // Replace with the actual selector for the search button
    }

    get resultsList() {
        return $('#patient-search-results'); // Replace with the actual selector for the search results container
    }

    get noResultsMessage() {
        return $('#no-results-message'); // Replace with the actual selector for the 'no results' message
    }

    // Method to open the Patient Search page
    async open() {
        await browser.url('https://healthone-qa.altronhealthtech.com/patient-search');
    }

    // Method to perform a search
    async searchForPatient(patientName) {
        await this.searchField.setValue(patientName); // Set the search field value
        await this.searchButton.click(); // Click the search button
    }

    // Method to check if the search results are displayed
    async areResultsDisplayed() {
        return this.resultsList.isDisplayed(); // Check if the results are visible
    }

    // Method to check if 'no results' message is displayed
    async isNoResultsMessageDisplayed() {
        return this.noResultsMessage.isDisplayed(); // Check if the 'no results' message is visible
    }
}

module.exports = new PatientSearchPage();
