export  default  function UserInfo({AllUsers}){
    return (
        AllUsers.map((user) => (
            <div key={user.id}>
                <h1 className="font-bold text-2xl  ">{user.name}</h1>
                <p>{user.age}</p>
            </div>
        ))
    );
};