package com.a604.cake4u.wishlist.repository;

import com.a604.cake4u.buyer.entity.Buyer;
import com.a604.cake4u.portfolio.entity.Portfolio;
import com.a604.cake4u.wishlist.entity.Wishlist;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WishListRepository extends JpaRepository<Wishlist, Long> {

    Wishlist findByBuyerAndPortfolio(Buyer buyer, Portfolio portfolio);

    @Query(value = "select w.portfolio.id from Wishlist w where w.buyer = :buyer")
    List<Long> findAllByBuyer(Buyer buyer);

    @Query(value = "SELECT COUNT(*) FROM WISHLIST WHERE PORTFOLIO_ID = :portfolio", nativeQuery = true)
    int getWishPortfolioCnt(Portfolio portfolio);

    @Query(value = "SELECT ntb.PORTFOLIO_ID FROM(" +
            "SELECT PORTFOLIO_ID, COUNT(PORTFOLIO_ID) as cnt " +
            "FROM WISHLIST " +
            "GROUP BY PORTFOLIO_ID " +
            "ORDER BY cnt DESC " +
            "LIMIT 5" +
            ") ntb", nativeQuery = true)
    List<Long> findAllTop5();

    @Query(value = "select w.portfolio from Wishlist w where w.buyer = :buyer order by w.id desc")
    Page<Portfolio> findWishlistByBuyer(Pageable pageable, Buyer buyer);

    boolean existsWishlistByBuyerAndPortfolio(Buyer buyer, Portfolio portfolio);
}
