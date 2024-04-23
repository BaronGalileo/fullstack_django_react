from django.db import models


class Recipe(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField(blank=False)
    cat = models.ForeignKey('Category', related_name='recipes', on_delete=models.PROTECT)

    def __str__(self):
        return self.title



class Category(models.Model):
    name = models.CharField(max_length=100, db_index=True)

    def __str__(self):
        return self.name