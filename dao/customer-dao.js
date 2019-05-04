const {Customer,Account} = require('../utils/sequelize');

function getAll(callback,filter){
    console.log(`Filter : ${JSON.stringify(filter)}`);
    Customer.findAll({
        include:[{
            model:Account,
            as:'account'
        }],
        where:filter
    }).then(
        (customers) => {
            callback(null,customers);
        }
    )
}

function insert(data,callback){
    Customer.create({
        fullName:data.fullName,
        birthDate:data.birthDate,
        motherName:data.motherName,
        identityCardType:data.identityCardType,
        noIdCard:data.noIdCard,
        address:data.address,
        phoneNumber:data.phoneNumber,
        gender:data.gender,
        citizenship:data.citizenship,
        npwp:data.npwp,
        maritalStatus:data.maritalStatus,
        religion:data.religion,
        education:data.education,
        houseStatus:data.houseStatus,
        email:data.email,
        password:data.password,
        companyName:data.companyName,
        natureOfBusiness:data.natureOfBusiness,
        title:data.title,
        department:data.department,
        startDate:data.startDate,
        income:data.income,
        currentOccup:data.currentOccup,
        employStatus:data.employStatus,
        reason:data.reason,
        companyAddress:data.companyAddress,
        companyPhone:data.companyPhone,
    }).then(
        (customer) => {
            callback(null,customer);
        }
    )
}

module.exports = {
    getAll,
    insert
};