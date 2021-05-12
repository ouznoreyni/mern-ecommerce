package com.ouznoreyni.backend.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "shippingAddress")
public class ShippingAddress {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long shippingAddress_id;

    private String country;

    private String city;

    private String address;

    @OneToOne(fetch = FetchType.LAZY,
            cascade =  CascadeType.ALL,
            mappedBy = "shippingAddress")
    private Order order;
}
