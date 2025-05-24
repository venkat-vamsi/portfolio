import styled from '@emotion/styled'
import { motion } from 'framer-motion'

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