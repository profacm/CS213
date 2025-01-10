function parseInput(input) {
    return new Set(input.split(',').map(item => item.trim()));
}

function union(setA, setB) {
    return new Set([...setA, ...setB]);
}

function intersection(setA, setB) {
    return new Set([...setA].filter(item => setB.has(item)));
}

function difference(setA, setB) {
    return new Set([...setA].filter(item => !setB.has(item)));
}


function isSubset(setA, setB) {
    return [...setA].every(item => setB.has(item));
}


(function() {

    const inputA = prompt("Enter elements of Set A (comma-separated):");
    const inputB = prompt("Enter elements of Set B (comma-separated):");

    const setA = parseInput(inputA);
    const setB = parseInput(inputB);

    let choice;
    do {
        choice = prompt(`Choose an operation:\n1. Union (A ∪ B)\n2. Intersection (A ∩ B)\n3. Difference (A - B)\n4. Difference (B - A)\n5. Check if A is a subset of B (A ⊆ B)\n6. Check if B is a subset of A (B ⊆ A)\n7. Exit`);

        switch (choice) {
            case '1':
                console.log("Union (A ∪ B):", [...union(setA, setB)]);
                break;
            case '2':
                console.log("Intersection (A ∩ B):", [...intersection(setA, setB)]);
                break;
            case '3':
                console.log("Difference (A - B):", [...difference(setA, setB)]);
                break;
            case '4':
                console.log("Difference (B - A):", [...difference(setB, setA)]);
                break;
            case '5':
                console.log("Is A a subset of B (A ⊆ B)?:", isSubset(setA, setB));
                break;
            case '6':
                console.log("Is B a subset of A (B ⊆ A)?:", isSubset(setB, setA));
                break;
            case '7':
                console.log("Exiting program. Goodbye!");
                break;
            default:
                console.log("Invalid choice. Please try again.");
        }
    } while (choice !== '7');
})();
