module.exports = (sequelize,DataType) => {
    const TransactionType = sequelize.define('TransactionType', {
        transactionType:{
            field:'transaction_type',
            type:DataType.INTEGER,
            autoIncrement:true,
            primaryKey:true,
        },
        description:{
            field:'description',
            type:DataType.STRING,
            required:true
        }
    },{
        tableName:'tbl_transaction_type',
        timestamps:false
    });

    return TransactionType;
}