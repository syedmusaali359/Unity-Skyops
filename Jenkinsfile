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
                    // Assume the IAM role
                    sh "AWS_ROLE_ARN=$AWS_ROLE_ARN aws sts assume-role --role-arn $AWS_ROLE_ARN --role-session-name JenkinsAssumeRole --output text --query 'Credentials.[AccessKeyId, SecretAccessKey, SessionToken]' > temp_credentials.txt"
                    
                    // Read the temporary credentials from the file
                    withCredentials([file(credentialsId: 'aws-temp-credentials', variable: 'TEMP_CREDENTIALS_FILE')]) {
                        def tempCredentials = readFile('temp_credentials.txt').trim().split()
                        
                        // Set temporary environment variables with the assumed role credentials
                        withEnv(['AWS_ACCESS_KEY_ID=' + tempCredentials[0], 'AWS_SECRET_ACCESS_KEY=' + tempCredentials[1], 'AWS_SESSION_TOKEN=' + tempCredentials[2]]) {
                            // Tag and push the Docker image to ECR
                            sh "docker tag $IMAGE_REPO_NAME:latest $ECR_REGISTRY/$IMAGE_REPO_NAME:latest"
                            sh "docker push $ECR_REGISTRY/$IMAGE_REPO_NAME:latest"
                        }
                    }
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
