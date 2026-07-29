import React, { useEffect, useState } from "react";

import {
    getUsers,
    createUser,
    deleteUser
} from "../services/api";


function Users() {


    const [users, setUsers] = useState([]);


    const [user, setUser] = useState({

        name: "",
        email: "",
        phone: ""

    });



    useEffect(() => {

        loadUsers();

    }, []);



    const loadUsers = async () => {

        try {

            const response = await getUsers();

            setUsers(response.data);

        }

        catch(error) {

            console.error(
                "Unable to fetch users",
                error
            );

        }

    };




    const handleChange = (event) => {


        setUser({

            ...user,

            [event.target.name]:
                event.target.value

        });


    };




    const saveUser = async () => {


        await createUser(user);


        setUser({

            name:"",
            email:"",
            phone:""

        });


        loadUsers();


    };





    const removeUser = async(id)=>{


        await deleteUser(id);


        loadUsers();


    };





    return (

        <div className="card">


            <div className="card-header bg-primary text-white">

                Users

            </div>



            <div className="card-body">


                <input
                    className="form-control mb-2"
                    placeholder="Name"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                />



                <input
                    className="form-control mb-2"
                    placeholder="Email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                />



                <input
                    className="form-control mb-2"
                    placeholder="Phone"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                />



                <button
                    className="btn btn-success mb-3"
                    onClick={saveUser}
                >

                    Add User

                </button>




                <table className="table table-bordered">


                    <thead>

                        <tr>

                            <th>ID</th>

                            <th>Name</th>

                            <th>Email</th>

                            <th>Action</th>

                        </tr>

                    </thead>



                    <tbody>


                    {

                    users.map(
                        item =>

                        <tr key={item.id}>


                            <td>
                                {item.id}
                            </td>


                            <td>
                                {item.name}
                            </td>


                            <td>
                                {item.email}
                            </td>



                            <td>


                                <button

                                className="btn btn-danger btn-sm"

                                onClick={() =>
                                    removeUser(item.id)
                                }

                                >

                                    Delete

                                </button>


                            </td>


                        </tr>

                    )

                    }


                    </tbody>


                </table>


            </div>


        </div>

    );


}


export default Users;