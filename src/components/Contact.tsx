import styled from '@emotion/styled'
import emailjs from 'emailjs-com'
import { motion } from 'framer-motion'
import { useState } from 'react'

// Initialize EmailJS
emailjs.init('ItqXwkV42hkOCRzop')

const ContactContainer = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`

const ContactContent = styled.div`
  max-width: 600px;
  width: 100%;
`

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const ContactForm = styled(motion.form)`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
`

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #fff;
`

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #fff;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #4ecdc4;
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #fff;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #4ecdc4;
  }
`

const SubmitButton = styled(motion.button)`
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`

const SocialLinks = styled.div`
  margin-top: 2rem;
  text-align: center;
`

const SocialLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 1rem;

  &:hover {
    text-decoration: underline;
  }

  span {
    margin-left: 0.5rem;
  }
`

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    
    try {
      await emailjs.send(
        'service_d5en4na',
        'template_psc38o4',
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          reply_to: form.email,
        },
        'ItqXwkV42hkOCRzop'
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus('error')
    }
  }

  return (
    <ContactContainer>
      <ContactContent>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </SectionTitle>
        <ContactForm
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" value={form.name} onChange={handleChange} required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" value={form.email} onChange={handleChange} required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea id="message" value={form.message} onChange={handleChange} required />
          </FormGroup>
          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </SubmitButton>
          {status === 'success' && (
            <div style={{ color: '#4ecdc4', marginTop: 16, textAlign: 'center' }}>Message sent successfully!</div>
          )}
          {status === 'error' && (
            <div style={{ color: '#ff6b6b', marginTop: 16, textAlign: 'center' }}>Failed to send message. Please try again.</div>
          )}
        </ContactForm>
        <SocialLinks>
          <SocialLink
            href="https://www.linkedin.com/in/venkat-vamsi-godavarthi-964555254/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>LinkedIn</span> ↗
          </SocialLink>
          <SocialLink
            href="https://github.com/venkat-vamsi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>GitHub</span> ↗
          </SocialLink>
        </SocialLinks>
      </ContactContent>
    </ContactContainer>
  )
}

export default Contact 