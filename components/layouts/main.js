import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" minH="100vh" display="flex" flexDirection="column">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Yusuf Semih Sancar's homepage" />
        <meta name="author" content="Yusuf Semih Sancar" />
        <meta name="author" content="yusufsemihsancar" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Yusuf Semih Sancar" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YusufSemihSancar" />
        <meta name="twitter:creator" content="@YusufSemihSancar" />
        <meta name="twitter:image" content="https://www.craftz.dog/card.png" />
        <meta property="og:site_name" content="Yusuf Semih Sancar" />
        <meta name="og:title" content="Yusuf Semih Sancar" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.craftz.dog/card.png" />
        <title>Yusuf Semih Sancar - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14} flex="1">
        <LazyVoxelDog />

        {children}
      </Container>

      <Footer />
    </Box>
  )
}

export default Main
