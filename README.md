# 518_assignment_2

The link of the website hosted :<a href = "http://44.202.40.217:3000/"> 518 assingment-2 </a> <br/>
Recorded video : <a href = "https://albany.zoom.us/rec/share/IUK6HZ_AkSIhRXR1ZEiZc6nGY3S3jW-LA9vx_fKWkt5M833MjT0mQZ8WRFusLMWn.mVG1MUnkid8PpcdW?startTime=1665363058000"> video submission of the assignement </a>
<p>Passcode: 5G.0$Mah</p>

---
# Dev structutre:

1. Programming language - Client side: Node.js, React framework. <br/>
2. Programming language - server side: express js <br/>
3. Styling: Bootstrap V5 <br/>
4. Hosting service: AWS EC2 <br/>
5. IDE: VSCode, AWS console <br/>
6. VSC: Github <br/>
  
---
# Development steps.
Step - 1: building Client side of the website:

Part 1: Start with the creating a React app, import bootstrap styling for javascript and design a home webpage with a form that takes name and description which is already set to a default information while a user can change the information. Used bootstrap <a href="https://getbootstrap.com/docs/4.0/components/forms/">form</a> and <a href="https://getbootstrap.com/docs/5.0/components/navbar/">Nav</a> 
which helps developer can use to import bootstrap predefined styling.

<img src="/Screenshot 2022-10-10 19.35.48.png" />

Part 2: add.js, a page where user enters 2 numbers, where we return addition of the two number. while it returns 2 answers one will be resulted from javascript direct edition, and other will be resulted from the express.js server. Making it a good practise of hosting server in the EC2 AWS.

<img src="/Screenshot 2022-10-10 19.36.00.png" />

part 3: third party API like NEWS Links to the users, used <a href = "https://rapidapi.com/hub">Rapid API</a> for displaying links.

<img src="/Screenshot 2022-10-10 19.36.07.png" />

Step - 2: building server side of the website:

Install express and express-generator, edit the index file in routes with the server side code of the. make sure the URL looks the same as what it looks when you initiate the call. install cors on the server side files and make a instance of it in the code block.

Step-3: Calling API

Used Rapid API to call the API links while its rest end api, they are made for just testing on click it will not be directed to any new pages as they arent completely connected rather made to generate new news links on clicks.

---
# Deployment process:
Step 1: Create a AWS instance of EC2 in console [expected to have a AWS account setted up] <br>
Step 2: On the process of creation we do download a key file with extention .pem we edit the security and link it with ssh call.<br>
Step 3: Once connected install pm2 globally, after installing clone the project repository and deploy your react app [both client and server] <br>

--- 
# Code blocks 
1. React app
```
    npx create-react-app my-app //create react app
  
    import 'bootstrap/dist/css/bootstrap.css'; //import bootstrap v5
  
    npm install express --save  //installing express
   
    npx express-generator --view ejs //intializing the server 
   
    npm install --save cors //server side cors
   
    app.use(cors()); // initializign cors
     
```

2. Deployement
 ```
 ssh -i ../key.pem ubuntu@amazon link 
 
 //in my case 
 ssh -i ./key.pem ubuntu@ec2-44-202-40-217.compute-1.amazonaws.com
 
 //clone the repo
 git clone "<git repo url>" //might ask for authentication use personal tokens to have smooth processing.
 
 //once connected succesfully.
 npm install pm2@latest -g // in both client and server folders
 
 npm install -g serve // to host the server 

// in server 
pm2 start build/www // starting your server on given port so you wont override ports -- do edit the port mine is 3001 for server and 3000 for client
 
 //in client
 npm run build // to create a deployment folder
 
 pm2 serve build 3000 -spa // to serve the build
 
 //this will make the website online when you add these ports in security tab of AWS EC2 instance console.
 
 
 
 //if you want to update
 // stop all instance and start again
 pm2 stop all // to stop all the instances.
 ```

---

# Overall experience: 
It was pretty good to use AWS which is one of the leading cloud based service, beign expirience on github hosting, it was fun to expirience something new and more efficint allocation.
Most enjoyed part was the code deployed is from github so there is the most minimal chance of losing data or progress. 

---
# Must remember things in the process:
On every edit do push to gihub pull it in the console and do run build to update the code on pm2. <br/>
Make sure the securities of key.pem file are edited to add to access the file. <br/>
Make srure you add the ports of server and client in AWS EC2 security console. <br/>

--- 
Thank you 

Special thanks to <a href="https://github.com/ninadpchaudhari?tab=repositories">Ninand Chaudhari</a> for his references and introducing new concepts in a smooth fashion.

Here is Ninand project reference : <a href = "https://github.com/ninadpchaudhari/React-Tutorial"> Checkout</a> for detailed view on this.


