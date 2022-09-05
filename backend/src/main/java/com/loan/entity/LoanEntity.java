package com.loan.entity;

//import lombok.AllArgsConstructor;
//import lombok.Builder;
//import lombok.Data;
//import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Table(name="CLCM_EXCLURE_LOAN")
@Entity(name = "loanEntity")
//@Data
//@Builder
//@AllArgsConstructor
//@NoArgsConstructor
public class LoanEntity {

    @Id
    @Column(name="creance")
    private String creance;

    @Column(name="date_maj")
    private Date dateMaj;

    public String getCreance() {
        return creance;
    }

    public void setCreance(String creance) {
        this.creance = creance;
    }

    public Date getDateMaj() {
        return dateMaj;
    }

    public void setDateMaj(Date dateMaj) {
        this.dateMaj = dateMaj;
    }
}
