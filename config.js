// ========== KONFIGURASI TOKO ==========
var tokoConfig = {
    nama:    "TOKO Bu Anis",
    alamat:  "Margoyoso, Jepara",
    telepon: "",
    email:   "",
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
    gudangPassword: 'admin123', // Ganti password gudang di sini
    lowStockThreshold: 5,       // Peringatan stok rendah jika stok <= nilai ini
    expiryWarningDays: 30,
    holdMaxSlots: 5
};

// ========== PRODUK KONFIGURASI ==========
var productConfig = {
    categories: ['Makanan', 'Minuman', 'Snack', 'Rokok', 'Sabun & Deterjen', 'Bumbu Dapur', 'Minyak & Gas', 'Obat-obatan', 'ATK', 'Lainnya'],
    units: ['pcs', 'kg', 'liter', 'dus', 'pack', 'box', 'meter', 'roll', 'botol', 'bungkus', 'ikat', 'rim']
};

// ========== PPN & HUTANG KONFIGURASI ==========
var fiturConfig = {
    ppnEnabled: false,
    ppnRate: 11, // persen
    hutangEnabled: true,
    maxHutangPerPelanggan: 5000000
};

// ========== GLOBAL ALIASES ==========
var productCategories = productConfig.categories;
var productUnits = productConfig.units;