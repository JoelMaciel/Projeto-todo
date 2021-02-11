import React from 'react'
import Card from './Card'


function DoneImg(props) {
    if (props.done){
        return (<img alt="done" src="./assets/on.png" width="25px"></img>)
    }else{
        return (<img alt="undone" src="./assets/off.png" width="25px"></img>)

    }
}


function ListItem(props) {
    return(<li  >
            <Card className={props.item.done?"done item":"item"}>
                {props.item.text}
                <div>
                    <button onClick={()=>{props.onDone(props.item)}}><DoneImg done={props.item.done}></DoneImg></button>
                    <button onClick = {( )=>{props.onItemDeleted(props.item)}}><img alt="delete" src="./bin.jpg" rigth="50px" width = "13px"></img></button>
                </div>
            </Card>
            </li>)

    
}
export default ListItem;