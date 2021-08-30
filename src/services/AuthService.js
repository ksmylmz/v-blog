export default{
    users:[
        {
            id:1,
            name:"Kasım YILMAZ",
            email:"kasim-yilmaz@hotmail.com",
            password:"123456",
            locale:"TR"

        }
    ],
    checkUser(email,password)
    {
        try 
        {
            const user  = this.users.find(user=> user.email==email && user.password==password);
            if(user===undefined) throw "Wrong username or password";
            return {
                status:true,
                user:user
            };

        } catch (error) {
            console.log(error);
            return {
                status:false,
                error:error
            }
        }

    },
}