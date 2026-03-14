import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <header className="border-b border-slate-700 sticky top-0 z-50 bg-slate-900/95 backdrop-blur">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">🤖 Akira AI</h1>
          <Link href="/products" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition">
            商品を見る
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            AIツール活用で<br />ビジネスを加速させる
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            12体のAIエージェントを運用するCEOが、実践から導き出した
            デジタル商品を通じて、あなたのビジネスを次のレベルへ。
          </p>
          <Link 
            href="/products"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition"
          >
            無料コンテンツから始める →
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-800/50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">なぜ Akira AI？</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-700/50 p-8 rounded-lg border border-slate-600">
              <h4 className="text-xl font-semibold mb-4">実運用ベース</h4>
              <p className="text-slate-300">
                12体のAIエージェントを実際に運用している経営者からの実践知。理論ではなく、現場で検証済み。
              </p>
            </div>
            <div className="bg-slate-700/50 p-8 rounded-lg border border-slate-600">
              <h4 className="text-xl font-semibold mb-4">即実装可能</h4>
              <p className="text-slate-300">
                すぐに使える具体的なテンプレート・ワークフロー・実装例を
                詳細に解説。習ったその日から動かせます。
              </p>
            </div>
            <div className="bg-slate-700/50 p-8 rounded-lg border border-slate-600">
              <h4 className="text-xl font-semibold mb-4">アップデート継続</h4>
              <p className="text-slate-300">
                最新のAIツール・テクニック・成功事例を随時追加。
                購入後も常に価値が増していく商品です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h3 className="text-3xl font-bold mb-6">今すぐデジタル商品を購入</h3>
        <p className="text-lg text-slate-300 mb-8">
          まずは無料コンテンツで雰囲気をつかんで。<br />
          次のステップは有料パッケージで深く学べます。
        </p>
        <Link 
          href="/products"
          className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition"
        >
          商品ページへ →
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; 2026 Akira AI / 株式会社エイト AI事業部</p>
          <Link href="/legal/tokushoho" className="hover:text-slate-200 transition">
            特定商取引法に基づく表記
          </Link>
        </div>
      </footer>
    </div>
  );
}
