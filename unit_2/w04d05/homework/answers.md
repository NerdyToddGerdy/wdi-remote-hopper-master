# Answer Time

## HTTP Questions

1. What are the key differences between a server and a client?

A server is a computer that is always on and connected to the internet.  A client sends requests to get information from a server.  The server sends a return response back to the client.

2. What is an HTTP request? What are some protocols that people use when making a request?

An HTTP request is when your browser goes out and gets a file from a server.  FTP, SSH, GIT, FILE, HTTPS are some other protocols.

3. What is the request-response cycle?

- C  (Create Data) POST
- R  (Read Data) GET
- U  (Update Data) PUT/PATCH
- D  (Destroy Data) DELETE

You can make one of these four basic data manipulation requests to a server and the server will do what you say.

4. Describe each of the following HTTP verbs: GET, POST, PUT, DELETE

See above.

## Node Practice

1. What is a node package?

  A node package is a pre-made package of code written by somebody else that others can use to save time and energy in doing somebody elses work.

2. Give two examples of a node package.

  dice3d - loads 3d dice that roll on the screen.

  screen-saver-cli  - starts the screensaver via the command line

3. How do you initialize node package manager for a directory?

  in the command line, type: npm install <insert name of package here>

4. Which file will always appear in your directory when you do npm init?

  package.json

5. Research the node package 'Express' and explain why we might want to use it.

  It makes APIs easy to create.  



## Hungry for More?

1. Create folder and a .js file called npmtest.

  mkdir npmtest
  touch npmtest

2. install node package manager.

  npm init

3. modify the .json file so that you will be able to type "start"  in node to execute your npmtest file.



4. install the npm color package and require it in your npmtest file.



5. make the following sentence display in a zebra color: "Guess my favorite animal...".

  
