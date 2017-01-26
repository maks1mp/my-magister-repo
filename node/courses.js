/**
 * Created by HP-ProBook on 22.01.2017.
 */
const MySQL = require('./db');

class Courses {
    static get(request, response){
        MySQL.getCourses().then((result)=>{
           response.send(result);
        });
    }
    static create(request, response){
        let data = request.body;
        MySQL.createCourse(data).then((res)=>{
            response.send({'status': true});
        }).catch((err)=>{
           console.log(err);
        });
    }
    static edit(request, response){
        let data = request.body;
        MySQL.editCourse(data).then(()=>{
            response.send({status:true});
        }).catch(function(){
            response.send({status:false});
        });
    }
}

module.exports = Courses;