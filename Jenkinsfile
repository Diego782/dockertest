pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Diego782/dockertest.git'
            }
        }
        stage('Build') {
            steps {
                sh 'docker build -t mi-aplicacion .'
            }
        }
        stage('Run') {
            steps {
               sh '''
                docker stop mi-aplicacion || true
                docker rm mi-aplicacion || true
                docker run -d -p 3000:3000 --name mi-aplicacion mi-aplicacion
                '''
            }
        }
    }
}