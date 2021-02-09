import os
import sys


app_name = "frontend"
docker_registry= "localhost:5555"
docker_registry_tag = docker_registry + "/" + app_name

env = sys.argv[1] if len(sys.argv) > 1 else "dev"

k8s_namespace = "default" if env != "test" else "test"


def git_pull():
    run_cmd("git pull")

def change_server_url():
    print "change_server_url"
    server_url_file = open("src/serverUrl.js", "w")
    server_url_file.truncate()
    server_url_file.write("export const serverUrl = ")

    server_url = "https://junpenghe.com:31888" if env == "prod" else "http://localhost:31888"

    server_url_file.write('"' + server_url + '"' + ";")

    server_url_file.close()

def restore_server_url():
    print "restore_server_url"
    server_url_file = open("src/serverUrl.js", "w")
    server_url_file.truncate()
    server_url_file.write("export const serverUrl = ")

    server_url = "http://localhost:8888"

    server_url_file.write('"' + server_url + '"' + ";")

    server_url_file.close()

def change_config_file():
    print "changing config file"

    nginx_conf = open("nginx/nginx.conf", "w")
    nginx_conf.truncate()

    if env == "dev":
        env_conf = "nginx-dev.conf"
    elif env == "test":
        env_conf = "nginx-test.conf"
    elif env == "prod":
        env_conf = "nginx-prod.conf"

    env_conf_path = "nginx/" + env_conf
    env_conf_file = open(env_conf_path)

    for line in env_conf_file:
        nginx_conf.write(line)

    nginx_conf.close()
    env_conf_file.close()

    print "using " + env_conf_path + " as config file"

def restore_config_file():
    print "restore config file to dev"

    nginx_conf = open("nginx/nginx.conf", "w")
    nginx_conf.truncate()

    prod_conf = "nginx-prod.conf"

    prod_conf_path = "nginx/" + prod_conf
    prod_conf_file = open(prod_conf_path)

    for line in prod_conf_file:
        nginx_conf.write(line)

    nginx_conf.close()
    prod_conf_file.close()

    print "using " + prod_conf_path + " as config file"

def package():
    change_config_file()
    run_cmd("npm run build")

def build_image():
    run_cmd("docker build --tag=" + app_name + " --force-rm=true .")
    run_cmd("docker tag " + app_name + " " + docker_registry_tag)
    run_cmd("docker push " + docker_registry_tag)
    restore_config_file()

def k8s_deploy():
    run_cmd("kubectl apply -f kubernetes.yaml " + "-n " + k8s_namespace)

def run_sudo_cmd(cmd):
    cmd = "sudo " + cmd
    print cmd
    os.system(cmd)

def run_cmd(cmd):
    print cmd
    os.system(cmd)

if __name__ == '__main__':
    git_pull()
    change_server_url()
    package()
    build_image()
    restore_server_url()
    k8s_deploy()
