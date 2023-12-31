package com.a604.cake4u.creamtaste.entity;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@Getter
@Setter
@Builder
public class CreamTaste {

    //@NoArgsConstructor 사용X
    public CreamTaste() {
    }
    @SequenceGenerator(
            name="CREAM_TASTE_SEQ_GEN",
            sequenceName = "CREAM_TASTE_SEQ",
            initialValue = 100,
            allocationSize = 1
    )

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "CREAM_TASTE_SEQ_GEN")
    private Long id;

//    @OneToOne
//    @JoinColumn(name = "seller_id", referencedColumnName = "id", nullable = false)
//    private Seller seller;
    private Long sellerId;


    @Builder.Default
    @ColumnDefault("0")
//    @Enumerated(EnumType.STRING)
    private boolean creamCheese = false;

    @Builder.Default
    @ColumnDefault("0")
//    @Enumerated(EnumType.STRING)
    private boolean whippingCream = false;

    @Builder.Default
    @ColumnDefault("0")
//    @Enumerated(EnumType.STRING)
    private boolean chocolateCream = false;

    @Builder.Default
    @ColumnDefault("0")
//    @Enumerated(EnumType.STRING)
    private boolean oreoCream = false;

    @Builder.Default
    @ColumnDefault("0")
//    @Enumerated(EnumType.STRING)
    private boolean matchaCream = false;

    @Builder.Default
    @ColumnDefault("0")
//    @Enumerated(EnumType.STRING)
    private boolean blackSesameCream = false;

    @Builder.Default
    @ColumnDefault("0")
//    @Enumerated(EnumType.STRING)
    private boolean sweetPotatoCream = false;

    @Builder.Default
    @ColumnDefault("0")
//    @Enumerated(EnumType.STRING)
    private boolean earlGrayCream = false;

    @Builder.Default
    @ColumnDefault("0")
//    @Enumerated(EnumType.STRING)
    private boolean strawberryCream = false;
}
