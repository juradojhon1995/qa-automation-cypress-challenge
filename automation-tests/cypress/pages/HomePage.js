class HomePage {
    visit() {
        cy.visit("/");
    }

    acceptPolicy() {
        // Checking body first to avoid failure if it doesn't appear
        cy.get("body").then(($body) => {
            if ($body.find("#hs-eu-confirmation-button").length > 0) {
                cy.get("#hs-eu-confirmation-button").click();
            }
        });
    }

    navigateToIndustries() {
        // User identified a 2-second delay is needed.
        // Using precise ID provided by user.
        cy.get("#menu-item-4871")
            .trigger("mouseenter", { force: true })
            .trigger("mouseover", { force: true });

        cy.wait(2000); // Waiting 2s for menu as requested

        // Click the submenu item using the specific title attribute
        cy.get('[title="Retirement and wealth"]').click({ force: true });
    }
}

export default new HomePage();
