from django.shortcuts import render, redirect, reverse
from .models import City
from .forms import CityForm
import requests

def index(request):
    key_api = 'c060e4f25adf14e21e86aae20492e11d'
    url = 'https://api.openweathermap.org/data/2.5/weather?q={}&units=metric&appid='+ key_api
    

    if(request.method == 'POST'):
        form = CityForm(request.POST)
        form.save()

    form = CityForm()

    cities = City.objects.all()
    all_cities = []

    for city in cities:
        res = requests.get(url.format(city.name)).json()
        city_info = {
            'id': city.id,
            'city': city.name,
            'temp': res["main"]["temp"],
            'feels_like': res["main"]["feels_like"],
            'icon': res["weather"][0]["icon"],
            'wind_speed': res["wind"]["speed"],
            'pressure': res["main"]["pressure"]
        }

        all_cities.append(city_info)
        
    context = {'all_info': all_cities, 'form': form}

    return render(request,'weather/index.html', context)

def delete_view(request, pk):
    info = City.objects.get(id=pk)
    info.delete()
    return redirect('home')
