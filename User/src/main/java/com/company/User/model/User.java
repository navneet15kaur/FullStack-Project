package com.company.User.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Users")
public class User {
    @Column(name="name")
    private String name;

    @Id
    @Column(name="email")
    private String email;
    @Column(name = "password")
    private String password;

    @Column(name = "birthdaydate")
    private String birthdaydate;

    @Column(name = "phonenumber")
    private Integer phonenumber;

    @Column(name = "gender")
    private String gender;

    public User(){}

    public User(String name,String email,String password,String birthdaydate,String gender){
        this.name=name;
        this.email=email;
        this.password=password;
        this.birthdaydate=birthdaydate;
        this.gender=gender;

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getBirthdayDate() {
        return birthdaydate;
    }

    public void setBirthdayDate(String birthdaydate) {this.birthdaydate = birthdaydate;}

    public Integer getPhoneNumber() {
        return phonenumber;
    }

    public void setPhoneNumber(Integer phonenumber) {this.phonenumber = phonenumber;}

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }
}
