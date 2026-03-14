import Link from 'next/link';

export default function TokushohePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <header className="border-b border-slate-700 sticky top-0 z-50 bg-slate-900/95 backdrop-blur">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold hover:text-blue-400 transition">
            🤖 Akira AI
          </Link>
          <span className="text-slate-400">特定商取引法に基づく表記</span>
        </nav>
      </header>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">特定商取引法に基づく表記</h2>

        <div className="space-y-8 text-slate-300">
          {/* 販売業者 */}
          <div className="bg-slate-700/30 border border-slate-600 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-3">販売業者</h3>
            <p>株式会社エイト</p>
          </div>

          {/* 代表者 */}
          <div className="bg-slate-700/30 border border-slate-600 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-3">代表者</h3>
            <p>大野隼人</p>
          </div>

          {/* 所在地 */}
          <div className="bg-slate-700/30 border border-slate-600 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-3">所在地</h3>
            <p>〒162-0822 東京都新宿区下宮比町2番28号-508</p>
          </div>

          {/* 連絡先 */}
          <div className="bg-slate-700/30 border border-slate-600 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-3">連絡先（お問い合わせ）</h3>
            <p>
              <a 
                href="mailto:akira.ai.eight@gmail.com" 
                className="text-blue-400 hover:text-blue-300 transition"
              >
                akira.ai.eight@gmail.com
              </a>
            </p>
          </div>

          {/* 販売価格 */}
          <div className="bg-slate-700/30 border border-slate-600 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-3">販売価格</h3>
            <p>各商品ページに記載されている価格（税込み）</p>
          </div>

          {/* 支払方法 */}
          <div className="bg-slate-700/30 border border-slate-600 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-3">支払方法</h3>
            <p>クレジットカード（Stripe経由）</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
              <li>Visa</li>
              <li>Mastercard</li>
              <li>American Express</li>
            </ul>
          </div>

          {/* 支払時期 */}
          <div className="bg-slate-700/30 border border-slate-600 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-3">支払時期</h3>
            <p>お申込み完了時点で、クレジットカード決済が実行されます。</p>
          </div>

          {/* 引渡時期 */}
          <div className="bg-slate-700/30 border border-slate-600 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-3">引渡時期（納期）</h3>
            <p>購入完了後、即座にダウンロードリンクをメールで送信いたします。</p>
          </div>

          {/* 返品・キャンセル */}
          <div className="bg-slate-700/30 border border-slate-600 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-3">返品・キャンセルについて</h3>
            <p className="mb-4">
              本商品はデジタルコンテンツ（PDF、ダウンロードファイル等）であるため、
              購入後の返品・キャンセルは原則として受け付けておりません。
            </p>
            <p className="text-sm text-slate-400">
              ただし、以下の場合は例外として対応を検討させていただきます。
              詳しくはお問い合わせください。
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm mt-4">
              <li>商品が正常にダウンロードできない場合</li>
              <li>ご購入から7日以内のご連絡で、内容が不適切だった場合</li>
            </ul>
          </div>

          {/* 著作権 */}
          <div className="bg-slate-700/30 border border-slate-600 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-3">著作権について</h3>
            <p>
              本商品の著作権および知的財産権は、株式会社エイトに帰属します。
              個人使用の範囲内での利用を認めます。
              許可なく転売・配布・改変することは禁止されています。
            </p>
          </div>

          {/* 責任制限 */}
          <div className="bg-slate-700/30 border border-slate-600 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-3">免責事項</h3>
            <p>
              本商品の内容に基づいて行われた結果については、一切の責任を負いません。
              ご利用者の判断と責任において実装・運用してください。
            </p>
          </div>

          {/* 個人情報 */}
          <div className="bg-slate-700/30 border border-slate-600 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-3">個人情報の取り扱い</h3>
            <p>
              ご購入時に提供いただいた個人情報（メールアドレス等）は、
              本商品の配信およびサービス向上のためのみに使用されます。
              第三者への提供・売却は行いません。
            </p>
          </div>

          {/* 最終更新日 */}
          <div className="bg-slate-700/30 border border-slate-600 p-6 rounded-lg text-sm text-slate-400">
            <p>最終更新日：2026年3月14日</p>
          </div>
        </div>

        {/* Back to Products */}
        <div className="mt-12 text-center">
          <Link 
            href="/products" 
            className="text-blue-400 hover:text-blue-300 transition"
          >
            ← 商品ページに戻る
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50 py-8 mt-12">
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
