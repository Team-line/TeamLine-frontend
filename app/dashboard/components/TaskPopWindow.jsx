"use client";
import usePopStore from "@/store/PopStore";

export const TaskPopWindow = () => {
  const { isModalOpen, closeModal, modalData } = usePopStore();

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeModal}
      />

      {/* modal */}
      <div className="relative w-[90%] max-w-md rounded-2xl bg-slate-900 text-white p-6 shadow-2xl animate-fadeIn">
        
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        {modalData ? (
          <>
            <h2 className="text-lg font-bold mb-2">Edit Task</h2>
            <p className="text-gray-400">{modalData.title}</p>
          </>
        ) : (
          <p>No Data</p>
        )}
      </div>
    </div>
  );
};