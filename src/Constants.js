
export const boardWidth = 20;
export const boardHeight = 20;

export function parseTurn(data){
  data = data.split(',');
  return {
    color: data[0],
    name: parseSavannaName(data[1]),
    x: parseInt(data[2], 10),
    y: parseInt(data[3], 10),
    rotation: parseRotation(data[4]),
    flipped: data[5] === "1"
  }
}

export function parseSavannaName(name){
  switch (name) {
    case 'singleSquare':
      return '1';
    case 'twoPiece':
      return '2';
    case 'line3':
      return 'I3';
    case '3corner':
      return 'V3';
    case 'l4':
      return 'I4';
    case 'cube':
      return 'O';
    case 'L4':
      return 'L4';
    case 'z4':
      return 'Z4';
    case 't4':
      return 'T4';
    case 'line5':
      return 'I5';
    case '-L':
      return 'F';
    case 'L5tall':
      return 'L5';
    case 'z5':
      return 'N';
    case 'chunky5':
      return 'P';
    case 'T5':
      return 'T5';
    case 'C5':
      return 'U';
    case 'L5':
      return 'V5';
    case 'M5':
      return 'W';
    case 'X5':
      return 'X';
    case 'tree5':
      return 'Y';
    case 'Z5':
      return 'Z5';
    default:
      return name;
  }
}

export function parseRotation(rotation){
  switch (parseInt(rotation, 10)) {
    case 0:
      return '0';
    case 1:
      return '90';
    case 2:
      return '180';
    case 3:
      return '270';
    default:
      return rotation;
  }
}
