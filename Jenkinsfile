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
    parameters{
        string(name: "Image_Name", defaultValue: 'mongo-express-api', description: 'A mongo express api')
        string(name: "Image_Tag", defaultValue: 'latest', description: 'Mongo express api')
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
                    docker.build("${params.Image_Name}:${params.Image_Tag}")
                    def localImage = "${params.Image_Name}:${params.Image_Tag}"
                    def repositoryName = "mrkhris/${localImage}"
                    sh "docker tag ${localImage} ${repositoryName} "
                    docker.withRegistry('', JENKINS_DOCKER_CREDENTIAL) { 
                       def image = docker.image("${repositoryName}");
                       image.push()
                    }
                }
            }
        }
    }
}
