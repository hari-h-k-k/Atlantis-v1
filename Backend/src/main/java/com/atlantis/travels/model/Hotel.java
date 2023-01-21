package com.atlantis.travels.model;

import org.springframework.stereotype.Component;

import javax.annotation.processing.Generated;
import javax.persistence.*;
import java.util.List;

@Entity
public class Hotel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private double costPerHead;

//    private List<Place> listOfPlaces;

    public Hotel() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getCostPerHead() {
        return costPerHead;
    }

    public void setCostPerHead(double costPerHead) {
        this.costPerHead = costPerHead;
    }

//    public List<Place> getListOfPlaces() {
//        return listOfPlaces;
//    }
//
//    public void setListOfPlaces(List<Place> listOfPlaces) {
//        this.listOfPlaces = listOfPlaces;
//    }
}
