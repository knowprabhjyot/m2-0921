import { Link } from 'react-router-dom';

const Card = (props) => {
    console.log(props.data, 'inside');
    return (
        <div>
            <Link to={`user/${props.data.id}`}><img src={props.data.avatar} alt={props.data.first_name} /></Link>
            <h1>Name: {props.data.first_name} {props.data.last_name}</h1>
            <p>Email: {props.data.email}</p>
        </div>
    )
}

export default Card;