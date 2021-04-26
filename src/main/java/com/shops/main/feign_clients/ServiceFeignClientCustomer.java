package com.shops.main.feign_clients;

import org.springframework.cloud.openfeign.FeignClient;

@FeignClient(name = "customer-service")
public interface ServiceFeignClientCustomer {
}
