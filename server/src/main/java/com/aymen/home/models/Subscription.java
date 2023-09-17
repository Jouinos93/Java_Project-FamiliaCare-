package com.aymen.home.models;

import java.util.Calendar;
import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name="subscriptions")
public class Subscription {
	
	public enum SubscriptionType {
		FREE,
	    MONTHLY,
	    ANNUAL
	}

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

//    @ManyToOne
//    @JoinColumn(name = "user_id")
//    private User user;

    @Enumerated(EnumType.STRING)
    private SubscriptionType subscriptionType;

    @Temporal(TemporalType.TIMESTAMP)
    private Date startDate;

    @Temporal(TemporalType.TIMESTAMP)
    private Date endDate;

    private double price;

    private String status;

    public Subscription() {}

    public Subscription(SubscriptionType subscriptionType, Date startDate, String status) {
      this.subscriptionType = subscriptionType;
      this.startDate = startDate;
      this.status = status;
      calculateEndDate();
    }
    
    public Subscription(SubscriptionType subscriptionType, Date startDate, double price, String status) {
        this.subscriptionType = subscriptionType;
        this.startDate = startDate;
        this.price = price;
        this.status = status;
        calculateEndDate();
    }


    private void calculateEndDate() {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(startDate);
        
        if (subscriptionType == SubscriptionType.FREE) {
        	calendar.add(Calendar.DAY_OF_MONTH, 7);
        }else if (subscriptionType == SubscriptionType.ANNUAL) {
            calendar.add(Calendar.MONTH, 12);
        } else {
            calendar.add(Calendar.MONTH, 1);
        }
        endDate = (Date) calendar.getTime();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

//    public User getUser() {
//        return user;
//    }
//
//    public void setUser(User user) {
//        this.user = user;
//    }

    public SubscriptionType getSubscriptionType() {
        return subscriptionType;
    }

    public void setSubscriptionType(SubscriptionType subscriptionType) {
        this.subscriptionType = subscriptionType;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

}
