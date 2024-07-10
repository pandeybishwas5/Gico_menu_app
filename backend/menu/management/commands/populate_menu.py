from django.core.management.base import BaseCommand
from menu.models import MenuItem

class Command(BaseCommand):
    help = 'Populates the MenuItem model with sample data'

    def handle(self, *args, **kwargs):
        menu_items = [
              {
    "name": "Chicken Parmigiana",
    "description": "Panko chicken, ham, cheese, mushroom sauce with Italian herb chips, salad.",
    "price": 26,
    "category": "Deep Fried and Burger"
  },
  {
    "name": "Chicken Milanese",
    "description": "Chicken seasoned bread crumb mix with Italian herb chips, salad.",
    "price": 26,
    "category": "Deep Fried and Burger"
  },
  {
    "name": "Deep Fried Calamari",
    "description": "Deep fried panko squid rings served with Italian herb chips, salad, tartare sauce.",
    "price": 26,
    "category": "Deep Fried and Burger"
  },
  {
    "name": "Grilled Salmon",
    "description": "Grilled salmon, mash potato, tomato salsa, grill broccolini, chimichurri.",
    "price": 35,
    "category": "Fish and SeaFood"
  },
  {
    "name": "Grilled Barramundi",
    "description": "Lentil cooked with wagyu meat balls, grilled broccolini, pumpkin, gremolata.",
    "price": 35,
    "category": "Fish and SeaFood"
  },
  {
    "name": "Black Mussels",
    "description": "Fresh tomato cooked with garlic, chill, white wine with Napoli sauce.",
    "price": 35,
    "category": "Fish and SeaFood"
  },
  {
    "name": "GICO’S SPECIAL SEAFOOD PLATTER",
    "description": "Blue swimmer crab, black mussels, green mussels, clams, prawns, salmon, leatherjacket, cooked with garlic, spring onions, fresh tomato, basil, mixed herbs and Napoli sauce.",
    "price": 75,
    "category": "Fish and SeaFood"
  },
  {
    "name": "Wagyu Beef Sando",
    "description": "Wagyu beef slow cooked onions, tomato salsa with Italian herb chips and salad.",
    "price": 26,
    "category": "Deep Fried and Burger"
  },
  {
    "name": "Tempura Softshell Crab Burger",
    "description": "Softshell crab, pineapple, red cabbage, tomato, pickles, cheese, burger sauce served with your choice of sweet potato chips or Italian herb chips.",
    "price": 25,
    "category": "Deep Fried and Burger"
  },
  {
    "name": "Deep Fried Chicken Katsu Burger",
    "description": "Crunchy chicken katsu, grilled pineapple, red cabbage, tomato, pickles, burger cheese, secret burger sauce served with your choice of sweet potato chips or Italian herb chips.",
    "price": 24,
    "category": "Deep Fried and Burger"
  },
  {
    "name": "Panko Chicken Burger",
    "description": "Chicken breadcrumbs, pineapple, red cabbage, tomato, pickles, cheese, burger sauce served with your choice of sweet potato chips or Italian herb chips.",
    "price": 24,
    "category": "Deep Fried and Burger"
  },
  {
    "name": "American Burger",
    "description": "Double beef patty, pineapple, red cabbage, tomato, pickles, cheese, burger sauce served with your choice of sweet potato chips or Italian herb chips.",
    "price": 26,
    "category": "Deep Fried and Burger"
  },
  {
    "name": "Wagyu Beef Ragu Burger",
    "description": "Oven slow cooked wagyu ragu, red cabbage, onion, carrot, burger sauce served with your choice of sweet potato chips or Italian herb chips.",
    "price": 25,
    "category": "Deep Fried and Burger"
  },
  {
    "name": "Vegan Burger",
    "description": "Kale, spinach, pumpkin, mushroom, pickle, burger sauce served with sweet potato chips.",
    "price": 24,
    "category": "Deep Fried and Burger"
  },
  {
    "name": "Wagyu Beef Scaloppine Funghi",
    "description": "Pan fried wagyu veal, mushroom sauce, served with vegetables and salad.",
    "price": 35,
    "category": "Meat"
  },
  {
    "name": "Wagyu Beef Saltimbocca Alla Romana",
    "description": "Pan fried wagyu veal, prosciutto, asparagus, cheese, served with vegetables and salad.",
    "price": 37,
    "category": "Meat"
  },
  {
    "name": "Premium Scotch Fillet",
    "description": "Cooked to your liking with mash potato and vegetables",
    "price": 39,
    "category": "Meat"
  },
  {
    "name": "Mayura Station MB5 Porterhouse",
    "description": "Cooked to your liking with mash potato and vegetables.",
    "price": 55,
    "category": "Meat"
  },
  {
    "name": "Mayura Station MBS7 Scotch Fillet",
    "description": "Cooked to your liking with mash potato and vegetables",
    "price": 59,
    "category": "Meat"
  },
  {
    "name": "Mushroom sauce",
    "description": "",
    "price": 3,
    "category": "choice_of_sauce"
  },
  {
    "name": "Pepper sauce",
    "description": "",
    "price": 3,
    "category": "choice_of_sauce"
  },
  {
    "name": "Creamy prawn sauce",
    "description": "",
    "price": 4,
    "category": "choice_of_sauce"
  },
  {
    "name": "Kids Spaghetti Wagyu Bolognaise",
    "description": "",
    "price": 17,
    "category": "Kids Meals"
  },
  {
    "name": "Kids Spaghetti Napaletana",
    "description": "",
    "price": 14,
    "category": "Kids Meals"
  },
  {
    "name": "Kids Chips",
    "description": "",
    "price": 6,
    "category": "Kids Meals"
  },
  {
    "name": "Kids Fish and Chips",
    "description": "",
    "price": 16,
    "category": "Kids Meals"
  },
  {
    "name": "Kids Chips and Chicken Nuggets",
    "description": "",
    "price": 14,
    "category": "Kids Meals"
  },
  {
    "name": "Roasted Cocktail Potato with Mixed Herbs and Salt",
    "description": "",
    "price": 16,
    "category": "Sides"
  },
  {
    "name": "Pan Fried Broccolini with Fried Shallots",
    "description": "",
    "price": 17,
    "category": "Sides"
  },
  {
    "name": "Deep Fried Corn Ribs with Seasoning",
    "description": "",
    "price": 14,
    "category": "Sides"
  },
  {
    "name": "Crunchy Chips",
    "description": "",
    "price": 9,
    "category": "Sides"
  },
  {
    "name": "Sweet Potato Chips",
    "description": "",
    "price": 9,
    "category": "Sides"
  },
  {
    "name": "Wedges with Sweet Chilli Sauce and Sour Cream",
    "description": "",
    "price": 12,
    "category": "Sides"
  },
  {
    "name": "Garden Salad",
    "description": "Cos lettuce, rocket, avocado, onion, tomato, cucumber, olive with light dressing on the side.",
    "price": 18,
    "category": "Salads"
  },
  {
    "name": "Gico’s Island Grilled Chicken Salad",
    "description": "Marinated chicken tenderloins, cos lettuce, avocado, tomato, cucumber, walnuts, with light dressing on the side.",
    "price": 24,
    "category": "Salads"
  },
  {
    "name": "Chicken Caesar Salad",
    "description": "Cos lettuce, garlic croutons, bacon, poached egg, parmesan cheese, home-made dressing.",
    "price": 26,
    "category": "Salads"
  },
  {
    "name": "Table Tiramisu",
    "description": "",
    "price": 16,
    "category": "Desserts"
  },
  {
    "name": "Mango and Cardamom Crème Brulee",
    "description": "",
    "price": 18,
    "category": "Desserts"
  },
  {
    "name": "Pandan Bubble Waffle",
    "description": "",
    "price": 21,
    "category": "Desserts"
  },
        ]

        for item in menu_items:
            MenuItem.objects.create(**item)

        self.stdout.write(self.style.SUCCESS('Successfully populated menu items'))
