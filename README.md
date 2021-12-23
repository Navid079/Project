API Documentation
================
Table of contents:  
[Signup as a seller](#signup-as-a-seller)  
[Login as a seller](#login-as-a-seller)
[Refresh a JWT](#refresh-a-jwt)

# Signup as a seller
## Endpoint: 
`/shop/signup`
## Request body JSON:
```json
{
  "message": "This message will be logged in server's console",
  "data": {
    "username": "thefoobar123",
    "phone": "09123456789",
    "email": "foo@bar.com",
    "password": "FooBarIsAStrongPassword1!",
    "confirm": "FooBarIsAStrongPassword1!",
  }
}
```
### note
1. Phone number must start with 00989, +989, 09, 9, 009809, +9809
2. Phone number must have exactly 9 more digits
3. Passwords must contain as least 1 uppercase, 1 lowercase, 1 digit, and 1 special character, they also must be at least 8 characters long.
4. Email is optional.
4. Validation regular expressions are added below

### Regex
|property|regex|
|:---|:---:|
|phone|`^(?:0\|98\|\+98\|\+980\|0098\|098\|00980)?(9\d{9})$`|
|email|``[a-z0-9!#$%&'*+/=?^_`{\|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{\|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Za-z]{2}\|com\|org\|net\|gov\|mil\|biz\|info\|mobi\|name\|aero\|jobs\|museum)\b``|
|password|``^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/``|
## Responses
### 201 Created
```json
{
  "message": "User created",
  "data": {
    "user": {
      "username": "thefoobar123",
      "email": "foo@bar.com",
      "phone": "09123456789"
    }
  }
}
```
### 409 Conflict
```json
{
  "message": "An error occured",
  "data": {
    "messages": [
      "username already exists"
      "Email already registered",
      "Phone number already registered"
    ],
    "conflicts": [ "username", "email", "phone" ],
    "values": {
      "username": "thefoobar123",
      "email": "foo@bar.com",
      "phone": "09123456789"
    }
  }
}
```
**Note that conflicts may be on email, phone, or both**  
**Every other 4xx status codes in documentation will be written in this way**
### 422 Unprocessable Entity
```json
{
  "message": "An error occured",
  "data": {
    "messages": [
      "Data is not correct",
      "Data is not correct",
      "Data is not correct",
      "Data is not correct",
    ],
    "conflicts": ["username", "phone", "password", "confirm"],
    "values": {
      
    }
  }
}
```
**Notice that no value is sent to the endpoint**
### 422 Unprocessable Entity
```json
{
  "message": "An error occured",
  "data": {
    "messages": [
      "Not a phone number",
      "Not an email address",
      "Password is weak",
      "Passwords don't match"
    ],
    "conflicts": [
      "phone",
      "email",
      "password",
      "confirm"
    ],
    "values": {
      "phone": "01234567890",
      "email": "foo@bar.baz",
      "password": "aweakpasswordwithnouppercase",
      "confirm": "AWEAKPASSWORDWITHNOLOWERCASE"
    }
  }
}
```

# Login as a seller
## Endpoint:
`/shop/login`
## Request body JSON
```json
{
  "message": "This message will be logged in server's console",
  "data": {
    "user": "thefoobar123",
    "userType": "username",
    "password": "FooBarIsAStrongPassword1!",
  }
}
OR
{
  "message": "This message will be logged in server's console",
  "data": {
    "user": "09123456789",
    "userType": "phone",
    "password": "FooBarIsAStrongPassword1!",
  }
}
OR
{
  "message": "This message will be logged in server's console",
  "data": {
    "user": "foo@bar.com",
    "userType": "email",
    "password": "FooBarIsAStrongPassword1!",
  }
}
```
### note
1. You can use email or phone number to login

## Responses
### 200 OK
```json
{
  "message": "Logged in successfully",
  "data": {
    "user": {
      "username": "thefoobar123",
      "email": "foo@bar.com",
      "phone": "09123456789",
    }
  }
}
```
### 401 Unauthorized
```json
{
  "message": "An error occured",
  "data": {
    "messages": ["Wrong password"],
    "conflicts": ["password"],
    "values": {
      "password": "ThisIsNotThePassword(0)"
    }
  }
}
```
### 404 Not Found
```json
{
  "message": "An error occured",
  "data": {
    "messages": ["User not found"],
    "conflicts": ["user"],
    "values": {
      "user": "+989110002233"
    }
  }
}
```
### 422 Unprocessable Entity
```json
{
  "message": "An error occured",
  "data": {
    "messages": [
      "Data is not correct",
      "Data is not correct",
      "Data is not correct",
    ],
    "conflicts": ["user", "password", "userType"],
    "values": { }
  }
}
```
### 422 Unprocessable Entity
```json
{
  "message": "An error occured",
  "data": {
    "messages": [
      "Not a username type",
      "Not a phone number",
      "Not an email address"
    ],
    "conflicts": [
      "userType",
      "phone",
      "email"
    ],
    "values": {
      "userType": "emoile",
      "phone": "01234567890",
      "email": "foo@bar.baz",
    }
  }
}
```
# Refresh JWT
## Endpoint:
`/shop/refresh`
## Request body JSON
```json
{
  "message": "This message will be logged in server's console",
  "data": {
    "devId": "12345abcde",
    "token": "uf39ufn9uewmcien...",
    "refresh": "9ur3nv9un39f3..."
  }
}
```
## Resposes
### 200 OK
```json
{
  "message": "Token Refreshed",
  "data": {
    "user": {
      "username": "thefoobar123",
      "email": "foo@bar.com",
      "phone": "09123456789",
    },
    "token": "827fd82nf2ud2...",
    "refresh": "9ur3nv9un39f3...",
  },
}
```
### 422 Unprocessable Entity
```json
{
  "message": "An Error Occured",
  "data": {
    "messages": [
      "Data is not correct",
      "Data is not correct",
      "Data is not correct"
    ],
    "conflicts": [
      "devId",
      "token",
      "refresh"
    ],
    "values": {
      
    }
  },
}
```
### 425 Too Early
```json
{
  "message": "An Error Occured",
  "data": {
    "messages": [
      "Token is not Expired Yet",
    ],
    "conflicts": [
      "token"
    ],
    "values": {
      "token": "ermf34f9..."
    }
  },
}
```
### 401 Unauthorized
```json
{
  "message": "An Error Occured",
  "data": {
    "messages": [
      "Invalid Refresh Token",
    ],
    "conflicts": [
      "refresh"
    ],
    "values": {
      "token": "y38nrv8nsdfsd..."
    }
  },
}
```