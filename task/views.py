from .serializer import TaskSerializer
from rest_framework import viewsets
from .models import Tasks
# Create your views here.
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Tasks.objects.all()
