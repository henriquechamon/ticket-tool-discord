@echo off
Title aligg#0001
goto :menu
color 05


:menu
color 03
echo. ___________________________________________________________
echo.                 
echo.          Bot de wl desenvolvido por Aligg  para Astro e Safira    
echo.                       
echo. ___________________________________________________________
echo.                      Menu Principal
echo. ___________________________________________________________
echo.
echo.             1 - Iniciar Bot           3 - Sair
echo.             2 - Instalar o Bot          
echo.  
echo. ___________________________________________________________
echo.
set /p choice=Digite uma opcao:
if '%choice%'=='1' goto :iniciarbot
if '%choice%'=='2' goto :instalarbot
if '%choice%'=='3' goto :sair

:iniciarbot
cls
echo. ___________________________________________________________
          
echo. ___________________________________________________________
node .

pause .

:sair
exit

:instalarbot
npm install