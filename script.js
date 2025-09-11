// Link CSV Google Sheets kamu
const sheetUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSJucmkNP7E8d3pwXm0qx8jmfUZsK6w9vVuGw-wWeamrP9OTs1m4H_NAnW91aAxFQ/pub?output=csv";

// Buat peta Leaflet
const map = L.map('map').setView([-7.2, 110.4], 11); // posisi awal (sekitar Kendal/Gunung Prau)

// Tambah tile layer (OpenStreetMap gratis)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '© OpenStreetMap'
}).addTo(map);

// Tambahkan data dummy
const dummyData = [
  {
    nama: "Gunung Prau",
    latitude: -7.195,
    longitude: 109.92,
    deskripsi: "Lokasi camping populer dengan sunrise yang indah.",
    foto: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Prau_Sunrise.jpg"
  },
  {
    nama: "Bukit Sikendil",
    latitude: -7.175,
    longitude: 110.13,
    deskripsi: "Bukit dengan area camping kecil, cocok untuk pemula.",
    foto: "https://upload.wikimedia.org/wikipedia/commons/7/75/Indonesia_nature.jpg"
  }
];

dummyData.forEach(row => {
  const marker = L.marker([row.latitude, row.longitude]).addTo(map);
  let popupContent = `<b>${row.nama}</b><br>${row.deskripsi}<br>`;
  if (row.foto) popupContent += `<img src="${row.foto}" width="150">`;
  marker.bindPopup(popupContent);
});

// Parse CSV dari Google Sheets
Papa.parse(sheetUrl, {
  download: true,
  header: true,
  complete: function(results) {
    results.data.forEach(row => {
      if (row.latitude && row.longitude) {
        const marker = L.marker([row.latitude, row.longitude]).addTo(map);

        let popupContent = `<b>${row.nama || "Lokasi Tanpa Nama"}</b><br>`;
        if (row.deskripsi) popupContent += `${row.deskripsi}<br>`;
        if (row.foto) popupContent += `<img src="${row.foto}" width="150">`;

        marker.bindPopup(popupContent);
      }
    });
  }
});