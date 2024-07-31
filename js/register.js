function validaCPF(){   
    var ao_cpf = document.forms.register.cpf.value; 
    var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/;     
    ao_cpf = ao_cpf.replace( /(\d{3})(\d)/ , "$1.$2");
    ao_cpf = ao_cpf.replace( /(\d{3})(\d)/ , "$1.$2");
    ao_cpf = ao_cpf.replace( /(\d{3})(\d{1,2})$/ , "$1-$2");            
    var valorValido = document.getElementById("cpf").value = ao_cpf;
  }