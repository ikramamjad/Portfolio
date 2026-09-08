import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Avatar3D({ className = "w-full h-full", isSpeaking = false }) {
  const canvasRef = useRef(null);
  const isSpeakingRef = useRef(isSpeaking);

  useEffect(() => {
    isSpeakingRef.current = isSpeaking;
  }, [isSpeaking]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = canvas.parentElement.clientWidth || 300;
    const height = canvas.parentElement.clientHeight || 300;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    camera.position.set(0, 0.15, 4.4);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff4e6, 2.2);
    keyLight.position.set(4, 6, 5);
    scene.add(keyLight);

    const goldRimLight = new THREE.DirectionalLight(0xb4a06e, 3.5);
    goldRimLight.position.set(-4, 3, -3);
    scene.add(goldRimLight);

    const fillLight = new THREE.DirectionalLight(0x818cf8, 1.2);
    fillLight.position.set(0, -3, 3);
    scene.add(fillLight);

    // Root Hierarchy
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Torso / Hoodie Group
    const torsoGroup = new THREE.Group();
    rootGroup.add(torsoGroup);

    // Shoulders / Chest
    const chestGeo = new THREE.CylinderGeometry(0.85, 1.2, 1.2, 32);
    const darkFabricMat = new THREE.MeshStandardMaterial({
      color: 0x131313,
      roughness: 0.8,
      metalness: 0.1
    });
    const chest = new THREE.Mesh(chestGeo, darkFabricMat);
    chest.position.set(0, -1.2, 0);
    torsoGroup.add(chest);

    // Gold Tech Collar Trim
    const collarGeo = new THREE.TorusGeometry(0.55, 0.05, 16, 32);
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xb4a06e,
      roughness: 0.25,
      metalness: 0.9,
      emissive: 0xb4a06e,
      emissiveIntensity: 0.25
    });
    const collar = new THREE.Mesh(collarGeo, goldMat);
    collar.rotation.x = Math.PI / 2;
    collar.position.set(0, -0.6, 0);
    torsoGroup.add(collar);

    // Neck
    const neckGeo = new THREE.CylinderGeometry(0.24, 0.28, 0.5, 24);
    const skinMat = new THREE.MeshStandardMaterial({
      color: 0xfbd0b5,
      roughness: 0.55,
      metalness: 0.05
    });
    const neck = new THREE.Mesh(neckGeo, skinMat);
    neck.position.set(0, -0.38, 0);
    torsoGroup.add(neck);

    // Head Group (Rotates and tracks cursor directly)
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.2, 0);
    rootGroup.add(headGroup);

    // Head Base (Face)
    const headGeo = new THREE.SphereGeometry(0.72, 32, 32);
    headGeo.scale(0.95, 1.15, 1.0);
    const head = new THREE.Mesh(headGeo, skinMat);
    headGroup.add(head);

    // Spiky Stylized Hair
    const hairGroup = new THREE.Group();
    headGroup.add(hairGroup);

    const hairMat = new THREE.MeshStandardMaterial({
      color: 0x181824,
      roughness: 0.4,
      metalness: 0.3
    });
    const hairTipMat = new THREE.MeshStandardMaterial({
      color: 0xb4a06e,
      roughness: 0.3,
      metalness: 0.7,
      emissive: 0xb4a06e,
      emissiveIntensity: 0.35
    });

    // Hair Top Cap
    const hairCapGeo = new THREE.SphereGeometry(0.76, 32, 32);
    hairCapGeo.scale(0.98, 1.18, 1.02);
    const hairCap = new THREE.Mesh(hairCapGeo, hairMat);
    hairCap.position.set(0, 0.08, -0.05);
    hairGroup.add(hairCap);

    // Spikes Clusters
    const spikeGeo = new THREE.ConeGeometry(0.18, 0.5, 6);
    const spikeCoords = [
      [0, 0.95, 0.2, -0.3, 0, 0.1, true],
      [-0.32, 0.88, 0.15, -0.25, 0, -0.4, false],
      [0.32, 0.88, 0.15, -0.25, 0, 0.4, false],
      [-0.45, 0.65, 0.3, -0.1, 0, -0.6, true],
      [0.45, 0.65, 0.3, -0.1, 0, 0.6, true],
      [0, 0.92, -0.25, 0.4, 0, 0, false],
      [-0.35, 0.8, -0.25, 0.3, 0, -0.3, false],
      [0.35, 0.8, -0.25, 0.3, 0, 0.3, false],
      [-0.2, 0.82, 0.42, -0.45, 0, -0.15, true],
      [0.2, 0.82, 0.42, -0.45, 0, 0.15, true],
    ];

    spikeCoords.forEach(([x, y, z, rx, ry, rz, isGold]) => {
      const spike = new THREE.Mesh(spikeGeo, isGold ? hairTipMat : hairMat);
      spike.position.set(x, y, z);
      spike.rotation.set(rx, ry, rz);
      hairGroup.add(spike);
    });

    // Eyes Group
    const eyesGroup = new THREE.Group();
    eyesGroup.position.set(0, 0.12, 0.66);
    headGroup.add(eyesGroup);

    // Eye Whites
    const eyeWhiteGeo = new THREE.SphereGeometry(0.13, 20, 20);
    eyeWhiteGeo.scale(1.2, 0.9, 0.5);
    const eyeWhiteMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.1
    });

    const leftEyeWhite = new THREE.Mesh(eyeWhiteGeo, eyeWhiteMat);
    leftEyeWhite.position.set(-0.25, 0, 0);
    eyesGroup.add(leftEyeWhite);

    const rightEyeWhite = new THREE.Mesh(eyeWhiteGeo, eyeWhiteMat);
    rightEyeWhite.position.set(0.25, 0, 0);
    eyesGroup.add(rightEyeWhite);

    // Pupils (Follow mouse directly on eye surface)
    const pupilGeo = new THREE.SphereGeometry(0.065, 16, 16);
    pupilGeo.scale(1, 1, 0.4);
    const pupilMat = new THREE.MeshStandardMaterial({
      color: 0x080808,
      roughness: 0.1,
      metalness: 0.8
    });

    const leftPupil = new THREE.Mesh(pupilGeo, pupilMat);
    leftPupil.position.set(-0.25, 0, 0.05);
    eyesGroup.add(leftPupil);

    const rightPupil = new THREE.Mesh(pupilGeo, pupilMat);
    rightPupil.position.set(0.25, 0, 0.05);
    eyesGroup.add(rightPupil);

    // Eye Highlights
    const highlightGeo = new THREE.SphereGeometry(0.02, 8, 8);
    const highlightMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const leftHighlight = new THREE.Mesh(highlightGeo, highlightMat);
    leftHighlight.position.set(-0.23, 0.02, 0.08);
    eyesGroup.add(leftHighlight);

    const rightHighlight = new THREE.Mesh(highlightGeo, highlightMat);
    rightHighlight.position.set(0.27, 0.02, 0.08);
    eyesGroup.add(rightHighlight);

    // Confident Eyebrows
    const browGeo = new THREE.BoxGeometry(0.24, 0.035, 0.02);
    const browMat = new THREE.MeshStandardMaterial({ color: 0x181824, roughness: 0.4 });
    const leftBrow = new THREE.Mesh(browGeo, browMat);
    leftBrow.position.set(-0.25, 0.18, 0.68);
    leftBrow.rotation.z = -0.1;
    headGroup.add(leftBrow);

    const rightBrow = new THREE.Mesh(browGeo, browMat);
    rightBrow.position.set(0.25, 0.18, 0.68);
    rightBrow.rotation.z = 0.1;
    headGroup.add(rightBrow);

    // Subtle Nose
    const noseGeo = new THREE.ConeGeometry(0.05, 0.14, 4);
    const nose = new THREE.Mesh(noseGeo, skinMat);
    nose.position.set(0, -0.05, 0.72);
    nose.rotation.x = -Math.PI / 8;
    headGroup.add(nose);

    // Confident Developer Smile
    const smileCurve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(-0.16, -0.22, 0.68),
      new THREE.Vector3(0, -0.26, 0.7),
      new THREE.Vector3(0.16, -0.22, 0.68)
    );
    const smileGeo = new THREE.TubeGeometry(smileCurve, 16, 0.018, 8, false);
    const smileMat = new THREE.MeshStandardMaterial({ color: 0x8b3a3a, roughness: 0.3 });
    const smile = new THREE.Mesh(smileGeo, smileMat);
    headGroup.add(smile);

    // Cyber Headphones
    const headphoneGroup = new THREE.Group();
    headGroup.add(headphoneGroup);

    // Headband
    const bandCurve = new THREE.EllipseCurve(0, 0, 0.78, 0.92, 0, Math.PI, false, 0);
    const bandPoints = bandCurve.getPoints(32).map(p => new THREE.Vector3(p.x, p.y + 0.15, 0));
    const bandPath = new THREE.CatmullRomCurve3(bandPoints);
    const bandGeo = new THREE.TubeGeometry(bandPath, 32, 0.045, 8, false);
    const headphoneBand = new THREE.Mesh(bandGeo, darkFabricMat);
    headphoneGroup.add(headphoneBand);

    // Ear Cups (Left & Right)
    const earcupGeo = new THREE.CylinderGeometry(0.28, 0.28, 0.2, 24);
    earcupGeo.rotateZ(Math.PI / 2);

    const leftCup = new THREE.Mesh(earcupGeo, darkFabricMat);
    leftCup.position.set(-0.76, 0.15, 0);
    headphoneGroup.add(leftCup);

    const rightCup = new THREE.Mesh(earcupGeo, darkFabricMat);
    rightCup.position.set(0.76, 0.15, 0);
    headphoneGroup.add(rightCup);

    // Gold Glowing Earcup Rings
    const ringTorusGeo = new THREE.TorusGeometry(0.2, 0.025, 16, 32);
    ringTorusGeo.rotateY(Math.PI / 2);

    const leftRing = new THREE.Mesh(ringTorusGeo, goldMat);
    leftRing.position.set(-0.86, 0.15, 0);
    headphoneGroup.add(leftRing);

    const rightRing = new THREE.Mesh(ringTorusGeo, goldMat);
    rightRing.position.set(0.86, 0.15, 0);
    headphoneGroup.add(rightRing);

    // Mouse Tracking Logic Across Entire Viewport
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      targetX = x;
      targetY = y;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Resize Handler
    const onResize = () => {
      if (!canvas || !canvas.parentElement) return;
      const newWidth = canvas.parentElement.clientWidth;
      const newHeight = canvas.parentElement.clientHeight || newWidth;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', onResize);

    // Render Animation Loop
    const clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Smooth kinematic lerp for head tracking
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      // Head Yaw & Pitch (follows mouse precisely anywhere on screen)
      headGroup.rotation.y = currentX * 0.75;
      headGroup.rotation.x = -currentY * 0.45;
      headGroup.rotation.z = -currentX * 0.12;

      // Torso follows with subtle natural lag
      torsoGroup.rotation.y = currentX * 0.25;
      torsoGroup.rotation.x = -currentY * 0.1;

      // Pupils shift dynamically on eye surface toward target
      const pupilShiftX = THREE.MathUtils.clamp(currentX * 0.04, -0.04, 0.04);
      const pupilShiftY = THREE.MathUtils.clamp(currentY * 0.03, -0.03, 0.03);
      leftPupil.position.x = -0.25 + pupilShiftX;
      leftPupil.position.y = pupilShiftY;
      rightPupil.position.x = 0.25 + pupilShiftX;
      rightPupil.position.y = pupilShiftY;

      // Natural breathing idle motion
      rootGroup.position.y = Math.sin(time * 2.2) * 0.05;
      rootGroup.rotation.y = Math.sin(time * 1.2) * 0.02;

      // Real-time Speech Reactivity
      if (isSpeakingRef.current) {
        const speechPhoneme = Math.abs(Math.sin(time * 16));
        smile.scale.y = 1 + speechPhoneme * 0.85;
        smile.scale.x = 1 - speechPhoneme * 0.15;

        // Glowing headphone soundwave pulse
        const waveIntensity = 0.25 + speechPhoneme * 0.75;
        leftRing.material.emissiveIntensity = waveIntensity;
        rightRing.material.emissiveIntensity = waveIntensity;

        // Subtle conversational head gestures
        headGroup.position.y = 0.2 + Math.sin(time * 10) * 0.025;
      } else {
        smile.scale.set(1, 1, 1);
        leftRing.material.emissiveIntensity = 0.25;
        rightRing.material.emissiveIntensity = 0.25;
        headGroup.position.y = 0.2;
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <div className={`relative ${className} flex items-center justify-center overflow-hidden pointer-events-none`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  );
}
