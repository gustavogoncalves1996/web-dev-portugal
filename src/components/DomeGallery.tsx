import React, { useRef, useEffect, useState, useCallback } from 'react';
import gsap from 'gsap';

interface DomeGalleryProps {
  fit?: number;
  minRadius?: number;
  maxVerticalRotationDeg?: number;
  segments?: number;
  dragDampening?: number;
  grayscale?: boolean;
  images?: string[];
}

interface ImageItem {
  url: string;
  angle: number;
  element: HTMLDivElement | null;
}

const DomeGallery: React.FC<DomeGalleryProps> = ({
  fit = 0.8,
  minRadius = 500,
  segments = 20,
  dragDampening = 2,
  grayscale = false,
  images,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef(0);
  const isDragging = useRef(false);
  const lastX = useRef(0);
  const velocity = useRef(0);
  const animFrame = useRef(0);
  const [galleryImages] = useState<string[]>(
    images || [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1550439062-609e1531270e?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1537432376149-e84978e29832?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop',
    ]
  );

  const itemsRef = useRef<ImageItem[]>([]);
  const itemElements = useRef<(HTMLDivElement | null)[]>([]);

  const numSegments = Math.min(segments, galleryImages.length);

  const getRadius = useCallback(() => {
    if (!containerRef.current) return minRadius;
    const width = containerRef.current.offsetWidth;
    return Math.max(minRadius, (width * fit) / 2);
  }, [fit, minRadius]);

  const updatePositions = useCallback(() => {
    const radius = getRadius();
    const angleStep = 360 / numSegments;

    itemElements.current.forEach((el, i) => {
      if (!el) return;
      const angle = rotationRef.current + i * angleStep;
      const rad = (angle * Math.PI) / 180;
      const x = Math.sin(rad) * radius;
      const z = Math.cos(rad) * radius - radius;
      const scale = (z + radius * 2) / (radius * 2);
      const normalizedScale = 0.4 + scale * 0.6;
      const opacity = 0.2 + scale * 0.8;

      gsap.set(el, {
        x: x,
        z: z,
        scale: normalizedScale,
        opacity: opacity,
        zIndex: Math.round(scale * 100),
      });
    });
  }, [getRadius, numSegments]);

  // Initialize
  useEffect(() => {
    itemsRef.current = galleryImages.slice(0, numSegments).map((url, i) => ({
      url,
      angle: (360 / numSegments) * i,
      element: null,
    }));

    updatePositions();

    // Auto-rotate
    const autoRotate = () => {
      if (!isDragging.current) {
        rotationRef.current += 0.15;
        velocity.current *= 0.95;
        rotationRef.current += velocity.current;
      }
      updatePositions();
      animFrame.current = requestAnimationFrame(autoRotate);
    };
    animFrame.current = requestAnimationFrame(autoRotate);

    return () => cancelAnimationFrame(animFrame.current);
  }, [numSegments, galleryImages, updatePositions]);

  // Drag handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    lastX.current = e.clientX;
    velocity.current = 0;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const deltaX = e.clientX - lastX.current;
    const rotation = deltaX / dragDampening;
    rotationRef.current += rotation;
    velocity.current = rotation * 0.5;
    lastX.current = e.clientX;
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden cursor-grab active:cursor-grabbing"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      style={{ perspective: '1200px' }}
    >
      <div
        ref={trackRef}
        className="absolute inset-0 flex items-center justify-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {galleryImages.slice(0, numSegments).map((url, i) => (
          <div
            key={i}
            ref={(el) => { itemElements.current[i] = el; }}
            className="absolute w-[200px] h-[140px] md:w-[280px] md:h-[180px] lg:w-[320px] lg:h-[200px] rounded-2xl overflow-hidden shadow-2xl"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <img
              src={url}
              alt={`Project ${i + 1}`}
              loading="lazy"
              draggable={false}
              className={`w-full h-full object-cover select-none transition-all duration-500 hover:scale-110 ${
                grayscale ? 'grayscale hover:grayscale-0' : ''
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* Reflection gradient */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#f8f8fb] to-transparent pointer-events-none" />
    </div>
  );
};

export default DomeGallery;
