var email;
var password;

function handleSubmit(event) {
    event.preventDefault();
    email = event.target.email.value
    password = event.target.password.value
    if(email == "" || password == "") {
        alert("tüm alanları doldurunuz!")
    }else {
        axios.post('http://192.46.229.131/auth/login',{
           email: email,
           password: password
        },
        {headers: {'Content-Type': 'application/json'}
     }).then(res => {
         console.log('res =>', res)
         if (res.status == 200 && res.data.status) {
            alert('Kayıt başarılı!')
          }
     }).catch(err => {
         console.log('eror =>', err)
     })
    }
}
   