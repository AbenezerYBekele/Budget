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

## Screenshots
<img src="https://github.com/user-attachments/assets/bcedc605-74e8-4304-802f-30e776b1865f" width="300" />
<img src="https://github.com/user-attachments/assets/42603012-2d42-469a-bcf6-e708415b35f9" width="300" />
<img src="https://github.com/user-attachments/assets/e9a5e573-293a-4fc5-942f-f77b0cc483e0" width="300" />
