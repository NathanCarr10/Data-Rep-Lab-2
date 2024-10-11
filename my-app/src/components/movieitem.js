import { useEffect } from "react";
import {card}
const Movieitem = (props) =>{

    useEffect(
        ()=>{

        },{}
    );

    return(
        <div>
            <h3>{props.mymovie.Title}</h3>
            <h3>{props.myMovie.Year}</h3>
            <img></img>
        </div>
        );
    }
    export default Movieitem;