Feature: Blankfactor Web Validation
  As a QA Engineer
  I want to validate the Blankfactor website key sections
  So that I can ensure the user experience is correct

  Scenario: Verify AI & Machine Learning section and page metadata
    Given I navigate to the Blankfactor homepage and accept policies
    When I navigate to "Industries" and select "Retirement and Wealth"
    And I search for the "Powering innovation in retirement services" section
    And I hover over the "AI & Machine learning" tile and capture the text
    And I click on the "Let's get started" button
    Then I verify the page URL is "contact/"
    And I verify the page title is "Contact | Blankfactor"
    And I print the collected text to the console
