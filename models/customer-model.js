const bcrypt = require('bcrypt');
module.exports = (sequelize,DataType) => {
    const Customer = sequelize.define('customer', {
        customerNumber:{
            field:'customer_number',
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        firstName:{
            field:'firstname',
            type:DataType.STRING
        },
        lastName:{
            field:'lastname',
            type:DataType.STRING
        },
        birthDate:{
            field:'birthdate',
            type:DataType.DATEONLY
        },
        username:{
            field:'username',
            type:DataType.STRING
        },
        password:{
            field:'password',
            type:DataType.STRING,
            required:true,
            len:[5,10]
        }
    },{
        tableName:'tbl_customer',
        timestamps:false
    });
    
    Customer.generateHash = function(password){
        return bcrypt.hashSync(password,bcrypt.genSaltSync(10),null);
    }

    Customer.prototype.validPassword = function(password){
        return bcrypt.compareSync(password,this.localPassword);
    }

    return Customer;
}