import React from 'react'
import useBoardStore from '@/store/BoardStore'

export const AddColumnPop = ({ setShowAddColumn }) => {

  const { addColumn } = useBoardStore()

  function handleClose() {
    setShowAddColumn(false)
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const columnName = formData.get("title")?.trim();
    if (!columnName) return;
    addColumn(columnName);
    setShowAddColumn(false);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" dir="rtl">
      {/* Overlay - خلفية معتمة ناعمة مع بلور مميز */}
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Form Modal */}
      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-white p-6 shadow-xl border border-gray-100 transition-all duration-300"
      >
        {/* Close Button - زر الإغلاق العلوي تم تعديل مكانه لليسار ليتناسب مع RTL */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute left-4 top-4 text-gray-400 transition-colors hover:text-gray-600 p-1 rounded-lg hover:bg-gray-50"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="mt-2">
          {/* عنوان المودال بلون رمادي داكن واحترافي */}
          <h3 className="mb-4 text-lg font-bold text-gray-800">
            إضافة عمود جديد
          </h3>

          {/* حقل الإدخال بتنسيق ناعم ومتناسق مع الفيرست فوكس اللطيف */}
          <input
            type="text"
            name="title"
            placeholder="مثال: قيد المراجعة..."
            className="w-full text-sm rounded-xl border border-gray-200 bg-gray-50/50 p-3 text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
            required
            autoFocus
          />

          {/* الأزرار السفلية */}
          <div className="mt-6 flex justify-end gap-3">
            {/* زر إلغاء */}
            <button
              type="button"
              onClick={handleClose}
              className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 bg-white hover:bg-gray-50 hover:text-gray-800 transition-all duration-300"
            >
              إلغاء
            </button>

            {/* زر حفظ بالأزرق المتناسق مع باقي الأيقونات */}
            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 active:scale-[0.98] transition-all duration-300 shadow-sm shadow-blue-500/10"
            >
              حفظ العمود
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}