function DescargarTNS(){
	fetch('/TNS',{method:"POST"})
	.then((response)=>{
		if(response.ok){
			alert('Se Inicio el proceso de TNS');
			return;
		}
		throw new Error('Request Failed.');
	}).catch((error)=>{
		console.error(error);
	});
}

function DescargarIPSOS(){
	fetch('/IPSOS',{method:"POST" })
	.then((response)=>{
		if(response.ok){
			alert('Se inicio el proceso de IPSOS');
			return;
		}
		throw new Error('Request Failed.');
	}).catch((error)=>{
		console.error(error);
	});
}

setTimeout(function(){
	DescargarTNS();
	DescargarIPSOS();
},1000000);