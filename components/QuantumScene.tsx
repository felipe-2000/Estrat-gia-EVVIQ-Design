/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Box, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// Augment the JSX namespace to include Three.js intrinsic elements
// This fixes "Property ... does not exist on type 'JSX.IntrinsicElements'" errors
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      pointLight: any;
      spotLight: any;
      meshStandardMaterial: any;
      group: any;
    }
  }
}

const AbstractPlank = ({ position, rotation, scale, color }: { position: [number, number, number]; rotation: [number, number, number]; scale: [number, number, number]; color: string }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.position.y = position[1] + Math.sin(t * 0.5 + position[0]) * 0.1;
      ref.current.rotation.x = rotation[0] + Math.sin(t * 0.2) * 0.05;
    }
  });

  return (
    <Box ref={ref} args={[1, 1, 1]} position={position} rotation={rotation} scale={scale}>
      <meshStandardMaterial
        color={color}
        roughness={0.2}
        metalness={0.1}
      />
    </Box>
  );
};

export const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 35 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={1} castShadow />
        
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            {/* Abstract Wood/Material Panels */}
          <AbstractPlank position={[0, 0, 0]} rotation={[0.5, 0.5, 0]} scale={[3, 0.1, 2]} color="#C5A059" />
          <AbstractPlank position={[-2, 1, -1]} rotation={[0.2, 0.1, 0.4]} scale={[0.1, 4, 0.5]} color="#1a1a1a" />
          <AbstractPlank position={[2, -1, -2]} rotation={[-0.2, -0.1, 0.2]} scale={[2, 2, 0.1]} color="#e5e5e5" />
          
          {/* Floating Details */}
          <AbstractPlank position={[1.5, 1.5, 1]} rotation={[0, 0, Math.PI/4]} scale={[0.5, 0.5, 0.5]} color="#C5A059" />
        </Float>
        
        <ContactShadows position={[0, -4, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
};

export const QuantumComputerScene: React.FC = () => {
    // Replaced with "ArchitectureScene" concept for the Impact section
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [4, 4, 4], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Environment preset="city" />
        
        <Float rotationIntensity={0.2} floatIntensity={0.2} speed={1}>
          <group position={[0, -0.5, 0]}>
            {/* Abstract representation of a structured room/furniture piece */}
            <Box args={[3, 0.2, 3]} position={[0, 0, 0]}>
                <meshStandardMaterial color="#f3f3f3" />
            </Box>
            <Box args={[0.2, 2, 0.2]} position={[-1.4, 1, -1.4]}>
                <meshStandardMaterial color="#C5A059" />
            </Box>
             <Box args={[0.2, 2, 0.2]} position={[1.4, 1, -1.4]}>
                <meshStandardMaterial color="#C5A059" />
            </Box>
             <Box args={[0.2, 2, 0.2]} position={[-1.4, 1, 1.4]}>
                <meshStandardMaterial color="#C5A059" />
            </Box>
             <Box args={[0.2, 2, 0.2]} position={[1.4, 1, 1.4]}>
                <meshStandardMaterial color="#C5A059" />
            </Box>
            <Box args={[3.2, 0.2, 3.2]} position={[0, 2.1, 0]}>
                 <meshStandardMaterial color="#1a1a1a" roughness={0.1} metalness={0.8} />
            </Box>
          </group>
        </Float>
      </Canvas>
    </div>
  );
}