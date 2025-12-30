import { Container, Heading, Text, Button, VStack, HStack, Input, Textarea, FormControl, FormLabel, useToast } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create mailto link
    const subject = encodeURIComponent(`Contact from ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    const mailtoLink = `mailto:yusufsemihsancar08@gmail.com?subject=${subject}&body=${body}`

    // Open email client
    window.location.href = mailtoLink

    // Show success message
    toast({
      title: 'Email client opened',
      description: 'Please send the email from your email client.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    })

    setIsSubmitting(false)
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <Layout title="Contact">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Contact Me
        </Heading>

        <Section delay={0.1}>
          <VStack spacing={6} align="start" maxW="600px">
            <Text fontSize="lg" mb={4}>
              I&apos;d love to hear from you! Whether you have a question, a project idea, 
              or just want to connect, feel free to reach out using the form below.
            </Text>

            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <VStack spacing={4} align="start">
                <FormControl isRequired>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    variant="filled"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    variant="filled"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel htmlFor="message">Message</FormLabel>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={6}
                    variant="filled"
                    resize="vertical"
                  />
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="teal"
                  isLoading={isSubmitting}
                  loadingText="Opening Email Client..."
                  width="full"
                  mt={4}
                >
                  Send Message
                </Button>
              </VStack>
            </form>

            <Text fontSize="md" mt={6} mb={4}>
              Or find me on social media:
            </Text>

            <HStack spacing={4}>
              <Button
                as="a"
                href="https://github.com/YusufSemihSancar"
                target="_blank"
                leftIcon={<FaGithub />}
                colorScheme="teal"
                variant="outline"
              >
                GitHub
              </Button>
              <Button
                as="a"
                href="https://tr.linkedin.com/"
                target="_blank"
                leftIcon={<FaLinkedin />}
                colorScheme="teal"
                variant="outline"
              >
                LinkedIn
              </Button>
              <Button
                as="a"
                href="https://www.youtube.com/"
                target="_blank"
                leftIcon={<FaYoutube />}
                colorScheme="teal"
                variant="outline"
              >
                YouTube
              </Button>
              <Button
                as="a"
                href="https://www.instagram.com/"
                target="_blank"
                leftIcon={<FaInstagram />}
                colorScheme="teal"
                variant="outline"
              >
                Instagram
              </Button>
            </HStack>
          </VStack>
        </Section>
      </Container>
    </Layout>
  )
}

export default Contact
export { getServerSideProps } from '../components/chakra'
