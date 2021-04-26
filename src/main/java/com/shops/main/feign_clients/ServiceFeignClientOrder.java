package com.shops.main.feign_clients;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(name = "orders-service")
public interface ServiceFeignClientOrder {

    @RequestMapping("api/orders/")
    ResponseEntity<Object> saveOrder (@RequestBody @Validated Object orders);

    @RequestMapping("api/orders/all")
    ResponseEntity<List<Object>> getAllOrders ();
}
