<img width="1024" height="1024" alt="1000071795" src="https://github.com/user-attachments/assets/2a289919-40f5-4118-b584-296269c44839" />

📱 About the App

I built this app to demonstrate how a React Native application can communicate with native iOS code written in Swift.

The main idea of the app is simple:

Show a list of users

Allow searching and filtering

Open a detailed view for each user

All user data is fetched natively from Swift and then shared with React Native using a Native Bridge.
There are no direct API calls from JavaScript.

🧭 App Screens Overview

The app mainly contains two screens:

Dashboard Screen

User Details Screen
📸 Screenshots
<img width="1206" height="2622" alt="Simulator Screenshot - iPhone 17 Pro - 2025-12-30 at 23 19 58" src="https://github.com/user-attachments/assets/e84d06ed-fbe8-4d5a-81df-a6b2184aac71" />

🏠 Dashboard Screen

The Dashboard is the main screen of the app.

What the Dashboard does

Fetches a list of users from the Swift Native Module

Displays users in a scrollable list

Supports pagination, search, filter, and pull to refresh

User List

Each user card shows:

Profile image

Full name

Age

When a user taps on a card, they are navigated to the User Details screen.

Pagination Logic

I implemented pagination to avoid loading all users at once.

Initially, the app requests 10 users with skip = 0

When the user scrolls near the bottom, the next set of users is requested

The updated limit and skip values are passed to the Swift API method

To prevent unnecessary API calls:

I stop pagination when the API returns fewer records than the requested limit

This avoids infinite loading issues

Search Functionality

Search is available at the top of the Dashboard.

Users can search by name

Search is case-insensitive

The list updates as the user types

Search is handled on the React Native side since the data is already available locally.

Filter Functionality

I added filters so users can narrow down the list easily.

Filters available:

Age

City

State

How filtering works:

All available ages, cities, and states are extracted from the fetched user data

These values are shown in custom dropdowns

The user selects the required filters and taps Apply

Important points:

Filters are not applied automatically

The list updates only after clicking Apply

A Clear option is provided to reset all filters

This approach avoids invalid inputs and keeps the UX clean.

Pull to Refresh

I implemented pull to refresh on the user list.

When the user pulls down:

The existing list is cleared

Pagination values are reset

Fresh data is fetched again from the Swift API

👤 User Details Screen

The User Details screen shows complete information about a selected user.

How it works

The selected userId is passed from the Dashboard

A native Swift method is called to fetch user details

The response is displayed in a structured layout

Information displayed

Profile image

Full name

Age and gender

Email and phone number

Address (city, state, country)

Company name

The screen uses a card-based layout to keep the information easy to read.

🔗 Native Swift Integration

All API calls are implemented on the iOS native side using Swift.

I created a Swift Native Module where:

Network requests are handled using URLSession

Methods are exposed to React Native using @objc

Data is returned using Promise resolve or reject

This ensures a clear separation between:

Native data logic (Swift)

UI and user interaction (React Native)

⚙️ App Setup

To run this project locally, I followed the standard React Native CLI setup.

Prerequisites

Before running the app, make sure the following are installed:

Node.js

npm or Yarn

Xcode (for iOS)

CocoaPods

React Native CLI environment setup

I followed the official React Native environment setup guide before starting the project.

Step 1: Clone the Repository
git clone -b main https://github.com/realrahuljaiswal/RNUserBridgeApp.git
cd RNUserBridgeApp

Step 2: Install JavaScript Dependencies
npm install

or

yarn install

Step 3: Install iOS Dependencies

Since this project includes native iOS code, I installed CocoaPods dependencies.

cd ios
pod install
cd ..


This step is required when running the project for the first time or after updating native dependencies.

Step 4: Run the App on iOS
npx react-native run-ios
