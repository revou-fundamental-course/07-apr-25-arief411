/* meminta user memasukan nama dan di simpan */
const username = prompt('Masukkan Nama Anda:')

/* Menampilkan nama user di dalam elemen */
const displayName = username ? username : "Anonymous";
document.getElementById("username-display").textContent = displayName;
  function tampilkanNama() {
    const input = document.getElementById("name-input").value;
    const displayName = input ? input : "Anonymous";
    document.getElementById("username-display").textContent = displayName;
  }

  function nextGallery () {
    indexGallery += 1;
    showGallery();
}

let indexGallery = 0;

function showGallery () {
    const galleryList = document.getElementsByClassName('featured-image');

    if (indexGallery > galleryList.length -1) {
        indexGallery = 0;
    }

    for (let i = 0; i < galleryList.length; i++) {
        galleryList[i].style = 'display: none';

        galleryList[indexGallery].style = 'display: block';
    }
}

showGallery();

setInterval (() => {
    nextGallery();
}, 3000);

const portfolio = () => {
    containerHome.style.display = "none";
    containerAbout.style.display = "none";
    containerPortfolio.style.display = "block";
    window.scrollTo(0, 0)
    document.title = "TechVerse - Portfolio"
  }

// Ambil elemen form dengan id 'contact-form'
const contactForm = document.getElementById("signup-form");

// Deklarasi varibale loading yang menyimpan nilai boolean unutk mengatas loading
let isLoading = false

// Menampilkan pesan error di elemen dengan id sesuai input
const showError = (id, message) => {
    const errorSpan = document.getElementById(`error-message-${id}`);
    if (errorSpan) {
        errorSpan.textContent = message;
        errorSpan.classList.add("error");
    }
};

// Menghapus semua pesan error dari elemen yang sesuai
const clearErrors = () => {
    const errorSpans = document.querySelectorAll("span[id^='error-message-']");
    errorSpans.forEach((span) => {
        span.textContent = "";
        span.classList.remove("error");
    });
};

// Validasi format email menggunakan regex
const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Validasi nomor telepon minimal 8 digit angka atau simbol +
const isValidPhone = (phone) => {
    return /^[0-9+]{8,}$/.test(phone);
};

// Fungsi unutk menghendle form
const handleForm = () => {
    // Ambil dan bersihkan nilai dari input
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNumber = document.getElementById("phone-number").value.trim();
    const message = document.getElementById("address").value.trim();
    const btnContact = document.getElementById('btn-contact')

    clearErrors(); // Reset error
    let valid = true;

    // Validasi semua input
    if (name.length < 3) {
        showError("name", "Nama harus diisi minimal 3 karakter.");
        valid = false;
    }

    if (!isValidEmail(email)) {
        showError("email", "Format email tidak valid.");
        valid = false;
    }

    if (!isValidPhone(phoneNumber)) {
        showError("phone-number", "Nomor telepon harus minimal 8 digit angka.");
        valid = false;
    }

    if (message.length < 10) {
        showError("address", "Alamat harus minimal 10 karakter.");
        valid = false;
    }

    // Jika semua validasi lolos, tampilkan status loading dan simulasikan pengiriman
    if (valid) {
        isLoading = true

        if(isLoading) {
            btnContact.disabled = true
            btnContact.textContent = "Diproses"
        }

        // Simulasi delay pengiriman 2 detik
        setTimeout(() => {
            isLoading = false

            btnContact.disabled = false
            btnContact.textContent = "submit"

            // Isi data tersembunyi (mungkin untuk dikirim lewat form server-side)
            document.getElementById("sender-name").value = name
            document.getElementById("sender-email").value = email
            document.getElementById("sender-phone-number").value = phoneNumber
            document.getElementById("sender-address").value = address
        }, 2000 )
    }
};          

// Jalankan handleForm saat form disubmit, dan 
contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // mencegah reload halaman
    handleForm();
});