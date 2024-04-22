pipeline{
    agent any
    environment{
        IMAGE_REPO_NAME='Unity-Skyops'
    }
    stages{
        stage('fetch code '){
            steps{
        git branch: 'master', url:'https://github.com/syedmusaali359/Unity-Skyops.git'
            }
        }
        stage('build the image'){
            steps{
            sh 'docker build -t $IMAGE_REPO_NAME '
            }

        }
         stage('Test image') {           
            app.inside {            
             
             sh 'echo "Tests passed"'        
            } 
         }

    }


}