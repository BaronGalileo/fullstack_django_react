from  rest_framework import serializers
from .models import *





class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name')


class RecipeSerializer(serializers.ModelSerializer):
    cat = CategorySerializer()

    class Meta:
        model = Recipe
        fields = ('id', 'title', 'content', 'cat')

class RecipeDeteilSerializer(serializers.ModelSerializer):

    class Meta:
        model = Recipe
        fields = ('id', 'title', 'content')



