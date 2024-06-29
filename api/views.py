from django.shortcuts import render
from rest_framework import status
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from menu.models import MenuItem, Category
from .serializers import MenuItemSerializer


class MenuListView(ListAPIView):
    queryset = MenuItem.objects.filter(archived=False)
    serializer_class = MenuItemSerializer
    # filter_backends = [DjangoFilterBackend, OrderingFilter]

    def list(self, request, *args, **kwargs):
        # name = request.GET.get('filter[name]', '')
        # min_price = float(request.GET.get('filter[minPrice]', 0))
        # max_price = float(request.GET.get('filter[maxPrice]', 0))
        # available = request.GET.get('filter[available]')
        # category_id = request.GET.get('category', None)
        # sort = request.GET.get('sort', 'date')
        # sort_type = request.GET.get('sortType', 'dec')
        # tags = request.GET.getlist('tags', [])

        queryset = MenuItem.objects.all()

        # if name:
        #     queryset = queryset.filter(name__icontains=name)
        # if min_price:
        #     queryset = queryset.filter(price__gte=min_price)
        # if max_price:
        #     queryset = queryset.filter(price__lte=max_price)
        # if available == 'false':
        #     pass
        # elif available == 'true':
        #     queryset = queryset.filter(available=True)
        # if free_delivery == 'true':
        #     queryset = queryset.filter(free_delivery=True)
        # if category_id:
        #     category_instance = Category.objects.get(id=category_id)
        #     category_serializer = CategorySerializer(instance=category_instance)
        #     subcategories = category_serializer.get_subcategories(category_instance)
        #     subcategory_ids = [subcategory['id'] for subcategory in subcategories]
        #     all_categories = [category_instance.id] + subcategory_ids
        #     queryset = queryset.filter(category__in=all_categories)
        # if sort == 'rating':
        #     queryset = queryset.annotate(avg_rating=Avg('feedbacks__rate'))
        #     queryset = queryset.order_by('-avg_rating' if sort_type == 'dec' else 'avg_rating')
        # elif sort == 'price':
        #     queryset = queryset.order_by('-price' if sort_type == 'dec' else 'price')
        # elif sort == 'reviews':
        #     queryset = queryset.annotate(feedbacks_count=Count('feedbacks'))
        #     queryset = queryset.order_by('-feedbacks_count' if sort_type == 'dec' else 'feedbacks_count')
        # elif sort == 'date':
        #     queryset = queryset.order_by('-date' if sort_type == 'dec' else 'date')

        serialized_items = self.get_serializer(queryset, many=True).data
        data = {
            'items': serialized_items,
        }

        return Response(data, status=status.HTTP_200_OK)
