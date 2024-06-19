# Raidiam - Cypress Assessment


<a name="readme-top"></a>


[![LinkedIn][linkedin-shield]][linkedin-url]



  <h2 align="center">How to run this automation testing</h2>


## About The Project

This is a test assessment for Raidiam Company which contains the API testing provided by Cypress with Postman assistance and the UI testing. This readme will cover exactly how we can run the automation testing locally and on pipeline using Github Actions

Steps that this readme file will cover:
* Frameworks, tools used on the project
* Commands on how to run locally
* Commands on how to run on Github Actions CI


### Built With

This section is showing all the frameworks and tools used to run the automation properly. BDD Cucumber was also used, but was not inserted on icon images.

* ![Cypress.IO]
* ![Git]
* ![GitHub]
* ![NPM]
* ![Postman]
* ![Yarn]


## Getting Started

This section will cover all the steps adopted to start the project until running it locally and on pipeline as mentioned earlier. So the first part is regarding the process to run locally and the second part is on pipeline.

### Initial configuration

The first step was to downgrade the node.js version on my computer which was changed from node v22 to v16.13.0 in order to run the server locally and open the application recommended on the assessment that is straightforward. You can access the repo related to  the assessment [here](https://github.com/CaiqueCoelho/vue-realworld-example-app) 
* First, download node js to get node and npm. If you are in a Mac computer, open the terminal and run:
  ```sh
  brew install nvm

  mkdir ~/.nvm

  export NVM_DIR="$HOME/.nvm"
  [ -s "$(brew --prefix)/opt/nvm/nvm.sh" ] && . "$(brew --prefix)/opt/nvm/nvm.sh" # This loads nvm
  [ -s "$(brew --prefix)/opt/nvm/etc/bash_completion.d/nvm" ] && . "$(brew --prefix)/opt/nvm/etc/bash_completion.d/nvm" # This loads nvm bash_completion

  nvm list-remote # You will see the v16.13.0 required to run the server

  nvm install v16.13.0

  nvm use v16.13.0
  
  ```
* Second, if it's reasonable to do so, create a separate directory to run the automation
  ```sh
  
  mkdir cypressRaidiam
  
  ```
* Third, open VSCode directly from the terminal on the directory created by running
  ```sh
  cd cypressRaidiam
  
  code .
  
  ```

### Running Locally

Below is all the necessary steps to run the automation using Cypress.

* initiating NPM
  ```sh
  npm init
  ```
* Installing Cypress
  ```sh
  npm install cypress --save-dev
  ```
* Installing Cucumber plugin
  ```sh
  npm install --save-dev cypress-cucumber-preprocessor
  ```
Next, after all necessary coding process to access the required objectives of this test assessment, it's required to run a command to open the spec files on Cypress Interface
* Opening Cypress
  ```sh
  npx cypress open
  ```
* VERY IMPORTANT! If you are running this finished project for the first time, all you need to do is to run the commands below that will open the project and install all the required dependencies
  ```sh
  git clone https://github.com/ulisserax/cyRaidiam.git
  ```
  ```sh
  npm install
  ```

### Running with Github Actions

1. Open the [repository](https://github.com/ulisserax/cyRaidiam)
2. Search for "Actions" button
3. You will see some pipelines that has already been executed
4. Click on "Run Pipeline"
5. You will be able to see that the pipeline will start to run
6. On the repo, you can take a look on the .yml file created that it's ready to use. Running directly from the project, as I didn't install with the server project in Vue, it will not work. However, if you run with the project, all the commands will work and should run the project (I HOPE!)


## THANK YOU!

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/ulisses-costa-filho-43a93a142/
[Cypress.IO]: https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e
[Git]: https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white
[GitHub]: https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white
[GitLab]: https://img.shields.io/badge/gitlab-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white
[NPM]: https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white
[Postman]: https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white
[Yarn]: https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white
