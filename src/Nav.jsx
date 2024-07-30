import { Link } from "react-router-dom";
import "./Nav.css"
function Nav(){
    return(
        <>
            <div className="home">
            <Link to='/post' className="link">INPUT</Link>
            <Link to='/get' className="link">OPUTPUT</Link>
            </div>
            
        </>
    );
}
export default Nav;