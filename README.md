
# RNUserBridgeApp

A React Native application built to demonstrate **native iOS API integration using Swift** and communication with React Native through a Native Bridge.


## 📌 About the App
I built this app to show how a **React Native application can communicate with native iOS code written in Swift.**

The app follows a simple and clear flow:

- Display a list of users

- Allow searching and filtering

- Open a detailed view for a selected user

All API calls are handled **natively in Swift**, and the data is passed to React Native using a **Native Module bridge.**

There are **no direct API calls from JavaScript.**

### 🧭 App Screens Overview

The app contains two main screens:

- Dashboard Screen

- User Details Screen

### 📸 Screenshots
_(iOS Simulator)_




| Dashboard    | Search | Filter | User Details |
| -------- | ------- | -------- | ------- |
| ![image](files/Users/jzhang/Desktop/Isolated.png)  | ![image](files/Users/jzhang/Desktop/Isolated.png)    | ![image](files/Users/jzhang/Desktop/Isolated.png)  | ![image](files/Users/jzhang/Desktop/Isolated.png)   |

### 🏠 Dashboard Screen

The Dashboard is the main screen of the app.

#### What the Dashboard does

- Fetches a list of users from the **Swift Native Module**

- Displays users in a scrollable list

- Supports pagination, search, filters, and pull to refresh

### User List

Each user card shows:

- Profile image

- Full name

- Age

When a user taps on a card, they are navigated to the User Details screen.

### Pagination Logic

I implemented pagination to avoid loading all users at once.

- Initially, the app requests 10 users with skip = 0

- When the user scrolls near the bottom, the next set of users is requested

- Updated limit and skip values are passed to the Swift API method 
To prevent unnecessary API calls:

- Pagination stops when the API returns fewer records than the requested limit

This avoids infinite loading issues.

### 🔍 Search Functionality

Search is available at the top of the Dashboard.

- Users can search by name

- Search is case-insensitive

- The list updates as the user types

Search is handled on the React Native side since the data is already available locally.

### 🎛 Filter Functionality

Filters allow users to narrow down the list.

#### Available filters:

- Age

- City

- State

#### How filtering works:

- All available ages, cities, and states are extracted from the fetched user data

- These values are shown using custom dropdown components

- Filters are applied only after tapping **Apply**

#### Important points:

- Filters are not applied automatically

- A **Clear** option resets all filters

- This avoids invalid input and keeps the UX clean

### 🔄 Pull to Refresh

Pull to refresh is implemented on the user list.

When the user pulls down:

- The existing list is cleared

- Pagination values are reset

- Fresh data is fetched again from the Swift API

### 👤 User Details Screen

The User Details screen shows complete information about a selected user.

#### How it works

- The selected userId is passed from the Dashboard

- A native Swift method fetches the user details

- The response is displayed in a structured layout

#### Information displayed

- Profile image

- Full name

- Age and gender

- Email and phone number

- Address (city, state, country)

- Company name

The screen uses a card-based layout to keep the information easy to read.

### 🔗 Swift – React Native Bridging Explanation

In this app, I used the **classic React Native Native Module approach** to connect Swift with React Native.

#### Why Native Bridging

The assignment required:

- API calls to be written in Swift

- No API calls from JavaScript

- Data to be shared via a Native Bridge

#### Files Used for Bridging

- UserModule.swift → Native Swift implementation

- UserModule.m → Bridge exposure file

- UserNativeService.ts → TypeScript interface

#### UserModule.swift

This file contains the native logic.

In this file:

- I created a Swift class extending NSObject

- API calls are made using URLSession

- Methods are exposed using @objc

- Data is returned using Promise resolve / reject

Swift handles:

- Network requests

- Pagination parameters (limit, skip)

- User ID handling

- Error handling

#### UserModule.m

This file exposes the Swift module to React Native.

- It uses RCT_EXTERN_MODULE

- It declares the methods available to JavaScript

- It contains **no business logic**

#### Exposed Native Methods

- getUsers(limit, skip)

- getUserById(userId)

Each method:

- Accepts parameters from React Native

- Returns a Promise

- Resolves with API data or rejects with an error

