from django.db import models

class MenuItem(models.Model):
    CATEGORY_CHOICES = [
        ('starter', 'Starter'),
        ('pasta', 'Pasta'),
        ('risotto', 'Risotto'),
        ('deep_fried_and_burger', 'Deep Fried and Burger'),
        ('fish_and_seafood', 'Fish and Seafood'),
        ('meat', 'Meat'),
        ('side_dish', 'Side Dish'),
        ('salad', 'Salad'),
        ('dessert', 'Dessert'),
        ('kid_meal', 'Kid Meal'),
    ]

    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    category = models.CharField(max_length=30, choices=CATEGORY_CHOICES)

    def __str__(self):
        return self.name
