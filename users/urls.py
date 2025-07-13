# users/urls.py
from django.urls import path
from .views import RegisterView, MovieListView
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [
   path('register/', RegisterView.as_view(), name='register'),
    path('login/', TokenObtainPairView.as_view(), name='login'),
    path('movies/', MovieListView.as_view(), name='movies'),      # Vista protegida
]