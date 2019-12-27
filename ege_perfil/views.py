"""
MIT License

Copyright (c) 2018 IFRN - Campus EaD

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
"""

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
        url = settings.EGE_ACESSO_JWT_ROOT + 'api/v1/users/%s/biografy/' % request.user.username
        data = {"biografy": json.loads(request.body)["biografy"]}
        result = post_json(url, data)
        return HttpResponse('{"successs": true}')


class UserBiografyService(View):

    def get(self, request, *args, **kwargs):
        url = settings.EGE_ACESSO_JWT_ROOT + 'api/v1/users/%s/biografy/' % request.user.username
        result = get_json(url)
        return HttpResponse('{"biografy": "%s"}' % result.biografy)

    @method_decorator(csrf_exempt)
    def post(self, request, *args, **kwargs):
        url = settings.EGE_ACESSO_JWT_ROOT + 'api/v1/users/%s/biografy/' % request.user.username
        data = {"biografy": json.loads(request.body)["biografy"]}
        result = post_json(url, data)
        return HttpResponse('{"successs": true}')


class UserEmailService(View):

    def get(self, request, *args, **kwargs):
        url = settings.EGE_ACESSO_JWT_ROOT + 'api/v1/users/%s/email/' % request.user.username
        result = get_json(url)
        return HttpResponse('{"email": "%s"}' % result.email)

    @method_decorator(csrf_exempt)
    def post(self, request, *args, **kwargs):
        url = settings.EGE_ACESSO_JWT_ROOT + 'api/v1/users/%s/email/' % request.user.username
        data = {"email": json.loads(request.body)["email"]}
        result = post_json(url, data)
        return HttpResponse('{"successs": true}')
