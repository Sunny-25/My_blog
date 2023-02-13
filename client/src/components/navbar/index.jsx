import './index.css'
import { Link } from 'react-router-dom'
import Btn from '../../components//btn'

const Navbar = () => (
	<>
		<div className="nav">
			<Link to="/" className="link">
				<h1>My blog</h1>
			</Link>
			<div className="links">
				{['home', 'write'].map((i) => (
					<Link to={i === 'home' ? '/' : `/${i}`} key={i} className="link">
						{i}
					</Link>
				))}
			</div>
		</div>
		<Btn classList="button" />
	</>
)

export default Navbar
