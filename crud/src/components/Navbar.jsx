import { Link } from "react-router-dom"


export default function Navbar(){
    return(
        <nav style={{display: "flex", gap:"1rem", padding:"1rem", background:"#eee"}}>
            {/* Link prevents full page refreshes when navigating */}
            <link to="/">User List (Read)</link>
            <link to ="/add" >Add User (Create)</link>
        </nav>
    )
}