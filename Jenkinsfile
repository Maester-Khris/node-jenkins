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
        PUSHER_CREDENTIALS = credentials('PUSHER_CHANNEL_APP_ID')
    }
    parameters{
        string(name: 'VERSION', defaultValue:'', description:'version to deploy on render')
    }
    stages{
        stage("build") {
            steps{
                echo 'started building'
                echo "working on version ${NEW_VERSION}"
                echo "build pusher channel app id ${PUSHER_CREDENTIALS}"
            }
        }
        stage("test") {
            //define the require condition to execute following scripts
            when{
                expression{
                    BRANCH_NAME == 'features'
                }
            }
            steps{
                echo 'started testing'
                sh 'npm run lint:check'
                sh 'npm run test'
            }
        }
        stage("deploy") {
            steps{
                echo 'started deploying'
                echo 'syntax to declare a single use credential(of type secret text) here'
                withCredentials([
                    string(credentialsId: 'PUSHER_CHANNEL_APP_ID', variable: PUSHER_APP)
                ]){
                    echo "my secret is ${PUSHER_APP}"
                }

                echo 'same of type username password'
                withCredentials([
                    usernamePassword(credentials:'my-user-cred', usernameVariable: USER, passwordVariable: PWD)
                ]){
                    sh "echo ${USER} ${PWD} "
                }
            }
        }
    }   
    // used to define build status or build status change
    post{
        always{
            echo 'Slack Notifications'
            // no matter what happens to the build will haoen
            slackSend(
                channel: '#pipeline-channel',
                color: COLOR_MAP[currentBuild.currentResult],
                message: "Find Status of Pipeline:- ${currentBuild.currentResult} ${env.JOB_NAME} ${env.BUILD_NUMBER} ${BUILD_URL}"
            ) 
        }
    }
}

// ====== How to add more control ===============
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
//         success{

//         }
//         failure{

//         }
//     }
// }
