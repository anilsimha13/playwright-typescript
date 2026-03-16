import { Page } from "@playwright/test";
import { LeftMenuComponent } from "../pages/components/leftMenuComponent";
import { TopMenuComponent } from "../pages/components/topMenuComponent";

export class HomePage {
  private page: Page;
  private leftMenuComponent: LeftMenuComponent;
  private topMenuComponent: TopMenuComponent;

  constructor(page: Page) {
    this.page = page;
    this.leftMenuComponent = new LeftMenuComponent(page);
    this.topMenuComponent = new TopMenuComponent(page);
  }

  get getLeftMenuComponent() {
    return this.leftMenuComponent;
  }

  get getTopMenuComponent() {
    return this.topMenuComponent;
  }
}
