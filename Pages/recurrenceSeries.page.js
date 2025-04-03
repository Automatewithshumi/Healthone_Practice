class RecurrenceSeriesPage {
    // Selectors for elements on the recurrence series page
    get editRecurrenceButton() {
        return $('#edit-recurrence-btn'); // Replace with actual selector for the "Edit Recurrence Series" button
    }

    get pillDropdown() {
        return $('#pill-dropdown'); // Replace with actual selector for the pill dropdown
    }

    get deleteRecurrenceButton() {
        return $('#delete-recurrence-btn'); // Replace with actual selector for "Delete Recurrence Series"
    }

    get deleteSingleEventButton() {
        return $('#delete-single-event-btn'); // Replace with actual selector for "Delete Single Event"
    }

    get editSingleEventButton() {
        return $('#edit-single-event-btn'); // Replace with actual selector for "Edit Single Event"
    }

    get nonCreatorMessage() {
        return $('#non-creator-message'); // Replace with actual selector for non-creator message
    }

    get updateButton() {
        return $('#update-btn'); // Replace with actual selector for the "Update" button
    }

    get confirmationMessage() {
        return $('#confirmation-message'); // Replace with actual selector for the confirmation message
    }

    // Method to open the page for editing the recurrence
    async open() {
        await browser.url('https://healthone-qa.altronhealthtech.com/your-page-url');
    }

    // Method to check if the Edit Recurrence button is visible
    async isEditRecurrenceButtonVisible() {
        return this.editRecurrenceButton.isDisplayed();
    }

    // Method to click the Edit Recurrence button
    async clickEditRecurrenceButton() {
        await this.editRecurrenceButton.click();
    }

    // Method to click on the pill dropdown
    async clickPillDropdown() {
        await this.pillDropdown.click();
    }

    // Method to click the "Delete Recurrence Series" button
    async clickDeleteRecurrenceButton() {
        await this.deleteRecurrenceButton.click();
    }

    // Method to click the "Delete Single Event" button
    async clickDeleteSingleEventButton() {
        await this.deleteSingleEventButton.click();
    }

    // Method to click the "Edit Single Event" button
    async clickEditSingleEventButton() {
        await this.editSingleEventButton.click();
    }

    // Method to check if the non-creator message is visible
    async isNonCreatorMessageVisible() {
        return this.nonCreatorMessage.isDisplayed();
    }

    // Method to click the "Update" button
    async clickUpdateButton() {
        await this.updateButton.click();
    }

    // Method to check if the confirmation message is visible
    async isConfirmationMessageVisible() {
        return this.confirmationMessage.isDisplayed();
    }
}

module.exports = new RecurrenceSeriesPage();
