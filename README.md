# Lesson 16 – Playwright Tests / Tallinn Delivery UI

## Objective:
Frontend testing with Playwright.

---

##  Features:

- Installation and usage of [Faker.js](https://www.npmjs.com/package/@faker-js/faker) to generate random usernames and passwords.
- Utilization of environment variables for URL management.
- Verification using CI workflow.
- Pushing the project to GitHub and setting up the application URL as a GitHub Secret.

---

## Project Setup

### 1. Create a new project:
```bash
npm init playwright@latest
Install all dependencies:
```bash
npm install
Install Faker.js:
```bash
npm install @faker-js/faker

Create a .env file in the root directory

Run tests:
```bash
npx playwright test
 Debug mode:
```bash
npx playwright test --debug
