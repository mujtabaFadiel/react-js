import Header from "./Header";

const content = 
    {
        Title: "Best Ones in Town",
        Title2: "& Our Services",
        pargraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, nam architecto reprehenderit assumenda distinctio eius cumque itaque officiis earum! Nam minus voluptas aperiam rem esse veniam, sunt ratione nisi dolorum!",
        btn:"Discover More",
        btn2:"Contact Us",
    }


const LandingPage = () => {
    return(
    <>
        <div className="landing-page">
            <Header />
            <div className="container">
                <div className="text">
                    <div className="containt">
                        <h1>{content.Title}</h1>
                        <h1>{content.Title2}</h1>
                        <span></span>
                        <p>{content.pargraph}</p>
                        <div className="btns">
                            <button className="btn">{content.btn}</button>
                            <button className="btn2">{content.btn2}</button>
                        </div>
                    </div>
                </div>
            </div>  
            <div className="overlay"></div>
        </div>
    </>
    )
}

export default LandingPage;