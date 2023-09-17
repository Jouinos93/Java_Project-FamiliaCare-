//package com.aymen.home.config;
//
//import java.util.Date;
//import java.util.HashMap;
//import java.util.Map;
//import java.util.function.Function;
//
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.stereotype.Component;
//
//import io.jsonwebtoken.Claims;
//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.SignatureAlgorithm;
//
//@Component
//public class JwtUtil {
//
//    @Value("${jwt.secret-key}")
//    private String secretKey;
//
//    @Value("${jwt.token-expiration}")
//    private long tokenExpiration;
//
//    // Generate a token for a user
//    public String generateToken(String firstName, String lastName) {
//        Map<String, Object> claims = new HashMap<>();
//        claims.put("sub", firstName +" "+ lastName);
//        return createToken(claims, firstName +" "+ lastName);
//    }
//
//    // Create a token based on claims and subject
//    private String createToken(Map<String, Object> claims, String subject) {
//        Date now = new Date();
//        Date expirationDate = new Date(now.getTime() + tokenExpiration);
//
//        return Jwts.builder()
//                .setClaims(claims)
//                .setSubject(subject)
//                .setIssuedAt(now)
//                .setExpiration(expirationDate)
//                .signWith(SignatureAlgorithm.HS256, secretKey)
//                .compact();
//    }
//
//    // Extract user ID from token
//    public String extractUserId(String token) {
//        return extractClaim(token, Claims::getSubject);
//    }
//
//    // Extract claims from token
//    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
//        final Claims claims = extractAllClaims(token);
//        return claimsResolver.apply(claims);
//    }
//
//    // Extract all claims from token
//    private Claims extractAllClaims(String token) {
//        return Jwts.parser()
//                .setSigningKey(secretKey)
//                .parseClaimsJws(token)
//                .getBody();
//    }
//
//    // Validate if a token is expired
//    public boolean isTokenExpired(String token) {
//        final Date expiration = extractExpiration(token);
//        return expiration.before(new Date());
//    }
//
//    // Extract the token expiration date from the token
//    private Date extractExpiration(String token) {
//        return extractClaim(token, Claims::getExpiration);
//    }
//
//    // Validate a token for a user
//    public boolean validateToken(String token, UserDetails userDetails) {
//        final String userId = extractUserId(token);
//        return (userId.equals(userDetails.getUsername()) && !isTokenExpired(token));
//    }
//}
