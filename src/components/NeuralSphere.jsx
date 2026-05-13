import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Network() {
  const groupRef = useRef()

  const { nodePos, nodeColors, linePos } = useMemo(() => {
    const count = 220
    const radius = 2.6
    const nodePos = new Float32Array(count * 3)
    const nodeColors = new Float32Array(count * 3)

    const violet = new THREE.Color('#A78BFA')
    const pink   = new THREE.Color('#F472B6')
    const blue   = new THREE.Color('#60A5FA')
    const white  = new THREE.Color('#E2E8F0')

    for (let i = 0; i < count; i++) {
      // Fibonacci sphere for even surface distribution
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count)
      const theta = Math.PI * (1 + Math.sqrt(5)) * i
      nodePos[i * 3]     = radius * Math.sin(phi) * Math.cos(theta)
      nodePos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      nodePos[i * 3 + 2] = radius * Math.cos(phi)

      const r = Math.random()
      const col = r < 0.48 ? violet : r < 0.72 ? blue : r < 0.9 ? pink : white
      nodeColors[i * 3]     = col.r
      nodeColors[i * 3 + 1] = col.g
      nodeColors[i * 3 + 2] = col.b
    }

    // Connect nearby nodes
    const lineVerts = []
    const maxCon = new Array(count).fill(0)
    const maxPerNode = 4
    const threshold = 1.4

    for (let i = 0; i < count; i++) {
      if (maxCon[i] >= maxPerNode) continue
      for (let j = i + 1; j < count; j++) {
        if (maxCon[j] >= maxPerNode) continue
        const dx = nodePos[i*3]   - nodePos[j*3]
        const dy = nodePos[i*3+1] - nodePos[j*3+1]
        const dz = nodePos[i*3+2] - nodePos[j*3+2]
        if (dx*dx + dy*dy + dz*dz < threshold * threshold) {
          lineVerts.push(
            nodePos[i*3], nodePos[i*3+1], nodePos[i*3+2],
            nodePos[j*3], nodePos[j*3+1], nodePos[j*3+2],
          )
          maxCon[i]++
          maxCon[j]++
        }
      }
    }

    return { nodePos, nodeColors, linePos: new Float32Array(lineVerts) }
  }, [])

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y += 0.0025
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.12
  })

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={nodePos.length / 3} array={nodePos} itemSize={3} />
          <bufferAttribute attach="attributes-color"    count={nodeColors.length / 3} array={nodeColors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.065} vertexColors transparent opacity={0.95} sizeAttenuation depthWrite={false} />
      </points>

      {linePos.length > 0 && (
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" count={linePos.length / 3} array={linePos} itemSize={3} />
          </bufferGeometry>
          <lineBasicMaterial color="#A78BFA" transparent opacity={0.1} depthWrite={false} />
        </lineSegments>
      )}
    </group>
  )
}

export default function NeuralSphere() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 55 }}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} color="#A78BFA" intensity={0.7} />
      <pointLight position={[-5, -3, 3]} color="#F472B6" intensity={0.35} />
      <Suspense fallback={null}>
        <Network />
      </Suspense>
    </Canvas>
  )
}
