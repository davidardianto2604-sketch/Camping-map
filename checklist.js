// Simpan & load checklist pakai localStorage
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll("#checklist input[type=checkbox]");

  // Load state dari localStorage
  items.forEach(item => {
    const saved = localStorage.getItem(item.id);
    if (saved === "true") {
      item.checked = true;
    }
    item.addEventListener("change", () => {
      localStorage.setItem(item.id, item.checked);
    });
  });
});