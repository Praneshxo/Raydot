import './Bypass.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import 'bootstrap/dist/css/bootstrap.min.css';

function Bypass() {
    return (
        <>
            <nav className="navbar bg-dark">
                <div className="container-fluid">
                    <span className="appName">
                        React User Authentication</span>
                </div>
            </nav>
            <LoginButton />
            <LogoutButton />
        </>
    );
}

export default Bypass;