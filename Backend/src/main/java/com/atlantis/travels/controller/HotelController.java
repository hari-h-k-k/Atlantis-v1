package com.atlantis.travels.controller;

import com.atlantis.travels.model.Hotel;
import com.atlantis.travels.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hotel")
public class HotelController {

    @Autowired
    private HotelService hotelService;

    @PostMapping("/add")
    public String addHotel(@RequestBody Hotel hotel) {
        hotelService.saveHotel(hotel);
        System.out.println("Hotel added");

        return "Hotel added";
    }
}
