// Hero logo for the Home page.
// Same three-piece 3D logo as About, but with NO timers and NO state: the assembly and the
// gentle sway are pure CSS animations that start on first paint, so it looks the same every time.
export default function HeroLogo() {
  return (
    <div className="hlogo" role="img" aria-label="Optimum Sync logo">
      <div className="hlogo__stage">
        <div className="hlogo__p hlogo__p--dark">
          <img src="/images/logo-piece-dark.png" alt="" width="340" height="340" decoding="async" />
        </div>
        <div className="hlogo__p hlogo__p--bar1">
          <img src="/images/logo-piece-bar1.png" alt="" width="340" height="340" decoding="async" />
        </div>
        <div className="hlogo__p hlogo__p--bar2">
          <img src="/images/logo-piece-bar2.png" alt="" width="340" height="340" decoding="async" />
        </div>
      </div>
    </div>
  );
}
