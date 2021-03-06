import { Link } from "react-router-dom"
import "./styles.css"

export const Main = () => {
	return (
		<div className="main">
			Start page. Each of the following sections should descripe a scenario and solution.
			<div className="link-collection">
				<Link className="p-link" to="prevent-click-spam">Prevent Click Spamming</Link>
				<Link className="p-link" to="props-for-state">Passing Props for State</Link>
				<Link className="p-link" to="animate-react-transition">Fading with React Transition Groups</Link>
				<Link className="p-link" to="state-dependent-state">When to use useReducer</Link>
			</div>
		</div>
	)
}