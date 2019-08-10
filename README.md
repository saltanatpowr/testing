# set up cypress:
 
- install  ---- npm install cypress --save-dev

- run -------- $(npm bin)/cypress open

- select test spec to run and see results ;)

# project structure: 
- integration folder - where all test specs placed

- fixtures folder - here is set of static data for stubs (it is empty, cuz i didn’t implement integration tests in that example)

- support folder - there is index and commands files, that useful for pre-setuping and some global functions) 

- support/commands.js file - where i placed some global reusable functions like - Login, SignIn, SignOut, ResetPassword

- utils folder - commands that should be approved\rewritten after some time (not so global, and can be changed)

# Code architecture(reusability): 

- To follow DRY I used support/commands.js file  and utils/ to create reusable fucntions as js functions
Notice: Try to avoid coupling - make isolations for test cases!!!!

- To follow Data Driven Testing - see pricing_page_spec.js file (Payment Form test case)
Naming of files should be changed after we will decide test case architecture with QA Lead

- Should I add some abstraction layer between test scripts and test elements? But for what? If it will be needed, we can do it later, not for now.
Notice: Right now I just follow best practices for developing code on cypress. We can discuss about it later, now U can just watch this video with best practices, it is very useful:
 https://www.youtube.com/watch?v=5XQOK0v_YRE


