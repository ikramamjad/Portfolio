import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function SwissCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Geometric 3D Icosahedron wireframe
    const geometry = new THREE.IcosahedronGeometry(7, 1);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0xB4A06E,
      wireframe: true,
      transparent: true,
      opacity: 0.22
    });
    const icosahedron = new THREE.Mesh(geometry, wireframeMaterial);
    scene.add(icosahedron);

    // Inner subtle point cloud
    const count = 350;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 22;
    }
    const pointsGeometry = new THREE.BufferGeometry();
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pointsMaterial = new THREE.PointsMaterial({
      size: 0.035,
      color: 0xFFFFFF,
      transparent: true,
      opacity: 0.4
    });
    const particles = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(particles);

    // Mouse Tracking for natural 3D parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    const clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      icosahedron.rotation.x = elapsedTime * 0.08 + targetY * 0.4;
      icosahedron.rotation.y = elapsedTime * 0.12 + targetX * 0.4;

      particles.rotation.y = -elapsedTime * 0.03;
      particles.rotation.x = -elapsedTime * 0.02;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);
      geometry.dispose();
      wireframeMaterial.dispose();
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="webgl-canvas"
      className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none"
    />
  );
}
