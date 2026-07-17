function DeleteModal({ isOpen, onClose, onDelete }) {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white rounded-2xl p-8 w-full max-w-md">

        <h2 className="text-2xl font-bold text-red-600">
          Delete Student
        </h2>

        <p className="text-gray-600 mt-4">
          Are you sure you want to delete this student?
          This action cannot be undone.
        </p>

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl border hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={onDelete}
            className="px-6 py-3 rounded-xl bg-red-600 text-white hover:bg-red-700"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default DeleteModal;