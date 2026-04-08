import os
import sys
from decimal import Decimal

sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from app.database.session import SessionLocal
from app.models.product import Product

def seed():
    db = SessionLocal()
    
    # Empty existing rows
    db.query(Product).delete()
    
    products = [
        {
            "name": "Eclipse Sneakers",
            "price": Decimal("129000.00"),
            "old_price": Decimal("135000.00"),
            "rating": Decimal("4.3"),
            "reviews_count": 140,
            "description": "Discover the perfect blend of style, comfort, and durability with our latest shoe collection — designed for everyday wear, but crafted to make a statement. Whether you're navigating city streets, heading to the office, or catching up with friends, these shoes are your go-to companion for every step.Made with premium materials and breathable lining, each pair ensures all-day comfort without compromising on design. The lightweight sole offers superior flexibility and shock absorption, reducing foot fatigue and keeping you energized throughout your day. Reinforced stitching and quality craftsmanship provide long-lasting wear, so your shoes look fresh—season after season.From modern minimalism to bold street-inspired looks, our collection is thoughtfully created to suit a variety of personal styles. Slip them on and experience a perfect fit, versatile design, and the confidence to move through life in comfort and style.",
            "material": "Leather",
            "product_type": "Slip-on",
            "heel_type": "Flat Heel",
            "available_sizes": "S, M, L, XL, XXL",
            "weight": "1.3 kg",
            "image_url": "https://i.pinimg.com/1200x/de/61/e3/de61e33fdd7a6e7f2c7bdef1f8ba9f20.jpg"
        },
        {
            "name": "Grvity Oxford Shoe",
            "price": Decimal("120000.00"),
            "old_price": Decimal("126000.00"),
            "rating": Decimal("4.3"),
            "reviews_count": 89,
            "description": "Discover the perfect blend of style, comfort, and durability with our latest shoe collection — designed for everyday wear, but crafted to make a statement. Whether you're navigating city streets, heading to the office, or catching up with friends, these shoes are your go-to companion for every step.Made with premium materials and breathable lining, each pair ensures all-day comfort without compromising on design. The lightweight sole offers superior flexibility and shock absorption, reducing foot fatigue and keeping you energized throughout your day. Reinforced stitching and quality craftsmanship provide long-lasting wear, so your shoes look fresh—season after season.From modern minimalism to bold street-inspired looks, our collection is thoughtfully created to suit a variety of personal styles. Slip them on and experience a perfect fit, versatile design, and the confidence to move through life in comfort and style.",
            "material": "Leather",
            "product_type": "Lace-up",
            "heel_type": "Block Heel",
            "available_sizes": "S, M, L, XL, XXL",
            "weight": "1.5 kg",
            "image_url": "https://i.pinimg.com/736x/8f/37/d1/8f37d10529035f5ec5ba434f638a069d.jpg"
        },
        {
            "name": "Flexora Boot",
            "price": Decimal("156000.00"),
            "old_price": Decimal("159000.00"),
            "rating": Decimal("4.1"),
            "reviews_count": 56,
            "description": "Discover the perfect blend of style, comfort, and durability with our latest shoe collection — designed for everyday wear, but crafted to make a statement. Whether you're navigating city streets, heading to the office, or catching up with friends, these shoes are your go-to companion for every step.Made with premium materials and breathable lining, each pair ensures all-day comfort without compromising on design. The lightweight sole offers superior flexibility and shock absorption, reducing foot fatigue and keeping you energized throughout your day. Reinforced stitching and quality craftsmanship provide long-lasting wear, so your shoes look fresh—season after season.From modern minimalism to bold street-inspired looks, our collection is thoughtfully created to suit a variety of personal styles. Slip them on and experience a perfect fit, versatile design, and the confidence to move through life in comfort and style.",
            "material": "Leather",
            "product_type": "Boot",
            "heel_type": "Flat Heel",
            "available_sizes": "S, M, L, XL, XXL",
            "weight": "1.8 kg",
            "image_url": "https://i.pinimg.com/1200x/e2/9d/ea/e29deab3081beb86dcea595ae53f485e.jpg"
        },
        {
            "name": "Boltrek Sports Shoe",
            "price": Decimal("96000.00"),
            "old_price": Decimal("105000.00"),
            "rating": Decimal("4.3"),
            "reviews_count": 210,
            "description": "Discover the perfect blend of style, comfort, and durability with our latest shoe collection — designed for everyday wear, but crafted to make a statement. Whether you're navigating city streets, heading to the office, or catching up with friends, these shoes are your go-to companion for every step.Made with premium materials and breathable lining, each pair ensures all-day comfort without compromising on design. The lightweight sole offers superior flexibility and shock absorption, reducing foot fatigue and keeping you energized throughout your day. Reinforced stitching and quality craftsmanship provide long-lasting wear, so your shoes look fresh—season after season.From modern minimalism to bold street-inspired looks, our collection is thoughtfully created to suit a variety of personal styles. Slip them on and experience a perfect fit, versatile design, and the confidence to move through life in comfort and style.",
            "material": "Mesh/Synthetic",
            "product_type": "Sports",
            "heel_type": "Flat Heel",
            "available_sizes": "S, M, L, XL, XXL",
            "weight": "0.9 kg",
            "image_url": "https://i.pinimg.com/736x/a3/7f/67/a37f672d2450ea71b25f6c73c22044df.jpg"
        },
        {
            "name": "Formal Movo Shoe",
            "price": Decimal("129000.00"),
            "old_price": Decimal("132000.00"),
            "rating": Decimal("4.1"),
            "reviews_count": 76,
            "description": "Discover the perfect blend of style, comfort, and durability with our latest shoe collection — designed for everyday wear, but crafted to make a statement. Whether you're navigating city streets, heading to the office, or catching up with friends, these shoes are your go-to companion for every step.Made with premium materials and breathable lining, each pair ensures all-day comfort without compromising on design. The lightweight sole offers superior flexibility and shock absorption, reducing foot fatigue and keeping you energized throughout your day. Reinforced stitching and quality craftsmanship provide long-lasting wear, so your shoes look fresh—season after season.From modern minimalism to bold street-inspired looks, our collection is thoughtfully created to suit a variety of personal styles. Slip them on and experience a perfect fit, versatile design, and the confidence to move through life in comfort and style.",
            "material": "Leather",
            "product_type": "Formal",
            "heel_type": "Block Heel",
            "available_sizes": "S, M, L, XL, XXL",
            "weight": "1.4 kg",
            "image_url": "https://www.needledust.com/cdn/shop/files/DSC0088_4a1fa983-3fca-4baa-a298-6b0041adbf7c_600x600_crop_center.jpg?v=1754734196"
        },
        {
            "name": "Flexora High Neck",
            "price": Decimal("138000.00"),
            "old_price": Decimal("144000.00"),
            "rating": Decimal("4.2"),
            "reviews_count": 105,
            "description": "Discover the perfect blend of style, comfort, and durability with our latest shoe collection — designed for everyday wear, but crafted to make a statement. Whether you're navigating city streets, heading to the office, or catching up with friends, these shoes are your go-to companion for every step.Made with premium materials and breathable lining, each pair ensures all-day comfort without compromising on design. The lightweight sole offers superior flexibility and shock absorption, reducing foot fatigue and keeping you energized throughout your day. Reinforced stitching and quality craftsmanship provide long-lasting wear, so your shoes look fresh—season after season.From modern minimalism to bold street-inspired looks, our collection is thoughtfully created to suit a variety of personal styles. Slip them on and experience a perfect fit, versatile design, and the confidence to move through life in comfort and style.",
            "material": "Suede/Leather",
            "product_type": "Sneaker",
            "heel_type": "Flat Heel",
            "available_sizes": "S, M, L, XL, XXL",
            "weight": "1.3 kg",
            "image_url": "https://i.pinimg.com/1200x/33/68/0d/33680d826e32891d6e1f6a6c30c00289.jpg"
        },
        {
            "name": "Runx Running Shoe",
            "price": Decimal("138000.00"),
            "old_price": Decimal("144000.00"),
            "rating": Decimal("4.4"),
            "reviews_count": 320,
            "description": "Discover the perfect blend of style, comfort, and durability with our latest shoe collection — designed for everyday wear, but crafted to make a statement. Whether you're navigating city streets, heading to the office, or catching up with friends, these shoes are your go-to companion for every step.Made with premium materials and breathable lining, each pair ensures all-day comfort without compromising on design. The lightweight sole offers superior flexibility and shock absorption, reducing foot fatigue and keeping you energized throughout your day. Reinforced stitching and quality craftsmanship provide long-lasting wear, so your shoes look fresh—season after season.From modern minimalism to bold street-inspired looks, our collection is thoughtfully created to suit a variety of personal styles. Slip them on and experience a perfect fit, versatile design, and the confidence to move through life in comfort and style.",
            "material": "Mesh",
            "product_type": "Sports",
            "heel_type": "Flat Heel",
            "available_sizes": "S, M, L, XL, XXL",
            "weight": "0.8 kg",
            "image_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS6pWJkWfzl2D5c285vQUaWCdCxZiUuJ9rKsGKGwXyHQU0LlZHX"
        },
        {
            "name": "Yono Loafers",
            "price": Decimal("153000.00"),
            "old_price": Decimal("156000.00"),
            "rating": Decimal("4.5"),
            "reviews_count": 150,
            "description": "Discover the perfect blend of style, comfort, and durability with our latest shoe collection — designed for everyday wear, but crafted to make a statement. Whether you're navigating city streets, heading to the office, or catching up with friends, these shoes are your go-to companion for every step.Made with premium materials and breathable lining, each pair ensures all-day comfort without compromising on design. The lightweight sole offers superior flexibility and shock absorption, reducing foot fatigue and keeping you energized throughout your day. Reinforced stitching and quality craftsmanship provide long-lasting wear, so your shoes look fresh—season after season.From modern minimalism to bold street-inspired looks, our collection is thoughtfully created to suit a variety of personal styles. Slip them on and experience a perfect fit, versatile design, and the confidence to move through life in comfort and style.",
            "material": "Leather",
            "product_type": "Slip-on",
            "heel_type": "Flat Heel",
            "available_sizes": "S, M, L, XL, XXL",
            "weight": "1.1 kg",
            "image_url": "https://i.pinimg.com/1200x/5a/3c/ee/5a3cee3137aeb0a6a542788182ae5e34.jpg"
        }
    ]
    
    for p in products:
        item = Product(**p)
        db.add(item)
    
    db.commit()
    print("Database seeded with 8 products!")
    db.close()

if __name__ == "__main__":
    seed()
