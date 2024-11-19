function counting(updatedDict) {
    updatedDict.sort((a, b) => b.votes - a.votes);

    console.log(`The winner is ${updatedDict[0].name} with ${updatedDict[0].votes} votes.`);
    console.log("Results:");
    updatedDict.forEach(candidate => {
        console.log(`${candidate.name}: ${candidate.votes} votes`);
    });
}

function voting(dict) {
    const voters = parseInt(prompt("Number of voters participating"));
    for (let j = 0; j < voters; j++) {
        const candidate = prompt("Voting for whom? (Enter name of candidate):").trim();

        const candidateLower = candidate.toLowerCase();
        let found = false;
        for (let i = 0; i < dict.length; i++) {
            if (dict[i].name.toLowerCase() === candidateLower) {
                dict[i].votes++;
                found = true;
                break;
            }
        }

        if (!found) {
            console.log(`${candidate} is not a valid candidate.`);
        }
    }
    return dict;
}

let candidates = [];
const number = parseInt(prompt("Number of candidates"));

for (let i = 1; i <= number; i++) {
    const name = prompt(`Enter name of candidate ${i}:`).trim();
    candidates.push({ name: name, votes: 0 });
}

let realValues = voting(candidates);
counting(realValues);

