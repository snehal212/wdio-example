# WebdeiverIO Example Project

This example test automation project uses [WebdriverIO](http://webdriver.io/) with Cucumber framework and automates a sample React [Hacker News](https://github.com/insin/react-hn) app.

## Setup  
First you need to install AUT. Which is a sample Hacker News react APP
```
git clone https://github.com/insin/react-hn.git
cd react-hn
npm install
```

Once the sample has been installed start it locally
```
npm start
```

Verify that app is running by going to http://localhost:5000/. You should see Hacker News app page similar to this [live example](https://react-hn.appspot.com/)

Open a seperate terminal window and install this project
```
git clone https://github.com/snehal212/wdio-example.git
npm install
```

## Run Tests
Now you can run example tests using `npm test`
To view an HTML version of test report `npm run report`. A brosser window should open with Allure HTML report