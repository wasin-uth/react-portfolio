// import { Outlet } from "react-router";
import { NavLink, Outlet } from "react-router-dom"
import "./menu.scss"

export const MenuBar = () => {
    const routePage = [
        { path: '/', name: 'ABOUT ME' },
        { path: '/my-skills', name: 'MY SKILLS' },
        { path: '/projects', name: 'PROJECTS' },
        { path: '/contact-me', name: 'CONTACT ME' },
    ]

    return (
        <div id="menu">
            <ul>
                {routePage.map((item, i) => (
                    <li key={i} >
                        <NavLink
                            className={
                                ({ isActive }) => (
                                    isActive ? "active" : "link"
                                )
                            }
                            to={item.path}
                        >
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    )
}