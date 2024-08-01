pipeline{
    // which slave should execute the build. example: { label 'dev'}
    agent any

    stages{
        stage('Checkout Code'){
            steps{
                git url:'https://github.com/Maester-Khris/node-jenkins.git', branch: 'master'
                checkout scm
            }
        }
        stage('Build and test'){
            steps{
                echo 'Build & test'

                // sh 'npm install'

                // sh 'npm run test'
            }
        }
        stage('Build and push Docker images'){
            steps{
                echo 'dockr integration'
                // sh 'docker build -t mrkhris/node-jenkins:latest .'

                // withCredentials([
                //     usernamePassword(credentialsId: 'dockerHub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')
                // ]){
                //     sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
                //     sh 'docker image push mrkhris/node-jenkins:latest'
                // }
            }
        }
    }
}
