from django.db import models

class MenuItem(models.Model):
    CATEGORY_CHOICES = [
        ('Starter', 'Starter'),
        ('Pasta', 'Pasta'),
        ('Risotto', 'Risotto'),
        ('Deep Fried and Burger', 'Deep Fried and Burger'),
        ('Fish and Seafood', 'Fish and Seafood'),
        ('Meat', 'Meat'),
        ('Side Dish', 'Side Dish'),
        ('Salad', 'Salad'),
        ('Dessert', 'Dessert'),
        ('Kid Meal', 'Kid Meal'),
    ]

    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    category = models.CharField(max_length=30, choices=CATEGORY_CHOICES)

    def __str__(self):
        return self.name
