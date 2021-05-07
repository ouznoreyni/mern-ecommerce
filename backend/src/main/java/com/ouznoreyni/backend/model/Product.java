package com.ouznoreyni.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.time.LocalDateTime;

@Entity(name = "products")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column()
    @NotBlank(message = "name is required")
    private String name;

    @Column()
    @NotBlank(message = "description is required")
    private String description;

    @Column()
    @Min(value = 0)
    private int price;

    @Column()
    @Min(value = 0)
    private int countInStock;

    @ManyToOne( fetch = FetchType.LAZY)
    @JoinColumn(name="category_id", nullable=false)
    @JsonBackReference
    private Category category;

    @Column()
    @CreationTimestamp
    private LocalDateTime createdAt;

    @Column()
    @UpdateTimestamp
    private LocalDateTime updatedAt;

    @Column(columnDefinition = "BLOB")
    @Lob
    private byte[] image;


}
