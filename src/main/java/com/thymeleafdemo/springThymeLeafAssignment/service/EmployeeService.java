package com.thymeleafdemo.springThymeLeafAssignment.service;

import com.thymeleafdemo.springThymeLeafAssignment.model.Employee;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class EmployeeService {

    public List<Employee> getEmployeeList() {

        return Arrays.asList(

                new Employee("Mary", "mary@gmail.com", 22, true),
                new Employee("Susan", "susan@gmail.com", 21, false),
                new Employee("Gabby", "gabbysnow@gmail.com", 24, true),
                new Employee("Jon", "jon@gmail.com", 23, false));
    }

    public Employee getEmployee() {
        return new Employee("Sukirti", "Kaushik@gmail.com", 22, true);
    }
}
