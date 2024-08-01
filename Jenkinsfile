// CODE_CHANGES = getGitChanges()
// need to install credential binding plugin in order for jenkins 
// to extract and load custom defined env with jenkins defined cred
def COLOR_MAP = [
    'FAILURE' : 'danger',
    'SUCCESS' : 'good'
]

pipeline{
    agent any
    environment{
        NEW_VERSION = '1.3.0'
        PUSHER_CHANNEL_CLUSTER = 'mt1'
        DOCKER_REGISTRY = "mrkhris/mongo-express-api" 
        JENKINS_DOCKER_CREDENTIAL = 'dockerHub' 
        dockerImage = '' 
    }
    parameters{
        string(name: 'VERSION', defaultValue:'', description:'version to deploy on render')
    }
    stages{
        stage("build") {
            steps{
                echo 'started building'
                echo "working on version ${NEW_VERSION}"
                sh 'npm install'
                // sh 'npm run lint:check' 
                // addeddsomething here
            }
        }
        stage("test") {
            steps{
                script{
                    unstable("still have some configuration to make here")
                    echo 'started testing'
                    // sh 'npm run test'
                }
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
        stage("deploy") {
            steps{
                echo 'started deploying'
                echo 'syntax to declare a single use credential(of type secret text) here'
                echo 'test credential accessing'
                withCredentials([
                    string(credentialsId: 'PUSHER_CHANNEL_APP_ID', variable: PUSHER_APP),
                    usernamePassword(credentials:'my-user-cred', usernameVariable: 'USER', passwordVariable: 'PWD')
                ]){
                    echo "my secret is ${PUSHER_APP}"
                    sh "echo ${USER} ${PWD}"
                }
            }
        }
    }   
    post{
        always{
            echo 'Slack Notifications'
            slackSend(
                channel: '#pipeline-channel',
                color: COLOR_MAP[currentBuild.currentResult],
                message: "Find Status of Pipeline:- ${currentBuild.currentResult} ${env.JOB_NAME} ${env.BUILD_NUMBER} ${BUILD_URL}"
            ) 
        }
    }
}

// ====== How to add more control ===============
// BRANCH_NAME = env.GIT_BRANCH
// pipeline{
//     tools{
//         // maven 
//     }
//     stages{
//         stage{
//             when{
//                 expression {
//                     // BRANCH_NAME == 'features' && CODE_CHANGES == true
//                 }
//             }
//         }
//     }
//     post{
//         always{   
//         }
//         success{
//         }
//         failure{
//         }
//     }
// }
//first way
// stage{
//     steps{
//         script{
//             sh 'npm install'
//         }
//     }
// }
//second way
// stage{
//     steps{
//         sh 'npm install'
//     }
// }
