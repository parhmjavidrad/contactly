
function Modal({
  message,
  onConfirm,
  onCancel,
  confirmText
}) {
  return (
    <div className="modal-overlay">
      <div className="confirm-modal">
        <div className="warning-icon">!</div>

        <h3>آیا مطمئن هستید؟</h3>

        <p>{message}</p>

        <div className="form-actions">
          <button className="cancel-btn" onClick={onCancel}>
            انصراف
          </button>

          <button className="danger-btn" onClick={onConfirm}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
