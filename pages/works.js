import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/SnakeGame.png'
import thumbWalknote from '../public/images/WPm test.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="SnakeGame" title="SnakeGame" thumbnail={thumbInkdrop} github="https://github.com/YusufSemihSancar/Snake-Game">
            A classic snake game playable via the website.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="WPM Test"
            title="WPM Test"
            thumbnail={thumbWalknote}
            github="https://github.com/YusufSemihSancar/WPM-Test"
          >
            A website that measures your typing speed within a specific time period.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <Section delay={0.4}>
        <Divider my={6} />
      </Section>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
