// function performAction(ninja, action = "skulking",
//                        message = ninja + " " + action) {
//   return message;
// }

// assert(performAction("Yoshi") === "Yoshi skulking", "Yoshi is skulking");

function runLooseJsonParse(params) {
    looseJsonParse(`alert("looseJsonParse")`);
}

function runGroupByExample() {
    var people = [
        { name: 'Alice', age: 21 },
        { name: 'Max', age: 20 },
        { name: 'Jane', age: 20 }
    ];

    var groupedPeople = groupBy(people, 'age');
    console.log(groupedPeople);
    for (const key in groupedPeople) {
        if (groupedPeople.hasOwnProperty(key)) {
            const element = groupedPeople[key];
            if (element.length > 1) {
                alert(key);
                // return;
                break;
            }
        }
    }
}

