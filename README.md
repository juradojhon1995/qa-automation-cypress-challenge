# Blankfactor QA Challenge

This repository contains the solution for the Blankfactor QA Technical Test, including both Manual QA artifacts and the Automation Framework.

## 📂 Project Structure

- **/manual-tests**: Contains the test cases derived from the SRS document (`test-cases.md`).
- **/automation-tests**: Contains the Cypress automation project.

## 🚀 Automation Stack

- **Framework**: Cypress
- **Language**: JavaScript
- **Pattern**: Page Object Model (POM)
- **BDD Style**: Cucumber (Gherkin)

## 🛠️ Installation

1. Navigate to the automation folder:
   ```bash
   cd automation-tests
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## ▶️ Running Tests

### Headless Mode (CLI)
To run the full test suite in headless mode:
```bash
npm run cypress:run
```

### Interactive Mode (GUI)
To open the Cypress Test Runner and see the execution visually:
```bash
npx cypress open
```
Or if you prefer using the npm script:
```bash
npm run cypress:open
```
Then select **E2E Testing** > **Chrome** > **Start E2E Testing**.

## 📝 Manual Test Cases
You can find the detailed table of manual test cases [here](./manual-tests/test-cases.md).
