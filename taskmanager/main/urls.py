from django.urls import path
from . import views
from .views import SignUpView

urlpatterns = [
    path('', views.index, name='home'),
    path('about', views.about, name='about'),
    path('create', views.create, name='create'),
    path('update/<int:pk>/', views.update_task, name="update_task"),
    path('delete/<int:pk>/', views.delete_task, name="delete_task"),
    path("register", SignUpView.as_view(), name="register"),
    path("login/", views.login_request, name="login"),
    path("logout", views.logout_request, name= "logout"),
]
