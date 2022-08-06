pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
               sh "docker build --no-cache . -t adelgado95/node-challenge:v.${BUILD_NUMBER}"
            }
        }

         stage('Publish') {
            steps {
               echo 'Publishing....'
               sh "docker tag  adelgado95/node-challenge:v.${BUILD_NUMBER} adelgado95/node-challenge:v.${BUILD_NUMBER}"
               sh "docker push adelgado95/node-challenge:v.${BUILD_NUMBER}"
            }
        }
        stage('Deployment') {
            steps {
                dir('/var/lib/jenkins/workspace/infra-config/kubernetes') {
                    echo 'Deploying....'
                    sh 'pwd'
                    sh 'sed -i "s/node-challenge.*/node-challenge:v.${BUILD_NUMBER}/g" deployment.yml'
                    sh 'kubectl --kubeconfig=kubeconfig.yaml apply -f deployment.yml'
                }
            }
        }
    }
    post {
        always {
            echo 'Finished'  
        }
        success {
            echo 'Successfully!'
        }
        failure {
            echo 'Failed!'
        }

    }
}
