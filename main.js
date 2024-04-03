const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab, index) => {
	tab.addEventListener("click", (event) => {
		const currentElement = event.target;
		if (!currentElement.classList.contains("heading")) {
			return;
		}
		if (tab.classList.contains("active")) {
			tab.classList.remove("active");
		} else {
			tab.classList.add("active");
		}
	});
});
