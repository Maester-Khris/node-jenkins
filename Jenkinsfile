pipeline{
    // which slave should execute the build. example: { label 'dev'}
    agent any
    environment{
        NEW_VERSION = '1.3.0'
        PUSHER_CHANNEL_CLUSTER = 'mt1'
        DOCKER_REGISTRY = "mrkhris/mongo-express-api" 
        JENKINS_DOCKER_CREDENTIAL = 'dockerHub' 
        dockerImage = '' 
    }
    stages{
        stage('Build and test'){
            steps{
                echo 'Build & test'
                // sh 'npm install'
                // sh 'npm run test'
            }
        }
        stage("Docker Image deployment") {
            steps{
                script{
                    echo 'started dockerhub integration'
                    dockerImage = docker.build registry + ":$BUILD_NUMBER" 
                    docker.withRegistry('', JENKINS_DOCKER_CREDENTIAL) { 
                        dockerImage.push() 
                    }
                }
            }
        }
    }
}
