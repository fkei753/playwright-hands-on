// pages/dashboard.tsx
import React from 'react';
import Head from 'next/head';

export default function DashboardPage() {
  return (
    <>
      <Head>
        <title>ダッシュボード</title>
      </Head>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>ようこそダッシュボードへ！</h1>
        <p>ログインボタンを押すとここに来ます。</p>
      </div>
    </>
  );
}
