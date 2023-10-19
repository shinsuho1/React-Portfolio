import { Link } from "react-router-dom"


function Download_type() {
    return (
        <section className="type hide">
            <h2>
                Office is now Microsoft 365 Boost productivity with
                Microsoft more—all in one place.
            </h2>
            <div className="btn">
                <Link to="/download#;">Personal and family</Link>
                <Link to="/download#;">Business</Link>
                <Link to="/download#;">Enterprise</Link>
                <Link to="/download#;">Education</Link>
            </div>
        </section>
    )
}

export default Download_type