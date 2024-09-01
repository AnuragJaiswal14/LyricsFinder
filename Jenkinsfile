pipeline {
    agent any
    environment {
        name = "Anurag J"
    }
    stages {
        stage("build") {
            steps {
                echo 'This is the build stage!!'
            }
        }
        stage("test") {
            steps {
                echo 'This is the test stage'
            }
        }
        stage("deploy") {
            steps {
                echo 'This is the deploy stage'
            }
        }
    }
    post {
        always {
            echo 'All stages of the pipeline have been completed!'
            echo "My first Jenkins execution by ${name}"
        }
    }
}
