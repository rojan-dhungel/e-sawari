/**
 * RoadPattern Component
 * 
 * This component provides a subtle road pattern background using the bg-roads CSS class.
 * The pattern is defined in globals.css and features curved roads with lane markings
 * and small vehicle shapes for a professional, minimalistic look.
 * 
 * Usage: Simply include <RoadPattern /> as a background layer in your page/section.
 */

const RoadPattern = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-roads" />
  );
};

export default RoadPattern;
