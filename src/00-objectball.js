function gameObject() {
    // debugger;
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood":{
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}

console.log(gameObject());



console.log("------------------------------------");



function homeTeamName() {
    let object = gameObject();
    
    return object["home"]["teamName"];
}

console.log(homeTeamName());



console.log("------------------------------------");



function homeTeamName() {
    return gameObject()["home"]["teamName"];
}

console.log(homeTeamName());



console.log("************************************");



function numPointsScored(playerName) {
    let game = gameObject();

    for (let team of [game.home, game.away]) {

        if(team.players[playerName]) {
            return team.players[playerName].points;
        }
    }

    return "Player not found.";
}

console.log(numPointsScored("Jeff Adrien"));
console.log(numPointsScored("Reggie Evans"));
console.log(numPointsScored("DeSagna Diop"));
console.log(numPointsScored("Mason Plumlee"));
console.log(numPointsScored("Samuel Pierson")); 



console.log("************************************");



function shoeSize(playerName) {
    let game = gameObject();

    for (let team of [game.home, game.away]) {

        if(team.players[playerName]) {
            return team.players[playerName].shoe;
        }
    }

    return "Player not found.";
}

console.log(shoeSize("Jeff Adrien"));
console.log(shoeSize("Reggie Evans"));
console.log(shoeSize("DeSagna Diop"));
console.log(shoeSize("Mason Plumlee"));
console.log(shoeSize("Samuel Pierson"));



console.log("************************************");



function teamColors(teamName) {
    let game = gameObject();

    for (let team of [game.home, game.away]) {

        if(team.teamName === teamName) {
            return team.colors;
        }
    }
    
    return "Team not found.";
}

console.log(teamColors("Brooklyn Nets"));
console.log(teamColors("Charlotte Hornets"));
console.log(teamColors("LA Lakers"));



console.log("************************************");



function teamNames() {
    let game = gameObject();

    return[game.home.teamName, game.away.teamName];
}

console.log(teamNames()); 



console.log("************************************");



function playerNumbers () {
    let game = gameObject();

    //Initialise empty arrays to store the player number values.
    let homePlayerNumbers = [];
    let awayPlayerNumbers = [];

    for (let player in game.home.players) {
        homePlayerNumbers.push(game.home.players[player].number);
    }

    for (let player in game.away.players) {
        awayPlayerNumbers.push(game.away.players[player].number);
    }

    return {
        home: homePlayerNumbers,
        away: awayPlayerNumbers
    };
}

console.log(playerNumbers());



console.log("************************************");



function playerStats(playerName){
    let game = gameObject();

    for (let team in game) {
        if (game[team].players[playerName]){
            return game[team].players[playerName];
        }
    }
    
    return "Player not found.";
}

console.log(playerStats("Jeff Adrien"));
console.log(playerStats("Reggie Evans"));
console.log(playerStats("DeSagna Diop"));
console.log(playerStats("Mason Plumlee"));
console.log(playerStats("Samuel Pierson")); 



console.log("************************************");



function bigShoeRebounds() {
    let game = gameObject();
    let largestShoeSize = 0;
    let rebounds = 0;

    for (let team in game) {
        for(let player in game[team].players) {
            let playerStats = game[team].players[player];

            if (playerStats.shoe > largestShoeSize) {
                largestShoeSize = playerStats.shoe;
                rebounds = playerStats.rebounds;
            }
        }
    }

    return rebounds;
    // debugger;
}

console.log(bigShoeRebounds());



console.log("************************************");



function mostPointsScored() {
    let game = gameObject();
    let topPlayer = "";
    let highestPoints = 0;

    for (let player in game.home.players) {
        if (game.home.players[player].points > highestPoints) {
            highestPoints = game.home.players[player].points;
            topPlayer = player;
        }
    }

    for (let player in game.away.players) {
        if (game.away.players[player].points > highestPoints) {
            highestPoints = game.away.players[player].points;
            topPlayer = player;
        }
    }

    return topPlayer;
}

console.log(mostPointsScored());



console.log("************************************");



function winningTeam() {
    let game = gameObject();
    
    let homePoints = 0;
    let awayPoints = 0;

    for (let playerStats of Object.values(game.home.players)) {
        homePoints += playerStats.points;
    }

    for (let playerStats of Object.values(game.away.players)) {
        awayPoints += playerStats.points;
    }

    if (homePoints > awayPoints) {
        return game.home.teamName;
    }
    else if (awayPoints > homePoints) {
        return game.away.teamName;
    }
    else {
        return "It's a draw!";
    }
}

console.log(winningTeam());



console.log("************************************");



function playerWithLongestName() {
    let game = gameObject();
    let longestName = "";

    for (let team of [game.home.players, game.away.players]) {
        for (let player in team) {
            if (player.length > longestName.length) {
                longestName = player;
            }
        }
    }

    return longestName;
}

console.log (playerWithLongestName());



console.log("************************************");



function doesLongNameStealATon() {
    let game = gameObject();
    let longestName = "";
    let mostSteals = 0;
    let playerWithMostSteals = "";
    let longestNameSteals = 0;

    for (let team of [game.home.players, game.away.players]) {
        for (let player in team) {
            if (player.length > longestName.length) {
                longestName = player;
                longestNameSteals = team[player].steals;
            }
    
            if (team[player].steals > mostSteals) {
                mostSteals = team[player].steals;
                playerWithMostSteals = player;
            }
        }
    }

    return longestNameSteals === mostSteals;
}

console.log(doesLongNameStealATon())