// ========== KONFIGURASI TOKO ==========
var tokoConfig = {
    nama:    "TOKO Bu Anis",
    alamat:  "Margoyoso, Jepara",
    telepon: "",
    footer:  "Terima kasih! Belanja lagi ya 🛍️"
};

// ========== FIREBASE CONFIGURATION ==========
var firebaseConfig = {
    apiKey: "AIzaSyAwkeEevD_HTk6etUAzaGrSo-PvsMCz1fc",
    authDomain: "pos-kasir-gudang.firebaseapp.com",
    databaseURL: "https://pos-kasir-gudang-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "pos-kasir-gudang",
    storageBucket: "pos-kasir-gudang.firebasestorage.app",
    messagingSenderId: "247002713216",
    appId: "1:247002713216:web:1ab4e7c5876e05dac8ea65"
};

// ========== KONFIGURASI APLIKASI ==========
var appConfig = {
    // Password untuk akses gudang (tetap menggunakan prompt)
    // Tidak disimpan dalam kode, akan diminta saat akses
    lowStockThreshold: 5,
    expiryWarningDays: 30,
    holdMaxSlots: 5
};