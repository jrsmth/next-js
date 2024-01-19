# Authentication

<br>

## Overview
* Authentication vs Authorisation:
  * Authentication: A process to establish WHO a particular user is
  * Authorisation: A process to establish WHAT a(n already-authenticated) user is able to do
* There are two main ways of handling Authentication:
  * Server-Side Sessions:
    * The server gives the client (browser) a unique identifier and this is sent along with each request
    * Here, the server does know about the client and individual sessions
  * Authentication Tokens:
    * A signed token is created on the sever and sent to the client and this is sent along with each request
    * Here, the server does not store the token and so is unaware of the client and individual sessions
      * However, the server is able to determine whether it did create signature of the token
* Note: Single Page Apps (SPAs) work with auth tokens, rather than sessions
  * Pages are server directly and populated with logic without hitting the server
  * Plus backend APIs are stateless and don't concern themselves with the client 

<br>

## JSON Web Tokens (JWTs)
* Comprised of:
  * Issuer Data
  * Custom / User Data
  * Secret Signing Key
* Note: JWTs are not encrypted, rather they are Base64 encoded and are signed using a confidential secret
