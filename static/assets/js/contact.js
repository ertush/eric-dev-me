const onSubmit = (e) => {
   
    e.preventDefault();
    const formData = {}

    formData['name'] = document.name.target.value
    formData['email'] = document.email.target.value
    formData['subject'] = document.subject.target.value
    formData['message'] = document.message.target.value
    formData['consent'] = document.message.target.value

    console.log(formData)

    document.contactForm.action = "/thank-you"
}