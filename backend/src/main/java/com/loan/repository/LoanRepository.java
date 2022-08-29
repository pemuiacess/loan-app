package com.loan.repository;

import com.loan.entity.LoanEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LoanRepository extends JpaRepository<LoanEntity,String> {


    List<LoanEntity> findByCreance(String creance);

}
