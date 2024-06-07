import { useState } from "react";

const ul = {
    position: "absolute",
    top: "73px",
    backgroundColor: "#eee",
    padding: "15px 35px 0px 25px",
    textAlign: "start",
    borderRadius: "4px",
    display: "none"
}

const Header = () => {

    const [links, setLinks] = useState([
        {name: 'Home', href: '/'},
        {name: 'Services', href: '#'},
        {name: 'About', href: '#'},
        {
            name: 'Pages',
            href: '#',
            miniMenu: [
                {name: 'About Us', href: '#'},
                {name: 'Our Services', href: '#'},
                {name: 'Contact-Us', href: '#'},
            ]
        },
        {name: 'Testimonials', href: '#'},
        {name: 'Contact Support', href: '#', btn: true},
    ]);

    const [toggle, setToggle] = useState(true);
    const [burger, setBurger] = useState(true);
    
    return(
        <div className="header">
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        <a href="#">
                            <h1>Logo</h1>
                        </a>
                    </div>
                    <div className="menu">
                        <div className={toggle 
                            ? "links"
                            : "links active"
                            }>
                                {links.map((link) => (
                                        <a
                                        key={link.name}
                                        href={link.href}
                                        className={
                                            link.btn 
                                            ? 'btn'
                                            : 'a'
                                        }
                                        > 
                                            {link.name}
                                        </a>
                                ))}
                        </div>
                        <div className={burger 
                            ? 'toggle-menu'
                            : 'toggle-menu active'
                        }
                            onClick={() => {
                                setToggle(false);
                                if(!toggle) {
                                    setToggle(true)
                                }
                                setBurger(false);
                                if(!burger) {
                                    setBurger(true)
                                }
                            }}
                        >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;