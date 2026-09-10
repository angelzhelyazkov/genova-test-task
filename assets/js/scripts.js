const menuToggle = document.querySelector(".menu-toggle");
const mainMenu = document.querySelector("#main-menu");

function closeMenu() {
	mainMenu.classList.remove("is-open");
	menuToggle.classList.remove("is-active");
	menuToggle.setAttribute("aria-expanded", "false");
	menuToggle.setAttribute("aria-label", "Отвори меню");
}

function openMenu() {
	mainMenu.classList.add("is-open");
	menuToggle.classList.add("is-active");
	menuToggle.setAttribute("aria-expanded", "true");
	menuToggle.setAttribute("aria-label", "Затвори меню");
}

menuToggle.addEventListener("click", function (event) {
	event.stopPropagation();
	const isOpen = mainMenu.classList.contains("is-open");
	if (isOpen) {
		closeMenu();
	} else {
		openMenu();
	}
});

/* Затвори менюто при клик извън него */
document.addEventListener("click", function (event) {
	if (
		mainMenu.classList.contains("is-open") &&
		!mainMenu.contains(event.target) &&
		!menuToggle.contains(event.target)
	) {
		closeMenu();
	}
});

/* Затвори менюто при натискане на Escape клавиша */
document.addEventListener("keydown", function (event) {
	if (event.key === "Escape" && mainMenu.classList.contains("is-open")) {
		closeMenu();
		menuToggle.focus();
	}
});

/* Затвори менюто при клик върху връзка */
mainMenu.querySelectorAll("a").forEach(function (link) {
	link.addEventListener("click", function () {
		closeMenu();
	});
});