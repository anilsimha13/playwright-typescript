import { test, expect } from "@playwright/test";
import { LoginPage } from "./pages/loginPage";

test("User Login test", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.visit();
  await loginPage.loginUser();
  await expect(loginPage.dashboardText).toContainText("Dashboard");
  await loginPage.logout();
});
