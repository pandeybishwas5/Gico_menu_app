from django.urls import path
from menu.views import MenuListView, MenuItemDetailView, TagView, BasketAPIView, OrderAPIView, OrderDetailAPIView

app_name = 'api'

urlpatterns = [
    path('menu/', MenuListView.as_view(), name='menu_api'),
    path('menu/<int:id>/', MenuItemDetailView.as_view(), name='menu_detail'),
    path('tags/', TagView.as_view(), name='tags'),
    path('basket/', BasketAPIView.as_view(), name='basket'),
    path('basket/<int:id>/', BasketAPIView.as_view(), name='basket_item'),
    path('order/', OrderAPIView.as_view(), name='order_list'),
    path('order/<int:id>/', OrderDetailAPIView.as_view(), name='order_detail'),  # Note the view change here
]
