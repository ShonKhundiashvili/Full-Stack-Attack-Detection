import {
    BarWrapper,
    Title,
    LottieLogo,
    LogoWrapper,
    // Bars,
    NavMenu,
    NavLink
} from "./NavBar.style";

import AnimatedLogo from '../../assets/EDgL26btNA.json';
import { useNavigate } from "react-router-dom";


function NavBar() {

    const navigate = useNavigate();

    function navigateHomePage() {
        navigate('/home');
    }

    function navigateProfile() {
        navigate('/profile');
    }
    function navigateHistory() {
        navigate('/history');
    }

    function navigateAbout() {
        navigate('/about');
    }

    return (
        <BarWrapper>
            {/* <Bars /> */}
            <LogoWrapper>
                <Title>ATTACK</Title>
                <LottieLogo animationData={AnimatedLogo} />
                <Title>METER</Title>
            </LogoWrapper>
            <NavMenu>
                <NavLink onClick={navigateHomePage}>
                    Home
                </NavLink>
                <NavLink onClick={navigateProfile}>
                    Profile
                </NavLink>
                <NavLink onClick={navigateHistory}>
                    History
                </NavLink>
                <NavLink onClick={navigateAbout}>
                    About
                </NavLink>
            </NavMenu>
        </BarWrapper>
    );
}

export default NavBar;