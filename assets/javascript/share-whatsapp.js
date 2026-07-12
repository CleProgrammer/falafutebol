const titulo = document.querySelector("h1").textContent;
const url = window.location.href;

const linkWhatsapp = `https://wa.me/?text=${encodeURIComponent(
`\n\n${titulo}\n${url}`
)}`;

document.getElementById("share-whatsapp").href = linkWhatsapp;
