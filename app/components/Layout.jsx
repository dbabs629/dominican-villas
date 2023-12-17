import Navbar from './Navbar'
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <footer className='w-full h-10 bg-purple-800'>Footer</footer>
    </>
  )
}
