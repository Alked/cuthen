function encode(weeklyStates) {
  let code = '0b';
  weeklyStates.forEach((week) => {
    week.forEach((slot) => {
      switch (slot) {
        case 0:
          code += '00';
          break;
        case 1:
          code += '11';
          break;
        case 2:
          code += '01';
          break;
        default:
          break;
      }
    });
  });
  const codeNum = BigInt(code);
  const codeStr36 = codeNum.toString(36);
  return codeStr36;
}

function decode(codeStr36) {
  return [codeStr36];
}

export {
  encode,
  decode,
};
