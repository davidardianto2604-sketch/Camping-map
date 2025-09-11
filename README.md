# Camping Map

Aplikasi web sederhana untuk menampilkan lokasi camping di Indonesia.  
Data lokasi diambil dari **Google Sheets (CSV)** sehingga mudah diupdate tanpa ubah kode.

## 🚀 Demo
Setelah di-publish ke GitHub Pages, aplikasi dapat diakses di:
```
https://username.github.io/camping-map/
```

## 📂 Struktur
- `index.html` → halaman utama
- `style.css` → styling/tampilan
- `script.js` → logika peta (Leaflet.js + PapaParse)
- `README.md` → dokumentasi repo

## 🔑 Fitur
- Peta interaktif (Leaflet.js)
- Marker lokasi camping (dari Google Sheets CSV)
- Popup detail (nama, deskripsi, foto)
- Dummy lokasi (Gunung Prau, Bukit Sikendil)

## 🛠 Cara Update Lokasi
1. Tambahkan data ke Google Sheets (kolom: nama, latitude, longitude, deskripsi, foto).
2. Pastikan sheet di-*Publish to Web* (format CSV).
3. Edit link CSV di `script.js`:
   ```js
   const sheetUrl = "https://docs.google.com/spreadsheets/d/.../pub?output=csv";
   ```
4. Simpan perubahan → otomatis tampil di peta.

## 🌍 Hosting
Gunakan **GitHub Pages**:
1. Buat repo baru `camping-map`.
2. Upload semua file.
3. Aktifkan GitHub Pages di `Settings → Pages`.
4. Website akan tersedia di:
```
https://username.github.io/camping-map/
```
