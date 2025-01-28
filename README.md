# Budget App 👋

This is a simple budget tracking app built with React Native. The app allows users to track their income, expenses, and balance, providing the ability to add or subtract money with descriptions. Data is persisted using AsyncStorage so that the app can retain transactions and balance even after a restart.

## Features

- Track income and expenses
- Add or subtract money with a description
- View balance, income, and expenses in real-time
- Store data persistently using AsyncStorage
- Delete transactions

## Technologies Used

- React and React Native for UI components and state management
- AsyncStorage for persisting data
- StyleSheet for styling the components

## Screenshots
<img src="https://github.com/user-attachments/assets/6b284bb3-de0f-42e0-91be-4529d23f2be8" width="300" />
![Screenshot_20250128-150530_Expo Go](https://github.com/user-attachments/assets/7ec80c03-9a89-41a0-8952-5769f0531c14)
![Screenshot_20250128-150656_Expo Go](https://github.com/user-attachments/assets/7355da98-0207-460d-9805-7dbb50f628ac)
![Screenshot_20250128-150729_Expo Go](https://github.com/user-attachments/assets/c20ea2fa-234b-4e66-bf65-03a43a8bde95)



## Installation

To run the app, you'll need to set up a React Native environment. If you don't have it set up yet, follow the official React Native [Getting Started guide](https://reactnative.dev/docs/environment-setup).

Once your environment is ready, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/budget-app.git
    ```

2. Install dependencies:
    ```bash
    cd budget-app
    npm install
    ```

3. Run the app on an emulator or physical device:
    ```bash
    npx react-native run-android   # For Android
    npx react-native run-ios       # For iOS
    ```

## How It Works

- **Transactions**: The app allows users to add transactions (income or expenses) by entering a description and amount. The transaction list is updated dynamically.
- **Balance Calculation**: The balance is calculated by subtracting expenses from income, and it updates after each transaction.
- **Persistence**: All transactions and balance are stored using AsyncStorage, ensuring they are retained even after restarting the app.

