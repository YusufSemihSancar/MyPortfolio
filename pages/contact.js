import { Container, Heading, Text, Button, VStack, Input, Textarea, FormControl, FormLabel, useToast } from '@chakra-ui/react'
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
        <Heading as="h3" fontSize={{ base: 18, md: 20 }} mb={4}>
          Contact Me
        </Heading>

        <Section delay={0.1}>
          <VStack spacing={6} align="start" width={{ base: "100%", md: "600px" }} mx="auto">
            <Text fontSize={{ base: "md", md: "lg" }} mb={4} textAlign={{ base: "center", md: "left" }}>
              I&apos;d love to hear from you! Whether you have a question, a project idea, 
              or just want to connect, feel free to reach out using the form below.
            </Text>

            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <VStack spacing={4} align="stretch" width="100%">
                <FormControl isRequired>
                  <FormLabel htmlFor="name" fontSize={{ base: "sm", md: "md" }}>Name</FormLabel>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    variant="filled"
                    size={{ base: "md", md: "lg" }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel htmlFor="email" fontSize={{ base: "sm", md: "md" }}>Email</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    variant="filled"
                    size={{ base: "md", md: "lg" }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel htmlFor="message" fontSize={{ base: "sm", md: "md" }}>Message</FormLabel>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={{ base: 4, md: 6 }}
                    variant="filled"
                    resize="vertical"
                    size={{ base: "md", md: "lg" }}
                  />
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="teal"
                  isLoading={isSubmitting}
                  loadingText="Opening Email Client..."
                  width="full"
                  mt={4}
                  size={{ base: "md", md: "lg" }}
                >
                  Send Message
                </Button>
              </VStack>
            </form>

            <Text fontSize={{ base: "sm", md: "md" }} mt={6} mb={4} textAlign={{ base: "center", md: "left" }}>
              Or find me on social media:
            </Text>

            <VStack spacing={3} align={{ base: "center", md: "flex-start" }}>
              <Button
                as="a"
                href="https://github.com/YusufSemihSancar"
                target="_blank"
                leftIcon={<FaGithub />}
                colorScheme="teal"
                variant="outline"
                size={{ base: "sm", md: "md" }}
                width={{ base: "full", md: "auto" }}
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
                size={{ base: "sm", md: "md" }}
                width={{ base: "full", md: "auto" }}
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
                size={{ base: "sm", md: "md" }}
                width={{ base: "full", md: "auto" }}
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
                size={{ base: "sm", md: "md" }}
                width={{ base: "full", md: "auto" }}
              >
                Instagram
              </Button>
            </VStack>
          </VStack>
        </Section>
      </Container>
    </Layout>
  )
}

export default Contact
export { getServerSideProps } from '../components/chakra'
