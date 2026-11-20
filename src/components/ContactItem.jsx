
function ContactItem({
  contact,
  isSelected,
  onSelect,
  onEdit,
  onDelete
}) {
  const fullName = contact.firstName + " " + contact.lastName;

  return (
    <div className="contact-row">
      <div className="contact-info">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onSelect(contact.id)}
        />

        <div
          className="avatar"
          style={{ backgroundColor: contact.color }}
        >
          {contact.firstName[0]}
        </div>

        <div>
          <strong>{fullName}</strong>
          <small>{contact.company || "بدون شرکت"}</small>
        </div>
      </div>

      <div className="contact-email">
        {contact.email}
      </div>

      <div className="contact-phone">
        {contact.phone}
      </div>

      <div>
        <span className="category">
          {contact.category}
        </span>
      </div>

      <div className="contact-actions">
        <button
          className="edit-btn"
          title="ویرایش"
          onClick={() => onEdit(contact)}
        >
          ✏️
        </button>

        <button
          className="delete-btn"
          title="حذف"
          onClick={() => onDelete(contact)}
        >
         🗑️
             </button>
      </div>
    </div>
  );
}

export default ContactItem;