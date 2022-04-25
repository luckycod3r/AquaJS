import time
import os
import requests
start_time = time.time()
build = open('build/AquaJS.js', 'a')

for address, dirs, files in os.walk('/Users/1/Desktop/Workspae/modules'):
    for name in files:
        pathToModule = os.path.join(address, name)
        file1 = open(pathToModule, "r")
        lines = file1.readlines()
        for line in lines:
            build.write(line.strip() + "\n")
