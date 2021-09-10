import React from 'react'

export default function Navbar() {
    let count = 0;
    const clickhandler = () => {
        if (count % 2 !== 0) {
            document.body.style.background = "#fff";
            document.body.style.color = "#000000";
        } else {
            document.body.style.background = "#000000";
            document.body.style.color = "#ffffff";
        }
        count++;
    }
    let hrefLink = '#';
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

                <a className="navbar-brand" href={hrefLink}>Quiz App</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href={hrefLink}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={hrefLink}>Result</a>
                    </li>
                </ul>
                <div className="custom-control custom-switch float-lg-right">
                    <input type="checkbox" onChange={clickhandler} className="custom-control-input" id="switch1" />
                    <label className="custom-control-label" htmlFor="switch1">Toggle me</label>
                </div>
            </nav>
        </div>
    )
}
