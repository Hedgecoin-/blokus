
export const boardWidth = 20;
export const boardHeight = 20;

export function parseTurn(data){
  data = data.split(',');
  return {
    color: data[0],
    name: data[1],
    x: parseInt(data[2]),
    y: parseInt(data[3]),
    rotation: parseRotation(data[4]),
    flip: data[5] === '1'
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
      // etc

      break;
    default:

  }
}

export function parseRotation(rotation){
  switch (parseInt(rotation)) {
    case 0:
      return '0';
    case 1:
      return '90';
    case 2:
      return '180';
    case 3:
      return '270';
  }
}
