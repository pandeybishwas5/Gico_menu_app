from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MenuItemViewSet
from .views import MenuItemListCreate

router = DefaultRouter()
router.register(r'menuitems', MenuItemViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('menuitems/', MenuItemListCreate.as_view(), name='menuitem-list-create'),
]