function Finder(name,mail,data){
    for(var i=0;i<length(data);i++){
        if(mail==data){
            var message="Your"+mail+"is alredy in queue"
            return message
        }
        else{
            return addToqueue(mail,name)
        }
    }   
}
export default Finder
