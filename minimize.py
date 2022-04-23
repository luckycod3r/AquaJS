import requests
url = 'https://www.toptal.com/developers/javascript-minifier/raw'
data = {'input': open('build/AquaJS.js', 'rb').read()}
response = requests.post(url, data=data)
minimze = open("build/AquaJS.min.js","w")
minimze.write(response.text)