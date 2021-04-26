package com.shops.main.feign_clients;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@FeignClient(name = "suppliers-service")
public interface ServiceFeignClientSupplier {

    @RequestMapping("api/suppliers/name/")
    Long findSupplierByName(@RequestParam("name") String supplierName);

    @RequestMapping("api/suppliers/")
    ResponseEntity<List<Object>> findAllSuppliers();

    @RequestMapping("api/products/")
    ResponseEntity<List<Object>> getProductsBySuppliers(@RequestParam("name") String supplierName);

    @RequestMapping("api/products/name/")
    Long findProductByName(@RequestParam("name") String productName);
}
