function getTimeList(start, end, step) {
  if (
    !start ||
    !end ||
    !step ||
    typeof start !== 'string' ||
    typeof end !== 'string' ||
    typeof step !== 'number'
  )
    return null;

  const SEC_MIN = 60;
  const [startHour, startMin] = start.split(':');
  const [endHour, endMin] = end.split(':');

  if (
    startHour < 0 ||
    startHour > 23 ||
    endHour < 0 ||
    endHour > 23 ||
    startMin < 0 ||
    startMin > 59 ||
    endMin < 0 ||
    endMin > 59
  )
    return null;
  const count = Math.floor(SEC_MIN / step);
  const result = [];
  for (let i = +startHour; i <= +endHour; i++) {
    startMin === '00' && i === +startHour && result.push(`${i}:00`);
    for (let j = 1; j <= count; j++) {
      if (startMin > step * j && i === +startHour) {
        continue;
      }
      if (endMin < step * j && i === +endHour) {
        continue;
      }
      step * j === SEC_MIN ? result.push(`${i + 1}:00`) : result.push(`${i}:${step * j}`);
    }
  }
  return result;
}
// const timeList = getTimeList("09:55", "13:01", 15);
// console.log("timeList: ", timeList);

function copylg(startTime, endTime, step) {
  if (
    !startTime ||
    !endTime ||
    !step ||
    typeof startTime !== 'string' ||
    typeof endTime !== 'string' ||
    typeof step !== 'number'
  )
    return 1;

  const MIN = 60;
  const [startHours, startMins] = startTime.split(':');
  const [endHours, endMins] = endTime.split(':');
  if (
    startHours < 0 ||
    startHours > 23 ||
    endHours < 0 ||
    endHours > 23 ||
    startMins < 0 ||
    startMins > 59 ||
    endMins < 0 ||
    endMins > 59
  )
    return null;

  let result = [];
  let count = Math.floor(MIN / step);

  for (let i = +startHours; i <= +endHours; i++) {
    startMins === '00' && i === +startHours && result.push(`${i}:00`);
    for (let j = 1; j <= count; j++) {
      if (startMins > j * step && i === +startHours) {
        continue;
      }
      if (endMins < j * step && i === +endHours) {
        break;
      }

      j * step === MIN ? result.push(`${i + 1}:00`) : result.push(`${i}:${j * step}`);
    }
  }
  return result;
}

console.log(copylg('08:50', '10:12', 15));
