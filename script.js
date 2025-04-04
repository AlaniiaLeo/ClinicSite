document.addEventListener("DOMContentLoaded", function() {
    flatpickr("#date", {
        locale: "uk",
        dateFormat: "d.m.Y",
        minDate: "today",
        disableMobile: true
    });

    document.getElementById("appointment-form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Запис успішно створено!");
    });
});
