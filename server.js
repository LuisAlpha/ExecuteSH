const express = require('express');
const exec = require('ssh-exec');



const app = express();
app.use(express.static('public'));

var host_v = '172.30.27.9';

app.listen(8080, () =>{
	console.log('listening on 8080');
});

app.get('/', (req, res)=>{
	res.sendFile(__dirname + '/index.html');
});

app.post('/TNS', (req, res)=>{

	exec('/home/Audios/Shells/./TNS_ren.sh',{
		user: 'root',
		host: '172.30.27.9',
		password:'4lc0mAdm'
	}).pipe(process.stdout, function(err, data){
		if(err) {
			console.log(v_host);
			console.log(err);
		}
		console.log(data);
	});

	res.sendStatus(201);
});

app.post('/IPSOS', (req, res)=>{

	exec('/home/Audios/Shells/./IPSOS_ren.sh',{
		user: 'root',
		host: '172.30.27.9',
		password:'4lc0mAdm'
	}).pipe(process.stdout, function(err, data){
		if(err) {
			console.log(v_host);
			console.log(err);
		}
		console.log(data);
	});

	res.sendStatus(201);
});