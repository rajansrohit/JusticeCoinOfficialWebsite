import React from "react";
import SetTitle from "./SetTitle.jsx";

function PageNotFound() {
    return (
        <>
            <SetTitle title="Error 404: Page Not Found" />
            {/* <Nav /> */}
            {/* <PageTitle title="Uh-Oh" /> */}
            <section className="container text-center mt-5">
            <img src={require("./images/404.gif")} alt="404 Not Found" style={{width: "100%"}}/>
                <div className="mt-3">
                    <h2>The requested pathname "{window.location.pathname}" was not found on this server.</h2>
                    {/* <h5>Maybe you wanted to go to our <a href="/">home page</a>?</h5>
                    <h5>Or perhaps you wanted to try out our <a href="/webMiner">web miner</a>?</h5> */}
                </div>

            </section>
            {/* <Footer /> */}
        </>
    )
}

export default PageNotFound;