import { Link } from "@remix-run/react";

export default function Index() {
    console.log('render index');
    return (
        <div>
            <p>When you click the following link a render call for this parent route will run twice, and then also the child</p>
            <Link to="./1">Test Link</Link><br />
            <Link to="/test2">Test 2 Link</Link>
        </div>
    );
}