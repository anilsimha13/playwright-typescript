import { Page } from "@playwright/test";

export class AddEmp {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async addEmp() {
    await this.page.getByRole("textbox", { name: "First Name" }).fill("XYZ");
    await this.page.getByRole("textbox", { name: "Last Name" }).fill("ABC");
    await this.page.getByRole("button", { name: "Save" }).click();
  }
}
