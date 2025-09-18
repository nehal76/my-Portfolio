import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Typewriter() {
  const capsuleRef = useRef(null);

  // Keep array identity stable to avoid unnecessary effect rebuilds.
  const clothes = useMemo(() => ["Jeans", "T-shirts", "Shirts", "Night Suit"], []);
  const [currentRole, setCurrentRole] = useState(0);

  // Tweak timings here
  const typeSpeed = 0.05;         // seconds per typed char
  const deleteSpeed = 0.03;       // seconds per deleted char
  const holdDelay = 1.0;          // pause after typing a word
  const afterDeleteDelay = 0.5;   // pause after deleting, before advancing

  useEffect(() => {
    if (!capsuleRef.current) return;

    // Create a GSAP context bound to this ref; it will auto‑kill on cleanup.
    const ctx = gsap.context(() => {
      const el = capsuleRef.current;
      const text = clothes[currentRole];

      // reset content before building timeline
      el.textContent = "";

      const tl = gsap.timeline({ defaults: { ease: "none" } });

      // Type characters
      for (const ch of text) {
        tl.to({}, {
          duration: typeSpeed,
          onComplete: () => {
            if (el) el.textContent += ch;
          },
        });
      }

      // Hold fully typed text
      tl.to({}, { duration: holdDelay });

      // Delete characters
      for (let i = 0; i < text.length; i++) {
        tl.to({}, {
          duration: deleteSpeed,
          onComplete: () => {
            if (el) el.textContent = el.textContent.slice(0, -1);
          },
        });
      }

      // Hold a bit, then advance state to trigger the next cycle
      tl.to({}, {
        duration: afterDeleteDelay,
        onComplete: () => {
          setCurrentRole((i) => (i + 1) % clothes.length);
        },
      });
    }, capsuleRef);

    // Cleanup kills any running tweens/timelines—prevents duplicate letters in Strict Mode
    return () => ctx.revert();
  }, [currentRole, clothes, typeSpeed, deleteSpeed, holdDelay, afterDeleteDelay]);

  return <span ref={capsuleRef} />;
}
