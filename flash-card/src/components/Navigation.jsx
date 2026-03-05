export default function Navigation({ prev, next }) {
  return (
    <div className="nav-buttons">
      <button onClick={prev}>Previous</button>
      <button onClick={next}>Next</button>
    </div>
  );
}