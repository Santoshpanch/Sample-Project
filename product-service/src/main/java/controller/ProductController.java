package com.example.productservice.controller;


import com.example.productservice.entity.Product;

import com.example.productservice.service.ProductService;


import org.springframework.web.bind.annotation.*;


import java.util.List;



@RestController

@RequestMapping("/api/products")

@CrossOrigin("*")

public class ProductController {



    private final ProductService service;



    public ProductController(
            ProductService service
    ){

        this.service = service;

    }






    @GetMapping

    public List<Product> getProducts(){


        return service.getProducts();


    }








    @GetMapping("/{id}")

    public Product getProduct(

            @PathVariable Long id

    ){


        return service.getProduct(id);


    }








    @PostMapping

    public Product createProduct(

            @RequestBody Product product

    ){


        return service.createProduct(product);


    }








    @PutMapping("/{id}")

    public Product updateProduct(

            @PathVariable Long id,

            @RequestBody Product product

    ){


        return service.updateProduct(
                id,
                product
        );


    }








    @DeleteMapping("/{id}")

    public String deleteProduct(

            @PathVariable Long id

    ){


        service.deleteProduct(id);


        return "Product deleted";


    }


}