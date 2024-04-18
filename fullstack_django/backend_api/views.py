from django.shortcuts import render
from rest_framework.views import APIView
from .models import Recipe
from .serializer import RecipeSerializer
from  rest_framework.response import Response
# Create your views here.

class RecipeView(APIView):
    def get(self, request):
        output = [
            {
                "title": output.title,
                "content": output.content,
                "cat": output.cat
            } for output in Recipe.objects.all()
        ]
        return Response(output)