'use client';

import Link from 'next/link';
import { useState } from 'react';

const products = [
  {
    id: 'starter',
    name: 'AIエージェント入門ガイド',
    price: 980,
    badge: '入門',
    badgeColor: 'bg-blue-600',
    description: '12体運用の経営者が教える、失敗しないAIエージェント設計の基本。SOUL.mdテンプレート付き。',
    features: [
      '失敗パターン3つと解決策',
      'すぐ使えるSOUL.mdテンプレート',
      '最初の1週間のロードマップ',
      '改善サイクルの作り方',
    ],
  },
  {
    id: 'complete',
    name: 'AIエージェント完全設計マニュアル',
    price: 4980,
    badge: '完全版',
    badgeColor: 'bg-indigo-600',
    description: '12体運用で学んだ人格設計×自動化の全技術。コピペで使えるSOUL.mdテンプレート10種類付き。',
    features: [
      '人格設計の完全フレームワーク',
      'SOUL.mdテンプレート10種類（業種別）',
      '12体運用で見えた落とし穴ベスト5',
      '月商1000万のファネル設計',
      'エージェント間連携の設計方法',
    ],
    popular: true,
  },
];

export default function ProductsPage() {
  const [loading, setLoading] = useState<string | null>(null);

  const handleBuy = async (productId: string) => {
    setLoading(productId);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('エラーが発生しました。もう一度お試しください。');
      }
    } catch {
      alert('エラーが発生しました。もう一度お試しください。');
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className="border-b border-gray-800 sticky top-0 z-50 bg-gray-950/95 backdrop-blur">
        <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold hover:text-indigo-400 transition">🤖 アキラ AI</Link>
          <span className="text-gray-400 text-sm">コンテンツ一覧</span>
        </nav>
      </header>

      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">AI BUSINESS CONTENTS</p>
        <h1 className="text-4xl font-black mb-4">AIビジネス自動化コンテンツ</h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          12体のAIエージェントを実際に運用する経営者が、<br />失敗と成功から学んだ知識を全公開します。
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                product.popular
                  ? 'border-indigo-500 bg-indigo-950/30'
                  : 'border-gray-800 bg-gray-900/50'
              }`}
            >
              {product.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full">人気No.1</span>
                </div>
              )}

              <div className="mb-6">
                <span className={`${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                  {product.badge}
                </span>
              </div>

              <h2 className="text-xl font-bold mb-3">{product.name}</h2>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">{product.description}</p>

              <ul className="space-y-2 mb-8 flex-1">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-indigo-400 mt-0.5 flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-black">¥{product.price.toLocaleString()}</span>
                  <span className="text-gray-500 text-sm">（税込・買い切り）</span>
                </div>
                <button
                  onClick={() => handleBuy(product.id)}
                  disabled={loading === product.id}
                  className={`w-full py-3 rounded-xl font-bold transition text-sm ${
                    product.popular
                      ? 'bg-indigo-600 hover:bg-indigo-500 text-white'
                      : 'bg-white hover:bg-gray-100 text-gray-900'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {loading === product.id ? '処理中...' : '今すぐ購入する →'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-xs mt-8">
          Stripe決済（カード対応）｜購入後即ダウンロード｜
          <Link href="/legal/tokushoho" className="underline hover:text-gray-400">特定商取引法表記</Link>
        </p>
      </section>
    </div>
  );
}
