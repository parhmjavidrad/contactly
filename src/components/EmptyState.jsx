function EmptyState({ search, onAdd }) {
  return (
    <div className="empty-state">
      <div className="empty-icon">♧</div>

      <h3>{search ? "مخاطبی پیدا نشد!" : "هنوز مخاطبی ندارید!"}</h3>

      <p>
        {search
          ? "عبارت جستجو را تغییر دهید."
          : "برای شروع، اولین مخاطب خود را اضافه کنید."}
      </p>

      {!search && (
        <button className="primary-btn" onClick={onAdd}>
          افزودن مخاطب
        </button>
      )}
    </div>
  );
}

export default EmptyState;
