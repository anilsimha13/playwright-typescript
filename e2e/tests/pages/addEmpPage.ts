import { Page } from "@playwright/test";
import { EmployeeDetails } from "../../testData/dataInterface";

export class AddEmp {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async addEmp(empDetails: EmployeeDetails) {
    await this.page
      .getByRole("textbox", { name: "First Name" })
      .fill(empDetails.firstName);
    await this.page
      .getByRole("textbox", { name: "Last Name" })
      .fill(empDetails.lastName);
    await this.page.getByRole("button", { name: "Save" }).click();
  }
}
