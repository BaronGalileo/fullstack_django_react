from django.shortcuts import render
from rest_framework.views import APIView
from .models import Recipe
from .serializer import *
from  rest_framework.response import Response
# Create your views here.

class RecipeListView(APIView):
    def get(self, request):
        recipes = Recipe.objects.all()
        serializer = RecipeSerializer(recipes, many=True)
        return Response(serializer.data)


class CategoryView(APIView):
    def get(self, request):
        categorys = Category.objects.all()
        serializers = CategorySerializer(categorys, many=True)
        return Response(serializers.data)

class RecipeDetailView(APIView):
    def get(self, request, pk):
        recipe = Recipe.objects.get(id=pk)
        serializer = RecipeDeteilSerializer(recipe)
        return Response(serializer.data)

