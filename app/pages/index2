import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Sample App</title>
      </Head>
      <div>
        <h1>ようこそ</h1>
        <p data-testid="welcome-text">これはPlaywrightハンズオン用のサンプルアプリです。</p>
      </div>
      <div>
        <button onClick={() => router.push('/login')}>
          ログインページへ
        </button>
      </div>
    </>
  );
}
