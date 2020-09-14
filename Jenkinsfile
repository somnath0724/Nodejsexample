pipeline {
  agent { label 'buildah' }

  environment {
    DOCKER_REGISTRY = 'nexus.nos-lab.io:8443'
    IMAGE_DESTINATION = "${DOCKER_REGISTRY}/nos/example-projects/node-js"
    POM_VERSION = readMavenPom().getVersion()
  }
  options {
    timestamps()
    disableConcurrentBuilds()
    buildDiscarder(logRotator(numToKeepStr: '5'))
    timeout(time: 110, unit: "MINUTES")
  }

  stages {
    stage("Build") {
      agent {
        dockerfile {
          filename 'build/Dockerfile'
        }
      }
      steps {
        sh 'npm i -g'
        sh 'npm update'
        sh 'ng test --watch=false --code-coverage'
        sh 'ng build --base-href=/angular/'
      }
    }
    stage("SonarQube Scan") {
      agent {
        dockerfile {
          dir 'build/scan'
          filename 'Dockerfile'
        }
      }
      steps {
        withSonarQubeEnv('NOS Lab Sonarqube') {
          sh 'sonar-scanner'        }
        timeout(time: 10, unit: "MINUTES") {
          waitForQualityGate abortPipeline: false
        }
      }
    }
    stage("Set Build Tag") {
      steps {
        script {
          if (GIT_LOCAL_BRANCH == 'develop') {
            BUILD_TAG = "${env.IMAGE_DESTINATION}:latest"
          } else {
            BUILD_TAG = "${env.IMAGE_DESTINATION}:${POM_VERSION}"
          }
        }
      }
    }
    stage("Image Build") {
      steps {
        sh "buildah bud --label \"version=${POM_VERSION}\" -t ${BUILD_TAG} ."
        withCredentials([usernamePassword(credentialsId: "1453049e-319e-43be-a325-8a9f07541ed7", usernameVariable: 'USER', passwordVariable: 'PW')]) {
          sh "buildah push --creds ${USER}:${PW} ${BUILD_TAG}"
        }
      }
    }
    stage("Aqua Scan") {
      steps {
 sh "docker pull ${BUILD_TAG}"
                aqua customFlags: '', hideBase: false, hostedImage: "${BUILD_TAG.replace(env.DOCKER_REGISTRY + '/', '')}", localImage: '', locationType: 'hosted', notCompliesCmd: '', onDisallowed: 'fail', policies: '', register: false, registry: 'nexus', showNegligible: false

      }
    }
  }

  post {
    always {
      deleteDir()
    }
  }
}
