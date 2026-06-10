import React from 'react'
import AuthForm from '@/components/AuthForm';

export default function Login() {
      return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          تسجيل الدخول
        </h1>
        <AuthForm />
      </div>
    </main>
  );
}
