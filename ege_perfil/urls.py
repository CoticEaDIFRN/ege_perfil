
from django.urls import path
from .views import perfil_index, AcessibilidadeService, UserBiografyService, UserEmailService
from django.views.decorators.csrf import csrf_exempt


urlpatterns = [
    path('', perfil_index),
    path('acessibilidade', csrf_exempt(AcessibilidadeService.as_view())),
    path('biografy/', csrf_exempt(UserBiografyService.as_view())),
    path('email/', csrf_exempt(UserEmailService.as_view())),
]
