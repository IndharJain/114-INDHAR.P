package com.marticus.em.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.marticus.em.entity.EmployeeEntity;
import com.marticus.em.repo.EmployeeRepo;
import com.marticus.em.service.EmployeeService;

@Controller
@RequestMapping("/emp")
public class EmployeeController {

	@Autowired
	EmployeeService employeeService;

	@GetMapping("/")
	public String getEmployeeList(Model model) {
		List<EmployeeEntity> employees = employeeService.getAllEmployeeList();
		model.addAttribute("empList", employees);

		return "emplist";
	}

	@GetMapping("/add")
	public String addEmployee() {

		return "addEmployee";
	}
	@GetMapping("/update/{id}")
	public String updateScreen(@PathVariable int id, Model model) {
		EmployeeEntity emp = employeeService.findEmployeesById(id);
		model.addAttribute("id", emp.getId());
		model.addAttribute("name", emp.getEmpName());
		model.addAttribute("age", emp.getAge());
		model.addAttribute("salary", emp.getSalary());
		model.addAttribute("department", emp.getDepartment());
		model.addAttribute("aadhar", emp.getAadharNumber());

		return "update";
	}
	@GetMapping("/delete/{id}")
	public String delete(@PathVariable int id) {
		employeeService.deleteEmp(id);
		return "redirect:/emp/";

	}

	@GetMapping("/search")
	public String search(EmployeeEntity employeeEntity) {
		return "search";

	}

	@PostMapping("/add")
	public String saveEmpInDb(EmployeeEntity employeeEntity) {
		employeeService.saveEmpInDB(employeeEntity);

		return "redirect:/emp/";
	}

	

	@PostMapping("/update")
	public String update(EmployeeEntity employeeEntity) {
		employeeService.update(employeeEntity);
		return "redirect:/emp/";
	}

	

	@PostMapping("/search")
	public String searchResults(String search, Model model) {
		List<EmployeeEntity> empList = employeeService.search(search);
		model.addAttribute("empList", empList);
		return "searchresult";
	}

}
