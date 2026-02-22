import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface GridMotionProps {
  items?: (string | React.ReactNode)[];
  gradientColor?: string;
}

const GridMotion: React.FC<GridMotionProps> = ({
  items = [],
  gradientColor = 'black',
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  // Pad items to fill 28 cells (4 rows x 7 columns)
  const totalItems = 28;
  const paddedItems: (string | React.ReactNode)[] = [...items];
  while (paddedItems.length < totalItems) {
    paddedItems.push('');
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animate rows based on mouse position
    const animate = () => {
      if (!gridRef.current) return;

      const rect = gridRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (mouseX.current - centerX) / rect.width;
      const deltaY = (mouseY.current - centerY) / rect.height;

      rowRefs.current.forEach((row, index) => {
        if (!row) return;
        const direction = index % 2 === 0 ? 1 : -1;
        const speed = (index + 1) * 0.5;
        gsap.to(row, {
          x: deltaX * 40 * direction * speed,
          y: deltaY * 15,
          duration: 1.2,
          ease: 'power2.out',
        });
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Render rows
  const rows = [];
  const cols = 7;
  for (let i = 0; i < 4; i++) {
    const rowItems = paddedItems.slice(i * cols, (i + 1) * cols);
    rows.push(
      <div
        key={i}
        ref={(el) => { rowRefs.current[i] = el; }}
        className="flex gap-6 justify-center"
        style={{ marginLeft: i % 2 === 0 ? '-40px' : '40px' }}
      >
        {rowItems.map((item, j) => {
          const isImage =
            typeof item === 'string' &&
            (item.startsWith('http') || item.startsWith('/'));

          return (
            <div
              key={j}
              className="relative w-[280px] h-[180px] md:w-[340px] md:h-[220px] lg:w-[400px] lg:h-[260px] rounded-2xl overflow-hidden flex-shrink-0 bg-black/[0.03] backdrop-blur-sm border border-black/[0.06] shadow-sm"
            >
              {isImage ? (
                <img
                  src={item as string}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-500"
                />
              ) : typeof item === 'string' && item ? (
                <div className="flex items-center justify-center w-full h-full text-gray-400 text-sm font-mono">
                  {item}
                </div>
              ) : item ? (
                <div className="flex items-center justify-center w-full h-full">
                  {item}
                </div>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-black/[0.02] to-black/[0.05]" />
              )}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div
      ref={gridRef}
      className="relative w-full h-full overflow-hidden flex flex-col justify-center items-center gap-6"
    >
      {rows}
      {/* Gradient overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, transparent 20%, ${gradientColor} 80%)`,
        }}
      />
      <div
        className="absolute inset-x-0 top-0 h-32 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, ${gradientColor}, transparent)`,
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
        style={{
          background: `linear-gradient(to top, ${gradientColor}, transparent)`,
        }}
      />
    </div>
  );
};

export default GridMotion;
