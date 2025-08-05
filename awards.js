// Utility function to create card elements with custom class
function createCard(content, type) {
    const card = document.createElement('div');
    const classMap = {
        winners: 'card-winner',
        mvp: 'card-mvp',
        orangeCap: 'card-orange',
        purpleCap: 'card-purple',
        mostSixes: 'card-sixes',
        emergingPlayer: 'card-emerging',
        fairplayAward: 'card-fairplay',
        PlayeroftheFinal: 'card-final',
    };
    card.className = `award-card ${classMap[type] || ''}`;
    card.innerHTML = content;
    return card;
}

// Show Award Handler
function showAward(type) {
    const display = document.getElementById('award-display');
    display.innerHTML = ''; // Clear previous display

    const data = awardData[type];
    if (!data) return;

    data.forEach(entry => {
        let content = '';

        switch (type) {
            case 'orangeCap':
                content = `
                    <h3>${entry.year}</h3>
                    <p><strong>${entry.player}</strong><br>(${entry.team})</p>
                    <p>Runs: ${entry.runs}</p>
                `;
                break;

            case 'purpleCap':
                content = `
                    <h3>${entry.year}</h3>
                    <p><strong>${entry.player}</strong><br>(${entry.team})</p>
                    <p>Wickets: ${entry.wickets}</p>
                `;
                break;

            case 'mostSixes':
                content = `
                    <h3>${entry.year}</h3>
                    <p><strong>${entry.player}</strong><br>(${entry.team})</p>
                    <p>Sixes: ${entry.sixes}</p>
                `;
                break;

            case 'mvp':
            case 'emergingPlayer':
            case 'PlayeroftheFinal':
                content = `
                    <h3>${entry.year}</h3>
                    <p><strong>${entry.player}</strong><br>(${entry.team})</p>
                `;
                break;

            case 'winners':
            case 'fairplayAward':
                content = `
                    <h3>${entry.year}</h3>
                    <img src="${entry.logo}" alt="${entry.team}" class="team-logo"/>
                    <p>${entry.team}</p>
                `;
                break;

            default:
                content = `<p>No data available</p>`;
        }

        display.appendChild(createCard(content, type));
    });

    document.getElementById('award-buttons').style.display = 'none';
    document.getElementById('back-button').style.display = 'block';
}

// Back to Awards Menu
function goBack() {
    document.getElementById('award-display').innerHTML = '';
    document.getElementById('award-buttons').style.display = 'grid';
    document.getElementById('back-button').style.display = 'none';
}

function goToDashboard() {
    window.location.href = 'index.html';
}
