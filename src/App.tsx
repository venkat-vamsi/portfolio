import styled from '@emotion/styled'
import { OrbitControls, Sphere, Stars } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { Mesh } from 'three'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Projects from './components/Projects'

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #000;
  color: white;
  overflow-x: hidden;
`

const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
`

const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
`

function SpaceBackground() {
  const starsRef = useRef<Mesh>(null)

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0005
    }
  })

  return (
    <>
      <Stars
        ref={starsRef}
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade
        speed={1}
      />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#4ecdc4" />
      <Sphere args={[100, 32, 32]} position={[0, 0, -200]}>
        <meshBasicMaterial color="#000" />
      </Sphere>
    </>
  )
}

function App() {
  return (
    <AppContainer>
      <CanvasContainer>
        <Canvas>
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
            <SpaceBackground />
          </Suspense>
        </Canvas>
      </CanvasContainer>
      <ContentContainer>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </ContentContainer>
    </AppContainer>
  )
}

export default App
