package com.example.userservice.service;


import com.example.userservice.entity.User;

import com.example.userservice.repository.UserRepository;


import org.springframework.stereotype.Service;


import java.util.List;



@Service

public class UserService {



    private final UserRepository repository;



    public UserService(UserRepository repository){

        this.repository = repository;

    }





    public List<User> getUsers(){


        return repository.findAll();


    }





    public User getUser(Long id){


        return repository.findById(id)
                .orElseThrow(
                    () -> new RuntimeException(
                            "User not found"
                    )
                );


    }






    public User createUser(User user){


        return repository.save(user);


    }







    public User updateUser(
            Long id,
            User user
    ){


        User existing =
                getUser(id);



        existing.setName(
                user.getName()
        );


        existing.setEmail(
                user.getEmail()
        );


        existing.setPhone(
                user.getPhone()
        );



        return repository.save(existing);


    }






    public void deleteUser(Long id){


        repository.deleteById(id);


    }


}