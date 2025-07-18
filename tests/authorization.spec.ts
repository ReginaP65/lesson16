import dotenv from 'dotenv';
dotenv.config();
import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

const randomUsername= faker.internet.username();
const randomPassword= faker.internet.password();


test('Sign-in button is enable', async ({ page }) => {
  await page.goto(process.env.APP_URL);
  await page.getByTestId('username-input').fill(randomUsername);
  await page.getByTestId(`password-input`).fill(randomPassword);
  await expect(page.getByTestId(`signIn-button`)).toBeEnabled();
});

test('Authorization error pop-up is displayed ', async ({ page }) => {
  await page.goto(process.env.APP_URL);
  await page.getByTestId('username-input').fill(randomUsername);
  await page.getByTestId(`password-input`).fill(randomPassword);
  await page.getByTestId(`signIn-button`).click();
  await expect(page.getByTestId(`authorizationError-popup`)).toBeVisible();
});


