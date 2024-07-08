import { useEffect, useState } from "react";
export interface User {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    phone:    string;
    website:  string;
}
export type AuthorProps = {
    userId: number
  }
  const Author:React.FC<AuthorProps> = ({userId}) => {
    const [user, setUser] = useState<User>()
    useEffect (()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json =>setUser(json.find((user:User)=>user.id===userId)))
    },[userId])
    return (
      <div >
        <h3>{user?.name || ''}</h3>
      </div>
    );
  };
  
  export default Author;
  