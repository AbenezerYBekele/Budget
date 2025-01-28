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
<img src="https://github.com/user-attachments/assets/82d6f3f2-1a6d-4d29-a7e1-1af3d0c42efd" width="300" />
<img src="https://github.com/user-attachments/assets/d5097142-4580-4c4f-972b-62b46ab250da" width="300" />
![Screenshot_20250128-145909_Expo Go](https://github.com/user-attachments/assets/307ba02e-b804-46a5-80f4-58d24a6ce83f)
![Screenshot_20250128-150530_Expo Go](https://github.com/user-attachments/assets/304976de-9c00-49db-8d31-6f9d2743f216)
![Screenshot_20250128-150656_Expo Go](https://github.com/user-attachments/assets/a98f2159-b306-4e5a-ac7f-f339342a8033)
![Screenshot_20250128-150729_Expo Go](https://github.com/user-attachments/assets/6d09f797-ea16-4ef9-b71e-59fb38561e98)


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

