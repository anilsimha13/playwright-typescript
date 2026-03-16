import { test } from "@playwright/test";
import { LoginPage } from "./pages/loginPage";
import { HomePage } from "./pages/homePage";
import { AddEmp } from "./pages/addEmpPage";

test.only("test", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const addEmp = new AddEmp(page);
  await loginPage.visit();
  await loginPage.loginUser();
  await homePage.getLeftMenuComponent.selectLeftMenuItem("PIM");
  await homePage.getTopMenuComponent.selectTopMenuItem("Add Employee");
  await addEmp.addEmp();
  await loginPage.logout();
});
