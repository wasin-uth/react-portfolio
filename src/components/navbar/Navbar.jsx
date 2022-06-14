import './navbar.scss'
// import resume from "../../assets/resume.pdf"

export const Navbar = () => {
    return (
        <div id="navbar">
            <span>WASIN AUTHAIKLIANG</span>
            <span>
                <a
                    className="download_cv"
                    // href={resume}
                    download
                >
                    <button>Download CV</button>
                </a>
            </span>
        </div>
    )
}