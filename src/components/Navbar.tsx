import logo from '../assets/logo.png'
function Navbar() {
    return (
        <nav className="flex justify-between items-center pr-32 pt-4 font-['Mussels']">
            <div className='pl-32'>
                <img src={logo} width={80} alt="Logo" />
            </div>
            <div className='flex justify-center gap-40 text-2xl  items-center'>
                <a href=""><ul>Home</ul></a>
                <a href=""><ul>Team</ul></a>
                <a href=""><ul>Resource</ul></a>
                <a href=""><ul>Contact</ul></a>
            </div>
        </nav>
    )
}

export default Navbar
