const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();
const { v4: uuidv4 } = require('uuid');  

exports.handler = async (event) => {
    const body = JSON.parse(event.body); 
    const id = uuidv4(); 

    const params = {
        TableName: process.env.TABLE_NAME,
        Item: {
            id: id, 
            name: body.name,
            email: body.email,
            message: body.message
        }
    };

    try {
        await dynamodb.put(params).promise(); 
        return {
            statusCode: 200,
            body: JSON.stringify({ 
                message: "Data inserted successfully", 
                id: id 
            }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Error inserting data", error }),
        };
    }
};
