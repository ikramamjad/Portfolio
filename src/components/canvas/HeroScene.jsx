import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// 3D Orbiting Polished Satellite Spheres (Pure WebGL, zero DOM clutters)
function SatelliteNode({ radius, speed, offset, size, color, theme }) {
  const ref = useRef();
  const isDark = theme === 'dark';

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed + offset;
    if (ref.current) {
      ref.current.position.x = Math.cos(t) * radius;
      ref.current.position.z = Math.sin(t) * radius;
      ref.current.position.y = Math.sin(t * 1.5) * 0.5;
      ref.current.rotation.y += 0.02;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 24, 24]} />
      <meshStandardMaterial
        color={color}
        metalness={0.9}
        roughness={0.15}
        emissive={color}
        emissiveIntensity={isDark ? 0.8 : 0.3}
      />
    </mesh>
  );
}

// Multi-layered 3D Geometric Crystal & Orbital Rings
function CrystalSculpture({ hovered, theme }) {
  const outerRef = useRef();
  const innerRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const isDark = theme === 'dark';

  useFrame((state, delta) => {
    const mult = hovered ? 1.6 : 0.6;
    if (outerRef.current) {
      outerRef.current.rotation.y += delta * 0.3 * mult;
      outerRef.current.rotation.x += delta * 0.2 * mult;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.5 * mult;
      innerRef.current.rotation.z += delta * 0.25 * mult;
    }
    if (ring1Ref.current) ring1Ref.current.rotation.z += delta * 0.3 * mult;
    if (ring2Ref.current) ring2Ref.current.rotation.x += delta * 0.25 * mult;
  });

  return (
    <group>
      {/* Outer Faceted Dodecahedron Crystal */}
      <mesh ref={outerRef}>
        <dodecahedronGeometry args={[1.5, 0]} />
        <meshPhysicalMaterial
          color={isDark ? "#1E2038" : "#FFFFFF"}
          emissive={isDark ? "#4F46E5" : "#6366F1"}
          emissiveIntensity={isDark ? 0.35 : 0.15}
          metalness={isDark ? 0.85 : 0.2}
          roughness={isDark ? 0.15 : 0.1}
          transmission={isDark ? 0 : 0.6}
          thickness={1.2}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Wireframe Geometric Contour for crisp technical depth */}
      <mesh scale={1.01}>
        <dodecahedronGeometry args={[1.5, 0]} />
        <meshBasicMaterial
          color={isDark ? "#818CF8" : "#4F46E5"}
          wireframe
          transparent
          opacity={isDark ? 0.3 : 0.2}
        />
      </mesh>

      {/* Inner Distorted Energy Core */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[0.85, 0]} />
        <MeshDistortMaterial
          color={isDark ? "#F59E0B" : "#EA580C"}
          emissive={isDark ? "#F59E0B" : "#F97316"}
          emissiveIntensity={isDark ? 0.9 : 0.4}
          distort={0.35}
          speed={2.2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Brushed Metallic Gimbal Ring 1 */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.3, 0.03, 24, 100]} />
        <meshStandardMaterial
          color={isDark ? "#6366F1" : "#4338CA"}
          metalness={0.9}
          roughness={0.2}
          emissive={isDark ? "#6366F1" : "#4338CA"}
          emissiveIntensity={isDark ? 0.6 : 0.2}
        />
      </mesh>

      {/* Brushed Metallic Gimbal Ring 2 */}
      <mesh ref={ring2Ref} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[2.7, 0.025, 24, 100]} />
        <meshStandardMaterial
          color={isDark ? "#F59E0B" : "#D97706"}
          metalness={0.9}
          roughness={0.2}
          emissive={isDark ? "#F59E0B" : "#D97706"}
          emissiveIntensity={isDark ? 0.6 : 0.2}
        />
      </mesh>

      {/* Pure WebGL Satellites Orbiting the Core */}
      <SatelliteNode radius={2.5} speed={0.8} offset={0} size={0.16} color="#10B981" theme={theme} />
      <SatelliteNode radius={2.8} speed={-0.6} offset={2.1} size={0.14} color="#6366F1" theme={theme} />
      <SatelliteNode radius={3.1} speed={0.5} offset={4.2} size={0.18} color="#F59E0B" theme={theme} />
      <SatelliteNode radius={2.3} speed={-0.9} offset={1.2} size={0.12} color="#0EA5E9" theme={theme} />
    </group>
  );
}

export default function HeroScene({ theme = 'dark' }) {
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);
  const isDark = theme === 'dark';

  // Smooth mouse tilt parallax
  useFrame((state) => {
    if (!groupRef.current) return;
    const { x, y } = state.pointer;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x * 0.45, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y * 0.35, 0.05);
  });

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Studio Lighting tailored for each theme */}
      <ambientLight intensity={isDark ? 0.5 : 0.8} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={isDark ? 1.5 : 2.2}
        color={isDark ? "#FFFFFF" : "#FFFBF0"}
      />
      <directionalLight
        position={[-5, -4, -3]}
        intensity={isDark ? 0.8 : 1.0}
        color={isDark ? "#6366F1" : "#818CF8"}
      />
      <pointLight
        position={[3, 2, 3]}
        intensity={isDark ? 2.0 : 1.0}
        color={isDark ? "#F59E0B" : "#FBBF24"}
        distance={10}
      />

      {/* Floating 3D Core */}
      <Float speed={1.8} rotationIntensity={0.35} floatIntensity={0.6}>
        <CrystalSculpture hovered={hovered} theme={theme} />
      </Float>
    </group>
  );
}
