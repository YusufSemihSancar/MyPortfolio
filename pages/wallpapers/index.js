import { Container, Heading } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'

const Wallpapers = () => (
  <Layout title="Blogs">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Blogs
      </Heading>

      <Section delay={0.1}>
        <Heading as="h4" fontSize={16} mb={2}>
          Coming Soon!
        </Heading>
      </Section>
    </Container>
  </Layout>
)

export default Wallpapers
export { getServerSideProps } from '../../components/chakra'
