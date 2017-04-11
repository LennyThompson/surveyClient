del /q .\app\services\surveyDb\types\*
for /d %%x in (.\app\services\surveyDb\types\*) do @rd /s /q "%%x"
xcopy C:\Dev\Git\BoltGenerator\results\typescript\*.ts .\app\services\surveyDb\types /Y

if NOT EXIST .\app\services\surveyDb\webAPI (
    mkdir .\app\services\surveyDb\webAPI
)
del /q .\app\services\surveyDb\webAPI\*
for /d %%x in (.\app\services\surveyDb\webAPI\*) do @rd /s /q "%%x"
xcopy C:\Dev\Git\BoltGenerator\results\http-providers\*.* .\app\services\surveyDb\webAPI /E/Y

if NOT EXIST .\app\components\survey\select (
    mkdir .\app\components\survey\select
)

del /q .\app\components\survey\select\*
for /d %%x in (.\app\components\survey\select\*) do @rd /s /q "%%x"
xcopy C:\Dev\Git\BoltGenerator\results\select\*.* .\app\components\survey\select /E/Y

if NOT EXIST .\app\components\survey\list-item (
    mkdir .\app\components\survey\list-item
)

del /q .\app\components\survey\list-item\*
for /d %%x in (.\app\components\survey\list-item\*) do @rd /s /q "%%x"
xcopy C:\Dev\Git\BoltGenerator\results\list-item\*.* .\app\components\survey\list-item /E/Y

del /q .\app\components\survey\form\*
for /d %%x in (.\app\components\survey\form\*) do @rd /s /q "%%x"
xcopy C:\Dev\Git\BoltGenerator\results\form\*.* .\app\components\survey\form /E/Y

if NOT EXIST .\app\components\survey\edit-providers (
    mkdir .\app\components\survey\edit-providers
)
del /q .\app\components\survey\edit-providers\*
for /d %%x in (.\app\components\survey\edit-providers\*) do @rd /s /q "%%x"
xcopy C:\Dev\Git\BoltGenerator\results\edit-provider\*.* .\app\components\survey\edit-providers /E/Y
