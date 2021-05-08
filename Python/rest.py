import requests

r =  requests.get('www.google.com/')
r.content()