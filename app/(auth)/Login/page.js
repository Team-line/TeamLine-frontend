import { cookies } from 'next/headers'
import React from 'react'
import AuthForm from '@/components/AuthForm';

export default async function Login() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value || '';

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          تسجيل الدخول
        </h1>
        {/* نمرر التوكن باسم initialToken */}
        <AuthForm initialToken={token} />
      </div>
    </main>
  );
}