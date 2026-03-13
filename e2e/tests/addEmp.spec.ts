import { test } from "@playwright/test";
import { LoginPage } from "./pages/loginPage";

test("test", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.visit();
  await loginPage.loginUser();
  await page.getByRole("link", { name: "PIM" }).click();
  await page.getByRole("link", { name: "Add Employee" }).click();
  await page.getByRole("textbox", { name: "First Name" }).fill("XYZ");
  await page.getByRole("textbox", { name: "Last Name" }).fill("ABC");
  await page.getByRole("button", { name: "Save" }).click();
  await loginPage.logout();
});
