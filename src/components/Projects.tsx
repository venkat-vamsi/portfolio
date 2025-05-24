import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const ProjectsContainer = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background: transparent;
  position: relative;
  overflow: hidden;
`

const ProjectsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(78, 205, 196, 0.5);
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border: 1px solid rgba(78, 205, 196, 0.2);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 30px rgba(78, 205, 196, 0.3);
    border-color: rgba(78, 205, 196, 0.5);
  }
`

interface ProjectImageProps {
  imageUrl: string;
}
const ProjectImage = styled.div<ProjectImageProps>`
  width: 100%;
  height: 200px;
  background: #2a2a2a url(${props => props.imageUrl}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(78, 205, 196, 0.2), transparent);
  }
`

const ProjectInfo = styled.div`
  padding: 1.5rem;
`

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
`

const ProjectDescription = styled.p`
  color: #ccc;
  margin-bottom: 1rem;
  line-height: 1.6;
`

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const Tag = styled.span`
  background: rgba(78, 205, 196, 0.1);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  color: #4ecdc4;
  border: 1px solid rgba(78, 205, 196, 0.2);
`

const ProjectLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const ProjectLink = styled.a`
  background: rgba(78, 205, 196, 0.1);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  color: #4ecdc4;
  border: 1px solid rgba(78, 205, 196, 0.2);
  text-decoration: none;

  &:hover {
    background: rgba(78, 205, 196, 0.2);
  }
`

const Projects = () => {
  const projects = [
    {
      title: 'EduCity',
      description: `EduCity is a gamified learning platform that transforms education into an interactive adventure. Subjects become immersive cities, students explore and interact with 3D environments, and features include final boss assessments, leaderboards, AR models, chatbot integration, and document translation for global accessibility.`,
      tags: ['Unity', 'Flutter', 'Dart', 'C#', 'Java', 'Python', 'Gamification', 'AR'],
      imageUrl: '/projects/educity.png',
      githubUrl: 'https://github.com/vxtxsh/EduCity',
      demoUrl: ''
    },
    {
      title: 'Bonfire',
      description: `Bonfire is a Flutter-based mental health app that fosters an inclusive, therapy-driven community. Features include group therapy, VR rage/meditation rooms, mood prediction using HRV, a personal diary, and an emotionally trained LLM chatbot for support. Won 3rd Place at BharathVersity's BITS Goa Hackathon.`,
      tags: ['Flutter', 'Firebase', 'Unity', 'Python', 'Arduino', 'Mental Health', 'VR', 'AI'],
      imageUrl: '/projects/bonfire-app-screenshot.png',
      githubUrl: 'https://github.com/vxtxsh/Bonfire',
      demoUrl: ''
    },
    {
      title: 'BlockoGram',
      description: 'A decentralized social media platform leveraging Ethereum blockchain and IPFS for secure, censorship-resistant content sharing. Implements end-to-end encryption and smart contracts for content monetization.',
      tags: ['Dart', 'Flutter', 'Ethereum', 'IPFS', 'Solidity'],
      imageUrl: '/projects/blockogram.png',
      githubUrl: 'https://github.com/venkat-vamsi/Blockogramm',
      demoUrl: ''
    },
    {
      title: 'Good Doctor',
      description: 'An innovative application designed to support autistic children through technology. Features include interactive learning modules, progress tracking, and parent-teacher communication tools.',
      tags: ['Dart', 'Flutter', 'Firebase', 'Healthcare', 'Accessibility'],
      imageUrl: '/projects/gooddoctor.png',
      githubUrl: 'https://github.com/venkat-vamsi/Good-Doctor',
      demoUrl: ''
    },
    {
      title: 'Student Tracker App',
      description: 'An IoT-powered student tracking system using RFID technology. Provides real-time location tracking, attendance automation, and analytics for educational institutions.',
      tags: ['Dart', 'Flutter', 'IoT', 'RFID', 'Firebase'],
      imageUrl: '/projects/studenttracker.png',
      githubUrl: 'https://github.com/venkat-vamsi/Student-Tracker-App',
      demoUrl: ''
    },
    {
      title: 'GRIET-EVENTS',
      description: 'A comprehensive event management platform for GRIET college. Enables faculty to create, manage, and track events, with features for student registration and participation.',
      tags: ['Java', 'Android', 'Firebase', 'Event Management'],
      imageUrl: '/projects/grietevents.png',
      githubUrl: 'https://github.com/venkat-vamsi/GRIET-EVENTS',
      demoUrl: ''
    }
  ]

  return (
    <ProjectsContainer>
      <ProjectsContent>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Top Projects
        </SectionTitle>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ProjectImage imageUrl={project.imageUrl} />
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTags>
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </ProjectTags>
                <ProjectLinks>
                  <ProjectLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <span>GitHub</span> ↗
                  </ProjectLink>
                </ProjectLinks>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContent>
    </ProjectsContainer>
  )
}

export default Projects 