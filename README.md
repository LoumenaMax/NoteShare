# NoteShare

This is NoteShare, a web service for hosting and sharing notes between students. This is the Senior Project of Max Loumena.

## Get All Dependencies

```
pip install -r requirements.txt
npm install
```

Requirements also include a Chrome plugin to let the local server and frontend communicate.

Plugin can be found here: https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related?hl=en-US

## Run NoteShare FrontEnd Locally

```
yarn start
```

Currently running on http://localhost:3000/ (Accessible through browser)

## Setup Database

First, you need to have MySQL installed on your machine. Once you have it installed, you need to make a user called 'LoumenaMax' with a password of 'ITOTSm3535.' Now open up any command prompt. type the following command:

```
mysql -u LoumenaMax -p;
ITAOTSm3535
```

Wait until you are logged in and then type the following command.

```
create database NoteShare;
```

You now have the database on your computer, and now it's time to populate it. Open up the MySQL workbench that should have installed with your community version of MySQL. From the toolbar, select 'Database' and then 'Connect to Database.' In the popup, navigate to the parameters tab and change the username to 'LoumenaMax' and then click 'OK.' Enter your password when prompted, and you should be taken to an empty Query. Copy the dump.sql file in it's entirety and paste it into this query tab. Then click the lightning bolt in the toolbar to run the dump file. Do this same procedure with the 'procedures_accessing.sql' and 'procedures_creating.sql' files.

Congratulations! You now have the database completely set up.

## Run NoteShare Server Locally

```
python .\server\server.py
```

Currently running on http://localhost:8000/ (Accessible through API calls)

Use the Issues tab to log technical debt and progress.

Paper due at end of Spring Quarter on design and features of project.

Usability Testing: Other Students
