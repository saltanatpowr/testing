import HomePage from "./elements/pages/HomePage";

it( '5) Log In Functionality', function() {
        const home = new HomePage();
        home.visit();

        const login = home.goToLogIn();
        login.fillEmail('ibrayevabay1@gmail.com');
        login.fillPassword('abaybabay');
        login.submit();

    });
