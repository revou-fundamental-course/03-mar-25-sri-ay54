function validateForm() {
    const form = document.forms["message-form"];

    const name = form["full-name"].value.trim();
    const email = form["email"].value.trim();
    const messages = form["messages"].value.trim();

    // Validasi input tidak boleh kosong
    if (name === "" || email === "" || messages === "") {
        alert("Tidak boleh ada yang kosong!");
        return false;
    }

    // Memperbarui tampilan dengan input yang dimasukkan
    setSenderUI(name, email, messages);

    return false; // Mencegah reload halaman setelah submit
}

function setSenderUI(name, email, messages) {
    document.getElementById("sender-full-name").innerText = name;
    document.getElementById("sender-email").innerText = email;
    document.getElementById("sender-messages").innerText = messages;
}
