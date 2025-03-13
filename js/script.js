function validateForm() {
    const form = document.forms["message-form"];

    const name = form["full-name"].value;
    const email = form["email"].value;
    const messages = form["messages"].value;

    // Validasi input tidak boleh kosong
    if (name == "" || email == "" || messages == "") {
        alert("Form tidak boleh ada yang kosong ya!");
        return false;
    }

    // Memperbarui tampilan dengan input yang dimasukkan
    setSenderUI(name, email, messages);

    return false; // Mencegah reload halaman setelah submit
}

function setSenderUI(name, email, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-email").innerHTML = email;
    document.getElementById("sender-messages").innerHTML = messages;
}
