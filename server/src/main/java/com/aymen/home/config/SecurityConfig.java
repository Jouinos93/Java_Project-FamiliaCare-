//package com.aymen.home.config;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.web.servlet.handler.HandlerMappingIntrospector;
//
//@EnableWebSecurity
//@Configuration
//public class SecurityConfig {
//
//	
//	@Autowired
//	private HandlerMappingIntrospector introspector;
//	
//	private UserDetailsService userDetailsService;
//
//	@Bean
//	public BCryptPasswordEncoder bCryptPasswordEncoder() {
//		return new BCryptPasswordEncoder();
//	}
//	
////	@Bean
////	protected SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
////		http
////			.authorizeHttpRequests((authorize)->
////				authorize
////					.requestMatchers(
////							new MvcRequestMatcher(introspector, "/css/**"),
////							new MvcRequestMatcher(introspector,"/js/**"),
////							new MvcRequestMatcher(introspector,"/login"),
////							new MvcRequestMatcher(introspector,"/register")
////							).permitAll()
////					.requestMatchers(
////							new MvcRequestMatcher(introspector,"/admin/**")
////							).hasAnyRole("ADMIN", "SUPER_ADMIN")
////					.requestMatchers(
////							new MvcRequestMatcher(introspector,"/"),
////							new MvcRequestMatcher(introspector,"/home")
////							).authenticated().anyRequest().permitAll()
////			)
////			.formLogin(formLogin-> formLogin
////					.usernameParameter("username")
////					.passwordParameter("password")
////					.loginPage("/login")
////					.defaultSuccessUrl("/home")
////					.permitAll()
////			)
////			.logout(logout-> logout
////					.permitAll());
////		return http.build();
////	}	
////		
////	
////	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
////		auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder());
////	}
//	
//    @Bean
//    public SecurityFilterChain defaultSecurityFilterChain(HttpSecurity http) throws Exception {
//    	http.csrf().disable();
//    	http
//            .authorizeRequests(authorize -> authorize
//                .anyRequest().permitAll()
//            )
//            .formLogin(formLogin -> formLogin
//                .usernameParameter("username")
//                .passwordParameter("password")
//                .loginPage("/login")
//                .defaultSuccessUrl("/home")
//                .permitAll()
//            )
//            .logout(logout -> logout
//                .permitAll()
//            );
//        return http.build();
//    }
//	
//}
//
