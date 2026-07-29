package com.example.userservice.controller;


import com.example.userservice.entity.User;

import com.example.userservice.service.UserService;


import org.springframework.web.bind.annotation.*;


import java.util.List;



@RestController

@RequestMapping("/api/users")

@CrossOrigin("*")

public class UserController {



    private final UserService service;



    public UserController(
            UserService service
    ){

        this.service = service;

    }






    @GetMapping

    public List<User> getUsers(){


        return service.getUsers();


    }






    @GetMapping("/{id}")

    public User getUser(
            @PathVariable Long id
    ){


        return service.getUser(id);


    }







    @PostMapping

    public User createUser(
            @RequestBody User user
    ){


        return service.createUser(user);


    }







    @PutMapping("/{id}")

    public User updateUser(
            @PathVariable Long id,
            @RequestBody User user
    ){


        return service.updateUser(
                id,
                user
        );


    }






    @DeleteMapping("/{id}")

    public String deleteUser(
            @PathVariable Long id
    ){


        service.deleteUser(id);


        return "User deleted";


    }


}