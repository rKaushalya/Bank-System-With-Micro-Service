package lk.ijse.tranferMoney;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class TransferMoneyApplication {

    public static void main(String[] args) {
        SpringApplication.run(TransferMoneyApplication.class, args);
    }

}
