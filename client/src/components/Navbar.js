import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav>
             <img src="/images/logo.svg" type="image/svg+xml"/>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/trivia'>Trivia</Link> 
            {/* <Link to='/rank'>Rank</Link> */}
            {/* <Link to='/upload'>Upload</Link> */}
            <Link to='/login'>Login</Link>
        </nav>
    )
} 
