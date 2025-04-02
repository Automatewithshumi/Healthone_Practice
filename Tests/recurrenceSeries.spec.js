const RecurrenceSeriesPage = require('../pages/recurrenceSeries.page'); // Path to RecurrenceSeriesPage.js

describe('Recurrence Series Actions for HealthOne', () => {

    // Test 1: Check if the "Edit Recurrence Series" button is visible for the creator
    it('should show the "Edit Recurrence Series" button for the creator', async () => {
        await RecurrenceSeriesPage.open();

        // Verify the Edit Recurrence button is visible for the creator
        const isButtonVisible = await RecurrenceSeriesPage.isEditRecurrenceButtonVisible();
        expect(isButtonVisible).toBe(true);
    });

    // Test 2: Verify the Edit Recurrence Series opens with pre-populated data
    it('should open the "Book Out Time" flow with pre-populated data when "Edit Recurrence Series" is clicked', async () => {
        await RecurrenceSeriesPage.open();

        // Click the "Edit Recurrence Series" button
        await RecurrenceSeriesPage.clickEditRecurrenceButton();

        // Verify the "Update" button is present, indicating pre-populated data
        const isUpdateButtonVisible = await RecurrenceSeriesPage.updateButton.isDisplayed();
        expect(isUpdateButtonVisible).toBe(true);
    });

    // Test 3: Verify the options in the pill dropdown for delete/edit actions
    it('should show the pill dropdown with options to delete or edit events', async () => {
        await RecurrenceSeriesPage.open();

        // Click the pill dropdown
        await RecurrenceSeriesPage.clickPillDropdown();

        // Verify the options in the dropdown
        const deleteRecurrenceVisible = await RecurrenceSeriesPage.deleteRecurrenceButton.isDisplayed();
        const deleteSingleEventVisible = await RecurrenceSeriesPage.deleteSingleEventButton.isDisplayed();
        const editSingleEventVisible = await RecurrenceSeriesPage.editSingleEventButton.isDisplayed();

        expect(deleteRecurrenceVisible).toBe(true);
        expect(deleteSingleEventVisible).toBe(true);
        expect(editSingleEventVisible).toBe(true);
    });

    // Test 4: Verify "Delete Recurrence Series" confirms removal of all events
    it('should confirm removal of all events when "Delete Recurrence Series" is clicked', async () => {
        await RecurrenceSeriesPage.open();

        // Click the "Delete Recurrence Series" button
        await RecurrenceSeriesPage.clickDeleteRecurrenceButton();

        // Verify confirmation message
        const isConfirmationVisible = await RecurrenceSeriesPage.isConfirmationMessageVisible();
        expect(isConfirmationVisible).toBe(true);
    });

    // Test 5: Verify "Delete Single Event" removes only that occurrence
    it('should delete a single event when "Delete Single Event" is clicked', async () => {
        await RecurrenceSeriesPage.open();

        // Click the "Delete Single Event" button
        await RecurrenceSeriesPage.clickDeleteSingleEventButton();

        // Verification step for successful deletion can be added here
        // For example, verifying if the event no longer exists
    });

    // Test 6: Verify "Edit Single Event" opens booking details for that instance
    it('should open booking details for a single event when "Edit Single Event" is clicked', async () => {
        await RecurrenceSeriesPage.open();

        // Click the "Edit Single Event" button
        await RecurrenceSeriesPage.clickEditSingleEventButton();

        // Verification step for successful edit flow can be added here
        // For example, verify if the event details page opens
    });

    // Test 7: Verify non-creator view shows the correct message
    it('should display a message for non-creators instructing them to contact the event owner', async () => {
        await RecurrenceSeriesPage.open();

        // Simulate a non-creator scenario
        // Assuming the page can differentiate user types, check the non-creator message
        const isMessageVisible = await RecurrenceSeriesPage.isNonCreatorMessageVisible();
        expect(isMessageVisible).toBe(true);
    });

    // Test 8: Verify non-creator does not see any edit/delete options
    it('should not show any edit or delete options for non-creators', async () => {
        await RecurrenceSeriesPage.open();

        // Simulate a non-creator scenario
        // Check if the Edit Recurrence button and pill dropdown options are hidden
        const isEditButtonVisible = await RecurrenceSeriesPage.isEditRecurrenceButtonVisible();
        expect(isEditButtonVisible).toBe(false);

        // Click the pill dropdown and verify options are not visible
        await RecurrenceSeriesPage.clickPillDropdown();
        const isDeleteRecurrenceVisible = await RecurrenceSeriesPage.deleteRecurrenceButton.isDisplayed();
        const isDeleteSingleEventVisible = await RecurrenceSeriesPage.deleteSingleEventButton.isDisplayed();
        const isEditSingleEventVisible = await RecurrenceSeriesPage.editSingleEventButton.isDisplayed();

        expect(isDeleteRecurrenceVisible).toBe(false);
        expect(isDeleteSingleEventVisible).toBe(false);
        expect(isEditSingleEventVisible).toBe(false);
    });

});
