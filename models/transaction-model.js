module.exports = (sequelize,DataType) => {
    const Transaction = sequelize.define('Transaction', {
        idTransaction:{
            field:'id_transaction',
            type:DataType.INTEGER,
            autoIncrement:true,
            primaryKey:true,
        },
        anDebit:{
            field:'an_debit',
            type:DataType.INTEGER,
            allowNull:true
        },
        anCredit:{
            field:'an_credit',
            type:DataType.INTEGER,
            allowNull:true
        },
        amount:{
            field:'amount',
            type:DataType.DECIMAL,
            required:true
        },
        transactionType:{
            field:'transaction_type',
            type:DataType.INTEGER
        },
        accountNumber:{
            field:'account_number',
            type:DataType.INTEGER
        }
    },{
        tableName:'tbl_transaction',
        timestamps:false
    });

    return Transaction;
}