import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { FaAward, FaCertificate, FaTrophy, FaUserAstronaut } from 'react-icons/fa'

const AboutContainer = styled.section`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  background: transparent;
`

const AboutContent = styled.div`
  max-width: 950px;
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 2;
  margin: 0 auto;
`

const AboutCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border: 1px solid rgba(78, 205, 196, 0.2);
  box-shadow: 0 0 30px rgba(78, 205, 196, 0.08);
  padding: 1.5rem;
  margin-bottom: 2.2rem;
  position: relative;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 30px rgba(78, 205, 196, 0.3);
    border-color: rgba(78, 205, 196, 0.5);
  }
`

const SectionTitle = styled(motion.h2)`
  font-size: 2.3rem;
  margin-bottom: 2rem;
  background: linear-gradient(90deg, #4ecdc4, #ff6b6b 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 10px #222;
  letter-spacing: 1.5px;
  font-weight: 800;
`

const Description = styled(motion.p)`
  font-size: 1.15rem;
  line-height: 1.7;
  color: #e0e0e0;
  margin-bottom: 2.2rem;
  text-shadow: 0 0 6px #222, 0 0 2px #4ecdc4;
`

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: #b2f7ef;
  font-size: 1.05rem;
  text-align: left;
  li { margin-bottom: 0.5rem; }
`

const BadgesOrbit = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 2rem 0 2.5rem 0;
  flex-wrap: wrap;
`

const SpaceBadge = styled(motion.div)`
  background: rgba(44, 62, 80, 0.85);
  border: 1.5px solid #4ecdc4;
  border-radius: 50%;
  width: 110px;
  height: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 24px 0 #222b;
  color: #fff;
  font-weight: 700;
  font-size: 0.98rem;
  position: relative;
  transition: transform 0.3s;
  will-change: transform;
  &:hover {
    transform: scale(1.07) rotate(-3deg);
    border-color: #ff6b6b;
  }
  svg {
    font-size: 2.1rem;
    margin-bottom: 0.5rem;
    color: #ffeb3b;
    filter: drop-shadow(0 0 6px #4ecdc4);
  }
`

const AwardsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
  color: #b2f7ef;
  font-size: 1.05rem;
  li { margin-bottom: 0.5rem; }
`

const CertificationsRow = styled.div`
  display: flex;
  gap: 1.2rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  margin-top: 1.5rem;
  scrollbar-width: thin;
  scrollbar-color: #4ecdc4 #222b3a;
`

const CertCard = styled(AboutCard)`
  min-width: 260px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 0.98rem;
  a {
    color: #4ecdc4;
    font-size: 0.92rem;
    margin-top: 0.3rem;
    text-decoration: underline;
  }
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 1.1rem;
  margin-top: 1.2rem;
  margin-bottom: 2.2rem;
`

const SkillPill = styled(motion.div)`
  background: rgba(255,255,255,0.10);
  border-radius: 16px;
  padding: 0.7rem 1.1rem;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid rgba(78,205,196,0.18);
  box-shadow: 0 2px 10px 0 #222b3a33;
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s, border-color 0.2s;
  &:hover {
    transform: translateY(-4px) scale(1.04);
    border-color: #4ecdc4;
  }
`

const HackathonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.2rem;
  margin: 2rem 0 2.5rem 0;
  justify-items: center;
`

const HackathonBadge = styled(AboutCard)`
  width: 170px;
  height: 130px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0.5rem;
  text-align: center;
  svg {
    font-size: 2.1rem;
    margin-bottom: 0.3rem;
    color: #ffeb3b;
    filter: drop-shadow(0 0 6px #4ecdc4);
  }
  div {
    word-break: break-word;
    overflow-wrap: break-word;
    font-size: 1.01rem;
    margin-bottom: 0.2rem;
  }
`

const About = () => {
  const skills = [
    'SQL', 'Dart', 'HTML', 'Java', 'C',
    'HTML', 'CSS', 'JavaScript',
    'Flutter', 'Android Studio',
    'Unity', 'Git',
    'NumPy', 'Pandas', 'Keras', 'Tensorflow', 'Matplotlib',
    'Firebase', 'PostgreSQL',
  ];

  const hackathonWins = [
    { title: 'IIT-H Hackathon', desc: '1st Place, IIT Hyderabad', icon: <FaTrophy /> },
    { title: 'TechXcelerate', desc: '3rd Place, BITS Goa', icon: <FaTrophy /> },
    { title: 'BVRIT DEMUX', desc: 'Honorable Mention, 4th Prize', icon: <FaAward /> },
    { title: 'Epitome Hackathon', desc: '1st Place, GRIET', icon: <FaTrophy /> },
  ];

  const awards = [
    "Received a Letter of Appreciation for developing GRIETHub, an events' app for GRIET.",
    "Won second prize in DevTalks'24 conducted by Google Developers Club in GRIET. (2nd prize)",
    'TEDx, Technical Team (2024 – Present)',
    'CSI, Design Team (2023 – 2025)',
    'E-cell, Social Media Manager (2023 – Present)',
    'Street Cause, Volunteer (2023 – Present)',
  ];

  const certifications = [
    { name: 'Silver Certificate', issuer: 'Smart Interviews', date: 'May 2023', link: 'https://www.linkedin.com/in/venkat-vamsi-godavarthi-964555254/details/certifications/1746365614636/single-media-viewer/?profileId=ACoAAD66uBwBBKapZzoAbuwUWEpWRMqTrEEaWFc', skills: 'DSA, Competitive Programming, Algorithms, Core Java' },
    { name: 'CCNA: Introduction to Networks', issuer: 'Cisco Networking Academy', date: 'Apr 2023', link: 'https://www.linkedin.com/in/venkat-vamsi-godavarthi-964555254/details/certifications/1745738450594/single-media-viewer/?profileId=ACoAAD66uBwBBKapZzoAbuwUWEpWRMqTrEEaWFc', skills: '' },
    { name: 'Introduction to Cybersecurity', issuer: 'Cisco Networking Academy', date: 'Apr 2023', link: 'https://www.credly.com/badges/80ae213a-f406-4939-b0ba-b401e42f7750/linked_in_profile', skills: '' },
    { name: 'Spring Data JPA with Boot', issuer: 'Infosys Springboard', date: 'Dec 2023', link: 'https://www.linkedin.com/in/venkat-vamsi-godavarthi-964555254/details/certifications/1734961581983/single-media-viewer/?profileId=ACoAAD66uBwBBKapZzoAbuwUWEpWRMqTrEEaWFc', skills: 'Spring Boot, Spring Framework, Backend, Database' },
    { name: 'Mobile App Development using Flutter', issuer: 'Infosys Springboard', date: 'Feb 2024', link: 'https://www.linkedin.com/in/venkat-vamsi-godavarthi-964555254/details/certifications/1732441889840/single-media-viewer/?profileId=ACoAAD66uBwBBKapZzoAbuwUWEpWRMqTrEEaWFc', skills: '' },
    { name: 'AWS Academy Graduate - Cloud Foundations', issuer: 'AWS Academy', date: 'Sep 2023', link: 'https://www.linkedin.com/in/venkat-vamsi-godavarthi-964555254/details/certifications/1697376675/multiple-media-viewer/?profileId=ACoAAD66uBwBBKapZzoAbuwUWEpWRMqTrEEaWFc&treasuryMediaId=1726490461645', skills: '' },
    { name: 'Prompt Design in Vertex AI', issuer: 'Google', date: 'Sep 2024', link: 'https://www.linkedin.com/in/venkat-vamsi-godavarthi-964555254/details/certifications/1726126820979/single-media-viewer/?profileId=ACoAAD66uBwBBKapZzoAbuwUWEpWRMqTrEEaWFc', skills: '' },
    { name: 'Working with MongoDB Database', issuer: 'MongoDB', date: 'Aug 2023', link: 'https://learn.mongodb.com/c/QZLbQ8bcS_-LtaIqwRSz6g', skills: '' },
    { name: 'Google AI-ML Virtual Internships', issuer: 'Google', date: 'Dec 2024', link: 'https://www.linkedin.com/in/venkat-vamsi-godavarthi-964555254/details/certifications/1712482406833/single-media-viewer/?profileId=ACoAAD66uBwBBKapZzoAbuwUWEpWRMqTrEEaWFc', skills: '' },
  ];

  return (
    <AboutContainer>
      <AboutContent>
        <AboutCard
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <SectionTitle style={{fontSize:'1.5rem',marginBottom:'1.1rem'}}>
            <FaUserAstronaut style={{marginRight: 12, verticalAlign: 'middle'}} /> About Me
          </SectionTitle>
          <Description>
            I am a passionate full-stack developer with a strong background in mobile, web, and game development. I love building impactful solutions and have a proven record in hackathons and leadership roles.
          </Description>
        </AboutCard>
        <AboutCard
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <SectionTitle style={{fontSize: '1.5rem', marginBottom: '1.1rem'}}>Hackathon Wins</SectionTitle>
          <HackathonGrid>
            {hackathonWins.map((win, idx) => (
              <HackathonBadge
                key={win.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                viewport={{ once: true }}
              >
                {win.icon}
                <div style={{fontWeight:700, fontSize:'1.05rem', marginBottom:2}}>{win.title}</div>
                <div style={{fontSize:'0.92rem', color:'#b2f7ef'}}>{win.desc}</div>
              </HackathonBadge>
            ))}
          </HackathonGrid>
        </AboutCard>
        <AboutCard
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <SectionTitle style={{fontSize: '1.5rem', marginBottom: '1.1rem'}}>Other Awards & Leadership</SectionTitle>
          <AwardsList>
            {awards.map((award, idx) => (
              <li key={idx}>{award}</li>
            ))}
          </AwardsList>
        </AboutCard>
        <AboutCard
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionTitle style={{fontSize: '1.5rem', marginBottom: '1.1rem'}}>Certifications</SectionTitle>
          <CertificationsRow>
            {certifications.map((cert, idx) => (
              <CertCard
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                viewport={{ once: true }}
              >
                <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:6}}><FaCertificate style={{color:'#4ecdc4'}} /> <b>{cert.name}</b></div>
                <div style={{fontSize:'0.97rem', color:'#b2f7ef', marginBottom:2}}>{cert.issuer}</div>
                <div style={{fontSize:'0.93rem', color:'#ff6b6b', marginBottom:2}}>{cert.date}</div>
                {cert.skills && <div style={{fontSize:'0.91rem', color:'#e0e0e0', marginBottom:2}}>{cert.skills}</div>}
                <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{width:'100%'}}>
                  <div style={{width:'100%',textAlign:'center',marginTop:8,background:'#4ecdc4',color:'#fff',borderRadius:8,padding:'0.4rem 0',fontWeight:600,letterSpacing:1}}>View Credential</div>
                </a>
              </CertCard>
            ))}
          </CertificationsRow>
        </AboutCard>
      </AboutContent>
    </AboutContainer>
  )
}

export default About 