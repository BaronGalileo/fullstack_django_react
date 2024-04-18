from  rest_framework import serializers
from .models import *


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name',)


class RecipeSerializer(serializers.ModelSerializer):
    cat = CategorySerializer()


    class Meta:
        model = Recipe
        fields = ('title', 'content', 'cat')



