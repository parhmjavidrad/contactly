
import ContactItem from "./ContactItem";

function ContactList({
  contacts,
  selectedContacts,
  setSelectedContacts,
  onEdit,
  onDelete
}) {
  const selectAll = () => {
    if (selectedContacts.length === contacts.length) {
      setSelectedContacts([]);
    } else {
      setSelectedContacts(contacts.map((contact) => contact.id));
    }
  };

  const handleSelect = (id) => {
    if (selectedContacts.includes(id)) {
      setSelectedContacts(
        selectedContacts.filter((item) => item !== id)
      );
    } else {
      setSelectedContacts([...selectedContacts, id]);
    }
  };

  return (
    <div className="contact-list">
      <div className="list-header">
        <div className="contact-info">
          <input
            type="checkbox"
            checked={
              contacts.length > 0 &&
              contacts.every((contact) =>
                selectedContacts.includes(contact.id)
              )
            }
            onChange={selectAll}
          />
          <strong>نام مخاطب</strong>
        </div>

        <strong>ایمیل</strong>
        <strong>شماره تماس</strong>
        <strong>گروه</strong>
        <strong>عملیات</strong>
      </div>

      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          isSelected={selectedContacts.includes(contact.id)}
          onSelect={handleSelect}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ContactList;