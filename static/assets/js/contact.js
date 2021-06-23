
function onSubmit(){
    
    // $('#contactForm').enctype = 'application/json';

    const formData = {
        name: $('input[name="name"]').val(),
        email:  $('input[name="email"]').val(),
        subject:  $('select[name="subject"]').val(),
        message:  $('textarea[name="message"]').val(),
        consent:  $('input[name="consent"]').prop('checked'),
    }   

    // `${process.env.BASE_URL}/user.json?auth=${process.env.BASE_URL}`

    // const url = 'https://eric-dev-me-default-rtdb.firebaseio.com/users.json?auth=zRg95NzbxDT6t9jqIm305uQyNaAjYMp4qSLClLvu';
    // const xhr = new XMLHttpRequest();

    // xhr.open('POST', url, true);
    // xhr.setRequestHeader('Content-Type', 'application/json')

    // xhr.send(formData)

    // fetch(url, 
    // {
    //     method: 'POST',
    //     body: JSON.stringify(formData),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }
    // )
    // .then(res => console.log(res))
    // .catch(e => console.log(e.message))

  }