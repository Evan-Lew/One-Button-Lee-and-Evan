// The title of the game to be displayed on the title screen
title = "BULLSEYE";

// The description, which is also displayed on the title screen
description = `
[Hold] To Steady Your Shot

 Before You Lose Control!
`;

// The array of custom sprites
characters = [
`


llllll



`,
];

// Game design variable container
const G = {
	WIDTH: 200,
	HEIGHT: 100,

    PLAYER_X_POS: 5,
    PLAYER_Y_POS: 10,
};

// Game runtime options
options = {
	viewSize: {x: G.WIDTH, y: G.HEIGHT},
    isReplayEnabled: true,
    isPlayingBgm: true,
    seed: 1,
    //theme: "shapeDark",
};

// JSDoc comments for typing

/** @type {{arrow: Vector}} */
let player;

// The game loop function
function update() {
    // The init function running at startup
	if (!ticks) {
        
    }

    
}