import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars, Sparkles } from '@react-three/drei';

export default function BackgroundStars({ liteMode = false, theme = 'dark' }) {
  const starsRef = useRef();
  const sparklesRef = useRef();

  useFrame((state, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.y += delta * 0.015;
      starsRef.current.rotation.x += delta * 0.008;
    }
    if (sparklesRef.current) {
      sparklesRef.current.rotation.y -= delta * 0.02;
    }
  });

  const isDark = theme === 'dark';

  return (
    <group>
      {/* Cosmic stars only in dark mode */}
      {isDark && (
        <group ref={starsRef}>
          <Stars
            radius={45}
            depth={40}
            count={liteMode ? 1000 : 2500}
            factor={3.5}
            saturation={0}
            fade
            speed={0.8}
          />
        </group>
      )}

      {/* Floating subtle ambient particles */}
      <group ref={sparklesRef}>
        <Sparkles
          count={liteMode ? 25 : isDark ? 80 : 40}
          scale={[25, 25, 25]}
          size={isDark ? 2.0 : 2.5}
          speed={0.3}
          color={isDark ? "#6366F1" : "#4F46E5"}
          opacity={isDark ? 0.35 : 0.2}
        />
        <Sparkles
          count={liteMode ? 20 : isDark ? 60 : 30}
          scale={[20, 20, 20]}
          size={isDark ? 1.8 : 2.2}
          speed={0.25}
          color={isDark ? "#F59E0B" : "#D97706"}
          opacity={isDark ? 0.3 : 0.18}
        />
      </group>
    </group>
  );
}
