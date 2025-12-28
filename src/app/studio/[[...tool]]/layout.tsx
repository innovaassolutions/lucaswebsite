export const metadata = {
  title: 'Sanity Studio',
  description: 'Content management for Cascavo\'s Fortnite Blog',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      {children}
    </div>
  )
}
