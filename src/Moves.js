// player,name,x,y,rotation,flip
export function PlayPiece(board, piece){
  switch (piece.name) {
    case '1':
      Play1(board, piece);
      break;
    case '2':
      Play2(board, piece);
      break;
    case 'V3':
      PlayV3(board, piece);
      break;
  }
  return board;
}

function Play1(board, piece){
  board[piece.y][piece.x] = piece;
}

function Play2(board, piece){
  // Rotation clockwise
  switch (piece.rotation) {
    case '0':
      board[piece.y][piece.x] = piece;
      board[piece.y][piece.x+1] = piece;
      break;
    case '90':
      board[piece.y][piece.x] = piece;
      board[piece.y+1][piece.x] = piece;
      break;
    case '180':
      board[piece.y][piece.x] = piece;
      board[piece.y][piece.x-1] = piece;
      break;
    case '270':
      board[piece.y][piece.x] = piece;
      board[piece.y-1][piece.x] = piece;
      break;
  }
}

function PlayV3(board, piece){

}
