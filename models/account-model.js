module.exports = (sequelize,DataType) => {
    const Account = sequelize.define('Account', {
        accountNumber:{
            field:'accountNumber',
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        accountName:{
            field:'accountName',
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