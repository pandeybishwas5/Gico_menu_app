from django.shortcuts import render
from rest_framework import status
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from menu.models import MenuItem, Category
from .serializers import MenuItemSerializer


class MenuListView(ListAPIView):
    queryset = MenuItem.objects.filter(archived=False, available=True)
    serializer_class = MenuItemSerializer
    # filter_backends = [DjangoFilterBackend, OrderingFilter]

    def list(self, request, *args, **kwargs):
        category = request.data.get('category', None)

        queryset = MenuItem.objects.all()

        if category:
            print(category)
            category_instance = Category.objects.get(name=category)
            queryset = queryset.filter(category=category_instance)

        serialized_items = self.get_serializer(queryset, many=True).data
        data = {
            'items': serialized_items,
        }

        return Response(data, status=status.HTTP_200_OK)
