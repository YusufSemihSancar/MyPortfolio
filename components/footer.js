import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" py={8}>
      &copy; {new Date().getFullYear()} Yusuf Semih Sancar. All Rights Reserved.
    </Box>
  )
}

export default Footer
