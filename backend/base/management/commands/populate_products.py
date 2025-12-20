from django.core.management.base import BaseCommand
from base.models import Product


class Command(BaseCommand):
    help = 'Populate database with initial product data'

    def handle(self, *args, **kwargs):
        Product.objects.all().delete()
        
        products_data = [
            {
                "name": "Kamir Jr Shawarma",
                "image": "/img/prince.jpg",
                "description": "Your Choice of 6 inch Chicken, Beef or Mixed Shawarma, with hummus, garlic sauce, green garlic sauce,tahini, fries wrapped in a pita bread.",
                "price": 149.99,
            },
            {
                "name": "Kamir Prince Shawarma",
                "image": "/img/prince.jpg",
                "description": "Your Choice of 8 inch Chicken, Beef or Mixed Shawarma, with hummus, garlic sauce, green garlic sauce,tahini sauce, fries wrapped in a pita bread.",
                "price": 249.99,
            },
            {
                "name": "Kamir Queen Shawarma",
                "image": "/img/prince.jpg",
                "description": "Your Choice of 10 inch Chicken, Beef or Mixed Shawarma, with hummus, garlic sauce, green garlic sauce, fries wrapped in a pita bread.",
                "price": 299.99,
            },
            {
                "name": "Kamir King Shawarma",
                "image": "/img/The King.jpg",
                "description": "Your Choice of 12 inch Chicken, Beef or Mixed Shawarma, with hummus, garlic sauce, green garlic sauce, fries wrapped in a pita bread.",
                "price": 349.99,
            },
            {
                "name": "King Kamir Shawarma Party Box",
                "image": "/img/platter.jpg",
                "description": "A Chicken, Beef or Mixed Shawarma wrap with hummus, garlic sauce, green garlic sauce, inside cut in 6 pieces over fries. With tabbouleh, falafel, stuffed grape leaves, pickles and garlic sauce on the side, turnips and sauces.",
                "price": 999.99,
            },
        ]
        
        for product_data in products_data:
            Product.objects.create(**product_data)
            
        self.stdout.write(self.style.SUCCESS(f'Successfully created {len(products_data)} products'))
