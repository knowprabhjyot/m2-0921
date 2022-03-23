import { useState } from 'react';
import { useEffect } from 'react';
import { useParams} from 'react-router-dom';
import Card from './card';

const User = () => {

    // If you remember lifecycle hooks for class based components
    // componentdidmount

    // let userData = {};

    // Save states in class based components
    // setState, state

    // Functional components state, we can do it using hooks
    const [userData, setUserData] = useState({});

    // useEffect
    useEffect(() => {
        fetch(`https://reqres.in/api/users/${id}`).then((data) => {
            return data.json()
        })
        .then((val) => {
            setUserData(val.data);
            console.log(userData, 'userData ');
        })
    }, []);

    const { id } = useParams();
    // eslint-disable-next-line no-unused-vars

    // We generally hooks here , but for now you can ignore it

   

    return (
        <div>
              <Card data={userData} />
        </div>
    )
}

export default User;