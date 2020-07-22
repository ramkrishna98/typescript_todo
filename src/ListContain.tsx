import React, { useState, useReducer, useRef } from 'react';
import { strict } from 'assert';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


export const ListContain: React.FC = ({}) => {
    
    const[list, setList] = useState(Array);
    const[tempList, setTempList] = useState();
    const inputRef = useRef<HTMLInputElement>(null);

    let handleOnChangeEvent = (e: any) => {
        setTempList(e.target.value);
        //console.log(list1);
    }
    let handleOnSubmitEvent = (e:any) =>{
        e.preventDefault();
        const newList = [setList, setTempList]

        setList(newList);
    }
    let removeItem = (value:string) => {
        
        let alist = list.filter(item => item !== value)              
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
                                onChange={(e) => handleOnChangeEvent(e)}
                                placeholder="Type...">
                            </input>
                        </div>
                        <button className="buttonBox" type='submit'>Add</button>
                    </form>
                </div>
                <div>
                {setList.map(nlist => (
                        <p className="generatedList" key={nlist}>{nlist}

                            <FontAwesomeIcon
                                className="faicons"
                                icon={faTrash}
                                onClick={}
                            />
                        </p>
                    ))}

                </div>

            </div>
        )
 
        </div>
    )
    

}
