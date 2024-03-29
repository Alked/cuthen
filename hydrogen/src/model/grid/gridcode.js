import { timezones } from '@/model/data/timezones';

function slotState2code(state) {
  switch (state) {
    case 0:
      return '00';
    case 1:
      return '11';
    case 2:
      return '01';
    default:
      break;
  }
  return null;
}

function code2SlotState(code) {
  switch (code) {
    case '00':
      return 0;
    case '11':
      return 1;
    case '01':
      return 2;
    default:
      break;
  }
  return null;
}

function gridEncode(weeklyStates) {
  let code = '0b';
  weeklyStates.forEach((week) => {
    week.forEach((slot) => {
      code += slotState2code(slot);
    });
  });
  const codeNum = BigInt(code);
  const codeStr36 = codeNum.toString(36);
  return codeStr36;
}

function baseN2BigInt(value, radix) {
  return [...value.toString()]
    .reduce((r, v) => r * BigInt(radix) + BigInt(parseInt(v, radix)), 0n);
}

function padding(binStr) {
  let padded = binStr;
  while (padded.length < 7 * 24 * 2) {
    padded = `0${padded}`;
  }
  return padded;
}

function gridDecode(codeStr36) {
  const codeNum = baseN2BigInt(codeStr36, 36);
  const binStr = padding(codeNum.toString(2));
  const days = [...new Array(7)].map(() => [...new Array(24)].map(() => 0));
  let cur = 0;
  for (let weekIdx = 0; weekIdx < 7; weekIdx += 1) {
    for (let slotIdx = 0; slotIdx < 24; slotIdx += 1) {
      days[weekIdx][slotIdx] = code2SlotState(binStr.slice(cur, cur + 2));
      cur += 2;
    }
  }
  return days;
}

function gridValidate(codeStr36) {
  let codeNum = 0;
  // Code alphabet validity
  try {
    codeNum = baseN2BigInt(codeStr36, 36);
  } catch (RangeError) {
    return false;
  }
  // Code length validity
  const binStr = codeNum.toString(2);
  if (binStr.length > 7 * 24 * 2) return false;
  return true;
}

function gridAggregate(gridcodes) {
  if (gridcodes.length === 0) return '0';
  // Load first grid as basis
  let result = baseN2BigInt(gridcodes[0], 36);
  // calculate with OR
  gridcodes.slice(1).forEach((gridcode) => {
    /* eslint no-bitwise: 0 */
    result &= baseN2BigInt(gridcode, 36);
  });
  return result.toString(36);
}

function gridGroup(gridcode) {
  const groups = [];
  gridDecode(gridcode).forEach((day, dayIdx) => {
    let lastHourState = day[0];
    let group = {
      day: dayIdx,
      start: 0,
      end: 1,
      state: lastHourState,
    };
    day.slice(1).forEach((hourState, hourIdx) => {
      if (hourState === lastHourState) {
        group.end = hourIdx + 2;
      } else {
        groups.push(group);
        group = {
          day: dayIdx,
          start: hourIdx + 1,
          end: hourIdx + 2,
          state: hourState,
        };
        lastHourState = hourState;
      }
    });
    // Push the last group
    groups.push(group);
  });
  return groups;
}

function findUncertain(code, range) {
  const groups = gridGroup(code)
    .filter((group) => group.day === range.day)
    .filter((group) => group.state === 2)
    .filter((group) => group.start >= range.start && group.end <= range.end);
  return groups;
}

function shiftTimezone(code, fromtz, totz) {
  const fromOffset = timezones.filter((tz) => tz.id === fromtz)[0].value;
  const toOffset = timezones.filter((tz) => tz.id === totz)[0].value;
  let codeStr = '';
  gridDecode(code).forEach((day) => {
    codeStr = codeStr.concat(day.join(''));
  });
  // # of digits to be shifted
  let offset = Math.round((toOffset - fromOffset) / 60);
  // Shift!
  if (offset < 0) {
    offset = Math.abs(offset);
    codeStr = codeStr.slice(offset).concat(codeStr.slice(0, offset));
  } else {
    codeStr = codeStr.slice(-offset).concat(codeStr.slice(0, 24 * 7 - offset));
  }
  // Convert back to days
  let days = [];
  let day = [];
  for (let slotIdx = 0; slotIdx < 24 * 7; slotIdx += 1) {
    if (slotIdx % 24 === 0) {
      // New day
      days.push(day);
      day = [];
    }
    day.push(parseInt(codeStr[slotIdx], 10));
  }
  days.push(day);
  days = days.slice(1);
  // Convert back to code
  return gridEncode(days);
}

export {
  gridEncode,
  gridDecode,
  gridValidate,
  gridAggregate,
  gridGroup,
  findUncertain,
  shiftTimezone,
};
