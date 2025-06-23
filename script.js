document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const pesan = document.getElementById("pesan").value;
  
    if (nama && email && pesan) {
      document.getElementById("response").textContent =
        "Terima kasih, " + nama + "! Pesan Anda telah dikirim.";
    } else {
      document.getElementById("response").textContent =
        "Mohon lengkapi semua data.";
    }
  
    // Kosongkan form
    document.getElementById("contactForm").reset();
  });
  