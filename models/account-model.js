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
            type:DataType.STRING
        },
        balance:{
            field:'balance',
            type:DataType.DECIMAL
        }

    },{
        tableName:'tbl_account',
        timestamps:false
    });
    return Account;
}