"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import api from "../utils/api"; // تأكد من المسار الصحيح لملف الـ api.js

export default function AuthForm() {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("جاري المعالجة...");

    const endpoint = mode === "login" ? "/api/v1/auth/sign-in" : "/api/v1/auth/sign-up";
    const data = mode === "login" ? { email, password } : { name, email, password };

    try {
      const result = await api.post(endpoint, data);
      setMessage(result.message || "تمت العملية بنجاح");
      router.push('../')
    } catch (error) {
      console.error("API Error:", error);
      const errorMessage = 
      error.response?.data?.message || "حدث خطأ في الاتصال، تأكد من تشغيل السيرفر";
      setMessage(errorMessage);
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="w-full">
      {/* التبويب (Tabs) */}
      <div className="flex mb-6 rounded-lg border border-gray-200 overflow-hidden">
        <button
          type="button"
          className={`flex-1 py-2 text-sm font-medium transition-colors ${mode === "login" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-600"}`}
          onClick={() => { setMode("login"); setMessage(""); }}
        >
          تسجيل الدخول
        </button>
        <button
          type="button"
          className={`flex-1 py-2 text-sm font-medium transition-colors ${mode === "register" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-600"}`}
          onClick={() => { setMode("register"); setMessage(""); }}
        >
          إنشاء حساب
        </button>
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-5">
        {mode === "login" ? "مرحباً بعودتك" : "حساب جديد"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === "register" && (
          <div>
            <label className="block text-sm text-gray-600 mb-1">الاسم</label>
            <input
              className="w-full px-4 py-2 rounded-lg border text-black border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              type="text"
              placeholder="اسمك الكامل"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}

        <div>
          <label className="block text-sm text-gray-600 mb-1">البريد الإلكتروني</label>
          <input
            className="w-full px-4 py-2 rounded-lg border text-black border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">كلمة المرور</label>
          <input
            className="w-full px-4 py-2 rounded-lg border text-black border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          className="w-full py-2.5 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors disabled:opacity-50"
          type="submit"
          disabled={loading}
        >
          {loading ? "جاري الإرسال..." : mode === "login" ? "دخول" : "إنشاء حساب"}
        </button>
      </form>

      {/* منطقة عرض الرسائل - تم تغيير اللون للأحمر لضمان الوضوح عند الأخطاء */}
      {message && (
        <p className="mt-4 text-center text-sm font-semibold text-red-600">
          {message}
        </p>
      )}
    </div>
  );
}