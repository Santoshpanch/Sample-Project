import React from "react";

import Navbar from "./components/Navbar";
import Users from "./components/Users";
import Products from "./components/Products";


function App() {


    return (

        <div>

            <Navbar />


            <div className="container mt-4">


                <h2 className="text-center mb-4">
                    Microservices CRUD Application
                </h2>


                <div className="row">


                    <div className="col-md-6">

                        <Users />

                    </div>



                    <div className="col-md-6">

                        <Products />

                    </div>


                </div>


            </div>


        </div>

    );

}


export default App;