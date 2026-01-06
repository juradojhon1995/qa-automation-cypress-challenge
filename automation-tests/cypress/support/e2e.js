
// Ignore application-specific exceptions that are not related to the test logic
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    if (err.message.includes("Tooltipster")) {
        return false;
    }
    // allow other errors to fail the test
    return true;
});
