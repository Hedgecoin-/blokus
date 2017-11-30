
export const boardWidth = 20;
export const boardHeight = 20;


export function PlayPiece(board, piece){
  switch (piece.name) {
    case '1':
      board[piece.y][piece.x] = piece;
      break;
  }
  return board;
}
