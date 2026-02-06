# CRM Backend API Documentation

## Authentication
POST /api/auth/register  
POST /api/auth/login  

## Customers
GET /api/customers  
POST /api/customers  

## Cases
POST /api/cases  
PATCH /api/cases/:id  

## Authorization
All protected routes require JWT token in headers:
Authorization: <token>
