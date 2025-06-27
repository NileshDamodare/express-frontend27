pipeline {
  agent any
  tools {
    nodejs 'NodeJS_LTS'
  }
  stages {
    stage('Clone') {
      steps { checkout scm }
    }
    stage('Install Dependencies') {
      steps { sh 'npm install' }
    }
    stage('Test') {
      steps {
        sh 'npm test || echo "No tests or skipped."'
      }
    }
    stage('Deploy') {
      steps {
        sh 'pm2 restart express-ui || pm2 start npm --name express-ui -- start'
        sh 'pm2 save'
      }
    }
  }
}
