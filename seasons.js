function showSeasonDetails(year) {
  const data = seasonData[year];
  if (!data) return;

  // Hide buttons section
  document.getElementById("seasonButtons").style.display = "none";

  // Mapping from full team name to logo filename
  const teamCodeMap = {
    "CHENNAI SUPER KINGS": "csk",
    "MUMBAI INDIANS": "mi",
    "ROYAL CHALLENGERS BANGALORE": "rcb2",
    "ROYAL CHALLENGERS BENGALURU": "rcb",
    "KOLKATA KNIGHT RIDERS": "kkr",
    "RAJASTHAN ROYALS": "rr",
    "SUNRISERS HYDERABAD": "srh",
    "LUCKNOW SUPER GIANTS": "lsg",
    "GUJARAT TITANS": "gt",
    "DELHI CAPITALS": "dc",
    "PUNJAB KINGS": "pbks",
    "KINGS XI PUNJAB": "kxip",
    "DELHI DAREDEVILS": "dd",
    "DECCAN CHARGERS": "dec",
    "RISING PUNE SUPERGIANT": "rpsg",
    "GUJARAT LIONS": "gl",
    
  };

  function getTeamBox(title, teamName) {
    const code = teamCodeMap[teamName.toUpperCase()];
    const logoSrc = code ? `Logo/${code}.png` : '';
    return `
      <div class="position-box">
        ${title}<br><br>
        ${logoSrc ? `<img src="${logoSrc}" alt="${teamName} logo" class="team-logo"><br>` : ''}
        ${teamName}
      </div>
    `;
  }

  const detailSection = document.getElementById("seasonDetails");
  detailSection.style.display = "block";
  detailSection.innerHTML = `
    <h2>IPL ${year} SEASON</h2>

    <div class="position-boxes">
        ${getTeamBox("🏆 <strong>CHAMPIONS</strong>", data.champion)}
        ${getTeamBox("🥈 <strong>RUNNER UP</strong>", data.runnerUp)}
        ${getTeamBox("🥉 <strong>3RD PLACE</strong>", data.third)}
        ${getTeamBox("4️⃣ <strong>4TH PLACE</strong>", data.fourth)}
    </div>

    <div class="detail-boxes">
        <div class="detail-box captain-box"><strong>WINNING CAPTAIN:</strong><br>${data.winningCaptain.name}<br>(${data.winningCaptain.team})</div>
        <div class="detail-box orange-cap-box"><strong>ORANGE CAP:</strong><br>${data.orangeCap.name} (${data.orangeCap.team})<br><strong>${data.orangeCap.runs} runs</strong></div>
        <div class="detail-box purple-cap-box"><strong>PURPLE CAP:</strong><br>${data.purpleCap.name} (${data.purpleCap.team})<br><strong>${data.purpleCap.wickets} wickets</strong></div>
        <div class="detail-box mvp-box"><strong>MOST VALUABLE PLAYER:</strong><br>${data.mvp.name}<br>(${data.mvp.team})</div>
        <div class="detail-box emerging-box"><strong>EMERGING PLAYER:</strong><br>${data.emerging.name}<br>(${data.emerging.team})</div>
        <div class="detail-box sixes-box"><strong>MOST SIXES:</strong><br>${data.mostSixes.name} (${data.mostSixes.team})<br><strong>${data.mostSixes.sixes} sixes</strong></div>
    </div>

    <div class="season-buttons-container">
      <button onclick="showFinal(${year})" class="season-btn2 final-btn"><strong>VIEW FINAL MATCH</strong></button>
      <button onclick="hideSeasonDetails()" class="season-btn2 back-btn">← Back to Seasons</button>
    </div>
  `;
}


function showFinal(year) {
  const data = seasonData[year].final;
  const detailSection = document.getElementById("seasonDetails");

  const team1Class = `team-${data.firstTeam.toUpperCase().replace(/ /g, "-")}`;
  const team2Class = `team-${data.secondTeam.toUpperCase().replace(/ /g, "-")}`;

  detailSection.innerHTML = `
    <h2 class="final-title">IPL ${year} FINAL</h2>

    <div class="final-innings-row">
      <div class="final-label">1ˢᵗ INNINGS</div>
      <div class="final-label">2ⁿᵈ INNINGS</div>
    </div>

    <div class="final-innings">
      <div class="final-box team-name ${team1Class}">${data.firstTeam}</div>
      <div class="final-box score">${data.firstScore}<br>(${data.firstOvers})</div>
      <div class="final-box score">${data.secondScore}<br>(${data.secondOvers})</div>
      <div class="final-box team-name ${team2Class}">${data.secondTeam}</div>
    </div>

    <div class="final-result-box">${data.result}</div>

    <div class="final-bottom-row">
      <div class="final-info-box">
        <strong>VENUE:</strong><br>${data.venue}
      </div>
      <div class="final-info-box">
        <strong>PLAYER OF THE MATCH:</strong><br>${data.playerOfMatch.name}<br>(${data.playerOfMatch.team})
      </div>
    </div>

    <div class="final-buttons">
      <button onclick="showSeasonDetails(${year})" class="season-btn2 back-btn">← Back</button>
    </div>
  `;
}


// Hide the season details section and return to grid
function hideSeasonDetails() {
  document.getElementById("seasonDetails").style.display = "none";
  document.getElementById("seasonButtons").style.display = "grid";
}

// Navigate back to dashboard
function goBack() {
  window.location.href = "index.html"; // Adjust path if needed
}
