import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-02-25.clover' as any,
});

const PRODUCTS: Record<string, { name: string; price: number; description: string }> = {
  'starter': {
    name: 'AIエージェント入門ガイド',
    price: 980,
    description: '失敗しないAIエージェント設計の基本 + SOUL.mdテンプレート付き',
  },
  'complete': {
    name: 'AIエージェント完全設計マニュアル',
    price: 4980,
    description: '12体運用で学んだ人格設計×自動化の全技術',
  },
};

export async function POST(req: NextRequest) {
  try {
    const { productId } = await req.json();
    const product = PRODUCTS[productId];

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'jpy',
            product_data: {
              name: product.name,
              description: product.description,
            },
            unit_amount: product.price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?product=${productId}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/products`,
      locale: 'ja',
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Stripe error:', error);
    return NextResponse.json({ error: 'Checkout failed' }, { status: 500 });
  }
}
