function gameOfLife(board: number[][]): void {
    const m = board.length;
    const n = board[0].length;

    const directions = [
        [0, 1], [1, 0], [0, -1], [-1, 0],
        [1, 1], [-1, -1], [1, -1], [-1, 1],
    ];

    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            let liveNeighbors = 0;
            for (const [dx, dy] of directions) {
                const x = i + dx, y = j + dy;
                if (x >= 0 && x < m && y >= 0 && y < n) {
                    liveNeighbors += board[x][y] & 1; 
                }
            }

            const current = board[i][j] & 1;

            if (current === 1 && (liveNeighbors === 2 || liveNeighbors === 3)) {
                board[i][j] |= 2;
            }
            if (current === 0 && liveNeighbors === 3) {
                board[i][j] |= 2; 
            }
        }
    }

    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            board[i][j] >>= 1;
        }
    }
}
