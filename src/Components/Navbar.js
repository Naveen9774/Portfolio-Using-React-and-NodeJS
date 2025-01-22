export default function Navbar(){
    return(
        <nav className="w-full px-5 sm:10 py-5 shadow-xl backdrop-blur-lg fixed top-0 z-10 ">
        <div className="container flex flex-col lg:flex-row gap-5 justify-between w-full
                        items-center max-w-5xl mx-auto">
        <h3 className="text-3xl text-red-500 font-bold">karipisetty Naveen</h3>
        <ul className="flex gap-3 align-center p-1 flex-wrap"></ul>
        <li>
        <a href="#about"className="text-sm sm:text-base px-2 lg:px-5
                                    px-2 transition rounded hover:text-white
                                    hover:bg-red-600">About</a>
        </li>
        <li>
        <a href="#skills"className="text-sm sm:text-base px-2 lg:px-5
                                    px-2 transition rounded hover:text-white
                                    hover:bg-red-600">Skills</a>
        </li>
        <li>
        <a href=" #projects" className="text-sm sm:text-base px-2 lg:px-5
                                    px-2 transition rounded hover:text-white
                                    hover:bg-red-600">Projects</a>
        </li>
        <li>
        <a href="#Contact"className="text-sm sm:text-base px-2 lg:px-5
                                    px-2 transition rounded hover:text-white
                                    hover:bg-red-600">Contact</a>
        </li>
       
        </div>
        </nav>
    );
}