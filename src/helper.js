export function calculateWinner(props) {
    const line = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let index = 0; index < line.length; index++) {
        const [a, b, c] = line[index];

        if (props[a] && props[a] === props[b] && props[a] === props[c]) {
            return props[a];
        }
    }
    return null;
}
