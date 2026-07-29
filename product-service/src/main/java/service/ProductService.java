package com.example.productservice.service;


import com.example.productservice.entity.Product;

import com.example.productservice.repository.ProductRepository;


import org.springframework.stereotype.Service;


import java.util.List;



@Service

public class ProductService {



    private final ProductRepository repository;



    public ProductService(
            ProductRepository repository
    ){

        this.repository = repository;

    }






    public List<Product> getProducts(){


        return repository.findAll();


    }







    public Product getProduct(Long id){


        return repository.findById(id)

                .orElseThrow(

                    () -> new RuntimeException(
                            "Product not found"
                    )

                );


    }








    public Product createProduct(
            Product product
    ){


        return repository.save(product);


    }








    public Product updateProduct(

            Long id,

            Product product

    ){


        Product existing =
                getProduct(id);



        existing.setName(
                product.getName()
        );


        existing.setPrice(
                product.getPrice()
        );


        existing.setQuantity(
                product.getQuantity()
        );



        return repository.save(existing);


    }








    public void deleteProduct(Long id){


        repository.deleteById(id);


    }


}