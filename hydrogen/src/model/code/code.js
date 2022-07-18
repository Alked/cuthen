import { timezones } from '@/model/edit/timezones';
import { gridValidate } from '@/model/grid/gridcode';

function decomposeCode(code) {
  const tokens = code.split('$');
  const [name, gridcode, timezone] = tokens;
  let validStatus = 0;
  let errorMessage = '';
  if (tokens.length !== 3) {
    // Error handling: number of $
    validStatus = 1;
  } else if (!gridValidate(gridcode)) {
    // Error handling: gridcode validity
    validStatus = 2;
  } else if (timezones.find((tz) => tz.id === timezone) === undefined) {
    // Error handling: timezone match
    validStatus = 3;
  }
  if (validStatus > 0) {
    switch (validStatus) {
      case 1:
        errorMessage = 'Corrupted code: bad format';
        break;
      case 2:
        errorMessage = 'Corrupted code: bad grid code';
        break;
      case 3:
        errorMessage = 'Corrupted code: bad timezone';
        break;
      default:
        errorMessage = 'Corrupted code: unknwon';
    }
  }

  return [errorMessage, name, gridcode, timezone];
}

export default decomposeCode;
