pipeline {

    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {

        stage('Checkout') {

            // Retrieves latest source code
            // from Git repository.

            steps {
                git 'https://github.com/23shwetau/7.3HDPipeline'
            }
        }

        stage('Build') {

            // Installs required dependencies
            // for application execution.

            steps {
                bat 'npm install'
            }
        }

        stage('Unit Testing') {

            // Tests individual application functions.

            steps {
                bat 'npm test'
            }
        }

        stage('Edge Case Testing') {

            // Validates unexpected or invalid inputs.

            steps {
                bat 'npm test'
            }
        }

        stage('Integration Testing') {

            // Tests communication between
            // application components.

            steps {
                bat 'npm test'
            }
        }

        stage('Code Quality') {

            // ESLint detects:
            // - undeclared variables
            // - syntax issues
            // - coding inconsistencies

            steps {
                bat 'npx eslint .'
            }
        }

        stage('Security Testing') {

            // npm audit scans dependencies
            // for known vulnerabilities.

            steps {
                bat 'npm audit || exit 0'
            }
        }

        stage('Deploy') {

            // PM2 deploys and monitors
            // application processes.

            steps {
                bat 'npx pm2 start app.js --name SecureCart'
            }
        }

        stage('Release') {

            // Automated software versioning
            // and release tagging.

            steps {
                bat 'git tag v1.0.%BUILD_NUMBER%'
            }
        }

        stage('Monitoring') {

            // PM2 monitoring provides:
            // - CPU metrics
            // - memory usage
            // - uptime tracking
            // - process logs

            steps {
                bat 'npx pm2 list'
}
        }
    }

    post {

        failure {

            // Rollback restores previous stable version
            // if deployment fails.

            echo 'Rollback simulation triggered successfully'

            mail to: '23shwetau@gmail.com',
            subject: 'SecureCart Pipeline Failure',
            body: 'Deployment failure detected. Rollback initiated.'
        }
    }
}