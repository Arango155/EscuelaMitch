
document.addEventListener("keydown", function (event) {
    if (event.key === "F12" || 
        (event.ctrlKey && event.shiftKey && event.key === "I") || 
        (event.ctrlKey && event.shiftKey && event.key === "J") || 
        (event.ctrlKey && event.key === "U")) {
        event.preventDefault();
    }
});

document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});

setInterval(() => {
    if (window.outerHeight - window.innerHeight > 100 || window.outerWidth - window.innerWidth > 100) {
        document.body.innerHTML = "<h1>¡Acceso Denegado!</h1>";
    }
}, 1000);



