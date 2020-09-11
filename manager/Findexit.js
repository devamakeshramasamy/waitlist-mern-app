function Finder(name,mail,data){
    for(var i=0;i<length(data);i++){
        if(mail==data){
            var message="Your"+mail+"is alredy in queue"
            return message
            // and re-diract to referal page
        }
        else{
            referalVerfication()
            return addToqueue(mail,name)
        }
    }   
}
function addToqueue(){
    
}
module.exports=Finder
