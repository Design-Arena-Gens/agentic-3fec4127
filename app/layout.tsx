export const metadata = {
  title: 'आवास सहायता कार्यक्रम - जानकारी वीडियो',
  description: 'राष्ट्रीय आवास सहायता कार्यक्रम के बारे में जानकारी',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hi">
      <body style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif' }}>{children}</body>
    </html>
  )
}
