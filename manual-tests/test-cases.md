# Manual Test Cases - Blankfactor WebApplication
**Source Document:** Test - Manual QA - SRS.pdf
**Project:** Blankfactor WebApplication QA Challenge

## Test Suite: Authentication & Session Management (Req 6.1)

| TC ID | Requirement | Priority | Scenario | Preconditions | Test Steps | Expected Result |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TC-001** | Req 6.1.2 | **High** | Successful Login | User is not logged in. Valid user exists in DB. | 1. Navigate to Login Page.<br>2. Enter correct Username.<br>3. Enter correct Password.<br>4. Click Login. | 1. User is logged in.<br>2. Functionality Selection Page is displayed.<br>3. Server session state is updated to "logged-in". |
| **TC-002** | Req 6.1.4 | **High** | Failed Login - Invalid Credentials | User is not logged in. | 1. Navigate to Login Page.<br>2. Enter unregistered/wrong Username or Password.<br>3. Click Login. | 1. User remains not logged in.<br>2. Error message displayed.<br>3. Fields cleared/prompted to re-enter. |
| **TC-003** | Req 6.1.3 | **High** | Successful Logout | User is logged in. | 1. Click "Logout" link/button. | 1. User is logged out.<br>2. Redirected to relevant page confirming logout or Login page. |
| **TC-004** | Req 6.1.9 | **Medium** | Session Timeout (Inactivity) | User is logged in. | 1. Remain inactive on any page for > 20 minutes.<br>2. Attempt any action or refresh. | 1. User is automatically logged out.<br>2. Redirected to Login page before continuing usage. |
| **TC-005** | Req 6.1.10 | **Low** | "Remember Me" Functionality | User is not logged in. | 1. Enter valid credentials.<br>2. Check "Remember Me".<br>3. Login.<br>4. Close browser and reopen.<br>5. Navigate to application. | 1. User is automatically logged in without re-entering credentials. |

## Test Suite: Data Validation (Req 6.2)

| TC ID | Requirement | Priority | Scenario | Preconditions | Test Steps | Expected Result |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TC-006** | Req 6.2.1 | **High** | Username Validation - Valid Charset | N/A | 1. Attempt to create user or login with username containing ASCII 48-57 (0-9), 65-90 (A-Z), 97-122 (a-z).<br>2. Length: 5 characters. | 1. System accepts the username. |
| **TC-007** | Req 6.2.1 | **High** | Username Validation - Invalid Charset | N/A | 1. Attempt to create/login with special characters (e.g., @, #, $, space) which are outside allowed ASCII ranges. | 1. System rejects input or shows validation error.<br>2. Action blocked using Requirement 6.3.1 (Incorrect input handling). |
| **TC-008** | Req 6.2.1 | **Medium** | Username Validation - Length Boundary (Min) | N/A | 1. Enter username with 4 characters. | 1. System rejects input (Min 5 chars required). |
| **TC-009** | Req 6.2.1 | **Medium** | Username Validation - Length Boundary (Max) | N/A | 1. Enter username with 11 characters. | 1. System rejects input (Max 10 chars allowed). |
| **TC-010** | Req 6.2.3 | **High** | Password Validation | N/A | 1. Enter password with ASCII 97-122 (a-z) only.<br>2. Length exactly 6 characters. | 1. System accepts password. |

## Test Suite: System Quality (Req 7.2)

| TC ID | Requirement | Priority | Scenario | Preconditions | Test Steps | Expected Result |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TC-011** | Req 7.2.1 | **High** | Performance - Response Time | User logged in. | 1. Perform standard requests (Login, Navigate pages).<br>2. Measure response time. | 1. 95% of requests should respond within 1.0 second. |
