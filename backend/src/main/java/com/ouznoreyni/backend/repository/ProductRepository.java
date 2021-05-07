package com.ouznoreyni.backend.repository;

import com.ouznoreyni.backend.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    Page<Product> findAll(Pageable pageable);
    List<Product> findAllByName(String name);
    List<Product> findAllByPrice(int price);
    //@Modifying
    //@Query("update products p set p .name = ?1, p.description = ?2, p.countInStock=?3, p.price=?4 where p.id = ?5")
    //void updateProduct(Product product, Long id);

}
