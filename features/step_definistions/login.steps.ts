import { Given, When, Then, After, setWorldConstructor } from "@cucumber/cucumber";
import { Page, Browser, chromium } from "playwright";
import { expect } from "@playwright/test";

class CustomWorld {
  page: Page | null = null;
  browser: Browser | null = null;
}

setWorldConstructor(CustomWorld);



Given("TOPページを開いている", async function () {
  this.browser = await chromium.launch({ headless: false, slowMo: 1000 });
  const context = await this.browser.newContext();
  this.page = await context.newPage();
  await this.page.goto("http://localhost:3000/");
});

When("ログインページに遷移する", async function () {
  if (!this.page) throw new Error("Page not initialized");
  await this.page.click("text=ログインページへ");
});

When(
  "ユーザー名 {string} とパスワード {string} を入力する",
  async function (username: string, password: string) {
    if (!this.page) throw new Error("Page not initialized");
    await this.page.fill('input[name="email"]', username);
    await this.page.fill('input[name="password"]', password);
    await this.page.click('button[type="submit"]');
  }
);

Then("処理が完了する", async function () {
  if (!this.page) throw new Error("Page not initialized");
  await expect(this.page.locator("h1")).toContainText("ようこそダッシュボードへ！");
});

After(async function () {
  if (this.browser) await this.browser.close();
});
