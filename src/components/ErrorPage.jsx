import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="errorPage">
      <h1>Routing Issue ;(</h1>
      <p>
        Reroute back to <Link to="/">Home Page</Link>
      </p>
    </div>
  );
}

export default ErrorPage;
