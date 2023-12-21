window.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      console.log(id);
      if (entry.intersectionRatio > 0) {
        document
          .querySelector(`div ul li a[href="#${id}"]`)
          .parentElement.classList.add("active");
      } else {
        document
          .querySelector(`div ul li a[href="#${id}"]`)
          .parentElement.classList.remove("active");
      }
    });
  });

  // Track all sections that have an `id` applied
  document.querySelectorAll("div[id]").forEach((section) => {
    observer.observe(section);
  });
});
