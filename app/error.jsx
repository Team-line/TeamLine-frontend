"use client"; 
import React from 'react';

export default function Error({ error, reset }) {
      return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center">
            {/* أيقونة تحذير عصرية */}
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4 text-2xl font-bold animate-bounce">
            ⚠️
            </div>

            {/* عنوان الخطأ */}
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
            عذراً، حدث خطأ غير متوقع!
            </h2>

            {/* رسالة الخطأ القادمة من السيرفر (اختياري عرضها للمستخدم) */}
            <p className="text-gray-500 max-w-md mb-6 text-sm bg-gray-50 p-4 rounded-lg border border-gray-200 dir-rtl">
            {error.message || "لم نتمكن من تحميل البيانات، يرجى المحاولة مرة أخرى."}
            </p>

            {/* زر إعادة المحاولة */}
            <button
            onClick={() => reset()}
            className="px-6 py-2.5 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
            إعادة المحاولة 🔄
            </button>
      </div>
      );
}