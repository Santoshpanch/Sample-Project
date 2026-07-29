import React, { useEffect, useState } from "react";


import {

    getProducts,
    createProduct,
    deleteProduct

} from "../services/api";



function Products(){


    const [products,setProducts] =
        useState([]);



    const [product,setProduct] =
        useState({

            name:"",
            price:"",
            quantity:""

        });





    useEffect(()=>{


        loadProducts();


    },[]);






    const loadProducts = async()=>{


        try{


            const response =
                await getProducts();


            setProducts(response.data);


        }

        catch(error){


            console.error(
                "Unable to fetch products",
                error
            );


        }


    };






    const handleChange=(event)=>{


        setProduct({

            ...product,

            [event.target.name]:
                event.target.value

        });


    };







    const saveProduct=async()=>{


        await createProduct(product);


        setProduct({

            name:"",
            price:"",
            quantity:""

        });


        loadProducts();


    };






    const removeProduct=async(id)=>{


        await deleteProduct(id);


        loadProducts();


    };







    return(


        <div className="card">


            <div className="card-header bg-success text-white">

                Products

            </div>



            <div className="card-body">



                <input

                    className="form-control mb-2"

                    placeholder="Product Name"

                    name="name"

                    value={product.name}

                    onChange={handleChange}

                />




                <input

                    className="form-control mb-2"

                    placeholder="Price"

                    name="price"

                    value={product.price}

                    onChange={handleChange}

                />





                <input

                    className="form-control mb-2"

                    placeholder="Quantity"

                    name="quantity"

                    value={product.quantity}

                    onChange={handleChange}

                />





                <button

                    className="btn btn-success mb-3"

                    onClick={saveProduct}

                >

                    Add Product

                </button>





                <table className="table table-bordered">


                    <thead>


                        <tr>

                            <th>ID</th>

                            <th>Name</th>

                            <th>Price</th>

                            <th>Quantity</th>

                            <th>Action</th>

                        </tr>


                    </thead>




                    <tbody>


                    {


                    products.map(

                        item =>


                        <tr key={item.id}>


                            <td>
                                {item.id}
                            </td>


                            <td>
                                {item.name}
                            </td>


                            <td>
                                {item.price}
                            </td>


                            <td>
                                {item.quantity}
                            </td>



                            <td>


                                <button

                                className="btn btn-danger btn-sm"

                                onClick={() =>
                                    removeProduct(item.id)
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



export default Products;