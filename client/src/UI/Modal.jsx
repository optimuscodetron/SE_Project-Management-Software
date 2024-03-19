import classes from './Modal.module.css';
import ReactDOM  from 'react-dom';
import { Fragment } from 'react';
import Overlay from './overlay';

const Backdrop=(props)=>{
    return (<div className={classes.backdrop} onClick={props.onClick}></div>)
}
const portal=document.getElementById('overlay');
const Modal=(props)=>{
    const style={
        top:props.top,
        left:props.left,
        right:props.right,
    }
    return (
        <Fragment>
            {ReactDOM.createPortal(<Overlay style={props.top?style:{} } onClose={props.onClose}>{props.children}</Overlay>,portal)}
            {ReactDOM.createPortal(<Backdrop onClick={props.onClose}/>,portal)}
        </Fragment>
    )
}
export default Modal;