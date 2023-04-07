import Navbar from '@/layouts/layout1/navbar'
// import Footer from './footer'

export default function Layout({ children }: any) {
  return (
    <div className="min-h-screen h-full w-full bg-th-background text-th-primary-dark flex justify-between">
      <main className="">{children}</main>
      <Navbar />
    </div>
  )
}