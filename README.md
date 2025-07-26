# 🎯 Playwright ハンズオン教材（Next.js サンプルアプリ付き）

## 📁 ディレクトリ構成

```
playwright-hands-on/
├── app/                   # Next.js アプリ
│   ├── pages/
│   │   └── index.tsx      # トップページ
│   ├── package.json
│   └── tsconfig.json
├── tests/
│   └── sample.spec.ts     # Playwright テスト
└── playwright.config.ts   # Playwright 設定ファイル
```

## 🧪 準備手順

### 1. 必要なソフトのインストール

- Node.js（v18 以上推奨）
- VSCode（推奨）
- Playwright VSCode 拡張（任意）

### 2. プロジェクト初期化（すでに済）

```bash
npm init -y
```

## 🚀 サンプルアプリの起動方法

```bash
cd app
npm install
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開くと、以下のような画面が表示されます：

```
ようこそ
これはPlaywrightハンズオン用のサンプルアプリです。
```

## ✅ Playwright のテスト実行方法

別のターミナルでプロジェクトルート（`playwright.config.ts` がある場所）へ移動し：

```bash
npx playwright install
npx playwright test
```

## 🧪 Playwright テスト内容

`tests/sample.spec.ts` に以下のようなテストが含まれています：

```ts
import { test, expect } from '@playwright/test';

test('トップページが正しく表示される', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Sample App/);
  await expect(page.locator('h1')).toContainText('ようこそ');
});
```

## ⚙️ Playwright 設定ファイル

`playwright.config.ts`：

```ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false,
    baseURL: 'http://localhost:3000',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});
```

## 📌 おまけ：追加課題アイデア

- ✅ フォームの入力・送信テスト
- ✅ ログイン処理のE2Eテスト
- ✅ スクリーンショットの取得と確認
- ✅ GitHub Actions などでCI自動実行

---

Happy Testing! 🎉