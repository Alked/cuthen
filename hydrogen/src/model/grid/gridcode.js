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

function convert(value, radix) {
  return [...value.toString()]
    .reduce((r, v) => r * BigInt(radix) + BigInt(parseInt(v, radix)), 0n);
}

function gridDecode(codeStr36) {
  const codeNum = convert(codeStr36, 36);
  let binStr = codeNum.toString(2);
  while (binStr.length < 7 * 24 * 2) {
    binStr = `0${binStr}`;
  }
  const weeks = [...new Array(7)].map(() => [...new Array(24)].map(() => 0));
  let cur = 0;
  for (let weekIdx = 0; weekIdx < 7; weekIdx += 1) {
    for (let slotIdx = 0; slotIdx < 24; slotIdx += 1) {
      weeks[weekIdx][slotIdx] = code2SlotState(binStr.slice(cur, cur + 2));
      cur += 2;
    }
  }
  return weeks;
}

function gridValidate(codeStr36) {
  let codeNum = 0;
  // Code alphabet validity
  try {
    codeNum = convert(codeStr36, 36);
  } catch (RangeError) {
    return false;
  }
  // Code length validity
  const binStr = codeNum.toString(2);
  if (binStr.length > 7 * 24 * 2) return false;
  return true;
}

export {
  gridEncode,
  gridDecode,
  gridValidate,
};
