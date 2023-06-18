from .models import Task
from django.forms import ModelForm, TextInput, Textarea, EmailField, CheckboxInput
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


class TaskForm(ModelForm):
    class Meta:
        model = Task
        fields = ['title', 'task', 'done']
        widgets = {
            'title': TextInput(attrs={ 
                'class':'form-control',
                'placeholder':'Input title'

            }),
            'task': Textarea(attrs={ 
                'class':'form-control',
                'placeholder':'Input task'
            }),
	        'done': CheckboxInput(attrs={
			'class': 'form-check-input me-md-2',
			'type': 'checkbox',
			'value': 'done',
			'id': 'flexCheckDefault'
				      }),
	    
        }

class NewUserForm(UserCreationForm):
	email = EmailField(required=True)

	class Meta:
		model = User
		fields = ("username", "email", "password1", "password2")

	def save(self, commit=True):
		user = super(NewUserForm, self).save(commit=False)
		user.email = self.cleaned_data['email']
		if commit:
			user.save()
		return user