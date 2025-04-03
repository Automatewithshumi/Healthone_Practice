class PracticeRemindersPage {
    // Define selectors for the elements on the Practice Reminders page
    get pageHeader() {
        return $('#practice-reminders-header'); // Adjust the selector for the page header
    }

    get searchBar() {
        return $('#search-bar'); // Adjust the selector for the search bar
    }

    get assignedToDropdown() {
        return $('#assigned-to-dropdown'); // Adjust the selector for the "Assigned To" dropdown
    }

    get dateRangePicker() {
        return $('#date-range-picker'); // Adjust the selector for the date range picker
    }

    get activeRemindersTableHeader() {
        return $('#active-reminders-header'); // Adjust the selector for the "Active Reminders" table header
    }

    get addButton() {
        return $('#add-button'); // Adjust the selector for the "+Add" button
    }

    get messageField() {
        return $('#message-field'); // Adjust the selector for the message field in the modal
    }

    get patientField() {
        return $('#patient-field'); // Adjust the selector for the patient field in the modal
    }

    get assignedToField() {
        return $('#assigned-to-field'); // Adjust the selector for the assigned to field
    }

    get dueDateField() {
        return $('#due-date-field'); // Adjust the selector for the due date field
    }

    get dueTimeField() {
        return $('#due-time-field'); // Adjust the selector for the due time field
    }

    get createButton() {
        return $('#create-button'); // Adjust the selector for the "Create" button
    }

    get successMessage() {
        return $('#success-message'); // Adjust the selector for success message
    }

    get markAsDoneButton() {
        return $('#mark-as-done-button'); // Adjust the selector for the "Mark as Done" button
    }

    get confirmationPopupYesButton() {
        return $('#confirmation-popup-yes'); // Adjust the selector for the "Yes" button in the confirmation popup
    }

    get completedReminderMessage() {
        return $('#completed-reminder-message'); // Adjust the selector for the completed reminder message
    }

    get undoCompleteButton() {
        return $('#undo-complete-button'); // Adjust the selector for the undo button in the completed section
    }

    get deleteReminderButton() {
        return $('#delete-reminder-button'); // Adjust the selector for the delete button in the reminder
    }

    get confirmationPopupNoButton() {
        return $('#confirmation-popup-no'); // Adjust the selector for the "No" button in the confirmation popup
    }

    // Open the Practice Reminders page
    open() {
        return browser.url('https://healthone-qa.altronhealthtech.com/practice-reminders'); // Adjust the URL as needed
    }

    // Get table columns from the active reminders table
    async getTableColumns() {
        const columns = await $$('#active-reminders-table th');
        return columns.map(col => col.getText());
    }
}

module.exports = new PracticeRemindersPage();
