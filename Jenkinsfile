def dockerImage

pipeline {
    agent any;
    stages {
      stage('Build docker image') {
        steps {
          script {
            dockerImage = docker.build("build")
          }
        }
      }
      stage('Run Tests') {
        parallel {
          stage('Test') {
            steps {
              script {
                dockerImage.inside {
                  sh 'yarn'
                  sh 'yarn test --runInBand --coverage'
                }
              }
            }
          }
          stage('Check typescript') {
            steps {
              script {
                dockerImage.inside {
                  sh 'yarn'
                  sh 'yarn tsc'
                }
              }
            }
          }
        }
      }
    }
    post {
        always {
          cleanWs()
        }
    }
}
