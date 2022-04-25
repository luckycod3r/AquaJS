@echo off
echo AquaJS.js developed by luckycod3r
echo Compiling full version....
del /q "C:\Users\1\Desktop\Workspae\build\*"
py engine/compile.py
echo Compiling minimized version....
py engine/minimize.py
