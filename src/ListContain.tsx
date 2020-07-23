import React, { useState, useRef } from 'react';
import './ListContain.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


const ListContain: React.FC = ({}) => {
    
    const[list, setList]: [any,any] = useState([]);
    const[tempList, setTempList]: [any,any] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    let handleOnChangeEvent = (e: any) => {
        setTempList(e.target.value);
        //console.log(list1);
    }
    let handleOnSubmitEvent = (e:any) =>{
        e.preventDefault();
        const newList = [...list, tempList]
        setList(newList);
        setTempList('');
    }
    let removeItem = (value: any) => {
        
        let alist = list.filter((item: any) => item !== value)              
        setList(alist);
    }
    return(
        <div>
            <div className='createBox'>
                <div>
                    <form onSubmit={(e) => handleOnSubmitEvent(e)}>
                        <div>
                            <input
                                className="inputBox"
                                ref = {inputRef}
                                value= {tempList}
                                onChange={(e) => handleOnChangeEvent(e)}
                                placeholder="Type...">
                            </input>
                        </div>
                        <button className="buttonBox" ref = {buttonRef} type='submit'>Add</button>
                    </form>
                </div>
                <div>
                {list.map((nlist: string, index: any) => (
                        <p className="generatedList" key={index} >{nlist}

                            <FontAwesomeIcon
                                className="faicons"
                                icon={faTrash}
                                onClick={() =>removeItem(nlist)}
                            />
                        </p>
                    ))}

                </div>

            </div>
        )
 
        </div>
    )
    

}
export default ListContain;