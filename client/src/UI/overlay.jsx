import classes from './Modal.module.css';
const Overlay=(props)=>{
    return (<div className={classes.modal} style={props.style}>
        <div>{props.children}</div>
    </div>)
}
export default Overlay;