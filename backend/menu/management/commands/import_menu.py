import csv
from django.core.management.base import BaseCommand
from menu.models import Category, MenuItem


class Command(BaseCommand):
    help = 'Import menu items from CSV file'

    def handle(self, *args, **kwargs):
        with open('menu.csv', newline='', encoding='utf-8-sig') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                category_name = row['category']
                category, created = Category.objects.get_or_create(name=category_name)

                MenuItem.objects.create(
                    name=row['ItemMenu'],
                    description=row['description'],
                    price=row['price'],
                    category=category
                )
                self.stdout.write(self.style.SUCCESS(f'Item {row["ItemMenu"]} added'))
