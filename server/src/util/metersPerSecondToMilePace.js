const metersPerSecondToMilePace = speed => {
  const minPerMile = 26.8224 / speed;

  const minutes = parseInt(minPerMile);

  const seconds = (
    minPerMile.toString().substr(minPerMile.toString().indexOf('.'), minPerMile.toString().length) * 60
  ).toFixed(0);

  if (seconds === '60') {
    const adjustedSeconds = '00';
    const adjustedMinutes = minutes + 1;

    return `${adjustedMinutes}:${adjustedSeconds}`;
  }

  return `${minutes}:${seconds}`;
};

module.exports = metersPerSecondToMilePace;
