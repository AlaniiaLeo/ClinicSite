var isAdminEntered = false;

function redirectAccount() {
    isAdminEntered = true;
    
    // Создание объекта XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Установка URL и типа запроса
    var url = "enterAdmin.php";
    
    xhr.open("POST", url, true);
    var formData = new FormData(document.getElementById("form"));

    // Установка обработчика события загрузки
    xhr.onload = function () {
        console.log(xhr.status);
        if (xhr.status === 200) {
            // Перенаправление на основе результата
            var response = xhr.responseText;
            if (response === "success") {
                window.location.href = "index.html";
            } else {
                window.location.href = "cabinet.html";
            }
        } else {
            console.log("Ошибка: " + xhr.status);
        }
    };

    // Отправка запроса
    xhr.send(formData);
}

// Обработчик события отправки формы или другого события
function enterAdminPanel() {
    if (!isAdminEntered) {
        // Создание объекта XMLHttpRequest
        var xhr = new XMLHttpRequest();
        
        // Установка URL и типа запроса
        var url = "enter.php";
        
        xhr.open("POST", url, true);
        var formData = new FormData(document.getElementById("form"))
    
        // Установка обработчика события загрузки
        xhr.onload = function () {
            console.log(xhr.status);
            if (xhr.status === 200) {
                // Перенаправление на основе результата
                var response = xhr.responseText;
                if (response === "success") {
                    window.location.href = "index.html";
                } else {
                    console.log(response);
                    window.location.href = "cabinet.html";
                }
            } else {
                console.log("Ошибка: " + xhr.status);
            }
        };
    
        // Отправка запроса
        xhr.send(formData);
    }
}


// Обработчик события отправки формы или другого события
function registration() {
    // Создание объекта XMLHttpRequest
    var xhr = new XMLHttpRequest();
    
    var password1 = document.getElementById("text-111d").value;
    var password2 = document.getElementById("text-cd8a").value;
    var messageFail = document.getElementById("fail");
    var messageSuccess = document.getElementById("success");

    if (password1 === password2) {
        messageSuccess.style.display = "block";

        var url = "registration.php";
        
        xhr.open("POST", url, true);
        var formData = new FormData(document.getElementById("form"));
        

        xhr.onload = function () {
            console.log(xhr.status);
            if (xhr.status === 200) {
                var response = xhr.responseText;
                window.location.href = "Home.html";
            } else {
                console.log("Ошибка: " + xhr.status);
            }
        };
    
        // Отправка запроса
        xhr.send(formData);
        
    } else {
        messageFail.style.display = "block"; // Показываем объект <div>
    }
}


