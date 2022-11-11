from django.conf import settings
from django.core.mail import EmailMessage
from django.template.loader import render_to_string
from os.path import join as join_path


def send_user_email(user_email, user_name):
    message = render_to_string(
        join_path('acknowledge_user_email.html'), {
            'user_name': user_name,
        })
    invitation_mail = EmailMessage(
        "Congratulations! We've recieved your details",
        message,
        to=[user_email, ],
        from_email="noreply@kingogunremifoundation.com",
    )
    invitation_mail.content_subtype = 'html'
    invitation_mail.send()

    return True
