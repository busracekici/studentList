window.addEventListener("DOMContentLoaded", function () {
  const tbody = document.getElementById("table-body");
  const inputAd = document.getElementById("input-ad");
  const inputSoyad = document.getElementById("input-soyad");
  const inputBolum = document.getElementById("input-bolum");
  const inputNo = document.getElementById("input-no");
  const form = document.getElementById("öğrenci-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const ad = inputAd.value.trim();
    const soyad = inputSoyad.value.trim();
    const bolum = inputBolum.value.trim();
    const no = inputNo.value.trim();

    if (!ad || !soyad || !bolum || !no) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }
    const tr = document.createElement("tr");
    tr.innerHTML = `
  <td>${ad}</td>
  <td>${soyad}</td>
  <td>${bolum}</td>
  <td>${no}</td>
  `;
    tbody.appendChild(tr);
    form.reset();
  });
});
