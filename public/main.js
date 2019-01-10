function DescargarTNS(event){
	fetch('/TNS',{method:"POST"})
	.then((response)=>{
		if(response.ok){
			Alert('Se Inicio el proceso de TNS');
			return;
		}
		throw new Error('Request Failed.');
	}).catch((error)=>{
		console.error(error);
	});
}

function DescargarIPSOS(event){
	fetch('/IPSOS',{method:"POST" })
	.then((response)=>{
		if(response.ok){
			Alert('Se inicio el proceso de IPSOS');
			return;
		}
		throw new Error('Request Failed.');
	}).catch((error)=>{
		console.error(error);
	});
}