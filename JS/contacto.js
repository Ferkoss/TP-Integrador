const botonEnviar = document.getElementById('button');
const limpiar=document.getElementById("limpiar")
const nombre=document.getElementById("from_name")
const mail=document.getElementById("email_id")
const mensaje=document.getElementById("message")





/*document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_l0x5k8k';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
*/

/*
emailjs.send("service_n2lxghc","template_l0x5k8k",{
  from_name: nombre.value,
  message: mensaje.value,
  email_id: mail.value,
  to_email: "fermkoss@gmail.com",
  });
*/



/*
botonEnviar.addEventListener("submit",()=>{

  emailjs.send("service_n2lxghc","template_l0x5k8k",{
    from_name: "ghfghf",
    message: "hola",
    email_id: "asdasd@sadasd",
    to_email: "fermkoss@gmail.com",
  })
})
*/




botonEnviar.addEventListener("click",()=>{
emailjs.send("service_n2lxghc","template_l0x5k8k",{
  
  from_name: nombre.value,
  message: mensaje.value,
  email_id: mail.value,
  to_email: "fermkoss@gmail.com"
  });

  emailjs.send("service_n2lxghc","template_l0x5k8k",{
    from_name: nombre.value,
    message: mensaje.value,
    email_id: mail.value,
    to_email: "fermkoss@gmail.com"
    });
  
  limpiarInput()
})


try {

}catch(error){}


limpiar.addEventListener("click",limpiarInput=()=>{
    nombre.value=""
    mail.value=""
    mensaje.value=""
})