pipeline {
    agent any

    environment {
        IMAGE_REPO_NAME = 'unity-skyops'
        AWS_ROLE_ARN = 'arn:aws:iam::383798767483:role/jenkins-assumeRole'

    }

    stages {
        stage('Fetch Code') {
            steps {
                git branch: 'master', url: 'https://github.com/syedmusaali359/Unity-Skyops.git'
            }
        }

        stage('Build the Image') {
            steps {
                script {
                    sh 'docker build -t $IMAGE_REPO_NAME .'
                }
            }
        }

        stage('Test Image') {
            steps {
                script {
               sh 'docker image inspect $IMAGE_REPO_NAME'
    }

        }

    }
    post {
        always {
            echo 'Pipeline execution complete.'
        }
    }
}
