import { Page } from "@playwright/test";
import "dotenv/config";
import { Env } from "../../frameWorkConfig/env";

export class LoginPage {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async visit() {
    await this.page.goto(Env.BASE_URL);
  }

  async loginUser() {
    await this.page
      .getByRole("textbox", { name: "Username" })
      .fill(Env.USERNAME);
    await this.page
      .getByRole("textbox", { name: "Password" })
      .fill(Env.PASSWORD);
    await this.page.getByRole("button", { name: "Login" }).click();
  }

  get dashboardText() {
    return this.page.getByRole("heading");
  }

  async logout() {
    await this.page.locator("//p[@class='oxd-userdropdown-name']").click();
    await this.page.getByRole("menuitem", { name: "Logout" }).click();
  }
}
