# from rest_framework import serializers
# from .models import Opera, OperaStatistic


# class OperaStatisticSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = OperaStatistic
#         fields = "__all__"


# class OperaSerializer(serializers.ModelSerializer):

#     statistics = OperaStatisticSerializer(
#         many=True,
#         read_only=True
#     )

#     class Meta:
#         model = Opera
#         fields = "__all__"


# class UnpaginateOperaSerializer(serializers.ModelSerializer):

    # statistics = OperaStatisticSerializer(
    #     many=True,
    #     read_only=True
    # )

    # class Meta:
    #     model = Opera
    #     fields = "__all__"
    
    
    
from rest_framework import serializers
from .models import OperaSection, OperaStatistic, WritterChirkut, OperaClient

class OperaSerializer(serializers.ModelSerializer):
    status = serializers.BooleanField(default=True)

    class Meta:
        model = OperaSection
        fields = "__all__"


class UnpaginateOperaSerializer(serializers.ModelSerializer):
    status = serializers.BooleanField(default=True)

    class Meta:
        model = OperaSection
        fields = "__all__"
    
  
class OperaStatisticSerializer(serializers.ModelSerializer):
    class Meta:
        model = OperaStatistic
        fields = "__all__"


class UnpaginateOperaStatisticSerializer(serializers.ModelSerializer):
    class Meta:
        model = OperaStatistic
        fields = "__all__"
        
class WritterChirkutSerializer(serializers.ModelSerializer):
    status = serializers.BooleanField(default=True)

    class Meta:
        model = WritterChirkut
        fields = "__all__"


class UnpaginateWritterChirkutSerializer(serializers.ModelSerializer):
    status = serializers.BooleanField(default=True)

    class Meta:
        model = WritterChirkut
        fields = "__all__"
        
        
class OperaClientSerializer(serializers.ModelSerializer):
    status = serializers.BooleanField(default=True)

    class Meta:
        model = OperaClient
        fields = "__all__"


class UnpaginateOperaClientSerializer(serializers.ModelSerializer):
    status = serializers.BooleanField(default=True)

    class Meta:
        model = OperaClient
        fields = "__all__"