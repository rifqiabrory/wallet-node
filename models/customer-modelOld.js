module.exports = (sequelize,DataType) => {
    const Customer = sequelize.define('Customer', {
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
            field:'birthDate',
            type:DataType.DATEONLY
        },
        username:{
            field:'username',
            type:DataType.STRING
        },
        password:{
            field:'password',
            type:DataType.STRING
        }

    },{
        tableName:'tbl_customer',
        timestamps:false
    });
    return Customer
}