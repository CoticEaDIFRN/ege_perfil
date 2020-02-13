
from django.urls import path, include
from django.contrib import admin
from django.views.generic import RedirectView
from django.conf import settings
from django.conf.urls.static import static
from suap_ead.views import jwt_logout

urlpatterns = [
    path(
        settings.URL_PATH_PREFIX,
        include(
            [
                path('logout/', jwt_logout, name='logout'),
                path('', include('ege_perfil.urls')),
                path('', include('suap_ead.urls', namespace='suap_ead')),
                path('admin/', admin.site.urls),
            ]
        )
    ),
    path('', RedirectView.as_view(url=settings.URL_PATH_PREFIX)),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)


if settings.DEBUG:
    import debug_toolbar
    urlpatterns.append(path('%s__debug__/' % settings.URL_PATH_PREFIX, include(debug_toolbar.urls)))
