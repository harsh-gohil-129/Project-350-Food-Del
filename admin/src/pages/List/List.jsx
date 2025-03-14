import "./List.css";
import React from "react";
import axios from "axios";

const List = () => {


    const [list, setList] = useState([]);
    const fetchList = async () => {
        const response = await axios.get()
    }
    return (
        <div>
            list
        </div>
    )
}

export default List
