package com.gm.wj.config;

import org.springframework.boot.SpringBootConfiguration;
import org.springframework.web.servlet.config.annotation.*;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * @author Evan
 * @date 2019/4
 */
@SpringBootConfiguration
public class MyWebConfigurer implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        //所有请求都允许跨域，使用这种配置方法就不能在 interceptor 中再配置 header 了
        registry.addMapping("/**")
                .allowCredentials(true)
                //跨域访问，允许所有
                .allowedOrigins("*")
                .allowedMethods("POST", "GET", "PUT", "OPTIONS", "DELETE")
                .allowedHeaders("*")
                .maxAge(3600);
    }

//    @Override
//    public void doFilter(ServletRequest req, ServletResponse res,
//                         FilterChain chain) throws IOException, ServletException {
//        HttpServletResponse response = (HttpServletResponse) res;
//        response.setHeader("Access-Control-Allow-Origin", "*");  //允许所有来源访问
//        response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");  //允许访问的方式
//        response.setHeader("Access-Control-Max-Age", "3600"); // 超时时长
//        response.setHeader("Access-Control-Allow-Headers", "x-requested-with"); // 自定义的头信息
//        chain.doFilter(req, res);
//
//    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/api/file/**").addResourceLocations("file:" + "d:/workspace/img/");
    }

}
