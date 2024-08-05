import React, { useEffect, useState } from "react";
import "./Notebook.css";
import Notecontent from "../Notecontent/Notecontent";
import { useDispatch, useSelector } from "react-redux";
import * as NoteApi from "../../api/noteRequest";
import { sendNote , getNote} from "../../Reducer/noteReducer";

const Notebook = () => {
  const  {data}  = useSelector((state) => state.auth.value);
  const note = useSelector((state) => state.note.value);
  const dispatch = useDispatch();
  
   const userId = data.data.user._id;
   console.log(userId, "for notebook side");
  const [value, setValue] = useState({
    userId: data.data.user._id,
    note: "",
  });

  
  console.log(value.userId, "this is the id")
  const [secret, setSecret] = useState([]);
  const [color, setColor] = useState();

  const handleCahnge = (event) => {
    const { name, value } = event.target;
    setValue((prev) => {
      return { ...prev, [name]: value};
    });
    event.preventDefault();
  };

  const handleClick = () => {
    setSecret((prev) => {
      return [...prev, value];
    });

    savSecret();

    setValue({
      userId: data.data.user._id,
      note: "",
    });
  };

  const savSecret = async () => {
    console.log(value, "we are checking");
    try {
      await NoteApi.sendNote(value);
      dispatch(sendNote(value));
      
    } catch (error) {
      console.log("message of the error: ", error);
    }
  };

  const changeColor = (event) => {
    let valu = event.target.value;
    setColor(valu);
    event.preventDefault();
  };

  


  //get all the note by the user
  useEffect(() => {

    const showFunc=async()=>{
      const showAll = await NoteApi.getNote(value) ///
      dispatch(getNote(showAll))
      console.log(showAll, "this is all data for wt")
    }
    showFunc()
  }, [value]);

  return (
    <>
      <div className="external-container">
        <div className="input-container">
          <input hidden name="userId" value={value.userId}/>
          <textarea
            style={{ background: `${color}` }}
            name="note"
            value={value.note}
            onChange={handleCahnge}
            cols={5}
            rows={15}
          ></textarea>
          <div className="value-box">
            <input
              onChange={changeColor}
              placeholder="enter color to change background"
            ></input>
            <button onClick={handleClick}>Send</button>
          </div>
        </div>
        <div className="diary-body">
          <Notecontent secretValue={secret} />
        </div>
      </div>
    </>
  );
};

export default Notebook;
