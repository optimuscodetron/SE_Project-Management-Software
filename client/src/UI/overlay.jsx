import classes from './Modal.module.css';
const Overlay=(props)=>{
    console.log(props.style)
    return (<div className={classes.modal} style={props.style} >
        <div>{props.children}</div>
    </div>)
}
export default Overlay;