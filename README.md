API Documentation
================
Table of contents:  
[Signup as a seller](#signup-as-a-seller)

# Signup as a seller
## Endpoint: 
`/shop/signup`
## Request body JSON:
```json
{
  "message": "This message will be logged in server's console",
  "data": {
    "name": {
      "first": "foo",
      "last": "bar"
    },
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
      "name": {
        "first": "foo",
        "last": "bar"
      },
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
      "Email already registered",
      "Phone number already registered"
    ],
    "conflicts": [ "email", "phone" ],
    "values": {
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
    "conflicts": ["name", "phone", "password", "confirm"],
    "values": {
      "name": {
        "first": 21
      },
    }
  }
}
```
**Notice that** `name` **object is malformed and other properties are missing.**
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
