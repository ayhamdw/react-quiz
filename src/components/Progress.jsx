export default function Progress({
  index,
  numQuestions,
  points,
  maxPointsPossible,
}) {
  return (
    <header className="progress">
      <p className="">
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPointsPossible}
      </p>
    </header>
  );
}
