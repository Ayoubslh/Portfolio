

export default function Navbar(){
    return (
        <header className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-sm border-b border-white/10">

            <div className="mx-auto max-w-3xl px-8 py-6">
        <nav className=" flex items-center  ">
            <ul className="flex gap-8 ">
                <li className="text-amber-50 opacity-90 font-bold  hover:text-white hover:opacity-100" >About</li>
                   <li className="text-amber-50 opacity-90 font-bold  hover:text-white hover:opacity-100" >Projects</li>
                      <li className="text-amber-50 opacity-90 font-bold  hover:text-white hover:opacity-100" >Contact</li>
            </ul>
        </nav>
        </div>
        </header>
    )

}