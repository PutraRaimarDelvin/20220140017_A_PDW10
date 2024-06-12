function kirimData(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value;
    const nim = document.getElementById('nim').value;
    const peminatan = document.querySelector('input[name="peminatan"]:checked').value;
    const alamat = document.getElementById('alamat').value;
    const angkatan = document.getElementById('angkatan').value;
    const tanggal = document.getElementById('tanggal').value;

    const alertMessage = `
    Nama: ${nama}
    NIM: ${nim}
    Peminatan: ${peminatan}
    Alamat: ${alamat}
    Angkatan: ${angkatan}
    Tanggal: ${tanggal}
    `;

    alert(alertMessage);
}
