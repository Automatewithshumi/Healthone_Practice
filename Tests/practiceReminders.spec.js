const HomePage = require('../pages/home.page');
const PracticeRemindersPage = require('../pages/practiceReminders.page');
const assert = require('assert');

describe('Reminders Feature for HealthOne', () => {

    // Test 1: Verify Home Screen Widget "Reminders Due Today"
    it('should display the correct reminders count and warning icon for due reminders today', async () => {
        await HomePage.open(); // Open the home page

        // Verify that "Reminders Due Today" widget is displayed
        const widgetTitle = await HomePage.remindersDueTodayWidget.getText();
        expect(widgetTitle).toContain('Reminders Due Today'); // Ensure the widget exists

        // Get the count of reminders due today
        const reminderCount = await HomePage.reminderCount.getText();
        expect(Number(reminderCount)).toBeGreaterThanOrEqual(0); // Count should be greater than or equal to 0

        // Verify if warning icon appears when reminders are due today
        const warningIconVisible = await HomePage.warningIcon.isDisplayed();
        if (Number(reminderCount) > 0) {
            expect(warningIconVisible).toBe(true); // Warning icon should appear if reminders are due
        } else {
            expect(warningIconVisible).toBe(false); // No warning icon if no reminders
        }

        // Click "View All" button to go to Practice Reminders screen
        await HomePage.viewAllButton.click();

        // Wait for the Practice Reminders screen to load
        const practiceRemindersHeader = await PracticeRemindersPage.pageHeader.getText();
        expect(practiceRemindersHeader).toContain('Practice Reminders');
    });

    // Test 2: Verify Practice Reminders screen displays correct filters and table
    it('should display the correct filters and active reminders table', async () => {
        await PracticeRemindersPage.open(); // Open the Practice Reminders page

        // Verify the filter options are displayed
        const searchBarVisible = await PracticeRemindersPage.searchBar.isDisplayed();
        const assignedToDropdownVisible = await PracticeRemindersPage.assignedToDropdown.isDisplayed();
        const dateRangePickerVisible = await PracticeRemindersPage.dateRangePicker.isDisplayed();

        expect(searchBarVisible).toBe(true);
        expect(assignedToDropdownVisible).toBe(true);
        expect(dateRangePickerVisible).toBe(true);

        // Verify the Active Reminders table header
        const tableHeader = await PracticeRemindersPage.activeRemindersTableHeader.getText();
        expect(tableHeader).toContain('Active');

        // Verify the Active Reminders table columns
        const columns = await PracticeRemindersPage.getTableColumns();
        expect(columns).toContain('Message');
        expect(columns).toContain('Due Date');
        expect(columns).toContain('Due Now');
        expect(columns).toContain('Patient');
        expect(columns).toContain('Assigned To');
    });

    // Test 3: Verify Add Reminder Modal
    it('should open the Add Reminder modal and fill in required fields', async () => {
        await PracticeRemindersPage.open(); // Open the Practice Reminders page

        // Click the "+Add" button to open the modal
        await PracticeRemindersPage.addButton.click();

        // Verify the modal fields are displayed
        const messageFieldVisible = await PracticeRemindersPage.messageField.isDisplayed();
        const patientFieldVisible = await PracticeRemindersPage.patientField.isDisplayed();
        const assignedToFieldVisible = await PracticeRemindersPage.assignedToField.isDisplayed();
        const dueDateFieldVisible = await PracticeRemindersPage.dueDateField.isDisplayed();
        const dueTimeFieldVisible = await PracticeRemindersPage.dueTimeField.isDisplayed();

        expect(messageFieldVisible).toBe(true);
        expect(patientFieldVisible).toBe(true);
        expect(assignedToFieldVisible).toBe(true);
        expect(dueDateFieldVisible).toBe(true);
        expect(dueTimeFieldVisible).toBe(true);

        // Fill in the modal fields
        await PracticeRemindersPage.messageField.setValue('Test reminder');
        await PracticeRemindersPage.patientField.selectByVisibleText('Patient Name');
        await PracticeRemindersPage.assignedToField.selectByVisibleText('Logged In User');
        await PracticeRemindersPage.dueDateField.setValue('2025-04-02');
        await PracticeRemindersPage.dueTimeField.setValue('10:00 AM');

        // Submit the form by clicking "Create" button
        await PracticeRemindersPage.createButton.click();

        // Verify success message
        const successMessage = await PracticeRemindersPage.successMessage.getText();
        expect(successMessage).toContain('Reminder created successfully');
    });

    // Test 4: Verify Mark Reminder as Done
    it('should mark a reminder as done and move it to the Completed section', async () => {
        await PracticeRemindersPage.open(); // Open the Practice Reminders page

        // Click the circle icon to mark a reminder as done
        await PracticeRemindersPage.markAsDoneButton.click();

        // Confirm the action in the confirmation popup
        await PracticeRemindersPage.confirmationPopupYesButton.click();

        // Verify the reminder has been moved to the Completed section
        const completedReminderMessage = await PracticeRemindersPage.completedReminderMessage.getText();
        expect(completedReminderMessage).toContain('Test reminder');

        // Verify success message
        const successMessage = await PracticeRemindersPage.successMessage.getText();
        expect(successMessage).toContain('Reminder marked as complete');
    });

    // Test 5: Verify Undo Complete Reminder
    it('should undo a completed reminder and move it back to Active section', async () => {
        await PracticeRemindersPage.open(); // Open the Practice Reminders page

        // Click the tick icon in the Completed table to undo the action
        await PracticeRemindersPage.undoCompleteButton.click();

        // Verify the reminder has been moved back to the Active section
        const activeReminderMessage = await PracticeRemindersPage.activeReminderMessage.getText();
        expect(activeReminderMessage).toContain('Test reminder');

        // Verify success message
        const successMessage = await PracticeRemindersPage.successMessage.getText();
        expect(successMessage).toContain('Reminder reverted to active');
    });

    // Test 6: Verify Delete Reminder Action
    it('should delete a reminder and show confirmation', async () => {
        await PracticeRemindersPage.open(); // Open the Practice Reminders page

        // Click the delete icon for a reminder
        await PracticeRemindersPage.deleteReminderButton.click();

        // Confirm the delete action in the popup
        await PracticeRemindersPage.confirmationPopupYesButton.click();

        // Verify success message
        const successMessage = await PracticeRemindersPage.successMessage.getText();
        expect(successMessage).toContain('Reminder deleted successfully');
    });

});
