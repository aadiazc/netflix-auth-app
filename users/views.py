from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import RegisterSerializer

# Vista de registro
class RegisterView(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Usuario creado'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Vista protegida de ejemplo (requiere token JWT)
class MovieListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        movies = [
            {'title': 'Matrix', 'year': 1999},
            {'title': 'Inception', 'year': 2010},
            {'title': 'Interstellar', 'year': 2014},
        ]
        return Response(movies)