// IMPORTS MODULOS NPM
const RosApi = require('node-routeros').RouterOSAPI;

const controllers = {}

// MIKROTIK CONNECTION
const conn = new RosApi({
    host: process.env.HOST,
    user: process.env.USERR,
    password: process.env.PASSWORD,
    keepalive:true
});

controllers.login_In = ( async (req, res)=>{

    const ip = req.connection.remoteAddress;
    const user = req.params.user;
    const userPassword = req.params.password;

    conn.connect().then(() => {
        const clave = '10.0.8.168'
        // Connection successful
        console.log('Conectado a mikrotik')

        // Login in mikrotik
        conn.write("/ip/hotspot/active/login", [
            `=user=${user}`,
            `=password=${userPassword}`,
            `=ip=${clave}`
        ]).then((data) => {

            // Session started
            return res.send('Sesión iniciada correctamente');
        }).catch((err) => {
            
            // Error trying to log in
            return res.send(err);
        });
    }).catch((err) => {

        // Got an error while trying to connect
        return res.send('Obtuve un error al intentar conectar a mikrotik... Porfavor vuelva a intentar');
    });    

});

module.exports = controllers;