pipeline {
    agent any

    environment {
        IMAGE_REPO_NAME = 'Unity-Skyops'
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
            sh 'docker run --name test-container $IMAGE_REPO_NAME'
            sh 'sleep 10' // Wait for 10 seconds
            sh 'docker ps | grep test-container' // Check if the container is still running
            sh 'docker rm -f test-container' // Clean up
        }
    }

        }
        
    }
    post {
        always {
            echo 'Pipeline execution complete.'
        }
    }
}
