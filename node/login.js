/**
 * Created by HP-ProBook on 22.01.2017.
 */
const MySQL = require('./db');

class loginHandler {
    static init(request, response){
        var data = request.body;
        MySQL.isAdmin(data).then((result)=>{
            response.send({'status':true});
        }).catch((err)=>{
            response.send({'status':false});
        });
    }
}

module.exports = loginHandler;