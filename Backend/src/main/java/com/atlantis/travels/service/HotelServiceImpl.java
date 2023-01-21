package com.atlantis.travels.service;

import com.atlantis.travels.model.Hotel;
import com.atlantis.travels.repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HotelServiceImpl implements HotelService {

    @Autowired
    private HotelRepository hotelRepository;

    @Override
    public void saveHotel(Hotel hotel) {
        hotelRepository.save(hotel);
    }
}
