import { useState } from "react";

import initialContacts from "./data/contacts";

import Header from "./components/Header";
import Stats from "./components/Stats";
import SearchBar from "./components/SearchBar";
import ContactForm from "./components/ContactForm";
import Modal from "./components/Modal";
import EmptyState from "./components/EmptyState";
import SideBar from "./components/SideBar";

import "./App.css";
import ContactList from "./components/ContactsList";

function App() {
  const [contacts, setContacts] = useState(initialContacts);

  const [search, setSearch] = useState("");

  const [selectedContacts, setSelectedContacts] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const [editingContact, setEditingContact] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const [deleteType, setDeleteType] = useState("");

  const [targetContact, setTargetContact] = useState(null);

  const [pendingContact, setPendingContact] = useState(null);

  // جستجوی مخاطبین
  const filteredContacts = contacts.filter((contact) => {
    const searchText = search.toLowerCase().trim();

    return (
      contact.firstName.toLowerCase().includes(searchText) ||
      contact.lastName.toLowerCase().includes(searchText) ||
      contact.email.toLowerCase().includes(searchText)
    );
  });

  const handleAdd = () => {
    setEditingContact(null);
    setShowForm(true);
  };

  const handleEdit = (contact) => {
    setEditingContact(contact);
    setShowForm(true);
  };

  const handleSave = (data) => {
    setPendingContact(data);
    setDeleteType("save");
    setShowModal(true);
  
  };

  const handleDelete = (contact) => {
    setTargetContact(contact);
    setDeleteType("single");
    setShowModal(true);
  };

  const handleBulkDelete = () => {
    if (selectedContacts.length === 0) return;

    setDeleteType("multiple");
    setShowModal(true);
  };

const confirmDelete = () => {
  if (deleteType === "single") {
    setContacts(
      contacts.filter((contact) => contact.id !== targetContact.id)
    );

    setSelectedContacts(
      selectedContacts.filter((id) => id !== targetContact.id)
    );
  }

  if (deleteType === "multiple") {
    setContacts(
      contacts.filter((contact) => !selectedContacts.includes(contact.id))
    );

    setSelectedContacts([]);
  }

  if (deleteType === "save") {
    if (editingContact) {
      setContacts(
        contacts.map((contact) =>
          contact.id === editingContact.id
            ? {
                ...pendingContact,
                id: editingContact.id,
                color: editingContact.color
              }
            : contact
        )
      );
    } else {
      const colors = [
        "#8174E8",
        "#E58AA9",
        "#45AFA0",
        "#E6A44D",
        "#5795D8",
        "#C27BC5"
      ];

      const newContact = {
        ...pendingContact,
        id: Date.now(),
        color: colors[Math.floor(Math.random() * colors.length)]
      };

      setContacts([...contacts, newContact]);
    }

    setShowForm(false);
    setEditingContact(null);
    setPendingContact(null);
  }

  setShowModal(false);
  setTargetContact(null);
  setDeleteType("");
};


const cancelDelete = () => {
  setShowModal(false);
  setTargetContact(null);

  if (deleteType === "save") {
    setPendingContact(null);
  }

  setDeleteType("");
};



  return (
    <div className="app-container">
      <SideBar />

      <main className="main-content">
        <Header onAdd={handleAdd} />

        <Stats contacts={contacts} selectedCount={selectedContacts.length} />

        <section className="contacts-section">
          <div className="section-top">
            <div>
              <h2>لیست مخاطبین</h2>

              <p>{filteredContacts.length} مخاطب پیدا شد</p>
            </div>

            {selectedContacts.length > 0 && (
              <button className="danger-btn" onClick={handleBulkDelete}>
                حذف انتخاب‌شده‌ها ({selectedContacts.length})
              </button>
            )}
          </div>

          <SearchBar search={search} setSearch={setSearch} />

          {filteredContacts.length > 0 ? (
            <ContactList
              contacts={filteredContacts}
              selectedContacts={selectedContacts}
              setSelectedContacts={setSelectedContacts}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ) : (
            <EmptyState search={search} onAdd={handleAdd} />
          )}
        </section>

        <footer className="footer">
          دوره ریکت Botostart
          <span>♥</span>
        </footer>
      </main>


      {showForm && (
  <ContactForm
    contact={editingContact}
    onSave={handleSave}
    onClose={() => {
      setShowForm(false);
      setEditingContact(null);
    }}
  />
)}

      {showModal && (
        <Modal
          message={
            deleteType === "single"
              ? `آیا از حذف مخاطب ${targetContact.firstName} ${targetContact.lastName} مطمئن هستید؟`
              : deleteType === "multiple"
                ? `آیا از حذف ${selectedContacts.length} مخاطب انتخاب‌شده مطمئن هستید؟`
                : editingContact
                  ? "آیا از ذخیره تغییرات مخاطب اطمینان دارید؟"
                  : "آیا اطلاعات مخاطب جدید را تأیید می‌کنید؟"
          }
          confirmText={
            deleteType === "save" ? "بله، تأیید و ذخیره" : "بله، حذف شود"
          }
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
}

export default App;
