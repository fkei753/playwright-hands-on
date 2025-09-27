// pages/login.tsx
import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <>
      <Head>
        <title>ログインページ</title>
      </Head>
      <div style={{ maxWidth: '400px', margin: '50px auto' }}>
        <h1>ログイン</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label>
              メールアドレス:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ width: '100%', padding: '8px', marginTop: '4px' }}
                name='email'
              />
            </label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>
              パスワード:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ width: '100%', padding: '8px', marginTop: '4px' }}
                name='password'
              />
            </label>
          </div>
          <button type="submit" style={{ padding: '10px 20px' }}>ログイン</button>
        </form>
      </div>
    </>
  );
}
