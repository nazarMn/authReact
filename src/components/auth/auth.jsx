import React from "react";
import axios from "axios";

export default function Auth() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");




    const hangleSingUp = () => {
        console.log(username, password);
        axios.post("http://localhost:3000/users", {
        })
    };

    


    return (
       <form>
           <input type="text" placeholder="username" id="username"/>
           <input type="password" placeholder="password" id="password"/>
           <button>Regisert</button>
       </form>
    );
};

