const secondsToHoursAndMinutes = seconds => {
  const totalHours = seconds / 3600;
  const totalHoursString = (seconds / 3600).toString().split('.');

  const wholeHours = Math.floor(totalHours);
  const fractionalHours = totalHours % wholeHours;

  const minutes = Math.round(fractionalHours * 60);

  if (minutes === 0) {
    return `${wholeHours} hours`;
  }

  if (minutes === 60) {
    return `${wholeHours + 1} hours`;
  }

  return `${wholeHours} hours, ${minutes} minutes`;
};

module.exports = secondsToHoursAndMinutes;
