import styled from '@emotion/styled'
import { Sphere } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { Mesh } from 'three'

const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const HeroContent = styled.div`
  text-align: center;
  z-index: 2;
`

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(78, 205, 196, 0.5);
`

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: #888;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
`

function AnimatedPlanet() {
  const meshRef = useRef<Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
    }
  })

  return (
    <Sphere args={[1, 32, 32]} ref={meshRef}>
      <meshStandardMaterial
        color="#4ecdc4"
        metalness={0.8}
        roughness={0.2}
        emissive="#4ecdc4"
        emissiveIntensity={0.2}
      />
    </Sphere>
  )
}

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Venkat Vamsi
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Full Stack Developer & Space Enthusiast
        </Subtitle>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero 