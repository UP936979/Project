# P1 Basic Message Board

## P1.1 Files Created

Create all necessary files for the project.

## P1.2 Basic web server set up

Use node to get the local server running on port 8080 - must be able to consistently connect.

## P1.3 Simple HTML page for message board

Create the basic formatting for a simple message board (simple but functional).

## P1.4 Adding the input and unordered list to the page

Add the unordered list element and the input area for the message board.

## P1.5 Adding the input to the list when submitted

Allow the users input to be added to the message board when submitted.

## P1.6 Displaying time the messages were added to the board

Add the timestamp for when the message was sent to the board.

## P1.7 Get the server running off of localhost and have it on an actual server

Instead of running form LocalHost, get the server to run from a server anyone can access.

## Checklist

## P1 areas, basic messaging board

- [x] P1.1
- [x] P1.2
- [ ] P1.3
- [ ] P1.4
- [ ] P1.5
- [ ] P1.6
- [ ] P1.7

## P2 areas, Messenger-like application

- [ ] P2.1
- [ ] P2.2
- [ ] P2.3
- [ ] P2.4
- [ ] P2.5
- [ ] P2.6
- [ ] P2.7

### Use cases for: Registering Account

|description|pre-condition|post-condition|data|valid case|alt case|error case|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|The app will load to the login page|The app will run|The app will load the login page|n/a|The app will open successfully|n/a|The app may crash/be unable to load the page|
||||||||
|The user will validate their credentials|The user has an existing account|The user will be directed to their home page|Valid user email and password|The user will be successfully logged in|n/a|The user may enter the wrong information or not have an account|
||||||||
| The home page will load with the users’ information | The user has successfully logged in | The app will load the home page with the user data|The data for the user will be retrieved such as username and some relevant budgeting information | The user will successfully load into the home page with their account details |n/a| The app may crash or there could be an error in retrieving the users’ information |

### Use cases for: Logging Into Account

|description|pre-condition|post-condition|data|valid case|alt case|error case|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|The app will load to the login page|The app will run|The app will load the login page|n/a|The app will open successfully|n/a|The app may crash/be unable to load the page|
||||||||
|The user will validate their credentials|The user has an existing account|The user will be directed to their home page|Valid user email and password|The user will be successfully logged in|n/a|The user may enter the wrong information or not have an account|
||||||||
|The home page will load with the users’ information|The user has successfully logged in|The app will load the home page with the user data|The data for the user will be retrieved such as username and some relevant budgeting  information|The user will successfully load into the home page with their account details|n/a|The app may crash or there could be an error in retrieving the users’ information|

### Use cases for: Recording Key Financial Details

|description|pre-condition|post-condition|data|valid case|alt case|error case|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|Load the form for financial data input|The user has an existing account and on the homepage|The form will be successfully loaded|n/a |The form will be loaded|n/a|The form could fail to load or not load properly|
||||||||
|The user will submit their financial data|The user has navigated to the correct form|The data will be validated and submitted|Financial information, primarily numbers, possibly labelled expenses|The input data will be validated and submitted|n/a|The data could be invalid (format/data type etc.) There could be an error in saving the data|

### Use cases for: Uploading Bank Statements

|description|pre-condition|post-condition|data|valid case|alt case|error case|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
