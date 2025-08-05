document.addEventListener("DOMContentLoaded", () => {
    const buttonGrid = document.getElementById("button-grid");
    const statDisplay = document.getElementById("stat-display");
    const statTitle = document.getElementById("stat-title");
    const backButton = document.getElementById("back-button");
    const statContent = document.getElementById("statContent");

    backButton.onclick = () => {
        statDisplay.style.display = "none";
        buttonGrid.style.display = "grid";
    };

    window.showStat = function (statKey, title) {
        const data = statData[statKey];
        statTitle.innerText = title;
        statContent.innerHTML = generateTable(statKey, data);
        buttonGrid.style.display = "none";
        statDisplay.style.display = "block";
    };

    function generateTable(type, data) {
        if (!data || !data.length) return "<p>No data available</p>";

        let headers = Object.keys(data[0]);
        let table = "<table class='stat-table'><thead><tr>";
        table += "<th>Rank</th>"; // Add Rank column header
        headers.forEach(h => table += `<th>${capitalize(h)}</th>`);
        table += "</tr></thead><tbody>";

        data.forEach((row, index) => {
            table += "<tr>";
            table += `<td>${index + 1}</td>`; // Add Rank value
            headers.forEach(h => {
                const cell = Array.isArray(row[h]) ? row[h].join(", ") : row[h];
                table += `<td>${cell}</td>`;
            });
            table += "</tr>";
        });

        table += "</tbody></table>";
        return table;
    }

    function capitalize(str) {
        return str
            .replace(/([A-Z])/g, ' $1')     // insert space before caps
            .replace(/^./, s => s.toUpperCase())  // capitalize first letter
            .replace(/_/g, ' ');
    }
});

function goBack() {
  window.location.href = "index.html"; // Adjust path if needed
}