const statData = {

    mostMatches: [
        { name: "MS Dhoni", team: ["CSK", "RPS"], matches: 278 },
        { name: "Rohit Sharma", team: ["MI", "DEC"], matches: 272 },
        { name: "Virat Kohli", team: ["RCB"], matches: 267 },
        { name: "Dinesh Karthik", team: ["KKR", "RCB", "MI", "DC", "PBKS", "GL"], matches: 257 },
        { name: "Ravindra Jadeja", team: ["CSK", "GL", "RR", "KTK"], matches: 254 }
    ],
    mostRuns: [
        { name: "Virat Kohli", team: "RCB", runs: 8661, matches: 267, average: 39.54, highest: 113, fifties: 63, hundreds: 8 },
        { name: "Rohit Sharma", team: "DEC, MI", runs: 7046, matches: 272, average: 29.73, highest: 109, fifties: 47, hundreds: 2 },
        { name: "Shikhar Dhawan", team: "DC, DEC, MI, PBKS, SRH", runs: 6769, matches: 222, average: 35.25, highest: 106, fifties: 51, hundreds: 2 },
        { name: "David Warner", team: "DC, SRH", runs: 6565, matches: 184, average: 40.52, highest: 126, fifties: 62, hundreds: 4 },
        { name: "Suresh Raina", team: "CSK, GL", runs: 5528, matches: 205, average: 32.51, highest: 100, fifties: 39, hundreds: 1 }
    ],

    mostWickets: [
        { name: "Yuzvendra Chahal", team: "MI, RCB, RR, PBKS", wickets: 221, matches: 174, economy: 7.96, best: "5/40", fiveWicketHauls: 1 },
        { name: "Bhuvneshwar Kumar", team: "PWI, SRH, RCB", wickets: 198, matches: 190, economy: 7.69, best: "5/19", fiveWicketHauls: 2 },
        { name: "Sunil Narine", team: "KKR", wickets: 192, matches: 189, economy: 6.79, best: "5/19", fiveWicketHauls: 1 },
        { name: "Piyush Chawla", team: "KKR, MI, CSK, KXIP", wickets: 192, matches: 192, economy: 7.96, best: "4/17", fiveWicketHauls: 0 },
        { name: "Ravichandran Ashwin", team: "CSK, KXIP, DC, RR", wickets: 187, matches: 221, economy: 7.20, best: "4/34", fiveWicketHauls: 0 }
    ],

    highestScore: [
        { name: "Chris Gayle", team: "RCB", opponent: "PWI", score: 175, balls: 66, fours: 13, sixes: 17, year: 2013, strikeRate: 265.15 },
        { name: "Brendon McCullum", team: "KKR", opponent: "RCB", score: 158, balls: 73, fours: 10, sixes: 13, year: 2008, strikeRate: 216.44 },
        { name: "Abhishek Sharma", team: "SRH", opponent: "RCB", score: 141, balls: 55, fours: 14, sixes: 10, year: 2025, strikeRate: 256.36 },
        { name: "Quinton de Kock", team: "LSG", opponent: "KKR", score: 140, balls: 70, fours: 10, sixes: 10, year: 2022, strikeRate: 200.00 },
        { name: "AB de Villiers", team: "RCB", opponent: "MI", score: 133, balls: 59, fours: 19, sixes: 4, year: 2015, strikeRate: 225.42 }
    ],

    highestTeamTotal: [
        { team: "Sunrisers Hyderabad", score: "287/3", overs: "20", opponent: "Royal Challengers Bengaluru", year: 2024, venue: "Bengaluru" },
        { team: "Sunrisers Hyderabad", score: "286/6", overs: "20", opponent: "Rajasthan Royals", year: 2025, venue: "Hyderabad" },
        { team: "Sunrisers Hyderabad", score: "278/3", overs: "20", opponent: "Kolkata Knight Riders", year: 2025, venue: "Delhi" },
        { team: "Sunrisers Hyderabad", score: "277/3", overs: "20", opponent: "Mumbai Indians", year: 2024, venue: "Hyderabad" },
        { team: "Kolkata Knight Riders", score: "272/7", overs: "20", opponent: "Delhi Capitals", year: 2024, venue: "Vizag" }
    ],

    lowestTeamTotal: [
        { team: "Royal Chalengers Bangalore", score: "49", overs: "9.4", opponent: "Kolkata Knight Riders", year: 2017, venue: "Kolkata" },
        { team: "Rajasthan Royals", score: "58", overs: "15.1", opponent: "Royal Challengers Bangalore", year: 2009, venue: "Cape Town" },
        { team: "Rajasthan Royals", score: "59", overs: "10.3", opponent: "Royal Challengers Bangalore", year: 2023, venue: "Jaipur" },
        { team: "Delhi Daredevils", score: "66", overs: "13.4", opponent: "Mumbai Indians", year: 2017, venue: "Delhi" },
        { team: "Delhi Daredevils", score: "67", overs: "17.1", opponent: "Kings XI Punjab", year: 2017, venue: "Mohali" },
    ],

    bestBowlingFigure: [
        { name: "Alzarri Joseph", team: "MI", figure: "6/12", overs: 3.4, economy: 3.27, opponent: "SRH", year: 2019 },
        { name: "Sohail Tanvir", team: "RR", figure: "6/14", overs: 4, economy: 3.50, opponent: "CSK", year: 2008 },
        { name: "Adam Zampa", team: "RPS", figure: "6/19", overs: 4, economy: 4.75, opponent: "SRH", year: 2016 },
        { name: "Anil Kumble", team: "RCB", figure: "5/5", overs: 3.1, economy: 1.57, opponent: "RR", year: 2009 },
        { name: "Akash Madhwal", team: "MI", figure: "5/5", overs: 3.3, economy: 1.42, opponent: "LSG", year: 2023 }
    ],

    most50s: [
        { name: "Virat Kohli", team: ["RCB"], fifties: 63, matches: 267 },
        { name: "David Warner", team: ["SRH", "DC"], fifties: 62, matches: 184 },
        { name: "Shikhar Dhawan", team: ["SRH", "DEC", "PBKS", "MI", "DD"], fifties: 51, matches: 222 },
        { name: "Rohit Sharma", team: ["MI", "DEC"], fifties: 47, matches: 272 },
        { name: "KL Rahul", team: ["RCB", "SRH", "KXIP", "LSG", "DC"], fifties: 40, matches: 145 },
    ],

    most100s: [
        { name: "Virat Kohli", team: ["RCB"], hundreds: 8, matches: 267, highest: 113 },
        { name: "Jos Buttler", team: ["RR", "MI", "GT"], hundreds: 7, matches: 121, highest: 124 },
        { name: "Chris Gayle", team: ["RCB", "PBKS", "KKR"], hundreds: 6, matches: 142, highest: 175 },
        { name: "KL Rahul", team: ["PBKS", "LSG", "RCB", "SRH", "DC"], hundreds: 5, matches: 145, highest: 132 },
        { name: "Shubman Gil", team: ["KKR", "GT"], hundreds: 4, matches: 118, highest: 129 }
    ],

    most4s: [
        { name: "Virat Kohli", team: ["RCB"], fours: 771, matches: 267 },
        { name: "Shikhar Dhawan", team: ["SRH", "DEC", "PBKS", "MI", "DD"], fours: 768, matches: 222 },
        { name: "David Warner", team: ["SRH", "DC"], fours: 663, matches: 184 },
        { name: "Rohit Sharma", team: ["MI", "DEC"], fours: 640, matches: 272 },
        { name: "Ajinkya Rahane", team: ["MI", "DC", "RPS", "RR", "KKR", "CSK"], fours: 514, matches: 198 }
    ],

    most6s: [
        { name: "Chris Gayle", team: ["RCB", "PBKS", "KKR"], sixes: 357, matches: 142 },
        { name: "Rohit Sharma", team: ["MI", "DEC"], sixes: 302, matches: 272 },
        { name: "Virat Kohli", team: ["RCB"], sixes: 291, matches: 267 },
        { name: "MS Dhoni", team: ["CSK", "RPS"], sixes: 264, matches: 278 },
        { name: "AB de Villiers", team: ["RCB", "DD"], sixes: 251, matches: 184 },
    ],

    highestPartnerships: [
        { players: "Virat Kohli & AB de Villiers", team: "RCB", runs: 229, opponent: "GL", year: 2016 },
        { players: "Virat Kohli & AB de Villiers", team: "RCB", runs: 215, opponent: "MI", year: 2015 },
        { players: "Quinton de Kock & KL Rahul", team: "LSG", runs: 210, opponent: "KKR", year: 2022 },
        { players: "Shubman Gill & Sai Sudharshan", team: "GT", runs: 210, opponent: "DC", year: 2025 },
        { players: "Adam Gilchrist & Shaun Marsh", team: "KXIP", runs: 206, opponent: "RCB", year: 2011 },
    ]
};
