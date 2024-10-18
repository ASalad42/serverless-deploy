# AWS Serverless Architecture (Deploying simple app)

![image](https://github.com/user-attachments/assets/eb207e1e-9eed-4ce8-9ad9-96b9cc3322ee)


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
- create simple static website for the api inputs using s3 static website and call the api gateway endpoint to write into the dynadmodb table
![image](https://github.com/user-attachments/assets/c5f506ab-30d8-4f21-ba0a-81c8012f403e)
![image](https://github.com/user-attachments/assets/d48be6a2-ad69-4560-a274-976de5f83302)
![image](https://github.com/user-attachments/assets/093264ac-950b-481f-9309-ae81965140e9)


- 
