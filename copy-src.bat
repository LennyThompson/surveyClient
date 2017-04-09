del /q .\app\services\surveyDb\types\*
for /d %%x in (.\app\services\surveyDb\types\*) do @rd /s /q "%%x"
xcopy C:\Dev\Git\BoltGenerator\results\typescript\*.ts .\app\services\surveyDb\types /Y

del /q .\app\services\surveyDb\webAPI\*
for /d %%x in (.\app\services\surveyDb\webAPI\*) do @rd /s /q "%%x"
xcopy C:\Dev\Git\BoltGenerator\results\http-providers\*.ts .\app\services\surveyDb\webAPI /Y

del /q .\app\components\survey\select\*
for /d %%x in (.\app\components\survey\select\*) do @rd /s /q "%%x"
xcopy C:\Dev\Git\BoltGenerator\results\select\*.* .\app\components\survey\select /Y

if NOT EXIST .\app\components\survey\list-item (
    mkdir .\app\components\survey\list-item
)

del /q .\app\components\survey\list-item\*
for /d %%x in (.\app\components\survey\list-item\*) do @rd /s /q "%%x"
xcopy C:\Dev\Git\BoltGenerator\results\list-item\*.* .\app\components\survey\list-item /E/Y

del /q .\app\components\survey\form\*
for /d %%x in (.\app\components\survey\form\*) do @rd /s /q "%%x"
xcopy C:\Dev\Git\BoltGenerator\results\form\*.* .\app\components\survey\form /E/Y
if NOT EXIST .\app\components\survey\simple-providers (
    mkdir .\app\components\survey\simple-providers
)
del /q .\app\components\survey\simple-providers\*
for /d %%x in (.\app\components\survey\simple-providers\*) do @rd /s /q "%%x"
xcopy C:\Dev\Git\BoltGenerator\results\simple-provider\*.* .\app\components\survey\simple-providers /E/Y
