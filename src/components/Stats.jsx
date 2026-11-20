function Stats({ contacts, selectedCount }) {
  const workContacts = contacts.filter(
    (contact) => contact.category === "کاری",
  ).length;

  const familyContacts = contacts.filter(
    (contact) => contact.category === "خانواده",
  ).length;

  return (
    <div className="stats">
      <div className="stat-card">
        <div className="stat-icon purple">♧</div>
        <div>
          <p>کل مخاطبین</p>
          <h2>{contacts.length}</h2>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon green">▣</div>
        <div>
          <p>مخاطبین کاری</p>
          <h2>{workContacts}</h2>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon orange">♡</div>
        <div>
          <p>مخاطبین خانواده</p>
          <h2>{familyContacts}</h2>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon pink">✓</div>
        <div>
          <p>انتخاب شده</p>
          <h2>{selectedCount}</h2>
        </div>
      </div>
    </div>
  );
}

export default Stats;
