pipeline {
    agent any

    environment {
        IMAGE_REPO_NAME = 'unity-skyops'
        AWS_ROLE_ARN = 'arn:aws:iam::383798767483:role/jenkins-assumeRole'
        ECR_REGISTRY = 'public.ecr.aws/g5s5h4'
        ECS_CLUSTER = 'dev-mahalohub-closedcaptioning'
        ECS_SERVICE = 'test'
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

 
        stage('Push to ECR') {
            steps {
                script {
                    // Tag the Docker image
                    sh "docker tag $IMAGE_REPO_NAME:latest $ECR_REGISTRY/$IMAGE_REPO_NAME:latest"
                    
                    // Authenticate Docker with ECR using the credential helper
                    sh "docker --config ~/.docker/config.json push $ECR_REGISTRY/$IMAGE_REPO_NAME:latest"
                }
            }
        }

        stage('Deploy to ECS') {
            steps {
                script {
                    sh "aws ecs update-service --cluster $ECS_CLUSTER --service $ECS_SERVICE --force-new-deployment"
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
