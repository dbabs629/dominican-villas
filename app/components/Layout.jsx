import Navbar from './Navbar'
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <footer className='w-full h-10 bg-blue-400'>
        <p className='text-center text-white'>Footer</p>
      </footer>
    </>
  )
}
