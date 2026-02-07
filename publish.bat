@echo off
echo ===================================================
echo     Thermal Comet Portfolio Deployment Script
echo ===================================================
echo.

echo 1. Adding all changes...
git add .

echo.
echo 2. Committing changes...
git commit -m "Deployment update: %date% %time%"

echo.
echo 3. Pushing to GitHub...
echo    Repository: https://github.com/AHMADABDULLAHKHAN1234/ahmedabdullah.git
echo.
echo    [IMPORTANT] You may be asked for your GitHub username/password.
echo.
git push -u origin main

echo.
if %errorlevel% neq 0 (
    echo [ERROR] Push failed. Please check your credentials.
    pause
    exit /b %errorlevel%
)

echo.
echo [SUCCESS] Your portfolio has been pushed to GitHub!
echo.
pause
