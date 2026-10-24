@Library('cve-scan') _

pipeline {
  agent { label 'build' }
  stages {
    stage('Checkout') { steps { checkout scm } }
    stage('Build and test') {
      steps {
        sh '''
          docker run --rm -u $(id -u):$(id -g) -e HOME=/tmp -v "$PWD":/app -w /app \
            node:20-alpine sh -c "npm ci && npm test --if-present && rm -rf node_modules"
        '''
      }
    }
    stage('Dependency scan') { steps { script { cveScan.scan() } } }
    stage('CVE evaluate')    { steps { script { cveScan.evaluate(projectName: 'demo-npm', threshold: 7.0) } } }
  }
}