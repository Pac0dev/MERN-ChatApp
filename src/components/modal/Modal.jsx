import {useEffect} from "react";
import  ReactDOM  from "react-dom"
const Modal = ({children}) => {
	const portal = document.createElement('div');
	useEffect(() => {
		document.querySelector('body').appendChild(portal);
		portal.classList.add('portal');
		return () => portal.remove();
	}, [portal])
	return ReactDOM.createPortal(children, portal);
}

export default Modal
