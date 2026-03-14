import { Page } from "@playwright/test";

export class EmpPage {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async addEmpDetails() {
    await this.page.getByRole("link", { name: "PIM" }).click();
    await this.page.getByRole("link", { name: "Add Employee" }).click();
    await this.page.getByRole("textbox", { name: "First Name" }).fill("XYZ");
    await this.page.getByRole("textbox", { name: "Last Name" }).fill("ABC");
    await this.page.getByRole("button", { name: "Save" }).click();
  }
}
