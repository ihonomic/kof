# https://dev.to/osahenru/using-railway-app-to-deploy-your-django-project-3ah1 - DEPLOYING TO RAILWAYS
# https://subtitletools.com/convert-text-files-to-utf8-online - Covert requirements.txt to utf-8

from pathlib import Path
import os
import cloudinary
# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure--#y49uiz5$$a+*xp&ewkd_)!t@9&t(l%^hf=cc2n2q)88dfs9x'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['*']


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',

    'django.contrib.staticfiles',
    'cloudinary_storage',
    'cloudinary',

    'storages',


    'corsheaders',
    'rest_framework',
    'form'
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',

    'django.middleware.security.SecurityMiddleware',

    'whitenoise.middleware.WhiteNoiseMiddleware',

    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'core.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(BASE_DIR,  'build'),
            os.path.join(BASE_DIR, 'templates'),
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'core.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': BASE_DIR / 'db.sqlite3',
#     }
# }

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'railway',
        'USER': 'postgres',
        'PASSWORD': 'gg4UZkAq3SR0Vx8XKrbA',
        'HOST': 'containers-us-west-94.railway.app',
        'PORT': '5799',
        'OPTIONS': {
                'sslmode': 'require',
        },
    }
}


# Password validation
# https://docs.djangoproject.com/en/4.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'Africa/Algiers'

USE_I18N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.1/howto/static-files/

STATIC_URL = 'static/'


STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static'),
    os.path.join(BASE_DIR, 'build', 'static')
]
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

# Default primary key field type
# https://docs.djangoproject.com/en/4.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


#   Restframework
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny'
    ],
    'DATETIME_FORMAT': "%b %d, %Y - %I:%M %p",
}

#   Corsheaders - Restrict ports address connecting to API's
CORS_ORIGIN_ALLOW_ALL = True


#   Email
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = '****************@gmail.com'
EMAIL_HOST_PASSWORD = '********'


#    Tell django to look into folders called 'static'
MEDIA_URL = '/media/'

#   Send uploaded images here
MEDIA_ROOT = os.path.join(BASE_DIR, 'static/media')
DEFAULT_FILE_STORAGE = "cloudinary_storage.storage.MediaCloudinaryStorage"

#
STATICFILES_STORAGE = 'cloudinary_storage.storage.StaticCloudinaryStorage'

cloudinary.config(
    cloud_name="dxj5r6fah",
    api_key="349749124172324",
    api_secret="4dgCbN9MtchDbm8TxUO5boRJW1c"
)

CLOUDINARY_STORAGE = {
    "CLOUD_NAME": "dxj5r6fah",
    "API_KEY": "349749124172324",
    "API_SECRET": "4dgCbN9MtchDbm8TxUO5boRJW1c"
}
