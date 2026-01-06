import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/HomePage";
import WealthPage from "../../pages/WealthPage";

Given("I navigate to the Blankfactor homepage and accept policies", () => {
    HomePage.visit();
    HomePage.acceptPolicy();
});

When("I navigate to {string} and select {string}", (menu, submenu) => {
    if (menu === "Industries" && submenu === "Retirement and Wealth") {
        HomePage.navigateToIndustries();
    }
});

When("I search for the {string} section", (sectionName) => {
    WealthPage.scrollToInnovationSection();
});

When("I hover over the {string} tile and capture the text", (tileName) => {
    WealthPage.hoverAndGetText();
});

When("I click on the {string} button", (btnName) => {
    WealthPage.clickLetsGetStarted();
});

Then("I verify the page URL is {string}", (url) => {
    cy.url().should("include", url);
});

Then("I verify the page title is {string}", (title) => {
    cy.title().should("include", "Contact");
    // 'Contact | Blankfactor'
});

Then("I print the collected text to the console", () => {
    cy.get("@tileText").then((text) => {
        cy.task("log", `CAPTURED TEXT: ${text}`);
        console.log(`CAPTURED TEXT: ${text}`);
    });
});
