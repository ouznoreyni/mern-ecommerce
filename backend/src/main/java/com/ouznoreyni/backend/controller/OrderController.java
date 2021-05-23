package com.ouznoreyni.backend.controller;

import com.ouznoreyni.backend.model.Order;
import com.ouznoreyni.backend.service.OrderService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController()
@RequestMapping("/api")
@AllArgsConstructor
public class OrderController {

    OrderService orderService;

    @GetMapping("orders")
    public ResponseEntity<?> findAll(@RequestParam(defaultValue = "0") int page,
                                     @RequestParam(defaultValue = "3") int size){
        try {
            List<Order> order;
            Pageable pageable = PageRequest.of(page, size);
            Page<Order> orderPage = orderService.getAll(pageable);
            Map<String, Object> response = new HashMap<>();
            order=orderPage.getContent();
            System.out.println(orderPage.getContent());
            response.put("order", order );
            response.put("currentPage", orderPage.getNumber());
            response.put("totalItems", orderPage.getTotalElements());
            response.put("totalPages", orderPage.getTotalPages());
            System.out.println(order);
            return  new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "internal error happen", e);
        }
    }
}
