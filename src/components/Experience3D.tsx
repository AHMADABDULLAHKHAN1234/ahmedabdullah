"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Text, Trail, PerspectiveCamera } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

function FloatingShape({ position, color }: { position: [number, number, number]; color: string }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.005;
            meshRef.current.rotation.y += 0.005;
            // Gentle floating calculation could go here if not using Float component
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <mesh ref={meshRef} position={position}>
                <icosahedronGeometry args={[1, 0]} />
                <meshStandardMaterial color={color} wireframe />
            </mesh>
        </Float>
    );
}

function HeroScene() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            {/* Decorative floating geometric shapes */}
            <FloatingShape position={[-4, 2, -5]} color="#3b82f6" />
            <FloatingShape position={[4, -2, -5]} color="#8b5cf6" />
            <FloatingShape position={[0, 4, -8]} color="#ffffff" />
        </>
    );
}

export default function Experience3D() {
    return (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", zIndex: 0, pointerEvents: "none" }}>
            <Canvas dpr={[1, 2]} gl={{ antialias: true }}>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                <HeroScene />
            </Canvas>
        </div>
    );
}
