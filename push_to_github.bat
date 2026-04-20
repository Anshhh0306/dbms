@echo off
echo ==============================================
echo Pushing Database Normalization Site to GitHub
echo ==============================================

:: Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Git is not installed or not in your PATH. Please install Git first.
    pause
    exit /b
)

:: Check if it's already a git repository
if not exist ".git\" (
    echo Initializing new Git repository...
    git init
    git branch -M main
    git remote add origin https://github.com/Anshhh0306/dbms.git
)

echo Adding files...
git add .

echo Committing changes...
git commit -m "Initial commit: Complete Database Normalization presentation site"

echo Pushing to GitHub...
git push -u origin main

echo.
echo ==============================================
echo DONE! 
echo If the push was successful, go to https://github.com/Anshhh0306/dbms
echo Go to Settings -^> Pages, and set the Source to "Deploy from a branch" 
echo and select the "main" branch to publish your site! 
echo ==============================================
pause
