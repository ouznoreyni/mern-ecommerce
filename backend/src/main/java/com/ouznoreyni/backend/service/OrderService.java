package com.ouznoreyni.backend.service;

import com.ouznoreyni.backend.model.Order;
import com.ouznoreyni.backend.repository.OrderRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    OrderRepository orderRepository;

    public Page<Order> getAll(Pageable pageable){
        return orderRepository.findAll(pageable);
    }
}
