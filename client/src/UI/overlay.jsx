import classes from './Modal.module.css';
const Overlay=(props)=>{
    return (<div className={classes.modal} style={props.style} onClick={props.onClose}>
        <div>{props.children}</div>
    </div>)
}
export default Overlay;