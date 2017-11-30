// player,name,x,y,rotation,flip
export function PlayPiece(board, piece){
  switch (piece.name) {
    case '1':
      Play1(board, piece);
      break;
    case '2':
      Play2(board, piece);
      break;
    case 'I3':
      PlayI3(board, piece);
      break;
    case 'V3':
      PlayV3(board, piece);
      break;
    case 'I4':
      PlayI4(board, piece);
      break;
    case 'O':
      PlayO(board, piece);
      break;
    case 'L4':
      PlayL4(board, piece);
      break;
    case 'Z4':
      PlayZ4(board, piece);
      break;
    case 'T4':
      PlayT4(board, piece);
      break;
    case 'I5':
      PlayI5(board, piece);
      break;
    case 'F':
      PlayF(board, piece);
      break;
    case 'L5':
      PlayL5(board, piece);
      break;
    case 'N':
      PlayN(board, piece);
      break;
    case 'P':
      PlayP(board, piece);
      break;
    case 'T5':
      PlayT5(board, piece);
      break;
    case 'U':
      PlayU(board, piece);
      break;
    case 'V5':
      PlayV5(board, piece);
      break;
    case 'W':
      PlayW(board, piece);
      break;
    case 'X':
      PlayX(board, piece);
      break;
    case 'Y':
      PlayY(board, piece);
      break;
    case 'Z5':
      PlayZ5(board, piece);
      break;
    default:
      break;
  }
  return board;
}

function PieceToTile(board, piece, y, x){
  var tilePiece = Object.assign({}, piece);
  tilePiece.x += x;
  tilePiece.y += y;
  if(x === 0 && y === 0){
    tilePiece.center = true;
  }

  board[tilePiece.y][tilePiece.x] = tilePiece;
}

function Play1(board, piece){
    PieceToTile(board, piece, 0, 0);
}
function Play2(board, piece){
  // Rotation clockwise
  switch (piece.rotation) {
    case '0':
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 0, 1);
      break;
    case '90':
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 1, 0);
      break;
    case '180':
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 0, -1);
      break;
    case '270':
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, -1, 0);
      break;
    default:
      break;
  }
}
function PlayI3(board, piece){
  // Rotation clockwise
  switch (piece.rotation) {
    case '0':
      PieceToTile(board, piece, 0, -1);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 0, 1);
      break;
    case '90':
      PieceToTile(board, piece, -1, 0);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 1, 0);
      break;
    case '180':
      PieceToTile(board, piece, 0, -1);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 0, 1);
      break;
    case '270':
      PieceToTile(board, piece, -1, 0);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 1, 0);
      break;
    default:
      break;
  }
}
function PlayV3(board, piece){
  // Rotation clockwise
  switch (piece.rotation) {
    case '0':
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 0, 1);
      PieceToTile(board, piece, 1, 0);
      break;
    case '90':
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 1, 0);
      PieceToTile(board, piece, 0, -1);
      break;
    case '180':
      PieceToTile(board, piece, -1, 0);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 0, -1);
      break;
    case '270':
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, -1, 0);
      PieceToTile(board, piece, 0, 1);
      break;
    default:
      break;
  }
}
function PlayI4(board, piece){
  // Rotation clockwise
  switch (piece.rotation) {
    case '0':
      PieceToTile(board, piece, 0, -1);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 0, 1);
      PieceToTile(board, piece, 0, 2);
      break;
    case '90':
      PieceToTile(board, piece, -1, 0);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 1, 0);
      PieceToTile(board, piece, 2, 0);
      break;
    case '180':
      PieceToTile(board, piece, 0, -2);
      PieceToTile(board, piece, 0, -1);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 0, 1);
      break;
    case '270':
      PieceToTile(board, piece, -2, 0);
      PieceToTile(board, piece, -1, 0);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 1, 0);
      break;
    default:
      break;
  }
}
function PlayO(board, piece){
  // Rotation clockwise
  switch (piece.rotation) {
    case '0':
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 0, 1);
      PieceToTile(board, piece, 1, 0);
      PieceToTile(board, piece, 1, 1);
      break;
    case '90':
      PieceToTile(board, piece, 0, -1);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 1, -1);
      PieceToTile(board, piece, 1, 0);
      break;
    case '180':
      PieceToTile(board, piece, -1, -1);
      PieceToTile(board, piece, -1, 0);
      PieceToTile(board, piece, 0, -1);
      PieceToTile(board, piece, 0, 0);
      break;
    case '270':
      PieceToTile(board, piece, -1, 0);
      PieceToTile(board, piece, -1, 1);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 0, 1);
      break;
    default:
      break;
  }
}
function PlayL4(board, piece){
  // Rotation clockwise
  switch (piece.rotation) {
    case '0':
      PieceToTile(board, piece, 0, -1);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 0, 1);
      PieceToTile(board, piece, 1, -1);
      break;
    case '90':
      PieceToTile(board, piece, -1, -1);
      PieceToTile(board, piece, -1, 0);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 1, 0);
      break;
    case '180':
      PieceToTile(board, piece, -1, 1);
      PieceToTile(board, piece, 0, -1);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 0, 1);
      break;
    case '270':
      PieceToTile(board, piece, -1, 0);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 1, 0);
      PieceToTile(board, piece, 1, 1);
      break;
    default:
      break;
  }
}
function PlayZ4(board, piece){
  // Rotation clockwise
  switch (piece.rotation) {
    case '0':
      PieceToTile(board, piece, 0, -1);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 1, 0);
      PieceToTile(board, piece, 1, 1);
      break;
    case '90':
      PieceToTile(board, piece, -1, 0);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 0, -1);
      PieceToTile(board, piece, 1, -1);
      break;
    case '180':
      PieceToTile(board, piece, -1, -1);
      PieceToTile(board, piece, -1, 0);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 0, 1);
      break;
    case '270':
      PieceToTile(board, piece, -1, 1);
      PieceToTile(board, piece, 0, 1);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 1, 0);
      break;
    default:
      break;
  }
}
function PlayT4(board, piece){
  // Rotation clockwise
  switch (piece.rotation) {
    case '0':
      PieceToTile(board, piece, 0, -1);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 0, 1);
      PieceToTile(board, piece, 1, 0);
      break;
    case '90':
      PieceToTile(board, piece, -1, 0);
      PieceToTile(board, piece, 0, -1);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 1, 0);
      break;
    case '180':
      PieceToTile(board, piece, -1, 0);
      PieceToTile(board, piece, 0, -1);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 0, 1);
      break;
    case '270':
      PieceToTile(board, piece, -1, 0);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 0, 1);
      PieceToTile(board, piece, 1, 0);
      break;
    default:
      break;
  }
}
function PlayI5(board, piece){
  // Rotation clockwise
  switch (piece.rotation) {
    case '0':
    case '180':
      PieceToTile(board, piece, 0, -2);
      PieceToTile(board, piece, 0, -1);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 0, 1);
      PieceToTile(board, piece, 0, 2);
      break;
    case '90':
    case '270':
      PieceToTile(board, piece, -2, 0);
      PieceToTile(board, piece, -1, 0);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 1, 0);
      PieceToTile(board, piece, 2, 0);
      break;
    default:
      break;
  }
}
function PlayF(board, piece){
  // Rotation clockwise
  switch (piece.rotation) {
    case '0':
      PieceToTile(board, piece, -1, 0);
      PieceToTile(board, piece, -1, 1);
      PieceToTile(board, piece, 0, -1);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 1, 0);
      break;
    case '90':
      PieceToTile(board, piece, -1, 0);
      PieceToTile(board, piece, 0, -1);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 0, 1);
      PieceToTile(board, piece, 1, 1);
      break;
    case '180':
      PieceToTile(board, piece, -1, 0);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 0, 1);
      PieceToTile(board, piece, 1, -1);
      PieceToTile(board, piece, 1, 0);
      break;
    case '270':
      PieceToTile(board, piece, -1, -1);
      PieceToTile(board, piece, 0, -1);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 0, 1);
      PieceToTile(board, piece, 1, 0);
      break;
    default:
      break;
  }
}
function PlayL5(board, piece){
  // Rotation clockwise
  switch (piece.rotation) {
    case '0':
      PieceToTile(board, piece, 0, -1);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 0, 1);
      PieceToTile(board, piece, 0, 2);
      PieceToTile(board, piece, 1, -1);
      break;
    case '90':
      PieceToTile(board, piece, -1, -1);
      PieceToTile(board, piece, -1, 0);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 1, 0);
      PieceToTile(board, piece, 2, 0);
      break;
    case '180':
      PieceToTile(board, piece, -1, 1);
      PieceToTile(board, piece, 0, -2);
      PieceToTile(board, piece, 0, -1);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 0, 1);
      break;
    case '270':
      PieceToTile(board, piece, -2, 0);
      PieceToTile(board, piece, -1, 0);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 1, 0);
      PieceToTile(board, piece, 1, 1);
      break;
    default:
      break;
  }
}
function PlayN(board, piece){
  // Rotation clockwise
  switch (piece.rotation) {
    case '0':
      PieceToTile(board, piece, 0, -2);
      PieceToTile(board, piece, 0, -1);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 1, 0);
      PieceToTile(board, piece, 1, 1);
      break;
    case '90':
      PieceToTile(board, piece, -2, 0);
      PieceToTile(board, piece, -1, 0);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 0, -1);
      PieceToTile(board, piece, 1, -1);
      break;
    case '180':
      PieceToTile(board, piece, -1, -1);
      PieceToTile(board, piece, -1, 0);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 0, 1);
      PieceToTile(board, piece, 0, 2);
      break;
    case '270':
      PieceToTile(board, piece, -1, 1);
      PieceToTile(board, piece, 0, 1);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 1, 0);
      PieceToTile(board, piece, 2, 0);
      break;
    default:
      break;
  }
}
function PlayP(board, piece){
  // Rotation clockwise
  switch (piece.rotation) {
    case '0':
      PieceToTile(board, piece, 0, -1);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 0, 1);
      PieceToTile(board, piece, 1, 0);
      PieceToTile(board, piece, 1, 1);
      break;
    case '90':
      PieceToTile(board, piece, -1, 0);
      PieceToTile(board, piece, 0, -1);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 1, -1);
      PieceToTile(board, piece, 1, 0);
      break;
    case '180':
      PieceToTile(board, piece, -1, -1);
      PieceToTile(board, piece, -1, 0);
      PieceToTile(board, piece, 0, -1);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 0, 1);
      break;
    case '270':
      PieceToTile(board, piece, -1, 0);
      PieceToTile(board, piece, -1, 1);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 0, 1);
      PieceToTile(board, piece, 1, 0);
      break;
    default:
      break;
  }
}
function PlayT5(board, piece){
  // Rotation clockwise
  switch (piece.rotation) {
    case '0':
      PieceToTile(board, piece, 0, -1);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 0, 1);
      PieceToTile(board, piece, 1, 0);
      PieceToTile(board, piece, 2, 0);
      break;
    case '90':
      PieceToTile(board, piece, -1, 0);
      PieceToTile(board, piece, 0, -2);
      PieceToTile(board, piece, 0, -1);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 1, 0);
      break;
    case '180':
      PieceToTile(board, piece, -2, 0);
      PieceToTile(board, piece, -1, 0);
      PieceToTile(board, piece, 0, -1);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 0, 1);
      break;
    case '270':
      PieceToTile(board, piece, -1, 0);
      PieceToTile(board, piece, 0, 0);
      PieceToTile(board, piece, 0, 1);
      PieceToTile(board, piece, 0, 2);
      PieceToTile(board, piece, 1, 0);
      break;
    default:
      break;
  }
}
function PlayU(board, piece){
  // Rotation clockwise
  switch (piece.rotation) {
    case '0':
      PieceToTile(board, piece, 0, 0);
      break;
    case '90':
      PieceToTile(board, piece, 0, 0);
      break;
    case '180':
      PieceToTile(board, piece, 0, 0);
      break;
    case '270':
      PieceToTile(board, piece, 0, 0);
      break;
    default:
      break;
  }
}
function PlayV5(board, piece){
  // Rotation clockwise
  switch (piece.rotation) {
    case '0':
      PieceToTile(board, piece, 0, 0);
      break;
    case '90':
      PieceToTile(board, piece, 0, 0);
      break;
    case '180':
      PieceToTile(board, piece, 0, 0);
      break;
    case '270':
      PieceToTile(board, piece, 0, 0);
      break;
    default:
      break;
  }
}
function PlayW(board, piece){
  // Rotation clockwise
  switch (piece.rotation) {
    case '0':
      PieceToTile(board, piece, 0, 0);
      break;
    case '90':
      PieceToTile(board, piece, 0, 0);
      break;
    case '180':
      PieceToTile(board, piece, 0, 0);
      break;
    case '270':
      PieceToTile(board, piece, 0, 0);
      break;
    default:
      break;
  }
}
function PlayX(board, piece){
  // Rotation clockwise
  switch (piece.rotation) {
    case '0':
      PieceToTile(board, piece, 0, 0);
      break;
    case '90':
      PieceToTile(board, piece, 0, 0);
      break;
    case '180':
      PieceToTile(board, piece, 0, 0);
      break;
    case '270':
      PieceToTile(board, piece, 0, 0);
      break;
    default:
      break;
  }
}
function PlayY(board, piece){
  // Rotation clockwise
  switch (piece.rotation) {
    case '0':
      PieceToTile(board, piece, 0, 0);
      break;
    case '90':
      PieceToTile(board, piece, 0, 0);
      break;
    case '180':
      PieceToTile(board, piece, 0, 0);
      break;
    case '270':
      PieceToTile(board, piece, 0, 0);
      break;
    default:
      break;
  }
}
function PlayZ5(board, piece){
  // Rotation clockwise
  switch (piece.rotation) {
    case '0':
      PieceToTile(board, piece, 0, 0);
      break;
    case '90':
      PieceToTile(board, piece, 0, 0);
      break;
    case '180':
      PieceToTile(board, piece, 0, 0);
      break;
    case '270':
      PieceToTile(board, piece, 0, 0);
      break;
    default:
      break;
  }
}




/*
function PlayTemplate(board, piece){
  // Rotation clockwise
  switch (piece.rotation) {
    case '0':
      PieceToTile(board, piece, 0, 0);
      break;
    case '90':
      PieceToTile(board, piece, 0, 0);
      break;
    case '180':
      PieceToTile(board, piece, 0, 0);
      break;
    case '270':
      PieceToTile(board, piece, 0, 0);
      break;
    default:
      break;
  }
}
*/
