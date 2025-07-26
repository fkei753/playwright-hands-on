import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sample App</title>
      </Head>
      <div>
        <h1>ようこそ</h1>
        <p data-testid="welcome-text">これはPlaywrightハンズオン用のサンプルアプリです。</p>
      </div>
    </>
  )
} 
