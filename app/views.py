from django.shortcuts import render,redirect

# Create your views here.
def IndexPage(request):
    return render(request, "app/index.html")

def GetManualEmail(request):
    if request.method == "POST":
        emails = request.POST['email']
        emlist = emails.split(",")
        subject = request.POST['subject']
        message = request.POST['message']
        print(emlist)
        return redirect("/")
