import django_filters
import logging
from rest_framework import serializers
from myauth.models import CustomUser
from decimal import Decimal

logger = logging.getLogger(__name__)


class UserSerializer(serializers.ModelSerializer):
    fullName = serializers.SerializerMethodField()
    avatar = serializers.SerializerMethodField()

    class Meta:
        model = CustomUser
        fields = ['fullName', 'phone', 'avatar']

    def get_fullName(self, obj):
        return f"{obj.first_name} {obj.last_name}"

    def get_avatar(self, obj):
        if obj.avatar:
            return {
                'src': obj.avatar.url,
                'alt': 'Avatar Image'
            }
        return None


class ChangePasswordSerializer(serializers.Serializer):
    currentPassword = serializers.CharField(required=True)
    newPassword = serializers.CharField(required=True)


class AvatarSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['avatar']
