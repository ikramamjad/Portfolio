import React, { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { skillsData } from '../../data/portfolioData';

// Individual skill node on sphere
function SkillNode({ skill, position, activeCategory, hoveredNode, setHoveredNode, theme }) {
  const isMatch = activeCategory === 'All' || skill.category === activeCategory;
  const isHovered = hoveredNode === skill.name;
  const isDark = theme === 'dark';

  return (
    <group position={position}>
      <mesh
        onPointerOver={(e) => {
          e.stopPropagation();
          setHoveredNode(skill.name);
        }}
        onPointerOut={() => {
          setHoveredNode(null);
        }}
        scale={isHovered ? 1.4 : isMatch ? 1.0 : 0.6}
      >
        <sphereGeometry args={[0.22, 20, 20]} />
        <meshStandardMaterial
          color={skill.color}
          emissive={skill.color}
          emissiveIntensity={isHovered ? (isDark ? 2.0 : 1.0) : isMatch ? (isDark ? 0.9 : 0.4) : 0.15}
          roughness={0.2}
          metalness={0.7}
          transparent
          opacity={isMatch ? 1 : 0.3}
        />
      </mesh>

      {/* Outer subtle halo ring */}
      <mesh scale={isHovered ? 1.7 : 1.25}>
        <sphereGeometry args={[0.24, 16, 16]} />
        <meshBasicMaterial
          color={skill.color}
          wireframe
          transparent
          opacity={isHovered ? 0.5 : isMatch ? 0.15 : 0.04}
        />
      </mesh>

      {/* HTML Tag Label */}
      <Html distanceFactor={11} position={[0, 0.38, 0]} center>
        <div
          className={`pointer-events-none select-none transition-all duration-300 px-2.5 py-0.5 rounded-lg text-[11px] font-mono font-semibold whitespace-nowrap shadow-md ${
            isHovered
              ? isDark
                ? 'bg-slate-900 text-white border border-indigo-400 scale-125 z-50 shadow-lg'
                : 'bg-white text-slate-900 border border-indigo-500 scale-125 z-50 shadow-lg'
              : isMatch
              ? isDark
                ? 'bg-slate-900/85 text-slate-200 border border-white/10'
                : 'bg-white/90 text-slate-800 border border-slate-200 shadow-sm'
              : isDark
              ? 'bg-slate-900/40 text-slate-500 border border-white/5 opacity-40'
              : 'bg-white/40 text-slate-400 border border-slate-200 opacity-40'
          }`}
        >
          {skill.name}
          {isHovered && (
            <span className="ml-1.5 text-[10px] text-emerald-500 font-bold">
              {skill.level}%
            </span>
          )}
        </div>
      </Html>
    </group>
  );
}

export default function SkillsSphere({ activeCategory = 'All', theme = 'dark' }) {
  const groupRef = useRef();
  const [hoveredNode, setHoveredNode] = useState(null);
  const isDark = theme === 'dark';

  const radius = 3.2;
  const nodes = useMemo(() => {
    const total = skillsData.length;
    return skillsData.map((skill, i) => {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / total);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);
      return { skill, position: [x, y, z] };
    });
  }, [radius]);

  useFrame((state, delta) => {
    if (groupRef.current && !hoveredNode) {
      groupRef.current.rotation.y += delta * 0.12;
      groupRef.current.rotation.x += delta * 0.04;
    }
  });

  return (
    <>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.6}
        dampingFactor={0.05}
      />

      <ambientLight intensity={isDark ? 0.6 : 1.0} />
      <directionalLight position={[5, 6, 5]} intensity={isDark ? 1.2 : 1.6} color="#FFFFFF" />
      <pointLight position={[-6, -6, -6]} intensity={isDark ? 1.5 : 0.8} color="#6366F1" />
      <pointLight position={[6, 6, 6]} intensity={isDark ? 1.5 : 0.8} color="#F59E0B" />

      <group ref={groupRef}>
        {/* Wireframe Lattice Sphere */}
        <mesh>
          <sphereGeometry args={[radius * 0.96, 24, 24]} />
          <meshBasicMaterial
            color={isDark ? "#6366F1" : "#475569"}
            wireframe
            transparent
            opacity={isDark ? 0.08 : 0.06}
          />
        </mesh>

        {/* Inner Crystalline Core */}
        <mesh>
          <icosahedronGeometry args={[1.2, 0]} />
          <meshStandardMaterial
            color={isDark ? "#1E1B4B" : "#F1F5F9"}
            emissive={isDark ? "#4338CA" : "#818CF8"}
            emissiveIntensity={isDark ? 0.6 : 0.2}
            roughness={0.3}
            metalness={0.7}
            wireframe
            transparent
            opacity={0.35}
          />
        </mesh>

        {/* Skill nodes */}
        {nodes.map(({ skill, position }) => (
          <SkillNode
            key={skill.name}
            skill={skill}
            position={position}
            activeCategory={activeCategory}
            hoveredNode={hoveredNode}
            setHoveredNode={setHoveredNode}
            theme={theme}
          />
        ))}
      </group>
    </>
  );
}
