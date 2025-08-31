import React from "react";
import "./SharedBg.css";

/**
 * One-time animated background used for all mid sections (About, Expertise, Projects, Gamejams).
 * Rendered behind content; respects prefers-reduced-motion.
 */
const SharedBg = () => <div className="shared-bg" aria-hidden="true" />;

export default SharedBg;
