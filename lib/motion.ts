/**
 * Gonnsen Tech Motion Architecture
 * Premium motion tokens, transitions, and easing curves.
 * Adheres strictly to the Graphite (#101310), Signal Lime (#C8FF47), and Warm Off-White (#EDEDE7) design system.
 */

export const EASE_CURVE = [0.16, 1, 0.3, 1] as const;
export const EASE_BOUNCE_SUBTLE = [0.22, 1, 0.36, 1] as const;

export const MOTION_TRANSITIONS = {
  instant: { duration: 0.15, ease: EASE_CURVE },
  micro: { duration: 0.2, ease: EASE_CURVE },
  normal: { duration: 0.35, ease: EASE_CURVE },
  smooth: { duration: 0.5, ease: EASE_CURVE },
  hero: { duration: 0.6, ease: EASE_CURVE },
} as const;

export const FADE_IN_UP_VARIANTS = {
  hidden: { opacity: 0, y: 14 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: customDelay,
      ease: EASE_CURVE,
    },
  }),
};

export const FADE_IN_VARIANTS = {
  hidden: { opacity: 0 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: customDelay,
      ease: EASE_CURVE,
    },
  }),
};

export const STAGGER_CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: (staggerChildren = 0.07) => ({
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren: 0.05,
    },
  }),
};

export const HERO_WORD_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const HERO_WORD_ITEM = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: EASE_CURVE,
    },
  },
};

export const CARD_INTERACTION = {
  rest: { y: 0, transition: { duration: 0.2, ease: EASE_CURVE } },
  hover: { y: -4, transition: { duration: 0.2, ease: EASE_CURVE } },
};

export const BUTTON_INTERACTION = {
  hover: { scale: 1.02, transition: { duration: 0.15, ease: EASE_CURVE } },
  tap: { scale: 0.98, transition: { duration: 0.1, ease: EASE_CURVE } },
};
