import { Inter,Raleway,Fira_Code } from 'next/font/google'
import "@/scss/index.scss"


const inter = Inter({ subsets: ['latin'] })
const raleway = Raleway({ subsets: ['latin'] })
const firaCode= Fira_Code({ subsets: ['latin'], weight: ["300" , "400", "500", "600", "700"] })

export const metadata = {
  title: 'Portfolio Natanael',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={firaCode.className}>{children}</body>
    </html>
  )
}
