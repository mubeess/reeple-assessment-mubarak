# Welcome to ReepleCurrency!

Thank you for choosing ReepleCurrency, your reliable currency converter app! This tool is designed to provide real-time exchange rates to help you convert currencies effortlessly. Whether you're traveling, shopping online, or managing finances across borders, ReepleCurrency makes currency conversion straightforward and accurate.

[**Download the APK here**](https://drive.google.com/file/d/1YCK9VMBHJv-XESjMdMBsussJXoI1YjpI/view?usp=drive_link) and start converting currencies right away!

## Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

\```bash
# using npm
npm start

# OR using Yarn
yarn start
\```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

\```bash
# using npm
npm run android

# OR using Yarn
yarn android
\```

### For iOS

\```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
\```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## .env File Configuration

To make API requests, ReepleCurrency relies on an `.env` file where you'll need to set up two environment variables: `API_URL` and `API_KEY`.

- **API_URL:** This should be set to `https://v6.exchangerate-api.com/v6`.
- **API_KEY:** You can obtain your API key from the [ExchangeRate API dashboard](https://app.exchangerate-api.com/dashboard).

Make sure your `.env` file is located in the root of your project and follows this format:

\```
API_URL=https://v6.exchangerate-api.com/v6
API_KEY=your_api_key_here
\```

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how to set up your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

