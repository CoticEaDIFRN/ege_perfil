

from django.conf import settings
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect, HttpResponse
# from ege_acesso.views.authorize_view import auth_token
from django.views import View
from sc4net import get_json, post, post_json
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
import json


@login_required
def perfil_index(request):
    if request.COOKIES.get('hide_config'):
        return render(request, template_name='ege_perfil/index.html', context={'login_url': settings.LOGIN_URL})
    else:
        return HttpResponseRedirect('/ege/perfil/acessibilidade')


class AcessibilidadeService(View):

    def get(self, request, *args, **kwargs):
        return render(request, template_name='ege_perfil/painel_acessibilidade.html')

    @method_decorator(csrf_exempt)
    def post(self, request, *args, **kwargs):
        print("Estou aqui.")
        url = settings.SUAP_EAD_ACESSO_JWT_ROOT + 'api/v1/users/%s/biografy/' % request.user.username
        data = {"biografy": json.loads(request.body)["biografy"]}
        result = post_json(url, data)
        return HttpResponse('{"successs": true}')


class UserBiografyService(View):

    def get(self, request, *args, **kwargs):
        url = settings.SUAP_EAD_ACESSO_JWT_ROOT + 'api/v1/users/%s/biografy/' % request.user.username
        result = get_json(url)
        return HttpResponse('{"biografy": "%s"}' % result.biografy)

    @method_decorator(csrf_exempt)
    def post(self, request, *args, **kwargs):
        url = settings.SUAP_EAD_ACESSO_JWT_ROOT + 'api/v1/users/%s/biografy/' % request.user.username
        data = {"biografy": json.loads(request.body)["biografy"]}
        result = post_json(url, data)
        return HttpResponse('{"successs": true}')


class UserEmailService(View):

    def get(self, request, *args, **kwargs):
        url = settings.SUAP_EAD_ACESSO_JWT_ROOT + 'api/v1/users/%s/email/' % request.user.username
        result = get_json(url)
        return HttpResponse('{"email": "%s"}' % result.email)

    @method_decorator(csrf_exempt)
    def post(self, request, *args, **kwargs):
        url = settings.SUAP_EAD_ACESSO_JWT_ROOT + 'api/v1/users/%s/email/' % request.user.username
        data = {"email": json.loads(request.body)["email"]}
        result = post_json(url, data)
        return HttpResponse('{"successs": true}')
