import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gueess | About',
  description: 'Guess the hidden number',
}

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return <>{children}</>
}

export default Layout
