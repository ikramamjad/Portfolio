import React from "react";
import { LenisProvider, useLenis } from "./LenisProvider";

/**
 * Backward compatibility wrapper for SmoothScroll.
 * Re-exports LenisProvider and useLenis hook.
 */
export const SmoothScroll: React.FC = () => {
  return null;
};

export { LenisProvider, useLenis };
export default SmoothScroll;
