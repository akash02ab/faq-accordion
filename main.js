const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab, index) => {
	tab.addEventListener("click", (event) => {
		const currentElement = event.target;
		const classNames = ["heading", "open", "close"];
		const isTabClicked = classNames.some((className) => currentElement.classList.contains(className));
		if (!isTabClicked) {
			return;
		}
		if (tab.classList.contains("active")) {
			tab.classList.remove("active");
		} else {
			tab.classList.add("active");
		}
	});
});
