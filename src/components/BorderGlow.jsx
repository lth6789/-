import { useRef } from 'react';
import './BorderGlow.css';

export default function BorderGlow({
  children,
  className = '',
  innerClassName = '',
  style,
}) {
  const cardRef = useRef(null);

  const updateGlow = (event) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) + 90;
    const edgeDistance = Math.min(x, y, rect.width - x, rect.height - y);
    const maxDistance = Math.min(rect.width, rect.height) / 2;
    const proximity = Math.max(0, Math.min(100, 100 - (edgeDistance / maxDistance) * 100));

    card.style.setProperty('--cursor-angle', `${angle}deg`);
    card.style.setProperty('--edge-proximity', proximity.toFixed(2));
  };

  const resetGlow = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--edge-proximity', '0');
  };

  return (
    <div
      ref={cardRef}
      className={`border-glow-card ${className}`.trim()}
      style={style}
      onPointerMove={updateGlow}
      onPointerLeave={resetGlow}
    >
      <span className="edge-light" aria-hidden="true" />
      <div className={`border-glow-inner ${innerClassName}`.trim()}>
        {children}
      </div>
    </div>
  );
}
