/**router
 * 
 */
export const metadata = {
  title: 'Stephanie Ha',
  description: 'Website made with Next.js',
  icons: {
    icon: '/koi-fish.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

// root
