const UserComponent = ({user}) => {
	return (
		<li className="channel__item">
			<img className="aside__user-img"/>
			<span className="title fw-bold up-case gray-color">{user?.name}</span>
		</li>
	)
}

export default UserComponent
