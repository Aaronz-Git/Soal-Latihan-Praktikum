// Non-Void: menghasilkan nilai
function kelilingPersegi(sisi) {
    return 4 * sisi;
}

// Void: menampilkan hasil
function cetakKeliling(sisi) {
    let keliling = kelilingPersegi(sisi);
    console.log('Persegi dengan sisi ' + sisi + ' memiliki keliling: ' + keliling);
}

cetakKeliling(6);
cetakKeliling(10); 