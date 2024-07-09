from django.core.management.base import BaseCommand
from menu.models import MenuItem

class Command(BaseCommand):
    help = 'Populates the MenuItem model with sample data'

    def handle(self, *args, **kwargs):
        menu_items = [
            {"name": "Chicken Parmigiana", "description": "Panko chicken, ham, cheese, mushroom sauce with Italian herb chips, salad.", "price": 26, "category": "deep_fried_and_burger"},
            {"name": "Deep Fried Calamari", "description": "Deep fried panko squid rings served with Italian herb chips, salad, tartare sauce.", "price": 26, "category": "deep_fried_and_burger"},
            {"name": "Wagyu Beef Sando", "description": "Wagyu beef slow cooked onions, tomato salsa with Italian herb chips and salad.", "price": 26, "category": "deep_fried_and_burger"},
            {"name": "Grilled Salmon", "description": "Grilled salmon, mash potato, tomato salsa, grill broccolini, chimichurri.", "price": 35, "category": "fish_and_seafood"},
            {"name": "Grilled Barramundi", "description": "Lentil cooked with wagyu meat balls, grilled broccolini, pumpkin, gremolata.", "price": 35, "category": "fish_and_seafood"},
            {"name": "Black Mussels", "description": "Fresh tomato cooked with garlic, chill, white wine with Napoli sauce.", "price": 35, "category": "fish_and_seafood"},
            {"name": "Wagyu Beef Scaloppine Funghi", "description": "Pan fried wagyu veal, mushroom sauce, served with vegetables and salad.", "price": 35, "category": "meat"},
            {"name": "Wagyu Beef Saltimbocca Alla Romana", "description": "Pan fried wagyu veal, prosciutto, asparagus, cheese, served with vegetables and salad.", "price": 37, "category": "meat"},
            {"name": "Premium Scotch Fillet", "description": "Cooked to your liking with mash potato and vegetables.", "price": 39, "category": "meat"},
            {"name": "Garlic Bread", "description": "", "price": 6, "category": "starter"},
            {"name": "Arancini", "description": "Crumbed rice balls, pumpkin fetta.", "price": 13, "category": "starter"},
            {"name": "Lobster Tail", "description": "Lobster tail, large prawns, spring onion, leeks, garlic, white wine, fresh tomato, basil.", "price": 39, "category": "pasta"},
            {"name": "Marinara", "description": "Mix seafood, garlic, white wine, fresh tomato, basil.", "price": 37, "category": "risotto"},
            {"name": "Wagyu Beef Ragu with Short Rib", "description": "Oven baked short rib, wagyu beef slow cooked, chimichurri.", "price": 35, "category": "risotto"},
            {"name": "Deep Fried Seafood Combo", "description": "Marinated local fish, king prawn, calamari, pineapple squid served with Italian herb chips, salad, tartare sauce.", "price": 28, "category": "deep_fried_and_burger"},
            {"name": "Garden Salad", "description": "Cos lettuce, rocket, avocado, onion, tomato, cucumber, olive with light dressing on the side.", "price": 18, "category": "salad"},
            {"name": "Gico's Island Grilled Chicken Salad", "description": "Marinated chicken tenderloins, cos lettuce, avocado, tomato, cucumber, walnuts, with light dressing on the side.", "price": 24, "category": "salad"},
            {"name": "Tiramisu", "description": "", "price": 16, "category": "dessert"},
            {"name": "Kids Spaghetti Wagyu Bolognaise", "description": "", "price": 17, "category": "kid_meal"},
        ]

        for item in menu_items:
            MenuItem.objects.create(**item)

        self.stdout.write(self.style.SUCCESS('Successfully populated menu items'))
