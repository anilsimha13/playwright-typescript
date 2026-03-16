import { Page } from "@playwright/test";

export class TopMenuComponent {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async selectTopMenuItem(topMenuItemName: string) {
    await this.page.getByRole("link", { name: topMenuItemName }).click();
  }
}
