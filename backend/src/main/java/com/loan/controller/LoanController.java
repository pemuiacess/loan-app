package com.loan.controller;

import com.loan.dto.LoanDTO;
import com.loan.service.LoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class LoanController {


    @Autowired
    private LoanService loanService;

    @RequestMapping(path="/byId",method = RequestMethod.GET)
    public ResponseEntity<List<LoanDTO>> findByLoanId(@RequestParam("loanid") String loanId){

        List<LoanDTO> byLoanId = loanService.findByLoanId(loanId);

        if(byLoanId==null||byLoanId.isEmpty())
            return new ResponseEntity<>(byLoanId, HttpStatus.NO_CONTENT);

        return new ResponseEntity<>(byLoanId, HttpStatus.OK);

    }


    @GetMapping
    public ResponseEntity<List<LoanDTO>> findAll(){

        List<LoanDTO> byLoanId = loanService.findAllLoanId();

        if(byLoanId==null||byLoanId.isEmpty())
            return new ResponseEntity<>(byLoanId, HttpStatus.NO_CONTENT);

        System.out.println(byLoanId);

        return new ResponseEntity<>(byLoanId, HttpStatus.OK);

    }


    @PostMapping
    public ResponseEntity<String> createLoanId(@RequestParam("loanid") String loanId){

        loanService.createLoanId(loanId);
        return new ResponseEntity<>("created successfully", HttpStatus.CREATED);
    }

    @DeleteMapping
    public ResponseEntity<String> deleteLoanId(@RequestParam("loanid") String loanId){

            loanService.deleteLoanId(loanId);
        return new ResponseEntity<>(loanId+ " deleted successfully", HttpStatus.OK);
    }

    @GetMapping("/validate/byId")
    public ResponseEntity<String> validateLoanId(@RequestParam("loanid") String loanId){

        boolean isValid=loanService.validateLoanId(loanId);

        if(isValid)
            return new ResponseEntity<>(loanId+ " is valid",HttpStatus.OK);

        return new ResponseEntity<>(loanId+ " is invalid",HttpStatus.NOT_FOUND);

    }

}
