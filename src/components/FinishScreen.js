function FinishScreen({points,maxPossiblePoints}) {
    const percentage = (points/maxPossiblePoints) * 100;
  return (
    <p className="result">
      You socred <strong>{points}</strong> out of{maxPossiblePoints} (
      {Math.ceil(percentage)}%)
    </p>
  );
}

export default FinishScreen;
