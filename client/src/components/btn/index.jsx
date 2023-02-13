import './index.css'

const Btn = () => {
	return (
		<div className="Btn">
			<input type="checkbox" id="checkbox" />
			<label htmlFor="checkbox">
				<i className="fas fa-moon"></i>
				<i className="fas fa-sun"></i>
				<div className="ball" />
			</label>
		</div>
	)
}

export default Btn
