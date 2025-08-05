// Navigate back to dashboard from Teams page
function goToDashboard() {
    window.location.href = 'index.html';
}

// Show team grid on page load
window.onload = function () {
    document.getElementById("teamGrid").style.display = "grid";
    document.getElementById("teamDetails").style.display = "none";
};

// Show team details when a team card is clicked
// Show team details when a team card is clicked
function showTeamDetails(teamId) {
    const team = teams[teamId]; // Get team data from teams.js
    const teamGrid = document.getElementById("teamGrid");
    const teamDetails = document.getElementById("teamDetails");

    if (!team) {
        teamDetails.innerHTML = "<p>Team details not found.</p>";
        return;
    }

    // Hide the grid, show the team detail section
    teamGrid.style.display = "none";
    teamDetails.style.display = "block";

    // Add dynamic class to color the team detail box
    teamDetails.className = `team-details team-details-${teamId.toLowerCase()}`;

    // Populate team detail HTML
    teamDetails.innerHTML = `
        <button onclick="goBack()" class="back-btn">← Back to Teams</button>
        <h2 class="team-title">${team.name}</h2>
        <div class="team-info-container">
            <div class="team-logo-wrapper">
                <img src="${team.logo}" alt="${team.name} Logo" class="team-detail-logo" />
            </div>
            <div class="team-info">
                <ul>
                    <li><span>🏏 Captain:</span> <strong>${team.captain}</strong></li>
                    <li><span>🎯 Coach:</span> <strong>${team.coach}</strong></li>
                    <li><span>🏟️ Home Ground:</span> <strong>${team.home}</strong></li>
                    <li><span>🏆 Titles Won:</span> <strong>${team.titles}</strong></li>
                    <li><span>🥇 Title Years:</span> <strong>${team.titleYears}</strong></li>
                </ul>
            </div>
        </div>
    `;
}

// Navigate back to team grid
function goBack() {
    document.getElementById("teamGrid").style.display = "grid";
    document.getElementById("teamDetails").style.display = "none";
}
