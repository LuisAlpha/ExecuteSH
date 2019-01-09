var exec = require('ssh-exec');

var v_host ='172.30.27.9';

exec('/home/Audios/Shells/./test.sh',{
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

