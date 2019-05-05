module.exports = (sequelize,DataType) => {
    const Wallet = sequelize.define('Wallet', {
        idWallet:{
            field:'id_wallet',
            type:DataType.INTEGER,
            autoIncrement:true,
            primaryKey:true,
        },
        description:{
            field:'description',
            type:DataType.STRING,
            required:true,
            allowNull:false
        },
        createdDate:{
            field:'created_date',
            type:DataType.DATE
        },
        accountNumber:{
            field:'account_number',
            type:DataType.INTEGER
        }
    },{
        tableName:'tbl_wallet',
        timestamps:false
    });

    return Wallet;
}