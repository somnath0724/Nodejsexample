FROM sonarsource/sonar-scanner-cli

# This is intended to be a shortterm-use image for use in scanning this project. It should be replaced by something for more general use.
MAINTAINER ricardo.torres@boeing.com

USER root

ARG TRUST_STORE_PATH=/opt/sonar-scanner/jre/lib/security/truststore.jks
ARG TRUST_STORE_PASSWORD=changeit
ADD truststore.jks $TRUST_STORE_PATH
ENV SONAR_SCANNER_OPTS -Djavax.net.ssl.trustStore=$TRUST_STORE_PATH -Djavax.net.ssl.trustStorePassword=$TRUST_STORE_PASSWORD

USER scanner-cli
