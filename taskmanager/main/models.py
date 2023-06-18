from django.db import models

class Task(models.Model):
    title = models.CharField('title', max_length=50)
    task = models.TextField('task')
    done = models.BooleanField('done', default=False)

    def __str__(self):
        return self.title
    
    #* change name in  admin panel
    #class Meta:
    #    verbose_name = 'Uloha'
    #    verbose_name_plural = 'Ulohy'
