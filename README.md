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

## Run NoteShare Server Locally

```
python .\server\server.py
```

Currently running on http://localhost:8000/ (Accessible through API calls)
