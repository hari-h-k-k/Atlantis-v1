package com.atlantis.travels.service;

import com.atlantis.travels.model.Hotel;

import java.util.List;
import java.util.Optional;


public interface HotelService {

    void saveHotel(Hotel hotel);

    List<Hotel> getAllHotels();

    Hotel getHotelById(Long id);
}
