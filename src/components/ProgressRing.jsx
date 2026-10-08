const R = 40;
const C = 2 * Math.PI * R;

export default function ProgressRing({ percent }) {
  return (
    <div className="ring" aria-hidden="true">
      <svg viewBox="0 0 96 96">
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0891c7" />
            <stop offset="1" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <circle className="ring-bg" cx="48" cy="48" r={R} />
        <circle
          className="ring-fg"
          cx="48"
          cy="48"
          r={R}
          strokeDasharray={C}
          strokeDashoffset={C * (1 - percent / 100)}
        />
      </svg>
      <b>{percent}%</b>
    </div>
  );
}
