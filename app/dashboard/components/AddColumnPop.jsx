import React from 'react'
import useBoardStore from '@/store/BoardStore'

export const AddColumnPop = ({setShowAddColumn}) => {

  const {project,tasks,loading,columns,addColumn}=useBoardStore()

    function handleClose(){
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
  {/* Overlay */}
  <div
    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
    onClick={handleClose}
  />

  {/* Form Modal */}
  <form
    onSubmit={handleSubmit}
    className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 shadow-2xl dark:bg-gray-900"
  >
    {/* Close Button */}
    <button
      type="button"
      onClick={handleClose}
      className="absolute right-4 top-4 text-gray-400 transition-colors hover:text-gray-600 "
    >
      <svg
        className="h-6 w-6"
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
      <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
        عنوان العمود
      </h3>

      <input
        type="text"
        name="title"
        placeholder="اكتب هنا..."
        className="w-full rounded-lg border border-gray-300 p-3 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
        required
      />

      <div className="mt-6 flex justify-end gap-3">
        <button
          type="button"
          onClick={handleClose}
          className="rounded-lg border px-4 py-2 hover:bg-gray-100 dark:hover:text-black transition-all duration-500"
        >
          إلغاء
        </button>

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-4 py-2 text-white  hover:bg-blue-900 transition-all duration-500"
        >
          حفظ
        </button>
      </div>
    </div>
  </form>
</div>
  );
}
