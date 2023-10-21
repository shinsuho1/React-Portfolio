import { Link } from "react-router-dom";

function Download_info() {
    return (
        <section className="download hide">
            <div className="img"></div>
            <div className="inner">
                <h1>
                    <span className="col1">Don't worry</span>
                    <br />
                    <span className="col2">subscribe right now!</span>
                </h1>
                <p className="ex">
                    Can use it anytime, anywhere as long as there is internet!
                    <br />
                    Try this package that is essential when working with
                    documents.
                </p>
                <Link to="/download#;" className="btn" title="Microsoft365">
                    Start Right Now
                </Link>
                <p>
                    You feeling burdened? A free trial is also available!
                    <span>
                        <Link to="/download#;">Get in touch</Link>
                    </span>
                </p>
            </div>
        </section>
    );
}

export default Download_info;
