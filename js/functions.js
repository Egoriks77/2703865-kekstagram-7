/* eslint-disable no-unused-vars */
const checkStringLength = (line, lengthLine) => line.length <= lengthLine;

function isPalindrome(line) {
  const cleanLine = line.toLowerCase().replaceAll(' ', '');

  for (let i = 0; i < cleanLine.length / 2; i++) {
    if (cleanLine[i] !== cleanLine[cleanLine.length - i - 1]) {
      return false;
    }
  }

  return true;
}

function getNumbers(line) {
  const safeLine = line.toString();
  let numberInLine = '';

  for (const part of safeLine) {
    if (!Number.isNaN(parseInt(part, 10))) {
      numberInLine += part;
    }
  }

  return numberInLine === '' ? NaN : parseInt(numberInLine, 10);
}

function checkMeetingTime(workStart, workEnd, meetingStart, meetingDuration) {

  function parseTimeToMinutes(timeString) {
    const parts = timeString.split(':');
    const hours = parseInt(parts[0], 10);
    const minutes = parseInt(parts[1], 10);
    return hours * 60 + minutes;
  }

  const workStartMinutes = parseTimeToMinutes(workStart);
  const workEndMinutes = parseTimeToMinutes(workEnd);
  const meetingStartMinutes = parseTimeToMinutes(meetingStart);

  const meetingEndMinutes = meetingStartMinutes + meetingDuration;

  return meetingStartMinutes >= workStartMinutes && meetingEndMinutes <= workEndMinutes;
}
