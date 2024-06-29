from rest_framework import serializers
from menu.models import MenuItem, Tag


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'name']


class MenuItemSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)

    class Meta:
        model = MenuItem
        fields = ['id',
                  'name',
                  'price',
                  'discount',
                  'preview',
                  'tags',
                  ]
