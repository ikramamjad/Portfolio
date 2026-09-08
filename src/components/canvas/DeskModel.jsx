import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Realistic 3D Monitor Screen
function MonitorScreen({ position, rotation, isCode = true, theme = 'dark' }) {
  const meshRef = useRef();
  const isDark = theme === 'dark';

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();
      meshRef.current.material.emissiveIntensity = isDark
        ? 0.7 + Math.sin(t * 2.5) * 0.1
        : 0.4 + Math.sin(t * 2.5) * 0.05;
    }
  });

  return (
    <group position={position} rotation={rotation}>
      {/* Monitor Bezel */}
      <mesh>
        <boxGeometry args={[2.5, 1.45, 0.08]} />
        <meshStandardMaterial
          color={isDark ? "#0F172A" : "#334155"}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>

      {/* Screen Display Glass */}
      <mesh ref={meshRef} position={[0, 0, 0.045]}>
        <planeGeometry args={[2.4, 1.35]} />
        <meshStandardMaterial
          color="#0F172A"
          emissive={isCode ? "#38BDF8" : "#818CF8"}
          emissiveIntensity={isDark ? 0.12 : 0.06}
          roughness={0.2}
          metalness={0.4}
        />
      </mesh>

      {/* Heavy Steel Monitor Arm */}
      <mesh position={[0, -0.9, -0.15]}>
        <cylinderGeometry args={[0.07, 0.07, 0.6, 16]} />
        <meshStandardMaterial color="#475569" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Stand Base */}
      <mesh position={[0, -1.2, -0.1]}>
        <cylinderGeometry args={[0.4, 0.4, 0.04, 24]} />
        <meshStandardMaterial color={isDark ? "#1E293B" : "#64748B"} metalness={0.9} roughness={0.2} />
      </mesh>
    </group>
  );
}

// Backlit Mechanical Keyboard
function MechanicalKeyboard({ position, theme }) {
  const isDark = theme === 'dark';
  return (
    <group position={position}>
      {/* CNC Aluminum Keyboard Case */}
      <mesh>
        <boxGeometry args={[1.55, 0.05, 0.58]} />
        <meshStandardMaterial
          color={isDark ? "#1E2235" : "#475569"}
          metalness={0.8}
          roughness={0.25}
        />
      </mesh>

      {/* Keycaps Cluster */}
      <mesh position={[0, 0.04, 0]}>
        <boxGeometry args={[1.44, 0.03, 0.49]} />
        <meshStandardMaterial
          color={isDark ? "#0F172A" : "#F1F5F9"}
          emissive={isDark ? "#6366F1" : "#818CF8"}
          emissiveIntensity={isDark ? 0.35 : 0.2}
          roughness={0.4}
        />
      </mesh>

      {/* Subtle underglow accent */}
      <mesh position={[0, -0.015, 0]}>
        <boxGeometry args={[1.57, 0.008, 0.6]} />
        <meshBasicMaterial color={isDark ? "#F59E0B" : "#6366F1"} />
      </mesh>
    </group>
  );
}

// Precision Desk Mat & Mouse
function MouseAndPad({ position, theme }) {
  const isDark = theme === 'dark';
  return (
    <group position={position}>
      {/* Wool Felt / Leather Desk Mat */}
      <mesh position={[-0.4, -0.02, 0]}>
        <boxGeometry args={[2.7, 0.01, 1.05]} />
        <meshStandardMaterial
          color={isDark ? "#111827" : "#CBD5E1"}
          roughness={0.9}
          metalness={0.05}
        />
      </mesh>

      {/* Minimalist Desk Mat Trim */}
      <mesh position={[-0.4, -0.022, 0]}>
        <boxGeometry args={[2.74, 0.008, 1.09]} />
        <meshBasicMaterial color={isDark ? "#6366F1" : "#94A3B8"} />
      </mesh>

      {/* Ergonomic Wireless Mouse */}
      <mesh position={[0.72, 0.04, 0]}>
        <boxGeometry args={[0.22, 0.065, 0.38]} />
        <meshStandardMaterial
          color={isDark ? "#1E293B" : "#F8FAFC"}
          roughness={0.2}
          metalness={0.6}
        />
      </mesh>
    </group>
  );
}

// Minimal Ceramic Coffee Mug
function CoffeeMug({ position, theme }) {
  const isDark = theme === 'dark';
  return (
    <group position={position}>
      <mesh>
        <cylinderGeometry args={[0.15, 0.13, 0.3, 20]} />
        <meshStandardMaterial
          color={isDark ? "#1E2235" : "#FFFFFF"}
          roughness={0.15}
          metalness={0.2}
        />
      </mesh>
      {/* Fresh Brewed Espresso */}
      <mesh position={[0, 0.13, 0]}>
        <cylinderGeometry args={[0.13, 0.13, 0.02, 20]} />
        <meshStandardMaterial color="#3E2010" roughness={0.1} />
      </mesh>
      {/* Mug Handle */}
      <mesh position={[0.16, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.09, 0.025, 10, 20]} />
        <meshStandardMaterial
          color={isDark ? "#1E2235" : "#FFFFFF"}
          roughness={0.15}
        />
      </mesh>
    </group>
  );
}

export default function DeskModel({ theme = 'dark' }) {
  const deskRef = useRef();
  const isDark = theme === 'dark';

  useFrame((state) => {
    if (deskRef.current) {
      const { x, y } = state.pointer;
      deskRef.current.rotation.y = THREE.MathUtils.lerp(deskRef.current.rotation.y, x * 0.35 + 0.15, 0.04);
      deskRef.current.rotation.x = THREE.MathUtils.lerp(deskRef.current.rotation.x, -y * 0.18 + 0.22, 0.04);
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.35}>
      <group ref={deskRef} position={[0, -0.6, 0]} rotation={[0.22, 0.15, 0]}>
        {/* Lights */}
        <ambientLight intensity={isDark ? 0.6 : 1.0} />
        <directionalLight
          position={[4, 5, 3]}
          intensity={isDark ? 1.5 : 2.0}
          color={isDark ? "#E0E7FF" : "#FFFFFF"}
        />
        <pointLight
          position={[0, 2.5, 1.5]}
          intensity={isDark ? 2.2 : 1.2}
          color={isDark ? "#6366F1" : "#4F46E5"}
          distance={8}
        />
        <pointLight
          position={[-2, 1, 1]}
          intensity={isDark ? 1.8 : 1.0}
          color={isDark ? "#F59E0B" : "#FBBF24"}
          distance={6}
        />

        {/* Walnut / Slate Tabletop */}
        <mesh position={[0, -0.05, 0]}>
          <boxGeometry args={[4.4, 0.12, 2.3]} />
          <meshStandardMaterial
            color={isDark ? "#111726" : "#E2E8F0"}
            metalness={0.4}
            roughness={0.4}
          />
        </mesh>

        {/* Subtle Chamfer Trim */}
        <mesh position={[0, -0.05, 1.16]}>
          <boxGeometry args={[4.42, 0.03, 0.02]} />
          <meshBasicMaterial color={isDark ? "#6366F1" : "#94A3B8"} />
        </mesh>

        {/* Left Curved Primary Monitor */}
        <MonitorScreen
          position={[-1.3, 0.82, -0.1]}
          rotation={[0, 0.22, 0]}
          isCode={true}
          theme={theme}
        />

        {/* Right Curved Secondary Monitor */}
        <MonitorScreen
          position={[1.3, 0.82, -0.1]}
          rotation={[0, -0.22, 0]}
          isCode={false}
          theme={theme}
        />

        {/* Precision Keyboard & Felt Mat */}
        <MouseAndPad position={[0, 0.02, 0.48]} theme={theme} />
        <MechanicalKeyboard position={[-0.3, 0.04, 0.48]} theme={theme} />

        {/* Ceramic Mug */}
        <CoffeeMug position={[-1.65, 0.16, 0.45]} theme={theme} />
      </group>
    </Float>
  );
}
