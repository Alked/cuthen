import { getTimeZones } from '@vvo/tzdb';
import forge from 'node-forge';

let localTimezone = '';
const timezones = [];
getTimeZones().forEach((zone) => {
  // Build offset string
  const offsetInHours = zone.rawOffsetInMinutes / 60;
  let offsetString = '';
  const offsetInHoursAbs = Math.abs(offsetInHours);
  if (offsetInHoursAbs < 10) {
    offsetString += '0';
  }
  offsetString += Math.floor(offsetInHoursAbs);
  if (offsetInHoursAbs !== Math.floor(offsetInHoursAbs)) {
    offsetString += ':30';
  } else {
    offsetString += ':00';
  }
  if (offsetInHours < 0) {
    offsetString = `-${offsetString}`;
  } else {
    offsetString = `+${offsetString}`;
  }
  // Build timezone short name
  let shortname = zone.name;
  shortname = shortname
    .replace('America', 'US')
    .replace('Pacific', 'PAC')
    .replace('Africa', 'AF')
    .replace('Europe', 'EU')
    .replace('Asia', 'AS')
    .replace('Australia', 'AU')
    .replace('Indian', 'IN')
    .replace('Argentina', 'AR')
    .replace('Antarctica', 'AN')
    .replace('Atlantic', 'ATL')
    .replace('Arctic', 'ARC');
  // Build timezone info
  const md5 = forge.md.md5.create();
  md5.update(`${shortname}:${offsetString}`);
  const id = md5.digest().toHex().slice(0, 6);
  timezones.push({
    printed: `(UTC${offsetString}) ${shortname}`,
    value: zone.rawOffsetInMinutes,
    id,
  });
  if (Intl.DateTimeFormat().resolvedOptions().timeZone === zone.name) {
    localTimezone = id;
  }
});

const localtz = localTimezone;

export {
  timezones,
  localtz,
};
