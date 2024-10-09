document.getElementById("burger").addEventListener("click", function () {
  const Menu = document.getElementById("menu");
  Menu.classList.toggle("active");
});

const USER_ID = 'service_hdwar2q';
const TEMPLATE_ID = 'template_edxmnj9';

// Inisialisasi EmailJS
emailjs.init(USER_ID);

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman default form

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    emailjs.send('service_your_service_id', TEMPLATE_ID, templateParams)
        .then(function(response) {
            document.getElementById('result').innerText = 'Pesan berhasil dikirim!';
        }, function(error) {
            document.getElementById('result').innerText = 'Terjadi kesalahan saat mengirim pesan.';
            console.error('Error:', error);
        });
});
