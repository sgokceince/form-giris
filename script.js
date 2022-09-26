
var name;
var surname;
var username;
var email;
var password;


function handleSubmit(event) {
    event.preventDefault();
    name = event.target.name.value
    surname = event.target.surname.value
    username = event.target.username.value
    email = event.target.email.value
    password = event.target.password.value
    if (name == "" || surname == '' || username == '' || email == '' || password == '') {
        alert('Tüm alanları eksiksiz doldurunuz!')
    } else {
      axios.post('http://192.46.229.131/auth/register', {
     name: name,
     surname: surname,
     username: username,
     email: email,
     password: password
    },
      {headers: {'Content-Type': 'application/json'}
    }).then(res => {
      console.log('res =>', res)
      if (res.status == 200 && res.data.status) {
        alert('Kayıt başarılı!')
      }
    }).catch(error => {
      console.log('error =>', error)
    })
    }

}









