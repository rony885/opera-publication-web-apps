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


class OperaStatisticSerializer(serializers.ModelSerializer):
    class Meta:
        model = OperaStatistic
        exclude = ["opera"]
        # or fields = ["id", "count", "label", "suffix", "created_at", "updated_at"]


class OperaSerializer(serializers.ModelSerializer):
    statistics = OperaStatisticSerializer(
        many=True,
        read_only=True
    )

    class Meta:
        model = OperaSection
        fields = [
            "id",
            "status",
            "title",
            "description",
            "image",
            "features_one",
            "features_two",
            "features_three",
            "features_four",
            "opera_video",
            "statistics",      # ← Statistics will appear here
            "created_at",
            "updated_at",
        ]


class UnpaginateOperaSerializer(serializers.ModelSerializer):
    statistics = OperaStatisticSerializer(
        many=True,
        read_only=True
    )

    class Meta:
        model = OperaSection
        fields = [
            "id",
            "status",
            "title",
            "description",
            "image",
            "features_one",
            "features_two",
            "features_three",
            "features_four",
            "opera_video",
            "statistics",      # ← Statistics will appear here
            "created_at",
            "updated_at",
        ]
        
        
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