
import os
from sc4py.env import env
os.environ.setdefault("URL_PATH_PREFIX", env("", "ege/perfil/"))
os.environ.setdefault("MY_APPS", "ege_perfil")
os.environ.setdefault("POSTGRES_DB", env("POSTGRES_DB_PERFIL"))

os.environ.setdefault("SUAP_EAD_UTILS_AUTH_JWT_BACKEND", env("SUAP_EAD_UTILS_AUTH_JWT_BACKEND", 'suap_ead.auth.CreateNewUserJwtBackend'))

from suap_ead.template_settings import *
