import { Outlet, Link } from "react-router-dom"
import "./styles.css"

export const BackButton = () => {
    return (
        <Link className="p-link_button" to="/">Back</Link>
    )
}