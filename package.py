import os
import sys


app_name = "frontend"
docker_registry= "localhost:5555"
docker_registry_tag = docker_registry + "/" + app_name

def package():
    run_cmd("npm run build")

def build_image():
    run_cmd("docker build --tag=" + app_name + " --force-rm=true .")
    run_cmd("docker tag " + app_name + " " + docker_registry_tag)
    run_cmd("docker push " + docker_registry_tag)

def run_cmd(cmd):
    print cmd
    os.system(cmd)


if __name__ == '__main__':
    package()
    build_image()