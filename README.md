# AWS Serverless Architecture (Deploying simple app)

- Write IaC for serverless stack using aws sam template
- use github actions to deploy the SAM template to aws account
![image](https://github.com/user-attachments/assets/a6fc46ab-eccc-404b-a5c7-ddacf01b73e3)
![image](https://github.com/user-attachments/assets/ff3820a5-697a-4c58-b952-ec9ef1bbaebd)
- specify lambda code in app folder to write into dynamodb table based on the request sent to the API gateway endpoint 
![image](https://github.com/user-attachments/assets/e25da601-c674-4dea-b8da-ac73bf02c44a)
- Once serverless stack is deployed, go to AWS API Gateway to get URL (the endpoint for the API)
![image](https://github.com/user-attachments/assets/a0e3202d-02e2-459f-9205-0cd0ddd4955c)
- Make POST request to API Gateway endpoint using Postman
![image](https://github.com/user-attachments/assets/d73dfb88-5e6d-4cd7-814b-f20f6af647dd)
- Check dynamodb table to see if the request was put into the table 
![image](https://github.com/user-attachments/assets/dfb8aeca-a1c9-49b8-b698-bb14928af59b)
