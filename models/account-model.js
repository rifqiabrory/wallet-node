module.exports = (sequelize,DataType) => {
    const Account = sequelize.define('Account', {
        accountNumber:{
            field:'account_number',
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        accountName:{
            field:'account_name',
            type:DataType.STRING,
            required:true
        },
        openDate:{
            field:'open_date',
            type:DataType.DATE
        },
        balance:{
            field:'balance',
            type:DataType.DECIMAL,
            required:true
        },
        customerNumber:{
            field:'customer_number',
            type:DataType.INTEGER
        }
    },{
        tableName:'tbl_account',
        timestamps:false
    });
    return Account;
}