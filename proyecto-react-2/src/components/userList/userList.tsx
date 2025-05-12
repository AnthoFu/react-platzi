import { useState, useEffect } from "react";

interface User {
    id: number;
    name: string;
    // Se pueden agregar mas campos si es necesario
}

const UserList = () => {
    const [users, setUsers] = useState<User[]>([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((Response) => Response.json())
            .then((data) => setUsers(data))
            .catch ((error) => console.log("Error en el fetch de UserList:", error))
    }, [])

    return(
    <div>
        <h1>Lista de usuarios</h1>
        <ul>
            {
                users.map((user) =>(
                    <li key={user.id}>{user.name}</li>
                ))
            }
        </ul>
    </div>
)
}

export default UserList
