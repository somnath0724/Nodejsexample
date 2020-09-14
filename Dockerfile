FROM https://nexus.nos-lab.io:8443/repository/nos-docker/v2/nos/ubi-8-minimal-java-1.8.0-openjdk-headless/manifests/8.0:latest
VOLUME /tmp
EXPOSE 8081
EXPOSE 8080
ENV AB_ENABLED=jmx_exporter
COPY /dist/test /usr/local/tomcat/webapps/angular
CMD ["/usr/local/tomcat/bin/catalina.sh", "run"]
