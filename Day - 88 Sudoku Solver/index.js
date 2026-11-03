var solveSudoku = function(board) {
    function isValid(row, col, num) {
        for (let i = 0; i < 9; i++) {
            // Check row
            if (board[row][i] === num) return false;

            // Check column
            if (board[i][col] === num) return false;

            // Check 3x3 box
            const boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
            const boxCol = 3 * Math.floor(col / 3) + (i % 3);

            if (board[boxRow][boxCol] === num) return false;
        }

        return true;
    }

    function solve() {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {

                // Find an empty cell
                if (board[row][col] === ".") {

                    // Try digits 1 through 9
                    for (let num = 1; num <= 9; num++) {
                        const digit = String(num);

                        if (isValid(row, col, digit)) {
                            board[row][col] = digit;

                            if (solve()) {
                                return true;
                            }

                            // Backtrack: undo the choice
                            board[row][col] = ".";
                        }
                    }

                    // No digit worked for this cell
                    return false;
                }
            }
        }

        // No empty cells remain
        return true;
    }

    return solve();
};
let board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]

solveSudoku(board);
console.log(board);