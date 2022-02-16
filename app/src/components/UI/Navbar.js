// import { Nav } from 'react-bootstrap'
import './styles.css'
import { Link } from 'react-router-dom';

const Navbar=()=>{
    return (
        <div>
              <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <div class="container px-4">
                <a class="navbar-brand" href="#page-top">Start Bootstrap</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><Link class="nav-link" to={'/signUp'}> Sign Up</Link></li>
                        <li class="nav-item"><Link class="nav-link" to={'/login'}> Log In</Link></li>
                       
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    )
}
export default Navbar;
