import { useLayoutEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Sparkles, Layers3, Code2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../../styles/cta.css";

gsap.registerPlugin(ScrollTrigger);

function CTASection() {
  const { pathname } = useLocation();

  const sectionRef = useRef(null);
  const visualRef = useRef(null);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const visual = visualRef.current;
    const button = buttonRef.current;

    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const eyebrow = section.querySelector(".cta-eyebrow");
      const title = section.querySelector(".cta-title");
      const description = section.querySelector(".cta-description");
      const buttonEl = section.querySelector(".cta-button");
      const meta = section.querySelector(".cta-meta");

      const visualItems =
        section.querySelectorAll(".cta-visual-item");

      const workflowCards =
        section.querySelectorAll(".cta-workflow-card");

      const center =
        section.querySelector(".cta-system-core");

      /* =========================================
         REDUCED MOTION
      ========================================= */

      if (reduceMotion) {
        gsap.set(
          [
            eyebrow,
            title,
            description,
            buttonEl,
            meta,
            visual,
            ...visualItems,
          ],
          {
            clearProps: "all",
          }
        );

        return;
      }

      /* =========================================
         INITIAL STATES
      ========================================= */

      gsap.set(eyebrow, {
        opacity: 0,
        y: 20,
      });

      gsap.set(title, {
        opacity: 0,
        y: 45,
      });

      gsap.set(description, {
        opacity: 0,
        y: 25,
      });

      gsap.set(buttonEl, {
        opacity: 0,
        y: 20,
        scale: 0.94,
      });

      gsap.set(meta, {
        opacity: 0,
        y: 15,
      });

      gsap.set(visual, {
        opacity: 0,
        x: 60,
        rotateY: -12,
        scale: 0.94,
      });

      gsap.set(visualItems, {
        opacity: 0,
        y: 20,
      });

      /* =========================================
         ENTRANCE
      ========================================= */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
          invalidateOnRefresh: true,
        },
      });

      timeline
        .to(eyebrow, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        })
        .to(
          title,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power4.out",
          },
          "-=0.3"
        )
        .to(
          description,
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.55"
        )
        .to(
          buttonEl,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "back.out(1.5)",
          },
          "-=0.4"
        )
        .to(
          meta,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(
          visual,
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            scale: 1,
            duration: 1.2,
            ease: "power4.out",
          },
          "-=1"
        )
        .to(
          visualItems,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.8"
        );

      /* =========================================
         CORE BREATHING
      ========================================= */

      gsap.to(center, {
        scale: 1.025,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =========================================
         WORKFLOW CARD FLOAT
      ========================================= */

      workflowCards.forEach((card, index) => {
        gsap.to(card, {
          y: index % 2 === 0 ? -5 : 5,
          duration: 2.8 + index * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.25,
        });
      });

      /* =========================================
         MAGNETIC CTA
      ========================================= */

      const handleButtonMove = (event) => {
        if (!button) return;

        const rect = button.getBoundingClientRect();

        const x =
          ((event.clientX - rect.left) / rect.width - 0.5) * 12;

        const y =
          ((event.clientY - rect.top) / rect.height - 0.5) * 12;

        gsap.to(button, {
          x,
          y,
          duration: 0.35,
          ease: "power3.out",
        });
      };

      const handleButtonLeave = () => {
        if (!button) return;

        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "elastic.out(1, 0.45)",
        });
      };

      if (button) {
        button.addEventListener(
          "pointermove",
          handleButtonMove
        );

        button.addEventListener(
          "pointerleave",
          handleButtonLeave
        );
      }

      /* =========================================
         3D MOUSE PARALLAX
      ========================================= */

      const handlePointerMove = (event) => {
        if (!visual) return;

        const rect = visual.getBoundingClientRect();

        const x =
          (event.clientX - rect.left - rect.width / 2) /
          rect.width;

        const y =
          (event.clientY - rect.top - rect.height / 2) /
          rect.height;

        gsap.to(visual, {
          rotateY: x * 7,
          rotateX: y * -6,
          duration: 0.8,
          ease: "power3.out",
        });

        gsap.to(
          visual.querySelector(".cta-system-core"),
          {
            x: x * 12,
            y: y * 10,
            duration: 0.8,
            ease: "power3.out",
          }
        );

        gsap.to(
          visual.querySelectorAll(".cta-workflow-card"),
          {
            x: x * -7,
            y: y * -5,
            duration: 0.9,
            stagger: 0.04,
            ease: "power3.out",
          }
        );
      };

      const handlePointerLeave = () => {
        if (!visual) return;

        gsap.to(visual, {
          rotateY: 0,
          rotateX: 0,
          duration: 1,
          ease: "power3.out",
        });

        gsap.to(
          visual.querySelector(".cta-system-core"),
          {
            x: 0,
            y: 0,
            duration: 1,
            ease: "power3.out",
          }
        );

        gsap.to(
          visual.querySelectorAll(".cta-workflow-card"),
          {
            x: 0,
            y: 0,
            duration: 1,
            ease: "power3.out",
          }
        );
      };

      if (visual) {
        visual.addEventListener(
          "pointermove",
          handlePointerMove
        );

        visual.addEventListener(
          "pointerleave",
          handlePointerLeave
        );
      }

      /* =========================================
         REFRESH SCROLLTRIGGER AFTER ROUTE CHANGE
      ========================================= */

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      /* =========================================
         CLEANUP
      ========================================= */

      return () => {
        if (button) {
          button.removeEventListener(
            "pointermove",
            handleButtonMove
          );

          button.removeEventListener(
            "pointerleave",
            handleButtonLeave
          );
        }

        if (visual) {
          visual.removeEventListener(
            "pointermove",
            handlePointerMove
          );

          visual.removeEventListener(
            "pointerleave",
            handlePointerLeave
          );
        }
      };
    }, section);

    return () => ctx.revert();
  }, [pathname]);

  return (
    <section
      ref={sectionRef}
      className="site-cta"
    >
      <div className="site-cta__wrapper">

        {/* Background */}
        <div className="cta-background-grid" />
        <div className="cta-background-glow cta-background-glow--blue" />
        <div className="cta-background-glow cta-background-glow--mint" />

        {/* LEFT CONTENT */}
        <div className="cta-content">

          <div className="cta-eyebrow">
            <span className="cta-live-dot" />
            <span>READY WHEN YOU ARE</span>
            <span className="cta-eyebrow-line" />
          </div>

          <h2 className="cta-title">
            Let&apos;s build
            <br />
            <span>something meaningful.</span>
          </h2>

          <p className="cta-description">
            Have an idea, challenge, or roadmap?
            Let&apos;s turn it into a digital experience
            designed to move your business forward.
          </p>

          <Link
            ref={buttonRef}
            to="/contact"
            className="cta-button"
          >
            <span>Start a Conversation</span>

            <span className="cta-button-arrow">
              <ArrowUpRight
                size={19}
                strokeWidth={2}
              />
            </span>
          </Link>

          <div className="cta-meta">
            <span>STRATEGY</span>
            <i />
            <span>DESIGN</span>
            <i />
            <span>ENGINEERING</span>
          </div>

        </div>

        {/* RIGHT SAAS SYSTEM */}
        <div
          ref={visualRef}
          className="cta-visual"
        >

          <div className="cta-visual-grid cta-visual-item" />

          <div className="cta-visual-heading cta-visual-item">
            <span>PROJECT SYSTEM</span>
            <small>01 / 03</small>
          </div>

          {/* Connection lines */}
          <div className="cta-line cta-line--one" />
          <div className="cta-line cta-line--two" />
          <div className="cta-line cta-line--three" />

          {/* Main Core */}
          <div
            className="cta-system-core cta-visual-item"
          >
            <div className="cta-core-glow" />

            <div className="cta-core-inner">
              <span className="cta-core-name">
                OPTIMUM
                <br />
                SYNC
              </span>

              <span className="cta-core-status">
                <i />
                ONLINE
              </span>
            </div>
          </div>

          {/* Workflow Card 1 */}
          <div
            className="
              cta-workflow-card
              cta-workflow-card--strategy
              cta-visual-item
            "
          >
            <div className="cta-card-icon">
              <Sparkles size={16} />
            </div>

            <div>
              <small>01</small>
              <strong>Strategy</strong>
            </div>

            <span className="cta-card-dot" />
          </div>

          {/* Workflow Card 2 */}
          <div
            className="
              cta-workflow-card
              cta-workflow-card--design
              cta-visual-item
            "
          >
            <div className="cta-card-icon">
              <Layers3 size={16} />
            </div>

            <div>
              <small>02</small>
              <strong>Design</strong>
            </div>

            <span className="cta-card-dot" />
          </div>

          {/* Workflow Card 3 */}
          <div
            className="
              cta-workflow-card
              cta-workflow-card--engineering
              cta-visual-item
            "
          >
            <div className="cta-card-icon">
              <Code2 size={16} />
            </div>

            <div>
              <small>03</small>
              <strong>Engineering</strong>
            </div>

            <span className="cta-card-dot" />
          </div>

          {/* Bottom status */}
          <div className="cta-system-footer cta-visual-item">
            <span>
              <i />
              SYSTEM READY
            </span>

            <small>
              BUILD / INNOVATE / GROW
            </small>
          </div>

        </div>

        {/* Bottom edge */}
        <div className="cta-bottom">
          <span>OPTIMUM SYNC</span>

          <div />

          <span>
            DIGITAL PRODUCTS
          </span>

          <div />

          <span>
            TECHNOLOGY PARTNER
          </span>
        </div>

      </div>
    </section>
  );
}

export default CTASection;
