import React ,{useState} from 'react'
import Button from './Button'

export default function Questions(props) {
    const [reply, setreply] = useState(null)
    const checkval= (val) => {
        if (props.cor === val) {
            setreply(true);
            props.markscal(reply);
        }
        
        console.log(props.cor,val,reply);
    }
    const myLists = props.ans;
    const listItems = myLists.map((myList,index) =>
        <Button key={index} valuebtn={checkval} val={myList} cor={props.cor}/>
        );
    return (
        <div className="card bg-primary text-white my-3 py-3 px-5">
            <p>Q.{props.Qid}  {props.quest}</p>
            <div className="buttons">
                {listItems}
            </div>

        </div>
    )
}
