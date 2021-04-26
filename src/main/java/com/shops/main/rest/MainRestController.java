package com.shops.main.rest;

import com.shops.main.feign_clients.ServiceFeignClientOrder;
import com.shops.main.feign_clients.ServiceFeignClientSupplier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MainRestController {

    @Autowired
    ServiceFeignClientSupplier serviceFeignClientSupplier;
    @Autowired
    ServiceFeignClientOrder serviceFeignClientOrder;

    @CrossOrigin
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    @RequestMapping("api/suppliers/")
    public ResponseEntity<List<Object>> findAllSuppliers(){
        return serviceFeignClientSupplier.findAllSuppliers();
    }

    @CrossOrigin
    @RequestMapping("api/suppliers/name/")
    @GetMapping(params = "name", produces = MediaType.APPLICATION_JSON_VALUE)
    Long findSupplierByName(@RequestParam("name") String supplierName){
        return serviceFeignClientSupplier.findSupplierByName(supplierName);
    }

    @CrossOrigin
    @RequestMapping("api/products/")
    @GetMapping(params = "name", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<List<Object>> getProductsBySuppliers(@RequestParam("name") String supplierName){
        return serviceFeignClientSupplier.getProductsBySuppliers(supplierName);
    }

    @CrossOrigin
    @RequestMapping("api/products/name/")
    @GetMapping(params = "name", produces = MediaType.APPLICATION_JSON_VALUE)
    Long findProductByName(@RequestParam("name") String productName){
        return serviceFeignClientSupplier.findProductByName(productName);
    }

    @CrossOrigin
    @RequestMapping("api/orders/")
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<Object> saveOrder (@RequestBody @Validated Object orders){
        return serviceFeignClientOrder.saveOrder(orders);
    }

    @CrossOrigin
    @RequestMapping("api/orders/all")
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<List<Object>> getAllOrders (){
        return serviceFeignClientOrder.getAllOrders();
    }
}
