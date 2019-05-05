module.exports = (sequelize,DataType) => {
    const WalletAccount = sequelize.define('WalletAccount', {
        idWallet:{
            field:'id_wallet',
            type:DataType.INTEGER,
            autoIncrement:true,
            primaryKey:true,
        },
        accountNumber:{
            field:'account_number',
            type:DataType.INTEGER
        }
    },{
        tableName:'tbl_wallet_account',
        timestamps:false
    });

    return WalletAccount;
}