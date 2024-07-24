pipeline{
    agent any
    stages{
        stage("build") {
            steps{
                echo 'started building'
                sh 'npm install'
                sh 'npm build'
            }
        }
        stage("test") {
            steps{
                echo 'started testing'
            }
        }
        stage("deploy") {
            steps{
                echo 'started deploying'
            }
        }
    }   
}
