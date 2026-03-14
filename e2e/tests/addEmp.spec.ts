import { test } from "@playwright/test";
import { LoginPage } from "./pages/loginPage";
import { EmpPage } from "./pages/EmpPage";

test("test", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const empPage = new EmpPage(page);
  await loginPage.visit();
  await loginPage.loginUser();
  await empPage.addEmpDetails();
  await loginPage.logout();
});
