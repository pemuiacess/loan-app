package com.loan.dto;

//import lombok.AllArgsConstructor;
//import lombok.Builder;
//import lombok.Data;
//import lombok.NoArgsConstructor;

//@Data
//@Builder
//@NoArgsConstructor
//@AllArgsConstructor
public class LoanDTO {

    private String creance;
    private String dateMaj;

    public String getCreance() {
        return creance;
    }

    public void setCreance(String creance) {
        this.creance = creance;
    }

    public String getDateMaj() {
        return dateMaj;
    }

    public void setDateMaj(String dateMaj) {
        this.dateMaj = dateMaj;
    }
}
