import { useState } from "react";

const Services = () => {
    const [services, setServices] = useState([
        {
            id: "fas fa-archive",
            icon: "fas fa-archive", 
            title:'CSS Templates',
            p: "TemplateMo website is the best for you to explore and download free website templates",
        },
        {
            id: "fas fa-cloud",
            icon: "fas fa-cloud", 
            title:'HTML5 Web Pages',
            p: "Templates are based on Bootstrap 5 CSS framework. You can easily adapt or modify based on your needs",
        },
        {
            id: "fas fa-charging-station",
            icon: "fas fa-charging-station", 
            title:'Responsive Designs',
            p: "All of our CSS templates are 100% free to use for commercial or business websites.",
        },
        {
            id: "fas fa-suitcase",
            icon: "fas fa-suitcase", 
            title:'Mobile and Tablet ready!',
            p: "Our HTML CSS templates are well-tested on mobile, tablet, and desktop compatibility.",
        },
        {
            id: "fas fa-archway",
            icon: "fas fa-archway", 
            title:'Fast Customer Support',
            p: "Do not be hesitated to contact us if you have any question or concern about our templates.",
        },
        {
            id: "fas fa-puzzle-piece",
            icon: "fas fa-puzzle-piece", 
            title:'Fully Customizable',
            p: "if you have any idea or suggestion about new templates, feel free to let us know.",
        }
    ]);

    const [ animaiton, setAnimaition ] = useState(false);
    return(
        <div className="services">
            <div className="container">
                {
                    services.map((service) => (
                        <div className="service" 
                            key={service.title}
                            onMouseOver={(e) =>{ 
                                if((e.currentTarget.lastChild.firstChild.textContent) === service.title) {
                                    setAnimaition(true);
                                }}
                            } 
                            onMouseOut={() => setAnimaition(false)}
                            >
                            <i  
                                className={
                                    animaiton
                                    ? service.icon + " " + "animaiton"
                                    : service.icon
                                }></i>
                            <div className="text">
                                <h4>{service.title}</h4>
                                <p>{service.p}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Services;