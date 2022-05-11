"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function getTimeList(start, end, step) {
  if (!start || !end || !step || typeof start !== "string" || typeof end !== "string" || typeof step !== "number") return null;
  var SEC_MIN = 60;

  var _start$split = start.split(":"),
      _start$split2 = _slicedToArray(_start$split, 2),
      startHour = _start$split2[0],
      startMin = _start$split2[1];

  var _end$split = end.split(":"),
      _end$split2 = _slicedToArray(_end$split, 2),
      endHour = _end$split2[0],
      endMin = _end$split2[1];

  if (startHour < 0 || startHour > 23 || endHour < 0 || endHour > 23 || startMin < 0 || startMin > 59 || endMin < 0 || endMin > 59) return null;
  var count = Math.floor(SEC_MIN / step);
  var result = [];

  for (var i = +startHour; i <= +endHour; i++) {
    startMin === "00" && i === +startHour && result.push("".concat(i, ":00"));

    for (var j = 1; j <= count; j++) {
      if (startMin > step * j && i === +startHour) {
        continue;
      }

      if (endMin < step * j && i === +endHour) {
        continue;
      }

      step * j === SEC_MIN ? result.push("".concat(i + 1, ":00")) : result.push("".concat(i, ":").concat(step * j));
    }
  }

  return result;
} // const timeList = getTimeList("09:55", "13:01", 15);
// console.log("timeList: ", timeList);


function copylg(startTime, endTime, step) {
  if (!startTime || !endTime || !step || typeof startTime !== "string" || typeof endTime !== "string" || typeof step !== "number") return 1;
  var MIN = 60;

  var _startTime$split = startTime.split(":"),
      _startTime$split2 = _slicedToArray(_startTime$split, 2),
      startHours = _startTime$split2[0],
      startMins = _startTime$split2[1];

  var _endTime$split = endTime.split(":"),
      _endTime$split2 = _slicedToArray(_endTime$split, 2),
      endHours = _endTime$split2[0],
      endMins = _endTime$split2[1];

  if (startHours < 0 || startHours > 23 || endHours < 0 || endHours > 23 || startMins < 0 || startMins > 59 || endMins < 0 || endMins > 59) return null;
  var result = [];
  var count = Math.floor(MIN / step);

  for (var i = +startHours; i <= +endHours; i++) {
    startMins === "00" && i == +startHours && result.push("".concat(i, ":00"));

    for (var j = 1; j <= count; j++) {
      if (endMins < j * step) {
        continue;
      }

      j * step == MIN ? result.push("".concat(i + 1, ":00")) : result.push("".concat(i, ":").concat(j * step));
    }
  }

  return result;
}

console.log(copylg("08:00", "10:44", 15));