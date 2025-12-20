1   # Kamir Shawarma - Full Stack E-commerce Application

A full-stack e-commerce application for Kamir Shawarma featuring a React frontend and Django REST API backend.

## Project Structure

```
.
├── frontend/          # React application
├── backend/           # Django REST API
├── myenv/            # Python virtual environment (not included in git)
└── README.md
```

## Features

### Backend (Django REST API)

- RESTful API with Django REST Framework
- Product model with full CRUD operations
- Three main endpoints:
  - `/api/` - List of available API routes
  - `/api/products/` - List all products
  - `/api/products/<id>/` - Get specific product details
- CORS configuration for cross-origin requests
- Environment variable configuration
- SQLite database (included for Quiz 2)

### Frontend (React)

- Modern React application with components
- Product listing and detail views
- Bootstrap styling
- Environment variable support
- API integration with backend

## Prerequisites

- Python 3.8 or higher
- Node.js 14 or higher
- npm or yarn package manager
- Git

## Backend Setup

### 1. Navigate to Backend Directory

```bash
cd backend
```

### 2. Create Virtual Environment

```bash
# Windows
python -m venv myenv
myenv\Scripts\activate

# Mac/Linux
python3 -m venv myenv
source myenv/bin/activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Environment Variables

**IMPORTANT:** Environment variables keep sensitive information secure and allow configuration per environment.

#### Quick Setup:

1. **Copy the template file:**

   ```bash
   # For backend
   cp backend/.env.example backend/.env

   # For frontend
   cp frontend/.env.example frontend/.env
   ```

2. **Fill in your actual values** (examples provided below)

#### Backend Environment Variables

Create a `.env` file in the `backend` directory with these variables:

```env
# Django Security
SECRET_KEY=your-secret-key-here

# Debug Mode (True for development, False for production)
DEBUG=True

# Allowed Hosts
ALLOWED_HOSTS=localhost,127.0.0.1

# CORS Settings - Which frontend URLs can access this API
CORS_ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
```

**Key Points:**

- `SECRET_KEY`: Used by Django for security. Generate one: `python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())'`
- `DEBUG=False` in production (shows error details to users when True)
- `CORS_ALLOWED_ORIGINS`: Only these URLs can make requests to your API

#### Frontend Environment Variables

Create a `.env` file in the `frontend` directory:

```env
# Backend API URL
REACT_APP_API_URL=http://localhost:8000/api
```

**Key Points:**

- Must start with `REACT_APP_` to be accessible in React
- This is set to the backend's API proxy URL
- Change to production URL when deploying

#### .env Files in .gitignore

Your `.env` files are already protected:

```
# In .gitignore
.env
.env.local
```

**This means:**

- Your secrets are never committed to Git ✓
- Each team member creates their own `.env` file locally ✓
- `.env.example` files show what variables are needed ✓

#### For Teammates:

When sharing code on GitHub, they see `.env.example` and know exactly what variables to create in their local `.env` file.

### 5. Database Setup

The database (`db.sqlite3`) is included for Quiz 2. If you need to reset it:

```bash
# Delete existing database (optional)
# rm db.sqlite3

# Create migrations
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Populate database with initial products
python manage.py populate_products
```

### 6. Create Superuser (Optional)

```bash
python manage.py createsuperuser
```

### 7. Run Backend Server

```bash
python manage.py runserver
```

Backend will be available at: `http://127.0.0.1:8000/`

## Frontend Setup

### 1. Navigate to Frontend Directory

```bash
cd frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the `frontend` directory:

```env
REACT_APP_API_URL=http://localhost:8000/api
```

### 4. Run Frontend Development Server

```bash
npm start
```

Frontend will be available at: `http://localhost:3000/`

## API Endpoints

### Base URL: `http://127.0.0.1:8000/api/`

| Endpoint              | Method | Description                  |
| --------------------- | ------ | ---------------------------- |
| `/api/`               | GET    | List of available API routes |
| `/api/products/`      | GET    | Get all products             |
| `/api/products/<id>/` | GET    | Get specific product by ID   |

### Example API Responses

**GET `/api/products/`**

```json
[
  {
    "id": 1,
    "name": "Kamir Jr Shawarma",
    "image": "/img/prince.jpg",
    "description": "Your Choice of 6 inch Chicken, Beef or Mixed Shawarma...",
    "price": "149.99",
    "created_at": "2025-12-20T07:00:00Z"
  },
  ...
]
```

**GET `/api/products/1/`**

```json
{
  "id": 1,
  "name": "Kamir Jr Shawarma",
  "image": "/img/prince.jpg",
  "description": "Your Choice of 6 inch Chicken, Beef or Mixed Shawarma...",
  "price": "149.99",
  "created_at": "2025-12-20T07:00:00Z"
}
```

## Technology Stack

### Backend

- **Framework**: Django 6.0
- **API**: Django REST Framework
- **Database**: SQLite3
- **CORS**: django-cors-headers
- **Environment**: python-decouple

### Frontend

- **Framework**: React
- **Styling**: Bootstrap
- **HTTP Client**: Axios

## Development Notes

### CORS Configuration

The backend is configured to accept requests only from:

- `http://localhost:3000`
- `http://127.0.0.1:3000`

This follows the requirement to use `CORS_ALLOWED_ORIGINS` instead of `CORS_ALLOW_ALL_ORIGINS`.

### Database

For Quiz 2, the `db.sqlite3` file is included in the repository. In production, this should be excluded from version control.

### Environment Variables

Both frontend and backend use environment variables for configuration. Make sure to create the `.env` files as described in the setup instructions.

## Project Management Commands

### Backend Commands

```bash
# Make migrations
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Populate products
python manage.py populate_products

# Run development server
python manage.py runserver

# Create superuser
python manage.py createsuperuser

# Access admin panel
http://127.0.0.1:8000/admin/
```

### Frontend Commands

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

## File Structure

### Backend

```
backend/
├── backend/
│   ├── settings.py      # Django settings with environment variables
│   ├── urls.py          # Main URL configuration
│   └── wsgi.py
├── base/
│   ├── models.py        # Product model
│   ├── serializers.py   # Product serializer
│   ├── views.py         # API views
│   ├── urls.py          # App URL patterns
│   └── management/
│       └── commands/
│           └── populate_products.py
├── .env                 # Environment variables (not in git)
├── .gitignore
├── db.sqlite3          # Database (included for Quiz 2)
├── manage.py
└── requirements.txt
```

### Frontend

```
frontend/
├── public/
│   └── img/            # Product images
├── src/
│   ├── components/     # React components
│   ├── screens/        # Page components
│   ├── App.js
│   └── index.js
├── .env               # Environment variables (not in git)
└── package.json
```

## Quiz 2 Requirements Checklist

- ✅ Both projects utilize Environment Variables
- ✅ API has 3 dedicated endpoints (List, Detail, API Routes)
- ✅ CORS configured with CORS_ALLOWED_ORIGINS (not CORS_ALLOW_ALL_ORIGINS)
- ✅ Models for objects (Product model)
- ✅ Proper Serialization of Data (ProductSerializer)
- ✅ requirements.txt file
- ✅ .gitignore file (excludes myenv/)
- ✅ Detailed README.md with setup instructions
- ✅ db.sqlite3 included

## Troubleshooting

### Backend Issues

**Issue**: `ModuleNotFoundError`

```bash
# Make sure virtual environment is activated
# Windows
myenv\Scripts\activate
# Mac/Linux
source myenv/bin/activate

# Reinstall dependencies
pip install -r requirements.txt
```

**Issue**: Database errors

```bash
# Delete db.sqlite3 and recreate
python manage.py migrate
python manage.py populate_products
```

**Issue**: CORS errors

- Check that frontend URL is in `CORS_ALLOWED_ORIGINS` in `.env`
- Verify `corsheaders.middleware.CorsMiddleware` is in MIDDLEWARE settings

### Frontend Issues

**Issue**: API connection fails

- Ensure backend server is running on port 8000
- Check `REACT_APP_API_URL` in `.env` file
- Verify CORS settings in backend

**Issue**: `npm start` fails

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## License

This project is created for educational purposes as part of DATASTALGO Quiz 2.

## Author

Budjoy - DATASTALGO Student

## Acknowledgments

- Django Documentation
- React Documentation
- Django REST Framework Documentation
