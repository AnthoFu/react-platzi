import { useState, useEffect } from "react";

interface User {
    id: number;
    name: string;
    // Se pueden agregar mas campos si es necesario
}

const UserListWithLoading = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok){
                    throw new Error('Error al obtener los datos')
                }
                const data = await response.json()
                setUsers(data)
            } catch (error) {
            setError(error instanceof Error ? error.message : String(error));   
            } finally {
                setIsLoading(false);
            }
        }
        fetchUsers();
    }, []);


if (isLoading) {
    return <p> Cargando lista de usuarios... </p>
}

if (error) {
    return <p>¡Error! Contacta con Antho para arreglarlo: {error}</p>
}

return (
    <div>
        <h1>Lista de usuarios</h1>
        <ul>
            {
                users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))
            }
        </ul>
    </div>
)
}

export default UserListWithLoading
