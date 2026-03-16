import { Page } from "@playwright/test";

export class LeftMenuComponent {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async selectLeftMenuItem(leftMenuItemName: string) {
    await this.page.getByRole("link", { name: leftMenuItemName }).click();
  }
}
