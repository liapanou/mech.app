import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const currentPath = router.pathname; //brings information about the UI from the router
  return (
    <header className="text-gray-900 bg-red-800 body-font">
      <div className=" shadow-lg  mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img className="w-16  h-16" src="/logo2.png" />

          <span className="ml-3 text-yellow-500 font-extrabold text-2xl">
            VELETZAS SERVICES
          </span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-lg justify-center">
          <a
            className={`mr-5 rounded-lg ${
              currentPath === "/" ? "bg-yellow-500" : ""
            } `} //it makes bg-yellow in a word when the word is active
            href="/" //it connect a word with a site
          >
            Home
          </a>
          <a
            className={`mr-5 rounded-lg ${
              currentPath === "/business" ? "bg-yellow-500" : ""
            } `}
            href="/business"
          >
            Business
          </a>
          <a
            className={`mr-5 rounded-lg ${
              currentPath === "/service" ? "bg-yellow-500" : ""
            } `}
            href="/service"
          >
            Service
          </a>
          <a
            className="mr-5 rounded-lg hover:bg-yellow-500 active:bg-yellow-500 "
            href="#contact"
          >
            Επικοινωνία
          </a>
          {/* The symbol before contact means that it go to the bottom of the page */}
        </nav>
      </div>
    </header>
  );
}

export default Header;
