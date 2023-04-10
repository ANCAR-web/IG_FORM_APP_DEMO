const enviar = document.getElementById("submit");
enviar.addEventListener("click",(e)=>{
    e.preventDefault();
    //tomar las variables de los inputs
    const cliente = document.getElementById("cliente").value;
    const fecha = document.getElementById("fecha").value;
    const telefono = 96613735;
    const codigo = document.getElementById("codigo").value;
    const servicio = document.getElementById("servicio").value;
    const resp = document.querySelector("#respuesta")

    resp.classList.remove("fail");
    resp.classList.remove("send");

    const url = `https://api.whatsapp.com/send?phone=504${telefono}&text=
		*Asunto-Codigo-SIG-N*%0A
		*Ingeneria Gerencial*%0A%0A
		*Nombre de la persona que solicito servicio*%0A
		${cliente}%0A
		*Fecha de la solicitud*%0A
		${fecha}%0A
    *informacion relevante sobre tu predio*%0A
		${codigo}%0A
		*¿Cuál es el servicio que se desea realizar?*%0A
		${servicio}`;

  if (cliente === "" || fecha === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu solcitud, ${cliente}`;

  window.open(url);
   

});
 