// Ensure all scripts run after DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Mobile Navigation Toggle
    const menuIcon = document.querySelector(".fa-bars");
    const nav = document.querySelector(".nav");

    menuIcon.addEventListener("click", function () {
        nav.classList.toggle("show"); // Toggle the visibility of the navigation bar
    });

    // Dropdown Menu Toggle for "IITGN"
    const dropdownToggle = document.getElementById("dropdownToggle");
    const dropdownMenu = document.getElementById("dropdownMenu");

    if (dropdownToggle && dropdownMenu) {
        dropdownToggle.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default link behavior
            dropdownMenu.classList.toggle("show"); // Toggle dropdown visibility
        });

        // Close the dropdown if the user clicks outside
        document.addEventListener("click", function (event) {
            // Ensure the click is not inside the dropdown or the toggle
            if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.remove("show");
            }
        });
    }
});

    // Function to toggle the visibility of "Read More" text
    function toggleText(id) {
        const moreText = document.getElementById(`more-text-${id}`);
        const btnText = document.getElementById(`read-more-btn-${id}`);

        if (moreText.classList.contains('d-none')) {
            moreText.classList.remove('d-none');
            btnText.textContent = "Read Less";
        } else {
            moreText.classList.add('d-none');
            btnText.textContent = "Read More";
        }
    }

