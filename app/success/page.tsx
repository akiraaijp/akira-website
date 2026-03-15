export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-3xl font-bold text-white mb-4">購入ありがとうございます！</h1>
        <p className="text-gray-400 mb-8">
          ご登録のメールアドレスにコンテンツのリンクをお送りします。<br />
          数分以内に届かない場合は迷惑メールフォルダをご確認ください。
        </p>
        <a
          href="/products"
          className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-lg transition"
        >
          他のコンテンツを見る
        </a>
      </div>
    </div>
  );
}
