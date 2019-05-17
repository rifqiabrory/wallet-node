module.exports = (sequelize,DataType) => {
    const Account = sequelize.define('account', {
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
        }
    },{
        tableName:'tbl_account',
        timestamps:false
    });
    return Account;
}