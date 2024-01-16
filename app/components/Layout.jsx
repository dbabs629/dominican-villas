import Navbar from "./Navbar";
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <footer className="h-10 w-full bg-blue-400">
        <p className="text-center text-white">Footer</p>
      </footer>
    </>
  );
}
