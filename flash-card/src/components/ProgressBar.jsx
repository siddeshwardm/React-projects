export default function ProgressBar({ current, total }) {
  const percent = Math.round((current / total) * 100);

  return (
    <div className="progress-wrapper">
      <div className="progress-info">
        <span>{percent}%</span>
        <span>{current} of {total}</span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}