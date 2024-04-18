from django.shortcuts import render
from rest_framework.views import APIView
from .models import Recipe
from .serializer import *
from  rest_framework.response import Response
# Create your views here.

class RecipeView(APIView):
    def get(self, request):
        recipes = Recipe.objects.all()
        serializer = RecipeSerializer(recipes, many=True)
        return Response(serializer.data)


class CategoryView(APIView):
    def get(self, request):
        categorys = Category.objects.all()
        serializers = CategorySerializer(categorys, many=True)
        return Response(serializers.data)
