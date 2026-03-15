# Akira AI Website

株式会社エイト AI事業部の公式Webサイト。Next.js + Tailwind CSS + Stripe統合。

## セットアップ

```bash
npm install
npm run dev
```

ローカルでの開発: http://localhost:3000

## Vercelへのデプロイ

### 方法1: Vercel CLIを使用

```bash
npm install -g vercel
vercel
```

### 方法2: GitHub連携（推奨）

1. GitHubにリポジトリをPush
2. https://vercel.com から新規プロジェクトを作成
3. GitHubリポジトリを選択してデプロイ

## 環境変数

デプロイ時に以下を設定してください：

- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Stripe公開キー
- `STRIPE_SECRET_KEY`: Stripe秘密キー

## ページ構成

- `/`: ランディングページ
- `/products`: 商品一覧・販売ページ
- `/legal/tokushoho`: 特定商取引法に基づく表記

## 次のステップ

1. [ ] Stripe テストキーを取得
2. [ ] `.env.local`を作成してキーを設定
3. [ ] Stripeチェックアウト機能を実装
4. [ ] Vercelへデプロイ
5. [ ] 独自ドメインを接続
