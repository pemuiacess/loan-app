package com.loan.service;

import com.loan.dto.LoanDTO;
import com.loan.entity.LoanEntity;
import com.loan.repository.LoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class LoanService {

    @Autowired
    private LoanRepository loanRepository;

    public List<LoanDTO> findByLoanId(String loanId) {

        List<LoanEntity> byLoanId = loanRepository.findByCreance(loanId);

        List<LoanDTO> loanDTOList = convertEntityToDTO(byLoanId);

        return loanDTOList;

    }

    private List<LoanDTO> convertEntityToDTO(List<LoanEntity> byLoanId) {
        List<LoanDTO> loanDTOList = byLoanId.stream().map(le ->
                        {
                          LoanDTO dto=new LoanDTO();
                          dto.setCreance(le.getCreance());
                          String datestr=(new SimpleDateFormat("dd/MM/yyyy")).format(le.getDateMaj());
                          dto.setDateMaj(datestr);
                          return dto;
                        }
                        //LoanDTO.builder().creance(le.getCreance()).dateMaj(le.getDateMaj().toString()).build()

                )
                .collect(Collectors.toList());
        return loanDTOList;
    }

    public void createLoanId(String loanId) {

        LoanEntity loanEntity=new LoanEntity();
        loanEntity.setCreance(loanId);
        loanEntity.setDateMaj(new Date());
                //LoanEntity.builder().creance(loanId).dateMaj(new Date()).build();
        loanRepository.save(loanEntity);
    }


    public void deleteLoanId(String loanId) {

        loanRepository.deleteById(loanId);
    }


    public List<LoanDTO> findAllLoanId() {
        List<LoanEntity> findAllLoanIds = loanRepository.findAll();
        List<LoanDTO> loanDTOList = convertEntityToDTO(findAllLoanIds);

        return loanDTOList;
    }
}
