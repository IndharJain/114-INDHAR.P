package com.marticus.atm;

public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Welcome To The Automated teller machine");
        System.out.println("Please Insert The Card");
        System.out.println("Enter The Details");
        Banking b = new Banking();
        b.initiate();
    }
}
