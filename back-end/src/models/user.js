const mongoose=require('mongoose');
const bcrypt =require('bcrypt')

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        require:true,
        trim:true,
        min:3,
        max:20
    },
    lastName:{
        type:String,
        require:true,
        trim:true,
        min:3,
        max:20
    },
    username:{
        type:String,
        require:true,
        trim:true,
        unique:true,
        index:true,
        lowercase:true,
        max:20
    },
    email:{
        type:String,
        require:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    hash_password:{
        type:String,
        required:true,
        min:8,
        max:20
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    contactNumber:{
        type:String
    },
    profilePicture:{type:String},

},{timestamps:true});

userSchema.virtual('password')
    .set(function(password){
        this.hash_password=bcrypt.hashSync(password,10)
    })
userSchema.method={
    authenticate:function(){
        return bcrypt.compare(password,this.hash_password)
    }
}

module.exports=mongoose.model('User',userSchema)