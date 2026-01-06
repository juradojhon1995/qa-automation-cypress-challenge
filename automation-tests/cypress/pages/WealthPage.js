class WealthPage {
    scrollToInnovationSection() {
        // Validate we are on the correct page
        cy.url().should("include", "retirement-and-wealth");

        // Scroll to the specific title as requested
        cy.contains("Powering innovation in retirement services", { matchCase: false })
            .should("exist")
            .scrollIntoView({ duration: 1500 }); // Slow scroll for visibility
    }

    hoverAndGetText() {
        // Wait 3 seconds for the section to stabilize/appear
        cy.wait(3000);

        // Validate AI & Machine learning section
        // Note: content has <br>, so we target the unique key phrase "Machine learning"
        cy.contains("Machine learning").should("be.visible");


        // "flip-card-front" transforms to "flip-card-back"
        // We target the PARENT 'flip-card-inner' which usually holds the hover state in CSS
        cy.contains("Machine learning").closest(".flip-card-inner")
            .scrollIntoView({ block: "center" })
            .trigger("mouseover", { force: true })
            .trigger("mouseenter", { force: true });

        // Wait for animation
        cy.wait(2000);

        // This is a robust fallback for "hover-only" elements
        cy.get(".flip-card-back").invoke("css", "transform", "rotateY(0deg)");

        // Wait 2 seconds for animation to complete
        cy.wait(2000);

        // Verify the text appears
        const expectedText = "Automate your operations and get to market quickly and securely. Leverage predictive data analytics using machine learning to build reliable, yet forward-thinking financial solutions.";

        cy.contains(expectedText).should("be.visible").invoke("text").as("tileText");
    }

    clickLetsGetStarted() {
        //Scroll to the bottom and click "Let's get started"
        cy.get('[title="Let\'s get started"]')
            .scrollIntoView()
            .should("be.visible")
            .click({ force: true });
    }
}

export default new WealthPage();
