export default function Users(props){

    return(
        <ul>
            {
                props.users.map((user, index)=><li key={index}>{user}</li>)
            }
        </ul>
    )
}