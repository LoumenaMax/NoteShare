# NoteShare
A web platform to help students share their notes.

# Setup
```
cd VenvDjango

Scripts\activate

cd project

npm install

npm run dev

pip install pipenv django djangorestframework coverage

cd project

python manage.py runserver
```

Go to http://127.0.0.1:8000/

# Testing

Go to project directory
```
coverage run --source='.' manage.py test

coverage report
```

# Directory

React code is in  $.\noteshare\VenvDjango\project\project\frontend\src\components

Backend code is in $.\noteshare\VenvDjango\project\project\leads

