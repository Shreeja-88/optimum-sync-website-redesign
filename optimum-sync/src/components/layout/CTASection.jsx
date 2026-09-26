function CTASection() {
  return (
    <section className="site-cta">

      <div className="site-cta__wrapper">

        {/* Animated background */}
        <div className="site-cta__glow site-cta__glow--blue" />
        <div className="site-cta__glow site-cta__glow--mint" />

        <div className="site-cta__moving-line" />

        {/* Decorative dots */}
        <span className="site-cta__dot site-cta__dot--1" />
        <span className="site-cta__dot site-cta__dot--2" />
        <span className="site-cta__dot site-cta__dot--3" />


        {/* LEFT */}

        <div className="site-cta__left">

          <div className="site-cta__eyebrow">
            <span className="site-cta__eyebrow-line" />
            READY WHEN YOU ARE
          </div>

          <h2 className="site-cta__title">
            Let&apos;s build something{" "}
            <span>meaningful.</span>
          </h2>

        </div>


        {/* RIGHT */}

        <div className="site-cta__right">

          <p className="site-cta__description">
            Have an idea, challenge, or roadmap?
            We&apos;ll help turn it into a clear,
            high-impact digital solution.
          </p>

          <a
            href="/contact"
            className="site-cta__button"
          >

            <span>
              Start a Conversation
            </span>

            <span className="site-cta__arrow">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 19L19 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <path
                  d="M8 5H19V16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

          </a>

        </div>


        {/* Bottom brand line */}

        <div className="site-cta__bottom">

          <span>BUILD</span>
          <i />
          <span>INNOVATE</span>
          <i />
          <span>GROW</span>

        </div>

      </div>

    </section>
  );
}

export default CTASection;