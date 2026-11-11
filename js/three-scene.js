/**
 * Three.js Interactive Neural & Data Constellation Scene
 * Designed for Abdou Wahab Dossou - Consultant Junior Data & IA
 */

(function () {
  'use strict';

  // Check if WebGL is available
  function isWebGLAvailable() {
    try {
      const canvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  }

  if (!isWebGLAvailable()) {
    console.warn('WebGL not supported on this browser/device.');
    return;
  }

  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  // Scene setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 180;

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Node and Particle configuration
  const PARTICLE_COUNT = window.innerWidth < 768 ? 90 : 160;
  const MAX_DISTANCE = window.innerWidth < 768 ? 45 : 55;
  const BOUNDS = { x: 190, y: 140, z: 120 };

  const positions = new Float32Array(PARTICLE_COUNT * 3);
  const velocities = [];
  const colors = new Float32Array(PARTICLE_COUNT * 3);

  // Palettes for Data / AI clusters: Cyan (Fintech), Emerald (Health), Indigo/Purple (LLM)
  const palette = [
    new THREE.Color(0x00f0ff), // Electric Cyan
    new THREE.Color(0x38bdf8), // Sky Blue
    new THREE.Color(0x818cf8), // Indigo
    new THREE.Color(0xa855f7), // Neon Purple
    new THREE.Color(0x34d399)  // Emerald Data
  ];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * BOUNDS.x * 2;
    positions[i3 + 1] = (Math.random() - 0.5) * BOUNDS.y * 2;
    positions[i3 + 2] = (Math.random() - 0.5) * BOUNDS.z * 2;

    velocities.push({
      x: (Math.random() - 0.5) * 0.18,
      y: (Math.random() - 0.5) * 0.18,
      z: (Math.random() - 0.5) * 0.18
    });

    const chosenColor = palette[Math.floor(Math.random() * palette.length)];
    colors[i3] = chosenColor.r;
    colors[i3 + 1] = chosenColor.g;
    colors[i3 + 2] = chosenColor.b;
  }

  // Particle Geometry & Material
  const particlesGeometry = new THREE.BufferGeometry();
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  // Custom circular glowing particle texture
  function createParticleTexture() {
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 64;
    pCanvas.height = 64;
    const ctx = pCanvas.getContext('2d');

    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.25, 'rgba(56, 189, 248, 0.85)');
    grad.addColorStop(0.6, 'rgba(129, 140, 248, 0.3)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(32, 32, 32, 0, Math.PI * 2);
    ctx.fill();

    return new THREE.CanvasTexture(pCanvas);
  }

  const particleMaterial = new THREE.PointsMaterial({
    size: 4.8,
    vertexColors: true,
    map: createParticleTexture(),
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const particleSystem = new THREE.Points(particlesGeometry, particleMaterial);
  scene.add(particleSystem);

  // Dynamic Connecting Lines (Synapses / Graph Edges)
  const maxLines = (PARTICLE_COUNT * (PARTICLE_COUNT - 1)) / 2;
  const linePositions = new Float32Array(maxLines * 6);
  const lineColors = new Float32Array(maxLines * 6);

  const linesGeometry = new THREE.BufferGeometry();
  linesGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage));
  linesGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3).setUsage(THREE.DynamicDrawUsage));

  const linesMaterial = new THREE.LineBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 0.45,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const lineMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
  scene.add(lineMesh);

  // Floating Data Rings / Synaptic halos in background
  const ringGroup = new THREE.Group();
  const ringMaterial = new THREE.MeshBasicMaterial({
    color: 0x38bdf8,
    wireframe: true,
    transparent: true,
    opacity: 0.12,
    blending: THREE.AdditiveBlending
  });

  const ringGeo1 = new THREE.TorusGeometry(38, 0.4, 8, 48);
  const ringGeo2 = new THREE.TorusGeometry(62, 0.3, 8, 64);
  const ring1 = new THREE.Mesh(ringGeo1, ringMaterial);
  const ring2 = new THREE.Mesh(ringGeo2, ringMaterial);
  ring1.rotation.x = Math.PI / 3;
  ring2.rotation.y = Math.PI / 4;
  ringGroup.add(ring1);
  ringGroup.add(ring2);
  scene.add(ringGroup);

  // Mouse & Scroll interaction
  const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
  let scrollY = 0;
  let targetScrollY = 0;

  window.addEventListener('mousemove', (e) => {
    mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  window.addEventListener('scroll', () => {
    targetScrollY = window.scrollY;
  }, { passive: true });

  // Handle Resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  // Animation Loop
  let animationFrameId;
  const clock = new THREE.Clock();

  function animate() {
    animationFrameId = requestAnimationFrame(animate);

    const delta = clock.getDelta();
    const time = clock.getElapsedTime();

    // Smooth mouse lerp
    mouse.x += (mouse.targetX - mouse.x) * 0.05;
    mouse.y += (mouse.targetY - mouse.y) * 0.05;

    // Smooth scroll lerp
    scrollY += (targetScrollY - scrollY) * 0.05;

    // Camera motion based on mouse & scroll
    camera.position.x = mouse.x * 25;
    camera.position.y = mouse.y * 18 - (scrollY * 0.04);
    camera.position.z = 180 + Math.sin(time * 0.4) * 8;
    camera.lookAt(0, -(scrollY * 0.04), 0);

    // Rotate the subtle background ring network
    ringGroup.rotation.x = time * 0.05;
    ringGroup.rotation.y = time * 0.08;
    ringGroup.position.y = -(scrollY * 0.04);

    // Update particle positions
    const pos = particlesGeometry.attributes.position.array;
    let lineIndex = 0;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;

      // Update position with velocity
      pos[i3] += velocities[i].x;
      pos[i3 + 1] += velocities[i].y;
      pos[i3 + 2] += velocities[i].z;

      // Gentle organic sinusoidal drift
      pos[i3 + 1] += Math.sin(time + pos[i3]) * 0.03;

      // Bounce off invisible boundaries
      if (pos[i3] < -BOUNDS.x || pos[i3] > BOUNDS.x) velocities[i].x *= -1;
      if (pos[i3 + 1] < -BOUNDS.y || pos[i3 + 1] > BOUNDS.y) velocities[i].y *= -1;
      if (pos[i3 + 2] < -BOUNDS.z || pos[i3 + 2] > BOUNDS.z) velocities[i].z *= -1;

      // Connect particles within distance
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const j3 = j * 3;
        const dx = pos[i3] - pos[j3];
        const dy = pos[i3 + 1] - pos[j3 + 1];
        const dz = pos[i3 + 2] - pos[j3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < MAX_DISTANCE) {
          const alpha = 1.0 - (dist / MAX_DISTANCE);

          const l6 = lineIndex * 6;
          linePositions[l6] = pos[i3];
          linePositions[l6 + 1] = pos[i3 + 1];
          linePositions[l6 + 2] = pos[i3 + 2];
          linePositions[l6 + 3] = pos[j3];
          linePositions[l6 + 4] = pos[j3 + 1];
          linePositions[l6 + 5] = pos[j3 + 2];

          // Set gradient edge colors
          lineColors[l6] = colors[i3] * alpha;
          lineColors[l6 + 1] = colors[i3 + 1] * alpha;
          lineColors[l6 + 2] = colors[i3 + 2] * alpha;
          lineColors[l6 + 3] = colors[j3] * alpha;
          lineColors[l6 + 4] = colors[j3 + 1] * alpha;
          lineColors[l6 + 5] = colors[j3 + 2] * alpha;

          lineIndex++;
        }
      }
    }

    particlesGeometry.attributes.position.needsUpdate = true;
    linesGeometry.setDrawRange(0, lineIndex * 2);
    linesGeometry.attributes.position.needsUpdate = true;
    linesGeometry.attributes.color.needsUpdate = true;

    renderer.render(scene, camera);
  }

  animate();

  // Clean up if page is unloaded
  window.addEventListener('beforeunload', () => {
    cancelAnimationFrame(animationFrameId);
  });
})();
