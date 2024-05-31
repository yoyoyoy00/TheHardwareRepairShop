document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.id = "cpu-search";
    searchInput.placeholder = "Search for a CPU...";
    document.getElementById("pc-config-form").prepend(searchInput);

    searchInput.addEventListener("input", function() {
        const filter = searchInput.value.toLowerCase();
        const options = document.querySelectorAll("#intel-cpu option");

        options.forEach(option => {
            const text = option.textContent.toLowerCase();
            if (text.includes(filter)) {
                option.style.display = "";
            } else {
                option.style.display = "none";
            }
        });
    });
});
