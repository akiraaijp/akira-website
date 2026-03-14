'use client';

import Link from 'next/link';
import { useState } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  stripeUrl?: string;
}

const products: Product[] = [
  {
    id: 'free-guide',
    name: '無料：AIエージェント入門ガイド',
    price: 0,
    description: 'AIエージェント活用の基本をPDF形式で解説。実際の事例付き。',
    features: [
      'AIエージェントの基本概念',
      'OpenClawの使い方',
      'はじめての自動化ワークフロー',
      'よくある質問への回答'
    ],
    stripeUrl: '#' // 無料なので不要
  },
  {
    id: 'starter-pack',
    name: 'スターターパック',
    price: 4980,
    description: '12体のAIエージェントを実運用する経営者が、実装から運用までを解説。',
    features: [
      'エージェント設計の基本パターン',
      '実装テンプレート（Slack連携、Gmail自動化など）',
      'SOUL.md: 人格・価値観の定義方法',
      'トラブルシューティングガイド',
      '月1回のアップデート'
    ],
    stripeUrl: 'https://buy.stripe.com/example-starter' // 実際のStripe URLに置き換え
  },
  {
    id: 'pro-bundle',
    name: 'プロバンドル',
    price: 29800,
    description: 'スターターパック + 詳細な実装ガイド + 1か月のメールサポート付き。',
    features: [
      'スターターパックの全内容',
      'エージェント間の連携設計',
      'Stripe・Telegram・その他ツール統合ガイド',
      'セキュリティ・メモリ管理のベストプラクティス',
      'ビジネス活用の実装パターン',
      '1ヶ月のメールサポート',
      '優先アップデート配信'
    ],
    stripeUrl: 'https://buy.stripe.com/example-pro' // 実際のStripe URLに置き換え
  }
];

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <header className="border-b border-slate-700 sticky top-0 z-50 bg-slate-900/95 backdrop-blur">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold hover:text-blue-400 transition">
            🤖 Akira AI
          </Link>
          <span className="text-slate-400">商品一覧</span>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-4">デジタル商品ラインアップ</h2>
        <p className="text-center text-slate-300 max-w-2xl mx-auto">
          無料から有料まで。あなたのレベルに合わせて選べます。
        </p>
      </section>

      {/* Products Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`rounded-lg border transition ${
                selectedProduct === product.id
                  ? 'border-blue-500 bg-slate-700/50'
                  : 'border-slate-600 bg-slate-700/30 hover:border-slate-500'
              }`}
            >
              <div className="p-8">
                {/* Price */}
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <div className="mb-4">
                  {product.price === 0 ? (
                    <p className="text-3xl font-bold text-green-400">無料</p>
                  ) : (
                    <div>
                      <p className="text-sm text-slate-400 mb-1">金額</p>
                      <p className="text-3xl font-bold">¥{product.price.toLocaleString('ja-JP')}</p>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-slate-300 mb-6">{product.description}</p>

                {/* Features */}
                <div className="mb-8">
                  <p className="text-sm font-semibold text-slate-400 mb-3">含まれるもの</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-slate-300 text-sm">
                        <span className="text-blue-400 mr-3">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                {product.price === 0 ? (
                  <button
                    onClick={() => alert('ダウンロードリンクはメール送信されます')}
                    className="w-full bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition"
                  >
                    ダウンロード
                  </button>
                ) : (
                  <a
                    href={product.stripeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition text-center"
                  >
                    購入する
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-800/50 py-16 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">よくある質問</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-3">返金は受け付けていますか？</h4>
              <p className="text-slate-400">
                デジタル商品のため、原則として購入後の返金・キャンセルは受け付けておりません。
                ご不明な点がある場合は、購入前にお問い合わせください。
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">支払い方法は？</h4>
              <p className="text-slate-400">
                クレジットカード（Visa、Mastercard、American Express）での決済に対応しています。
                Stripe経由で安全に処理されます。
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">購入後、いつ受け取れますか？</h4>
              <p className="text-slate-400">
                購入完了後、即座にダウンロードリンクがメールで送信されます。
                サポート付きプランはメールサポートの詳細を同時にお送りします。
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">プランのアップグレードは？</h4>
              <p className="text-slate-400">
                お問い合わせください。段階的な購入に対応します。
                支払った金額は差分決済にあてることが可能です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; 2026 Akira AI / 株式会社エイト AI事業部</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link href="/legal/tokushoho" className="hover:text-slate-200 transition">
              特定商取引法に基づく表記
            </Link>
            <a href="mailto:akira.ai.eight@gmail.com" className="hover:text-slate-200 transition">
              お問い合わせ
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
