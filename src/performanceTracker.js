
/**
 * OpsLens - Performance Tracker
 * Compares two participants across evaluation rounds.
 */

function summarizePerformance(results) {
    let participantOneWins = 0;
    let participantTwoWins = 0;
    let ties = 0;

    for (const [scoreOne, scoreTwo] of results) {
        if (scoreOne > scoreTwo) {
            participantOneWins++;
        } else if (scoreTwo > scoreOne) {
            participantTwoWins++;
        } else {
            ties++;
        }
    }

    let winner = "Draw";

    if (participantOneWins > participantTwoWins) {
        winner = "Participant One";
    } else if (participantTwoWins > participantOneWins) {
        winner = "Participant Two";
    }

    return {
        participantOneWins,
        participantTwoWins,
        ties,
        winner
    };
}

module.exports = { summarizePerformance };
